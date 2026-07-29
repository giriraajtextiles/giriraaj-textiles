"use server";

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export type ContactFormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneDigits = (value: string) => value.replace(/\D/g, "");

export async function submitContact(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const raw: ContactFormData = {
    name: (formData.get("name") as string)?.trim(),
    company: (formData.get("company") as string)?.trim(),
    email: (formData.get("email") as string)?.trim(),
    phone: (formData.get("phone") as string)?.trim(),
    message: (formData.get("message") as string)?.trim(),
  };

  const errors: Record<string, string[]> = {};

  if (!raw.name || raw.name.length < 2) {
    errors.name = ["Name is required"];
  }

  if (phoneDigits(raw.phone).length < 10) {
    errors.phone = ["Enter a valid 10-digit phone number"];
  }

  if (raw.email && !emailRegex.test(raw.email)) {
    errors.email = ["Enter a valid email, or leave this blank"];
  }

  if (!raw.message || raw.message.length < 10) {
    errors.message = ["Tell us what you need (at least a short note)"];
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  console.log("[Contact Submission]", raw);

  return {
    success: true,
    message: "Received. We will call you back from Beawar shortly.",
  };
}
