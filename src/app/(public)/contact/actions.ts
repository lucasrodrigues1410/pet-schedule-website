"use server";

import { redirect } from "next/navigation";

export async function sendContactMessage(formData: FormData) {
	const name = String(formData.get("name") ?? "").trim();
	const email = String(formData.get("email") ?? "").trim();
	const message = String(formData.get("message") ?? "").trim();

	if (!name || !email || !message) {
		redirect("/contact?success=0");
	}

	redirect("/contact?success=1");
}
