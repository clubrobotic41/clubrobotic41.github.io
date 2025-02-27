'use client'
import React, { useState } from "react";
import Navbar from "@/components/utils/navbar";
import Footer from "@/components/utils/footer";
import { Button } from "@heroui/react";

const NewsletterPage: React.FC = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribed with email:", email);
    // Add logic to send the email to your backend or API
  };

  return (
    <div className="min-h-screen justify-between flex flex-col w-full">
      <Navbar />
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 max-w-4xl">Let Us Know Your Email Address!</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Type Here :)"
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "2px solid #ccc",
          borderRadius: "4px",
          width: "280px",
        }}
      />
      <button
        onClick={handleSubscribe}
        style={{
          padding: "10px 16px",
          fontSize: "16px",
          backgroundColor: "#00394e",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Subscribe
      </button>
    </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NewsletterPage;


