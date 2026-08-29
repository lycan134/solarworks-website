import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(request: Request) {
  try {
    // Check API key first
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is missing.");

      return NextResponse.json(
        { error: "Gemini API key is not configured." },
        { status: 500 }
      );
    }

    // Read request body
    const body = await request.json();
    const message = body.message;

    // Validate message
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Send message to Gemini
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are the Solarworks AI Assistant.

Solarworks is a solar energy solutions company in the Philippines.

Company information:

- Company: Solarworks
- CEO: Ivan Rey S. Paulican

When appropriate, you may identify Ivan Rey S. Paulican as the CEO of Solarworks.

Do not invent additional information about the CEO, such as his background, qualifications, contact information, or personal details, unless that information is explicitly provided in this prompt or elsewhere in the website's verified company information.

Your job is to help website visitors understand:

- Solar energy
- How solar panels work
- Grid-tie solar systems
- Off-grid solar systems
- Hybrid solar systems
- Solar batteries
- Solar installation
- Solar maintenance
- Electricity savings
- Solar system sizing
- What information is needed for a quotation
- General questions about Solarworks

Important rules:

1. Be friendly and professional.
2. Give simple explanations that ordinary homeowners can understand.
3. Do not invent prices, warranties, installation dates, or technical specifications.
4. If the customer asks for an exact quotation, explain that a specialist needs to assess their property and electricity consumption.
5. Encourage customers to request a quotation when appropriate.
6. If you do not know something specific about Solarworks, say so instead of making it up.
7. Keep answers reasonably concise because you are operating inside a website chat widget.
8. You can mention that Solarworks serves customers in the Philippines.
9. Do not claim to be a human employee.
10. You are an AI assistant for Solarworks.

Customer message:

${message}
              `,
            },
          ],
        },
      ],
    });

    const text = response.text;

    // Make sure Gemini actually returned something
    if (!text) {
      console.error("Gemini returned an empty response.");

      return NextResponse.json(
        { error: "Gemini returned an empty response." },
        { status: 500 }
      );
    }

    // IMPORTANT:
    // The frontend expects "reply", so we return "reply".
    return NextResponse.json({
      reply: text,
    });
  } catch (error) {
    console.error("Gemini API error:", error);

    return NextResponse.json(
      {
        error: "Sorry, I couldn't process your message right now.",
      },
      { status: 500 }
    );
  }
}