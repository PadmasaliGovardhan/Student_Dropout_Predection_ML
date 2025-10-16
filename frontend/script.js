document.getElementById("predictForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    "Curricular units 2nd sem (approved)": parseInt(document.getElementById("Curricular_units_2nd_sem_approved").value),
    "Curricular units 2nd sem (grade)": parseFloat(document.getElementById("Curricular_units_2nd_sem_grade").value),
    "Curricular units 1st sem (approved)": parseInt(document.getElementById("Curricular_units_1st_sem_approved").value),
    "Curricular units 1st sem (grade)": parseFloat(document.getElementById("Curricular_units_1st_sem_grade").value),
    "Tuition fees up to date": document.getElementById("Tuition_fees_up_to_date").value === "Yes" ? 1 : 0,
    "Curricular units 2nd sem (evaluations)": parseInt(document.getElementById("Curricular_units_2nd_sem_evaluations").value),
    "Curricular units 2nd sem (enrolled)": parseInt(document.getElementById("Curricular_units_2nd_sem_enrolled").value),
    "Age at enrollment": parseInt(document.getElementById("Age_at_enrollment").value),
    "Curricular units 1st sem (evaluations)": parseInt(document.getElementById("Curricular_units_1st_sem_evaluations").value),
    "Unemployment rate": parseFloat(document.getElementById("Unemployment_rate").value)
  };

  try {
    const response = await fetch("https://student-dropout-predection-ml.onrender.com/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById("result").textContent = "📊 Prediction: " + result.prediction;
  } catch (error) {
    document.getElementById("result").textContent = "❌ Error: " + error.message;
  }
});

