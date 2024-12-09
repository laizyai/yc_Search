import { NextRequest } from 'next/server';
import { assistantConfig } from '@/app/assistant-config';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/assistants",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "OpenAI-Beta": "assistants=v2",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to get assistants: ${await response.text()}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/assistants",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          "OpenAI-Beta": "assistants=v2",
        },
        body: JSON.stringify(assistantConfig),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create assistant: ${await response.text()}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
