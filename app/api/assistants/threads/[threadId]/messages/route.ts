import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function POST(
  // Send a new message to a thread
  export async function POST(request, { params: { threadId } }) {
    const { content } = await request.json();

    await openai.beta.threads.messages.create(threadId, {
      role: "user",
      content: content,
    });

    const stream = openai.beta.threads.runs.stream(threadId, {
      assistant_id: assistantId,
    });

    return new Response(stream.toReadableStream());
  }
