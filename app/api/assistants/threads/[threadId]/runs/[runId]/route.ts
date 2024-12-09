import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET(
    req: NextRequest,
    { params }: { params: { threadId: string; runId: string } }
) {
    try {
        const { threadId, runId } = params;

        const response = await fetch(
            `https://api.openai.com/v1/threads/${threadId}/runs/${runId}`,
            {
                headers: {
                    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                    "OpenAI-Beta": "assistants=v2",
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Run status check failed: ${await response.text()}`);
        }

        const data = await response.json();
        return Response.json(data);

    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
} 