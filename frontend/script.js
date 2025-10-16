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
    Gender: document.getElementById("Gender").value,
    Scholarship_holder: document.getElementById("Scholarship_holder").value,
    Age_at_enrollment: parseInt(document.getElementById("Age_at_enrollment").value),
    International: "No",
    Curricular_units_1st_sem_credited: 20,
    Curricular_units_1st_sem_enrolled: 50,
    Curricular_units_1st_sem_evaluations: 20,
    Curricular_units_1st_sem_approved: 10,
    Curricular_units_1st_sem_grade: 6.0,
    Curricular_units_1st_sem_without_evaluations: 30,
    Curricular_units_2nd_sem_credited: 25,
    Curricular_units_2nd_sem_enrolled: 50.0,
    Curricular_units_2nd_sem_evaluations: 25,
    Curricular_units_2nd_sem_approved: 10,
    Curricular_units_2nd_sem_grade: 5.5,
    Curricular_units_2nd_sem_without_evaluations: 25,
    Unemployment_rate: 12.0,
    Inflation_rate: 5.0,
    GDP: 15000.0
  };

  const response = await fetch("https://student-dropout-predection-ml.onrender.com/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById("result").textContent = "📊 Prediction: " + result.prediction;
});

