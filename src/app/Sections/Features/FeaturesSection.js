import { FaUtensils, FaListAlt, FaShippingFast, FaChartBar, FaIcons, FaUserAlt, FaCreditCard } from 'react-icons/fa';
import './FeaturesSection.css';

const features = [
  { title: "Meal Plan Management", desc: "Easy subscription and menu management.", icon: <FaUtensils size={40}  /> },
  { title: "Order Tracking", desc: "Track customer orders from start to finish.", icon: <FaListAlt size={40}/> },
  { title: "Delivery Management", desc: "Assign tasks and monitor delivery personnel.", icon: <FaShippingFast size={40} /> },
  { title: "Analytics Dashboard", desc: "Powerful insights and reporting.", icon: <FaChartBar size={40}  /> },
  { title: "Pattern Visualization", desc: "Visual tools for understanding delivery patterns.", icon: <FaIcons size={40}  /> },
  { title: "Customer Management", desc: "All customer profiles and feedback.", icon: <FaUserAlt size={40}  /> },
  { title: "Payment Management", desc: "Track, collect, and manage payments.", icon: <FaCreditCard size={40}  /> }
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        {features.map((f, idx) => (
          <div className="feature-card" key={idx}>
            <div className="feature-icons">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
