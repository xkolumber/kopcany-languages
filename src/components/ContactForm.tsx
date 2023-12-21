"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import * as yup from "yup";
import { useRouter } from "next/navigation";

import React from "react";

const ContactForm = () => {
  const schema = yup.object({
    name: yup
      .string()
      .required("Meno a priezvisko je povinné")
      .min(3, "Minimálne 3 znaky")
      .max(45, "Maximálne 45 znakov"),
    email: yup.string().email("Email je v nesprávnom tvare").required("Email je povinný"),
    message: yup.string().notRequired(),
  });

  const [isLoading, setIsLoading] = useState(false);

  type FormData = yup.InferType<typeof schema>;
  const navigate = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);


    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_API2!, // <-- Comma was missing here
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            message: data.message,
          }),
        }
      );

      if (response.ok) {
        reset();
        navigate.push("/thanks");
        console.log("Email sent successfully!");
        setIsLoading(false);
      } else {
        console.error("Failed to send email");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
  };



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input_both">
        <div className="input_vertically">
            <h6>*Meno a Priezvisko</h6>
          <input
            type="text"
            id="meno"
            {...register("name")}
          />
          {errors.name && (
            <p className="error_message">{errors.name.message}</p>
          )}
        </div>
        <div className="input_vertically">
        <h6>*E-mail</h6>
          <input
            type="email"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="error_message">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="message-form">
      <h6>Správa</h6>
      <textarea
        id="message"
        rows={3}

        {...register("message")}
      />
      </div>
      <button
        className="btn btn--primary margin_bottom_5 min_width130"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <ClipLoader size={20} color={"#32a8a0"} loading={isLoading} />
        ) : (
          "Odoslať"
        )}
      </button>
    </form>
  );
};

export default ContactForm;