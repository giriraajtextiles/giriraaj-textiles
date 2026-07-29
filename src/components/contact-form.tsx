"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/app/actions/contact";

const initialState: FormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);

  return (
    <form className="contact-form" action={action} noValidate>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
        {state.errors?.name && <p className="field-error">{state.errors.name[0]}</p>}
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="10-digit mobile"
        />
        {state.errors?.phone && <p className="field-error">{state.errors.phone[0]}</p>}
      </div>
      <div className="field">
        <label htmlFor="email">Email (optional)</label>
        <input id="email" name="email" type="email" autoComplete="email" />
        {state.errors?.email && <p className="field-error">{state.errors.email[0]}</p>}
      </div>
      <div className="field">
        <label htmlFor="message">What do you need?</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Count (12/3 or 15/3), colour, monthly volume, delivery location"
        />
        {state.errors?.message && <p className="field-error">{state.errors.message[0]}</p>}
      </div>
      <button type="submit" className="submit-btn" disabled={pending}>
        {pending ? "Sending…" : "Send enquiry"}
      </button>
      {state.message && (
        <p className={state.success ? "form-success" : "form-error"} role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
