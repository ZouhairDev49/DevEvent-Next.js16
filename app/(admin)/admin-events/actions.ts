"use server";

import prisma from "@/lib/db";
import { EventSchema } from "@/lib/schemas/event";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEvent(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  const validated = EventSchema.safeParse(data);
  
  if (!validated.success) {
    return { error: "Invalid fields", details: validated.error.flatten() };
  }

  const { date, ...rest } = validated.data;

  try {
    await prisma.event.create({
      data: {
        ...rest,
        date: new Date(date), 
      },
    });
  } catch (error) {
    return { error: "Database connection failed" };
  }

  revalidatePath("/admin-events");
  redirect("/admin-events"); 
}