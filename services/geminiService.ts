import { GoogleGenAI } from "@google/genai";
import { EVENTS, COMMITTEE, FEST_NAME, FEST_DATE } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiClient;
};

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  const client = getClient();
  
  // Create a context string from the constants
  const eventContext = EVENTS.map(e => 
    `- ${e.title} (${e.category}): ${e.date} at ${e.time} in ${e.venue}. Prize: ${e.prizePool}. Desc: ${e.description}`
  ).join('\n');

  const committeeContext = COMMITTEE.map(c => `${c.name} (${c.role})`).join(', ');

  const systemInstruction = `
    You are 'Nova', the AI assistant for ${FEST_NAME}, a university business fest happening on ${FEST_DATE}.
    Your goal is to help students and attendees with information about the fest.
    
    Here is the official event schedule:
    ${eventContext}

    The organizing committee includes: ${committeeContext}.

    Rules:
    1. Be enthusiastic, professional, and helpful.
    2. Keep answers concise (under 3 sentences where possible).
    3. If asked about registration, tell them to click the 'Register Now' button on the homepage.
    4. Only answer questions related to the fest, business, or the events.
    5. If you don't know something specific (like parking details), say "Please check with the volunteers at the help desk."
  `;

  try {
    const model = client.models;
    const response = await model.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I'm having a little trouble connecting to the mainframe. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently offline due to high traffic. Please try again later.";
  }
};