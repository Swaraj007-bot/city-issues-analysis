import pandas as pd
import random

# Total records
NUM_RECORDS = 1_000_000

# Fixed area
AREA = "Hadapsar"

# Issue types
ISSUE_TYPES = [
    "Pothole",
    "Water Leakage",
    "Garbage",
    "Street Light Failure",
    "Drainage Blockage",
    "Traffic Signal Issue"
]

SEVERITY = ["Low", "Medium", "High"]
STATUS = ["Open", "In Progress", "Resolved"]

# Data generation
data = {
    "Complaint_ID": range(1, NUM_RECORDS + 1),
    "Area": [AREA] * NUM_RECORDS,
    "Issue_Type": [random.choice(ISSUE_TYPES) for _ in range(NUM_RECORDS)],
    "Severity": [random.choice(SEVERITY) for _ in range(NUM_RECORDS)],
    "Status": [random.choice(STATUS) for _ in range(NUM_RECORDS)]
}

df = pd.DataFrame(data)

# Save CSV as per project structure
df.to_csv("data/sample_data.csv", index=False)

print("1 million records CSV dataset created successfully")
