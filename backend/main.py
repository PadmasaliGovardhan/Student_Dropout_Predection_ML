# app.py
from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
import joblib
from fastapi.middleware.cors import CORSMiddleware


prediction_map = {2: "Student have low chances of dropout from his studies", 1: "Medium chances of dropout from his studies", 0: "High chances of dropout from his studies"}

# -----------------------------
# Load your trained model
# -----------------------------
model = joblib.load("model/student_dropout_model.pkl")

# -----------------------------
# Mapping dictionaries (categorical encodings)
# -----------------------------
marital_status_map = {"Single": 1, "Married": 2, "Divorced": 3}
application_mode_map = {"Online": 8, "Offline": 6, "Other": 1, "Special": 12}
course_map = {"Engineering": 5, "Science": 1, "Arts": 2}
daytime_map = {"Daytime": 2, "Evening": 11, "Other": 5, "Night": 15, "Afternoon": 3}
previous_qual_map = {"HighSchool": 1, "None": 0}
nacionality_map = {"Domestic": 1, "International": 2}
mothers_qual_map = {"Bachelor": 1, "HighSchool": 0, "Master": 2}
fathers_qual_map = {"Bachelor": 13, "HighSchool": 1, "Master": 22, "Other": 23}
mothers_occ_map = {"Employed": 10, "Unemployed": 3, "Other": 27, "Self-Employed": 28}
fathers_occ_map = {"Employed": 6, "Unemployed": 4, "Other": 10}
displaced_map = {"No": 0, "Yes": 1}
educ_spec_map = {"No": 0, "Yes": 1}
debtor_map = {"No": 0, "Yes": 1}
tuition_map = {"Yes": 0, "No": 1}
gender_map = {"Male": 0, "Female": 1}
scholarship_map = {"No": 0, "Yes": 1}
international_map = {"No": 1, "Yes": 2}  # matches dataset

# -----------------------------
# FastAPI app
# -----------------------------
app = FastAPI(title="Student Dropout Prediction API", version="1.0")


# Allow frontend (HTML/JS) to communicate
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all during dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# -----------------------------
# Pydantic model for request body
# -----------------------------
class StudentData(BaseModel):
    Marital_status: str
    Application_mode: str
    Application_order: int
    Course: str
    Daytime_evening_attendance: str
    Previous_qualification: str
    Nacionality: str
    Mothers_qualification: str
    Fathers_qualification: str
    Mothers_occupation: str
    Fathers_occupation: str
    Displaced: str
    Educational_special_needs: str
    Debtor: str
    Tuition_fees_up_to_date: str
    Gender: str
    Scholarship_holder: str
    Age_at_enrollment: int
    International: str
    Curricular_units_1st_sem_credited: int
    Curricular_units_1st_sem_enrolled: int
    Curricular_units_1st_sem_evaluations: int
    Curricular_units_1st_sem_approved: int
    Curricular_units_1st_sem_grade: float
    Curricular_units_1st_sem_without_evaluations: int
    Curricular_units_2nd_sem_credited: int
    Curricular_units_2nd_sem_enrolled: float
    Curricular_units_2nd_sem_evaluations: int
    Curricular_units_2nd_sem_approved: int
    Curricular_units_2nd_sem_grade: float
    Curricular_units_2nd_sem_without_evaluations: int
    Unemployment_rate: float
    Inflation_rate: float
    GDP: float

