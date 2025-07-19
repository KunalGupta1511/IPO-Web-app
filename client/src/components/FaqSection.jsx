import { useState } from "react";
import "../css/faqSection.css";

import faqData from "../faqData";

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  function toggleAnswer(id) {
    setOpenId(prev => (prev === id ? null : id)); // Toggle logic
  }

  return (
    <footer className="faq">
      <div className="faq-heading">
        <div className="heading">Frequently Asked Questions?</div>
        <div className="description">
          Find answers to common questions that come in your mind related to IPO.
        </div>
      </div>

      <div className="faq-card-holder">
        {faqData.map((faq) => (
          <div className="faq-card" key={faq.id}>
            <div className="open">
              <span className="question">{faq.question}</span>
              <div
                className={`${openId === faq.id ? "toggled" : "toggle"}`}
                onClick={() => toggleAnswer(faq.id)}
              >
                +
              </div>
            </div>
            <span className={`answer ${openId === faq.id ? "show" : ""}`}>
              {faq.answer}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
}
