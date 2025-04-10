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
  const scriptURL = "https://script.google.com/macros/s/AKfycbxxhXw4hf_MiuE2eiAmxBTIlZvalrAPUtP_z_CCWaoU-UvtpaaBc2t6jTTxSdJ4pLz_/exec" 

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Failed to submit feedback to Google Sheets")
    }

    return await response.text()
  } catch (error) {
    console.error("Submission error:", error)
    throw error
  }
}
