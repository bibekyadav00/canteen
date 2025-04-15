// lib/action.tsx
"use server"

export interface FeedbackData {
  foodRating: number;
  serviceRating: number;
  cleanlinessRating: number;
  mealType: string[];
  suggestions: string;
}

export async function submitFeedback(formData: FeedbackData) {
  // Updated URL with your provided script id.
  const scriptURL =
    "https://script.google.com/macros/s/AKfycb1vUX6q9M9yoESlrN9d7PqFo24BHiD7EcEzvtqoswq08F_YRQLZT4En_ZQ/exec";
  
  // Prepare the payload. Convert the mealType array to a comma-separated string.
  const formDataForSheet = {
    ...formData,
    mealType: formData.mealType.join(", ")
  };

  try {
    // Send a POST request to the Google Apps Script web app.
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors", // Use no-cors to bypass CORS since we don't need to read the response.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDataForSheet)
    });
    
    return "Feedback submitted successfully";
  } catch (error) {
    console.error("Submission error:", error);
    throw new Error(
      "Failed to submit feedback. Please check your network connection and try again."
    );
  }
}
