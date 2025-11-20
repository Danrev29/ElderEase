import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  if (!message) return NextResponse.json({ error: 'No message provided' }, { status: 400 })

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `
You are a friendly AI assistant that explains technology and social media to seniors.
Always respond in **step-by-step instructions**, numbered, simple, and easy to follow.
Provide examples, tips, and warnings if needed.
Do not use technical jargon without explanation.
          `
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    )

    const aiMessage = response.data.choices[0].message.content
    return NextResponse.json({ aiMessage })
  } catch (err: any) {
    console.error(err.response?.data || err.message)
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 })
  }
}
