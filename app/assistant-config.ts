export const assistantId = "asst_IssYCUA8cW5pBtxzT8A1OTyF";

export const assistantConfig = {
  name: "YC Query",
  description: "YC Founder Search",
  model: "gpt-4-turbo",
  instructions: "You are a specialized  assistant focused on searching files to find answers.",
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
