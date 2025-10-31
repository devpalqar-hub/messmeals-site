import React from 'react'
import "./page.css";

export const metadata = {
    title: "Mess Meals/ Privacy Policy"
}

export default function page() {
  return (
<section className="privacy-container">
  <h1>Privacy Policy</h1>
  <p className="last-updated">Last Updated: October 31, 2025</p>

  <h2>1. Introduction</h2>
  <p>Welcome to Mess Meals (“we,” “us,” or “our”). This Privacy Policy describes how we collect, use, and disclose your information when you use our meal management platform (“the Site”). By using Mess Meals, you agree to the collection and use of information in accordance with this policy.</p>

  <h2>2. Information We Collect</h2>
  <p>We collect various types of personal and usage information:</p>
  <strong>A. Information You Provide:</strong>
  <ul>
    <li>Account Signup: Name, email, phone, mess/hostel details, and password.</li>
    <li>Ordering: Delivery addresses, meal preferences, payment details (processed securely by third-party gateways).</li>
    <li>Communications: If you contact us, we collect your info and the content of your communication.</li>
  </ul>
  <strong>B. Data Collected Automatically:</strong>
  <ul>
    <li>Technical Data: Device info, IP address, browser type, and access times for security and functionality only.</li>
  </ul>
  <strong>C. Data from Third Parties:</strong>
  <ul>
    <li>Payment confirmations from payment processors.</li>
    <li>Delivery status updates from logistics partners (if integrated).</li>
  </ul>

  <h2>3. How We Use Your Information</h2>
  <ul>
    <li>To process orders, manage subscriptions, and fulfill services.</li>
    <li>To send you order updates, invoices, and service notifications.</li>
    <li>For customer support and to answer your queries.</li>
    <li>To maintain platform security, prevent fraud, and fulfill our legal obligations.</li>
  </ul>

  <h2>4. How We Share Your Information</h2>
  <ul>
    <li>With payment providers, for secure transaction handling.</li>
    <li>With delivery staff or partners, only for fulfilling your orders.</li>
    <li>If required by law or to protect our rights and users’ safety.</li>
    <li>In case of business reorganization, your data may be transferred as part of the transaction.</li>
  </ul>

  <h2>5. Cookies and Tracking</h2>
  <p>Mess Meals only uses strictly necessary cookies for core features such as login sessions and order processing. No analytics or marketing cookies are used.</p>

  <h2>6. Data Security</h2>
  <p>We use reasonable steps to protect your information. No system is 100% secure, but we work to ensure your data’s safety.</p>

  <h2>7. Data Retention</h2>
  <p>Your data is kept only as long as needed for services or legal requirements. When not needed, it is securely deleted or anonymized.</p>

  <h2>8. Your Rights</h2>
  <p>Depending on your locations and legal rights, you may:</p>
  <ul>
    <li>Access, update, or delete your account information.</li>
    <li>Request restriction or objection to certain processing.</li>
    <li>Request a copy or transfer of your data.</li>
    <li>Withdraw your consent at any time.</li>
  </ul>
  <p>To use these rights, contact us below. We may need to verify your identity for your protection.</p>

  <h2>9. International Data</h2>
  <p>Your data may be stored on servers in India. By using Mess Meals, you consent to such transfers. Users in the EU/UK: We use appropriate safeguards for cross-border data transfers.</p>

  <h2>10. Children’s Privacy</h2>
  <p>Mess Meals is not intended for users under age 13. We do not knowingly collect data from children. Contact us if you believe a child’s data was provided, and we will promptly remove it.</p>

  <h2>11. Links to Other Websites</h2>
  <p>We are not responsible for privacy practices on external sites you visit via Mess Meals (e.g., payment gateways). Please review their policies separately.</p>

  <h2>12. Changes to This Policy</h2>
  <p>We may update this Privacy Policy. Changes will be posted here with a new “Last Updated” date. Continued use of Mess Meals indicates your acceptance of the updated policy.</p>

  <h2>13. Contact Us</h2>
  <p>For any privacy questions or to exercise your rights, contact us:</p>
  <ul>
    <li>Email: <a href="mailto:info@messmeals.com">info@messmeals.com</a></li>
    <li>Website: <a href="https://messmeals.com" target="_blank" rel="noopener noreferrer">messmeals.com</a></li>
  </ul>
</section>

  )
}