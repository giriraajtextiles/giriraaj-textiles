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

export async function submitContact(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  // TODO: Add rate limiting (e.g., IP-based, max 5 submissions per minute)

  const raw: ContactFormData = {
    name: (formData.get("name") as string)?.trim(),
    company: (formData.get("company") as string)?.trim(),
    email: (formData.get("email") as string)?.trim(),
    phone: (formData.get("phone") as string)?.trim(),
    message: (formData.get("message") as string)?.trim(),
  };

  const errors: Record<string, string[]> = {};

  if (!raw.name || raw.name.length < 2) {
    errors.name = ["Name is required (min 2 characters)"];
  }

  if (!raw.email || !emailRegex.test(raw.email)) {
    errors.email = ["A valid email address is required"];
  }

  if (!raw.message || raw.message.length < 10) {
    errors.message = ["Message is required (min 10 characters)"];
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  console.log("[Contact Submission]", raw);

  return {
    success: true,
    message: "Thank you! We'll get back to you shortly.",
  };
}
