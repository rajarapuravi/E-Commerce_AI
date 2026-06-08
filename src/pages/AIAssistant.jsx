import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import "./AIAssistant.css";

function AIAssistant() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {

  const q = question.toLowerCase();

  if (
    q.includes("phone") ||
    q.includes("mobile")
  ) {
    setAnswer(
      "Recommended Phones: Samsung M35, Redmi Note 14, Realme Narzo 80."
    );
  }

  else if (
    q.includes("laptop") ||
    q.includes("coding")
  ) {
    setAnswer(
      "Recommended Laptops: Lenovo LOQ, HP Victus, ASUS TUF Gaming."
    );
  }

  else if (
    q.includes("iphone") ||
    q.includes("samsung")
  ) {
    setAnswer(
      "iPhone offers better optimization while Samsung offers more customization."
    );
  }

  else if (
    q.includes("mouse")
  ) {
    setAnswer(
      "Recommended Gaming Mouse: Logitech G102, Razer DeathAdder, HP M260."
    );
  }

  else if (
    q.includes("watch")
  ) {
    setAnswer(
      "Recommended Smart Watches: Noise, Boat, Fire-Boltt."
    );
  }

  else {
    setAnswer(
      `Searching for "${question}" is not supported yet. Backend AI will be added later.`
    );
  }
};

  return (
    <Layout>

      <div className="ai-container">

        <h1>🤖 RCBK AI Assistant</h1>

        <p>
          Ask anything about products.
        </p>

        <textarea
          rows="4"
          placeholder="Example: Best phone under ₹15000"
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <button
          onClick={handleAsk}
          className="ai-btn"
        >
          Ask AI
        </button>

        {answer && (
          <div className="ai-answer">
            <h3>AI Response</h3>

            <p>{answer}</p>
          </div>
        )}

      </div>

    </Layout>
  );
}

export default AIAssistant;