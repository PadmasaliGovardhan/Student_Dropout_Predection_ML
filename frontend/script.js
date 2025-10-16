document.getElementById("predictForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    "Marital_status": document.getElementById("Marital_status").value,
    "Course": document.getElementById("Course").value,
    "Daytime_evening_attendance": document.getElementById("Daytime_evening_attendance").value,
    "Previous_qualification": document.getElementById("Previous_qualification").value,
    "Gender": document.getElementById("Gender").value,
    "Age_at_enrollment": parseInt(document.getElementById("Age_at_enrollment").value),
    "Tuition_fees_up_to_date": document.getElementById("Tuition_fees_up_to_date").value,
    "Scholarship_holder": document.getElementById("Scholarship_holder").value,
    "Curricular_units_1st_sem_approved": parseInt(document.getElementById("Curricular_units_1st_sem_approved").value),
    "Curricular_units_2nd_sem_grade": parseFloat(document.getElementById("Curricular_units_2nd_sem_grade").value),

    // Default values for remaining model-required columns
    "Application_mode": "Online",
    "Application_order": 12,
    "Nacionality": "Domestic",
    "Mothers_qualification": "HighSchool",
    "Fathers_qualification": "HighSchool",
    "Mothers_occupation": "Unemployed",
    "Fathers_occupation": "Unemployed",
    "Displaced": "No",
    "Educational_special_needs": "No",
    "Debtor": "No",
    "International": "No",
    "Curricular_units_1st_sem_credited": 20,
    "Curricular_units_1st_sem_enrolled": 50,
    "Curricular_units_1st_sem_evaluations": 20,
    "Curricular_units_1st_sem_without_evaluations": 30,
    "Curricular_units_2nd_sem_credited": 25,
    "Curricular_units_2nd_sem_enrolled": 50.0,
    "Curricular_units_2nd_sem_evaluations": 25,
    "Curricular_units_2nd_sem_approved": 10,
    "Curricular_units_2nd_sem_without_evaluations": 25,
    "Unemployment_rate": 12.0,
    "Inflation_rate": 5.0,
    "GDP": 15000.0
  };

  const res = await fetch("https://YOUR_BACKEND_URL/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  document.getElementById("result").innerHTML = `📊 Prediction: <b>${result.prediction}</b>`;
});

