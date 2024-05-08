
import {GoogleGenerativeAI} from "@google/generative-ai"
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyD2BL8oBTl5_zw2hguZbJ7eawX2YXNws6s');

async function runChat(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

export default runChat;