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
  // Replace the URL below with your deployed Google Apps Script web app URL.
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyour-script-id/exec";
  
  // Prepare the payload. Convert the mealType array to a comma-separated string.
  const formDataForSheet = {
    ...formData,
    mealType: formData.mealType.join(", ")
  };

  try {
    // Send a POST request to your Apps Script web app.
    await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors", // Using no-cors; this means you won't get a readable response.
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
