export let assistantId = "asst_IssYCUA8cW5pBtxzT8A1OTyF"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
