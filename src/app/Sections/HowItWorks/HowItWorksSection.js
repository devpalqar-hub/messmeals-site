import React from "react";
import "./HowItWorksSection.css";

const steps = [
  {
    title: "Place Order / Subscribe",
    desc: "Customers order meals or subscribe to meal plans from the app.",
  },
  {
    title: "Track & Manage",
    desc: "Mess owners manage orders and track deliveries in real time.",
  },
  {
    title: "Delivery Boy Gets Orders",
    desc: "Delivery staff receive order details on their mobile app instantly.",
  },
  {
    title: "Analytics & Feedback",
    desc: "Admins monitor analytics and feedback to improve operations.",
  }
];

export default function HowItWorksSection() {
  return (
    <section className="how-steps-container" id="how">
      <h2 className="how-steps-title">How Mess Meals Works?</h2>
      <div className="how-steps-row">
        {steps.map((step, idx) => (
          <div className="how-step" key={idx}>
            <div className="how-step-number">{idx + 1}</div>
            <div className="how-step-title">{step.title}</div>
            <div className="how-step-desc">{step.desc}</div>
            {idx < steps.length - 1 && (
              <span className="how-curved-arrow"></span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
