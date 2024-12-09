export let assistantId = "asst_fJ4nTbCDTIfG7vk6G69jUWhY"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
