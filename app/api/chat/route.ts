import { NextRequest, NextResponse } from 'next/server'
import { openai } from '@/clients/openai'

export async function POST(req: NextRequest) {
    const { message } = await req.json();

    if (!message) {
        return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    try {
        const response = await openai.responses.create({
            model: "gpt-4.1",
            temperature: 0.3,
            input: [
                { 
                    role: 'system', 
                    content: 
                    'You are a helpful and precise AI programming assistant. Always reply with clear, concise code examples and explanations. Focus on debugging, refactoring, software design, and best practices.',
                },
                { role: 'user', content: message },
            ],
        });

        const reply = response.output_text;
        return NextResponse.json({ reply });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch reply' }, { status: 500 });
    }
}