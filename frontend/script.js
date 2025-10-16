document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("predictForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Prepare the payload
    const data = {
      "Marital_status": document.getElementById("Marital_status").value,
      "Application_mode": "Online",
      "Application_order": 12,
      "Course": document.getElementById("Course").value,
      "Daytime_evening_attendance": document.getElementById("Daytime_evening_attendance").value,
      "Previous_qualification": document.getElementById("Previous_qualification").value,
      "Nacionality": "Domestic",
      "Mothers_qualification": "HighSchool",
      "Fathers_qualification": "HighSchool",
      "Mothers_occupation": "Unemployed",
      "Fathers_occupation": "Unemployed",
      "Displaced": "No",
      "Educational_special_needs": "No",
      "Debtor": "No",
      "Tuition_fees_up_to_date": document.getElementById("Tuition_fees_up_to_date").value,
      "Gender": document.getElementById("Gender").value,
      "Scholarship_holder": document.getElementById("Scholarship_holder").value,
      "Age_at_enrollment": parseInt(document.getElementById("Age_at_enrollment").value),
      "International": "No",
      "Curricular_units_1st_sem_credited": 20,
      "Curricular_units_1st_sem_enrolled": 50,
      "Curricular_units_1st_sem_evaluations": 20,
      "Curricular_units_1st_sem_approved": parseInt(document.getElementById("Curricular_units_1st_sem_approved").value),
      "Curricular_units_1st_sem_grade": 6.0,
      "Curricular_units_1st_sem_without_evaluations": 30,
      "Curricular_units_2nd_sem_credited": 25,
      "Curricular_units_2nd_sem_enrolled": 50,
      "Curricular_units_2nd_sem_evaluations": 25,
      "Curricular_units_2nd_sem_approved": 10,
      "Curricular_units_2nd_sem_grade": parseFloat(document.getElementById("Curricular_units_2nd_sem_grade").value),
      "Curricular_units_2nd_sem_without_evaluations": 25,
      "Unemployment_rate": 12.0,
      "Inflation_rate": 5.0,
      "GDP": 15000.0
    };

    try {
      const response = await fetch("https://student-dropout-predection-ml.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const result = await response.json();
      console.log("✅ API response:", result);

      // Handle API output safely
      const message =
        result.prediction ||
        result.result ||
        result.output ||
        JSON.stringify(result);

      document.getElementById("result").innerHTML =
        "📊 Prediction: <b>" + message + "</b>";
    } catch (error) {
      console.error("❌ Error:", error);
      document.getElementById("result").textContent =
        "⚠️ Something went wrong. Check console or try again later.";
    }
  });
});

