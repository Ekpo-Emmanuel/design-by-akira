"use client";

import React, { useState } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import ThankYou from "./ThankYou";

interface FormInput {
  name: string;
  email: string;
  phone: string;
  call: string;
}

const initialFormInput: FormInput = {
  name: '',
  email: '',
  phone: '',  
  call: '',
};

interface Errors {
  [key: string]: string;
}

export default function ContactForm() {
  const router = useRouter();
  const [formInput, setFormInput] = useState<FormInput>(initialFormInput);
  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormInput((prevFormInput) => ({
      ...prevFormInput,
      [id]: value,
    }));
    validateField(id, value);
  };

  const validateField = (field: string, value: string) => {
    let error = "";
    switch (field) {
      case "name":
        if (!value) error = "Full Name is required";
        break;
      case "email":
        if (!value) error = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value)) error = "Email address is invalid";
        break;
      case "phone":
        if (!value) error = "Phone is required";
        break;
      case "call":
        if (!value) error = "Choose a time";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;
    ["name", "email", "phone", "call"].forEach((field) => {
      const value = formInput[field as keyof FormInput];
      validateField(field, value);
      if (!value) valid = false;
    });

    if (valid) {
      setIsLoading(true);
      try {
        const response = await axios.post("/api/contact", formInput, {
          headers: { "Content-Type": "application/json" },
        });

        if (response.data.success) {
          console.log("Form submitted successfully:", response.data);
          setFormInput(initialFormInput);
          setErrors({}); 
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setIsLoading(false);
        setFormInput(initialFormInput);
        setIsSubmitted(true);
      }
    }
  };

  return (
    <div className="relative bg-black">
      <div className="px-4 py-20 lg:py-32 md:px-12 max-w-7xl mx-auto text-white">
        <div>
          <h1 className="relative text-[25px] uppercase sm:text-[28px] md:text-[22px] font-semibold text-center tracking-tighter leading-[35px] mx-auto">
            FEEL FREE TO REACH OUT AND CONNECT WITH US.
          </h1>
          <form className="mt-10" method="post" onSubmit={handleSubmit} autoComplete="off">
            {isSubmitted ?
            <ThankYou /> : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
                  <div>
                    <label className="text-[15px] font-bold uppercase tracking-tighter text-white/80">Full name</label>
                    <input 
                      type="text" 
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      className="mt-2 w-full px-[18px] h-[54px] text-[15px] font-semibold text-white/70 placeholder:font-semibold placeholder:text-white/40 py-2 border border-[rgba(255,255,255,.2)] bg-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={formInput.name}
                      onChange={handleInputChange}
                      style={{ border: errors.name ? "1px solid #6e2424" : "" }}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label className="text-[15px] font-bold uppercase tracking-tighter text-white/80">Email</label>
                    <input 
                      type="text" 
                      name="email"
                      id="email"
                      placeholder="contact@email.com"
                      className="mt-2 w-full px-[18px] h-[54px] text-[15px] font-semibold text-white/70 placeholder:font-semibold placeholder:text-white/40 py-2 border border-[rgba(255,255,255,.2)] bg-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={formInput.email}
                      onChange={handleInputChange}
                      style={{ border: errors.email ? "1px solid #6e2424" : "" }}
                    />
                  </div>
                  <div>
                    <label className="text-[15px] font-bold uppercase tracking-tighter text-white/80">Phone</label>
                    <input 
                      type="text" 
                      name="phone"
                      id="phone"
                      placeholder="+1 345-678"
                      className="mt-2 w-full px-[18px] h-[54px] text-[15px] font-semibold text-white/70 placeholder:font-semibold placeholder:text-white/40 py-2 border border-[rgba(255,255,255,.2)] bg-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={formInput.phone}
                      onChange={handleInputChange}
                      style={{ border: errors.phone ? "1px solid #6e2424" : "" }}
                    />
                  </div>
                  <div>
                    <label className="text-[15px] font-bold uppercase tracking-tighter text-white/80">Schedule to receive call</label>
                    <input 
                      type="text" 
                      name="call"
                      id="call"
                      placeholder="10:00 AM to 4:00 PM  Mon"
                      className="mt-2 w-full px-[18px] h-[54px] text-[15px] font-semibold text-white/70 placeholder:font-semibold placeholder:text-white/40 py-2 border border-[rgba(255,255,255,.2)] bg-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={formInput.call}
                      onChange={handleInputChange}
                      style={{ border: errors.call ? "1px solid #6e2424" : "" }}
                    />
                  </div>
                </div>
                <div className="mt-5 lg:mt-8 max-w-2xl mx-auto">
                  <button
                    type="submit"
                    className="w-full text-black text-center text-[15px] font-semibold uppercase rounded-full bg-white px-[30px] py-[17px] transition hover:bg-white/90"
                    disabled={isLoading}
                  >
                    {isLoading ? "Submitting..." : "Contact us"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
