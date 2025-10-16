document.getElementById("predictForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    Marital_status: document.getElementById("Marital_status")?.value || 1,
    Application_mode: document.getElementById("Application_mode")?.value || 8,
    Application_order: 12,
    Course: document.getElementById("Course")?.value || 2,
    Daytime_evening_attendance: "Evening",
    Previous_qualification: "HighSchool",
    Nacionality: "Domestic",
    Mothers_qualification: "HighSchool",
    Fathers_qualification: "HighSchool",
    Mothers_occupation: "Unemployed",
    Fathers_occupation: "Unemployed",
    Displaced: "Yes",
    Educational_special_needs: "No",
    Debtor: "Yes",
    Tuition_fees_up_to_date: document.getElementById("Tuition_fees_up_to_date").value,
    Gender: document.getElementById("Gender")?.value || "Male",
    Scholarship_holder: document.getElementById("Scholarship_holder")?.value || "No",
    Age_at_enrollment: parseInt(document.getElementById("Age_at_enrollment")?.value || 20),
    International: "No",
    Curricular_units_1st_sem_credited: 20,
    Curricular_units_1st_sem_enrolled: 50,
    Curricular_units_1st_sem_evaluations: 20,
    Curricular_units_1st_sem_approved: parseInt(document.getElementById("Curricular_units_1st_sem_approved").value),
    Curricular_units_1st_sem_grade: parseFloat(document.getElementById("Curricular_units_1st_sem_grade").value),
    Curricular_units_1st_sem_without_evaluations: 30,
    Curricular_units_2nd_sem_credited: 25,
    Curricular_units_2nd_sem_enrolled: parseFloat(document.getElementById("Curricular_units_2nd_sem_enrolled").value),
    Curricular_units_2nd_sem_evaluations: parseInt(document.getElementById("Curricular_units_2nd_sem_evaluations").value),
    Curricular_units_2nd_sem_approved: parseInt(document.getElementById("Curricular_units_2nd_sem_approved").value),
    Curricular_units_2nd_sem_grade: parseFloat(document.getElementById("Curricular_units_2nd_sem_grade").value),
    Curricular_units_2nd_sem_without_evaluations: 25,
    Inflation_rate: 5.0,
    GDP: 15000.0
  };

  try {
    const response = await fetch("https://student-dropout-predection-ml.onrender.com/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const result = await response.json();

    // Log for debugging
    console.log("API response:", result);

    // ✅ FIX HERE
    // Make sure to access the correct property name
    let message = result.prediction || result.result || "No prediction found";

    document.getElementById("result").textContent = "📊 Prediction: " + message;

  } catch (error) {
    console.error("Error:", error);
    document.getElementById("result").textContent = "❌ Something went wrong. Please try again later.";
  }
});

