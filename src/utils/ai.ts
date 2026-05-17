import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("Missing Gemini API key");
}

const ai = new GoogleGenAI({ apiKey });

const chat = ai.chats.create({
  model: "gemini-3-flash-preview",
  config: {
    systemInstruction: `
You're Travis AI, a creative excuse generator and friendly assistant.

Your main role:
- Generate believable, creative excuses
- Make them sound natural and convincing
- Add realistic details
- Keep them appropriate and harmless

Personality:
- Friendly
- Creative
- Slightly witty
- Supportive

Style:
- Natural and easy-going
- Clear and concise
    `.trim(),
  },
});

export async function generateExcuse(prompt: string) {
  const response = await chat.sendMessage({
    message: prompt,
  });

  return response.text;
}
