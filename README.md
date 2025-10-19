```markdown
# 🎓 Student Dropout Prediction System  
**_Predict. Prevent. Empower Education._**  

An **end-to-end Machine Learning system** that predicts the likelihood of a student dropping out — combining **data science**, **FastAPI**, and a **modern web frontend** for interactive insights that truly make an impact.  

---

## 🌟 Overview

Education is the cornerstone of progress — yet, student dropouts remain a serious global challenge.  
This project aims to **identify at-risk students early** by analyzing a variety of factors like academic performance, demographics, attendance, and socio-economic data.  

Using **Machine Learning**, it predicts whether a student is **likely to continue**, **uncertain**, or **at risk of dropping out**. The goal?  
To empower educational institutions with **data-driven decisions** and enable timely interventions.

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Language** | Python 🐍 |
| **Backend Framework** | FastAPI ⚡ |
| **Machine Learning** | scikit-learn 🧩 |
| **Frontend** | HTML, CSS, JavaScript 💻 |
| **Libraries & Tools** | Pandas, NumPy, Joblib, Pydantic |
| **Communication** | CORS Middleware |
| **Deployment** | Render (Backend) • GitHub Pages / Netlify (Frontend) |

---

## ⚙️ Key Features

✅ Real-time dropout risk prediction  
✅ Clean and interactive web interface  
✅ Lightning-fast REST API using FastAPI  
✅ Robust input validation with Pydantic  
✅ Intelligent categorical encoding for predictions  
✅ Smooth frontend–backend integration  
✅ Deployed and accessible online 🌐  

---

## 🧩 System Architecture

```
          ┌─────────────────────┐
          │   Frontend (JS)     │
          │ → Collects User Info│
          └─────────┬───────────┘
                    │ (POST JSON)
                    ▼
         ┌──────────────────────┐
         │   FastAPI Backend    │
         │ → Validates Data     │
         │ → Encodes Features   │
         │ → Loads ML Model     │
         │ → Sends Prediction   │
         └─────────┬───────────┘
                    │
                    ▼
         ┌──────────────────────┐
         │   Trained ML Model   │
         │ → Predicts Outcome   │
         └──────────────────────┘
```

---

## 💡 How It Works

1. The user enters details like **grades, attendance, age, and background.**  
2. The frontend sends the data as JSON to the FastAPI backend.  
3. The backend **validates**, **encodes**, and **predicts** using a trained ML model (`student_dropout_model.pkl`).  
4. The prediction is sent back to the frontend — displayed in a clear, friendly message.

---

## 🧪 Example API Usage

**Endpoint:**  
`POST /predict`

**Request (JSON):**
```
{
  "Marital_status": "Single",
  "Application_mode": "Online",
  "Application_order": 1,
  "Course": "Engineering",
  "Daytime_evening_attendance": "Daytime",
  "Previous_qualification": "HighSchool",
  "Nacionality": "Domestic",
  "Mothers_qualification": "Bachelor",
  "Fathers_qualification": "Master",
  "Mothers_occupation": "Employed",
  "Fathers_occupation": "Employed",
  "Displaced": "No",
  "Educational_special_needs": "No",
  "Debtor": "No",
  "Tuition_fees_up_to_date": "Yes",
  "Gender": "Male",
  "Scholarship_holder": "No",
  "Age_at_enrollment": 19,
  "International": "No",
  "Curricular_units_1st_sem_approved": 6,
  "Curricular_units_1st_sem_grade": 12.5,
  "Curricular_units_2nd_sem_approved": 7,
  "Curricular_units_2nd_sem_grade": 13.0,
  "Unemployment_rate": 7.2,
  "Inflation_rate": 2.5,
  "GDP": 1.8
}
```

**Response:**
```
{
  "prediction": "Student has a low chance of dropping out"
}
```

---

## 🚀 Deployment

| Component | Platform | URL |
|------------|-----------|-----|
| **Backend** | Render | https://student-dropout-api.onrender.com/predict |
| **Frontend** | GitHub Pages | Hosted Live 🌐 |

---

## 🧰 Installation & Setup

**Clone the repository**
```
git clone https://github.com/<your-username>/student-dropout-prediction.git
cd student-dropout-prediction
```

**Backend Setup**
```
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

Interactive API docs available at → http://127.0.0.1:8000/docs  

**Frontend Setup**
```
# Run a local web server
python -m http.server 8080
```
Access frontend at → http://localhost:8080  

---

## 📊 Screenshots

**📥 Input Form**  
_Enter student data and submit for real-time results._

**📈 Prediction Output**  
_Display showing whether the student is likely to continue or drop._

*(Add screenshots here)*

---

## 🧭 Roadmap & Future Enhancements

- 🔗 Integrate database (MongoDB / PostgreSQL) for student records  
- 📊 Add analytics dashboard using Plotly / Chart.js  
- 💡 Improve accuracy with ensemble & advanced ML models (XGBoost, Random Forest)  
- ☁️ Fully deploy backend and frontend on AWS/Azure  
- 🧠 Introduce explainable AI for interpretability (SHAP/LIME)

---

## 👨‍💻 Author

Govardhan Padmasali 
🎓 Undergraduate in Electronics & Communication Engineering  
💡 Passionate about Machine Learning, Embedded Systems & Backend Development  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/govardhanpadmasali/)  

If you like this project, please ⭐ **Star this repository** — it motivates me to keep building! 🌟  

---

## 🙌 Acknowledgements

Special thanks to:
- The **FastAPI** community for their exceptional developer support  
- **Scikit-learn**, **Pandas**, and **NumPy** for making ML accessible  
- Educators inspiring innovation through data-driven insights  

---

✨ _Turning academic data into actionable solutions — because every student deserves a chance to succeed._ ✨  
```
