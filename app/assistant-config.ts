export const assistantId = "asst_IssYCUA8cW5pBtxzT8A1OTyF";

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
  console.warn('Missing OPENAI_API_KEY environment variable');
}
