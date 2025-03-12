import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/feedback")
      .then((response) => setFeedbackList(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/feedback", formData)
      .then(() => window.location.reload())
      .catch((error) => console.error("Error fetching data:", error));
  };

  // Inline CSS Styles
  const formStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const feedbackContainerStyle = {
    marginTop: "20px",
  };

  const feedbackStyle = {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "10px",
    border: "1px solid #ccc",
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", padding: "20px" }}>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          style={{ ...inputStyle, height: "100px" }}
        />
        <input
          type="number"
          min="1"
          max="5"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>

      <h2>Feedback List</h2>
      <div style={feedbackContainerStyle}>
        {feedbackList.map((feedback) => (
          <div key={feedback.id} style={feedbackStyle}>
            <p>
              {feedback.name}: {feedback.message} (Rating: {feedback.rating})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
