import OpenAI from 'openai';

export const assistantId = "asst_fJ4nTbCDTIfG7vk6G69jUWhY";

export const assistantConfig = {
  name: "CaseQuery AI",
  description: "Legal assistant for Supreme Court case analysis",
  model: "gpt-4-turbo",
  instructions: "You are a specialized legal assistant focused on Supreme Court cases. Provide detailed analysis of cases, including key holdings, dissenting opinions, and precedents. Use clear, professional language and cite specific parts of opinions when relevant.",
  tools: [
    {
      type: "code_interpreter"
    },
    {
      type: "file_search"
    }
  ],
  tool_resources: {
    file_search: {
      vector_store_ids: []
    },
    code_interpreter: {
      file_ids: []
    }
  }
};

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not defined in environment variables');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
