document.getElementById("predictForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    Marital_status: document.getElementById("Marital_status").value,
    Application_mode: document.getElementById("Application_mode").value,
    Application_order: 12,
    Course: document.getElementById("Course").value,
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
    Gender: "Male",
    Scholarship_holder: "No",
    Age_at_enrollment: parseInt(document.getElementById("Age_at_enrollment").value),
    International: "No",
    Curricular_units_1st_sem_credited: 20,
    Curricular_units_1st_sem_enrolled: 50,
    Curricular_units_1st_sem_evaluations: parseInt(document.getElementById("Curricular_units_1st_sem_evaluations").value),
    Curricular_units_1st_sem_approved: parseInt(document.getElementById("Curricular_units_1st_sem_approved").value),
    Curricular_units_1st_sem_grade: parseFloat(document.getElementById("Curricular_units_1st_sem_grade").value),
    Curricular_units_1st_sem_without_evaluations: 30,
    Curricular_units_2nd_sem_credited: 25,
    Curricular_units_2nd_sem_enrolled: parseFloat(document.getElementById("Curricular_units_2nd_sem_enrolled").value),
    Curricular_units_2nd_sem_evaluations: parseInt(document.getElementById("Curricular_units_2nd_sem_evaluations").value),
    Curricular_units_2nd_sem_approved: parseInt(document.getElementById("Curricular_units_2nd_sem_approved").value),
    Curricular_units_2nd_sem_grade: parseFloat(document.getElementById("Curricular_units_2nd_sem_grade").value),
    Curricular_units_2nd_sem_without_evaluations: 25,
    Unemployment_rate: parseFloat(document.getElementById("Unemployment_rate").value),
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
    console.log("API response:", result);

    // Adjust key to match backend’s actual key
    let message = result.prediction || result.Prediction || result.result || result.output || "No prediction found";

    document.getElementById("result").textContent = "📊 Prediction: " + message;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("result").textContent = "❌ Something went wrong. Please try again later.";
  }
});

