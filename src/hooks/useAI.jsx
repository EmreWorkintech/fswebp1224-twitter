import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

export function useAI(systemMessage) {
  const [isPending, setIsPending] = useState(false);
  const ai = new GoogleGenAI({
    apiKey: "AIzaSyCEVRuuy0aIR2BBQ7lT7XrW0QzC9kyF8P4",
  });
  const chat = ai.chats.create({ model: "gemini-2.0-flash" });

  async function askAI(prompt) {
    setIsPending(true);
    return await chat
      .sendMessage({
        message: systemMessage + ": " + prompt,
      })
      .then((res) => {
        setIsPending(false);
        return res.text;
      });
  }

  return { isPending, askAI };
}