# -----------------------------
# Mapping API field names to dataset column names
# -----------------------------
api_to_model_columns = {
    "Marital_status": "Marital status",
    "Application_mode": "Application mode",
    "Application_order": "Application order",
    "Course": "Course",
    "Daytime_evening_attendance": "Daytime/evening attendance",
    "Previous_qualification": "Previous qualification",
    "Nacionality": "Nacionality",
    "Mothers_qualification": "Mother's qualification",
    "Fathers_qualification": "Father's qualification",
    "Mothers_occupation": "Mother's occupation",
    "Fathers_occupation": "Father's occupation",
    "Displaced": "Displaced",
    "Educational_special_needs": "Educational special needs",
    "Debtor": "Debtor",
    "Tuition_fees_up_to_date": "Tuition fees up to date",
    "Gender": "Gender",
    "Scholarship_holder": "Scholarship holder",
    "Age_at_enrollment": "Age at enrollment",
    "International": "International",
    "Curricular_units_1st_sem_credited": "Curricular units 1st sem (credited)",
    "Curricular_units_1st_sem_enrolled": "Curricular units 1st sem (enrolled)",
    "Curricular_units_1st_sem_evaluations": "Curricular units 1st sem (evaluations)",
    "Curricular_units_1st_sem_approved": "Curricular units 1st sem (approved)",
    "Curricular_units_1st_sem_grade": "Curricular units 1st sem (grade)",
    "Curricular_units_1st_sem_without_evaluations": "Curricular units 1st sem (without evaluations)",
    "Curricular_units_2nd_sem_credited": "Curricular units 2nd sem (credited)",
    "Curricular_units_2nd_sem_enrolled": "Curricular units 2nd sem (enrolled)",
    "Curricular_units_2nd_sem_evaluations": "Curricular units 2nd sem (evaluations)",
    "Curricular_units_2nd_sem_approved": "Curricular units 2nd sem (approved)",
    "Curricular_units_2nd_sem_grade": "Curricular units 2nd sem (grade)",
    "Curricular_units_2nd_sem_without_evaluations": "Curricular units 2nd sem (without evaluations)",
    "Unemployment_rate": "Unemployment rate",
    "Inflation_rate": "Inflation rate",
    "GDP": "GDP"
}

# -----------------------------
# Prediction endpoint
# -----------------------------
# Update the predict_dropout function
@app.post("/predict")
def predict_dropout(student: StudentData):
    # Convert JSON to DataFrame
    input_df = pd.DataFrame([student.dict()])
    
    # Rename columns
    input_df = input_df.rename(columns=api_to_model_columns)
    
    # Map categorical string values to integers
    input_df["Marital status"] = input_df["Marital status"].map(marital_status_map)
    input_df["Application mode"] = input_df["Application mode"].map(application_mode_map)
    input_df["Course"] = input_df["Course"].map(course_map)
    input_df["Daytime/evening attendance"] = input_df["Daytime/evening attendance"].map(daytime_map)
    input_df["Previous qualification"] = input_df["Previous qualification"].map(previous_qual_map)
    input_df["Nacionality"] = input_df["Nacionality"].map(nacionality_map)
    input_df["Mother's qualification"] = input_df["Mother's qualification"].map(mothers_qual_map)
    input_df["Father's qualification"] = input_df["Father's qualification"].map(fathers_qual_map)
    input_df["Mother's occupation"] = input_df["Mother's occupation"].map(mothers_occ_map)
    input_df["Father's occupation"] = input_df["Father's occupation"].map(fathers_occ_map)
    input_df["Displaced"] = input_df["Displaced"].map(displaced_map)
    input_df["Educational special needs"] = input_df["Educational special needs"].map(educ_spec_map)
    input_df["Debtor"] = input_df["Debtor"].map(debtor_map)
    input_df["Tuition fees up to date"] = input_df["Tuition fees up to date"].map(tuition_map)
    input_df["Gender"] = input_df["Gender"].map(gender_map)
    input_df["Scholarship holder"] = input_df["Scholarship holder"].map(scholarship_map)
    input_df["International"] = input_df["International"].map(international_map)
    
    # Reorder columns to match training
    input_df = input_df[model.feature_names_in_]
    
    # Predict
    prediction_int = int(model.predict(input_df)[0])
    
    # Map to human-readable label
    prediction_label = prediction_map[prediction_int]
    
    return {"prediction": prediction_label}
