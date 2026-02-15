
import { z } from "zod";

export const EventSchema = z.object({
  title: z.string().min(7, "Title is too short (min 7 chars)"),
  slug: z.string().min(3, "Slug is required"),
  image: z.string().url("Please provide a valid image URL"),
  location: z.string().min(1, "Location is required"),
  date: z.string().min(1, "Event date is required"), 
  time: z.string().min(1, "Event time is required"),
});

export type EventInput = z.infer<typeof EventSchema>;