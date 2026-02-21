import React, { useState } from "react";
import axios from "axios";

function LogInteractionScreen() {
  const [formData, setFormData] = useState({
    hcpName: "",
    interactionType: "",
    date: "",
    time: "",
    attendees: "",
    topics: "",
    sentiment: "Neutral",
    outcomes: "",
    followups: ""
  });

  const [chatLog, setChatLog] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/log_interaction", formData);
    console.log(res.data);
    alert("Interaction logged successfully!");
  };

  const handleChatSubmit = async () => {
    const res = await axios.post("http://localhost:8000/log_interaction", {
      chatLog: chatLog
    });
    console.log(res.data);
    alert("Chat interaction logged successfully!");
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "20px" }}>
      <h2>Log HCP Interaction</h2>
      <form onSubmit={handleSubmit}>
        <input name="hcpName" placeholder="HCP Name" onChange={handleChange} />
        <input name="interactionType" placeholder="Interaction Type" onChange={handleChange} />
        <input name="date" type="date" onChange={handleChange} />
        <input name="time" type="time" onChange={handleChange} />
        <input name="attendees" placeholder="Attendees" onChange={handleChange} />
        <textarea name="topics" placeholder="Topics Discussed" onChange={handleChange}></textarea>
        <select name="sentiment" onChange={handleChange}>
          <option>Positive</option>
          <option>Neutral</option>
          <option>Negative</option>
        </select>
        <textarea name="outcomes" placeholder="Outcomes" onChange={handleChange}></textarea>
        <textarea name="followups" placeholder="Follow-up Actions" onChange={handleChange}></textarea>
        <button type="submit">Log Interaction</button>
      </form>

      <h3>AI Chat Logging</h3>
      <textarea
        placeholder="Describe interaction here..."
        value={chatLog}
        onChange={(e) => setChatLog(e.target.value)}
      ></textarea>
