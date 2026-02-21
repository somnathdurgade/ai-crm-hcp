# AI-First CRM – HCP Log Interaction Screen

## 📌 Overview
This project implements the **Log Interaction Screen** for Healthcare Professional (HCP) interactions in a CRM system.  
It supports both:
- **Structured Form Entry** (fields for HCP name, date, topics, sentiment, outcomes, etc.)
- **Conversational Chat Interface** (AI-assisted logging via LangGraph + Groq LLM)

---

## 🛠️ Tech Stack
- **Frontend:** React + Redux (Google Inter font)
- **Backend:** Python + FastAPI
- **Database:** MySQL/Postgres
- **AI Agent Framework:** LangGraph
- **LLMs:** Groq gemma2-9b-it (primary), llama-3.3-70b-versatile (optional for context)

---

## ⚙️ Features
- Log HCP interactions via **form** or **chat**
- Summarization & entity extraction using LLM
- Sentiment analysis of HCP notes
- Suggested AI-driven follow-ups
- Editable interaction records

---

## 🤖 LangGraph Agent Tools
The agent uses 5 tools for sales-related activities:
1. **Log Interaction Tool** – captures structured data, uses LLM for summarization.
2. **Edit Interaction Tool** – allows modification of logged data.
3. **Search HCP Tool** – retrieves HCP details from DB.
4. **Sentiment Analysis Tool** – classifies HCP sentiment.
5. **Follow-up Generator Tool** – suggests next actions (meetings, materials, advisory invites).

---

## 📂 Project Structure
