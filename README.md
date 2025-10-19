
<!-- Badges Section -->
<p align="center">
  <img src="https://img.shields.io/badge/Python-3.9%2B-blue?logo=python" alt="Python">
  <img src="https://img.shields.io/badge/Framework-FastAPI-0bf?logo=fastapi">
  <img src="https://img.shields.io/badge/ML-sklearn-yellow?logo=scikit-learn">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/Deployed-Render-informational" alt="Render">
  <img src="https://img.shields.io/github/stars/PadmasaliGovardhan/Student_Dropout_Predection_ML?style=social" alt="GitHub stars">
</p>

<h1 align="center">🎓 Student Dropout Prediction System</h1>
<p align="center"><em>Predict. Prevent. Empower Education.</em></p>

<p align="center">
  Turn student data into actionable insights — boost retention, empower educators, and help every learner reach their potential!
</p>

---

## 🌟 Overview

Education is the cornerstone of progress — yet, student dropouts continue to threaten futures.  
With this project, institutions gain the ability to **identify at-risk students early** using data-driven intelligence from academic, demographic, and socioeconomic attributes.

- **Machine Learning** predicts whether students will continue, are uncertain, or are at risk of dropping out.
- The mission: **enable meaningful, timely interventions** for every student.

---

## 🧠 Tech Stack

| Layer                | Technology                       |
|----------------------|----------------------------------|
| **Language**         | Python 🐍                        |
| **Backend**          | FastAPI ⚡                        |
| **ML Library**       | Scikit-learn 🧩                  |
| **Frontend**         | HTML, CSS, JavaScript 💻         |
| **Others**           | Pandas, NumPy, Joblib, Pydantic  |
| **Deployment**       | Render, GitHub Pages             |

---

## 🚀 Features

- ✅ Real-time dropout risk predictions
- ✅ Modern, intuitive web interface
- ✅ Fast and lightweight REST API (FastAPI)
- ✅ Rigorous validation with Pydantic
- ✅ Accurate encodings for categorical fields
- ✅ Full-stack deployment (backend + frontend hosted online)
- ✅ Open source & ready for contribution!

---

## 🏗️ System Architecture

```
Frontend (JS, HTML, CSS)
         ↓
FastAPI Backend (validates, encodes, loads ML model)
         ↓
Trained Scikit-learn Model (joblib)
```
**Workflow:**  
User fills out student data form → Frontend sends JSON (POST) → Backend handles prediction → Result is shown instantly.

---

## 🧪 API Demo

**Endpoint:**  
`POST /predict`

**Sample Request:**
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
**Sample Response:**
```
{
  "prediction": "Student has a low chance of dropping out"
}
```

---

## 🧰 Quickstart

**Clone this repo & launch backend**
```
git clone https://github.com/<your-username>/student-dropout-prediction.git
cd student-dropout-prediction/backend
pip install -r requirements.txt
uvicorn app:app --reload
```
API Docs at: http://127.0.0.1:8000/docs

**Run Frontend**
```
cd ../frontend
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080)

---

## 📲 Live Demo

| Component  | Platform         | URL                                              |
|------------|------------------|-------------------------------------------------|
| Backend    | Render           | https://student-dropout-api.onrender.com/predict |
| Frontend   | GitHub Pages     | *(Add link when deployed)*                       |

---

## 📸 Screenshots

Add screenshots here to showcase:
- 📥 The modern input form
- 📈 The intuitive prediction result

---

## 🛣️ Roadmap

- 🔗 Implement DB integration (MongoDB/PostgreSQL)
- 📊 Visualization dashboard (Plotly/Chart.js)
- 🧠 Upgrade to advanced ML models (XGBoost, RandomForest)
- ☁️ Production deployment on AWS/Azure
- 🔍 Explainable AI integration (SHAP/LIME)

---

## 👨‍💻 Author

**Govardhan Padmasali**  
🎓 Undergraduate — Electronics & Communication Engineering  
💡 AI&ML, Embedded, & Backend Enthusiast  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/govardhanpadmasali/)

**Like this project?** ⭐ Please star the repo to support this work!

---

## 🙌 Acknowledgements

Special thanks to:
- [FastAPI](https://fastapi.tiangolo.com/)
- [scikit-learn](https://scikit-learn.org/)
- [Pandas](https://pandas.pydata.org/)
- The open-source community!

---

> **Empowering student success through data + empathy.**

