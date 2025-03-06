// Set your Hugging Face API token
const API_TOKEN = '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';

// Model you want to use
const MODEL = 'google/gemma-2-2b-it';

// Set up the headers for the request
const headers = {
  'Authorization': `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json',
};

// Function to generate text using Hugging Face API
const generateText = async () => {
  try {
    // Fetch the response from Hugging Face API
    const response = await fetch(`https://api-inference.huggingface.co/models/${MODEL}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        inputs: "Write one simple creative 'Hello, World!' message." // The prompt to send to the model
      }),
    });

    // Convert the response to JSON
    const data = await response.json();

    // Check if there's an error in the response
    if (data.error) {
      console.error('Error:', data.error);
    } else {
      // Log the generated message
      console.log('Generated Message:', data[0].generated_text);
    }
  } catch (error) {
    // Handle any errors in the try-catch block
    console.error('Error:', error);
  }
};

// Call the function to generate the text
generateText();