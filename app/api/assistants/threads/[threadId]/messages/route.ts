import { openai } from "@/app/openai";
import { NextRequest } from 'next/server';
import { assistantId } from '@/app/assistant-config';

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function POST(
  req: NextRequest,
  { params }: { params: { threadId: string } }
) {
  try {
    const { threadId } = params;
    const { content } = await req.json();

    // Create message using SDK
    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: content,
    });

    // Create run using SDK
    const stream = openai.beta.threads.runs.stream(threadId, {
      assistant_id: assistantId,
    });

    // Return the stream
    return new Response(stream.toReadableStream(), {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
