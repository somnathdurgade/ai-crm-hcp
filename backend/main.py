from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# Data model for interactions
class Interaction(BaseModel):
    hcpName: str = None
    interactionType: str = None
    date: str = None
    time: str = None
    attendees: str = None
    topics: str = None
    sentiment: str = None
    outcomes: str = None
    followups: str = None
    chatLog: str = None

# Routes
@app.get("/")
def root():
    return {"message": "Backend running"}

@app.post("/log_interaction")
def log_interaction(interaction: Interaction):
    # For now, just return the data (later connect DB + LangGraph)
    return {"status": "success", "data": interaction.dict()}

@app.put("/edit_interaction/{interaction_id}")
def edit_interaction(interaction_id: int, interaction: Interaction):
    return {"status": "edited", "id": interaction_id, "data": interaction.dict()}
