"use server"

import * as XLSX from "xlsx"
import fs from "fs/promises"
import path from "path"

interface FeedbackData {
  foodRating: number
  serviceRating: number
  cleanlinessRating: number
  mealType: string[]
  suggestions: string
}

export async function submitFeedback(formData: {
  foodRating: number
  serviceRating: number
  cleanlinessRating: number
  mealType: string[]
  suggestions: string
}) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxxhXw4hf_MiuE2eiAmxBTIlZvalrAPUtP_z_CCWaoU-UvtpaaBc2t6jTTxSdJ4pLz_/exec"

  try {
    // Convert the mealType array to a comma-separated string for better compatibility
    const formDataForSheet = {
      ...formData,
      mealType: formData.mealType.join(", "),
    }

    // Use no-cors mode to bypass CORS restrictions
    // Note: This means we won't be able to read the response details
    const response = await fetch(scriptURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataForSheet),
    })

    // Since we're using no-cors, we can't check response.ok
    // We'll assume success if the request doesn't throw an error
    return "Feedback submitted successfully"
  } catch (error) {
    console.error("Submission error:", error)
    throw new Error("Failed to submit feedback. Please check your network connection and try again.")
  }
}
