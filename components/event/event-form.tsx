"use client";

import { useForm } from "react-hook-form";
import { EventSchema, type EventInput } from "@/lib/schemas/event";
import { createEvent } from "@/app/(admin)/admin-events/actions";
import { zodResolver } from '@hookform/resolvers/zod';

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting },
    setError,
  } = useForm<EventInput>({
    resolver: zodResolver(EventSchema),
  });

  const onSubmit = async (data: EventInput) => {
    const result = await createEvent(data);
    
    if (result?.errors) {
      Object.keys(result.errors).forEach((key) => {
        setError(key as keyof EventInput, {
          type: "server",
          message: result.errors[key]?.[0],
        });
      });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-4 bg-white p-6 rounded-lg shadow-md border"
    >
      <h2 className="text-xl font-bold mb-4">Create New Event</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Title</label>
          <input 
            {...register("title")} 
            className={`border p-2 rounded-md ${errors.title ? 'border-red-500' : ''}`} 
            placeholder="e.g. Next.js Conf" 
          />
          {errors.title && <span className="text-xs text-red-500">{errors.title.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Slug</label>
          <input 
            {...register("slug")} 
            className={`border p-2 rounded-md ${errors.slug ? 'border-red-500' : ''}`} 
            placeholder="nextjs-conf-2024" 
          />
          {errors.slug && <span className="text-xs text-red-500">{errors.slug.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Image URL</label>
          <input 
            {...register("image")} 
            className={`border p-2 rounded-md ${errors.image ? 'border-red-500' : ''}`} 
            placeholder="https://..." 
          />
          {errors.image && <span className="text-xs text-red-500">{errors.image.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Location</label>
          <input 
            {...register("location")} 
            className={`border p-2 rounded-md ${errors.location ? 'border-red-500' : ''}`} 
            placeholder="Casablanca, Morocco" 
          />
          {errors.location && <span className="text-xs text-red-500">{errors.location.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Date</label>
          <input 
            {...register("date")} 
            type="date" 
            className={`border p-2 rounded-md ${errors.date ? 'border-red-500' : ''}`} 
          />
          {errors.date && <span className="text-xs text-red-500">{errors.date.message}</span>}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Time</label>
          <input 
            {...register("time")} 
            type="time" 
            className={`border p-2 rounded-md ${errors.time ? 'border-red-500' : ''}`} 
          />
          {errors.time && <span className="text-xs text-red-500">{errors.time.message}</span>}
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800 disabled:bg-gray-400 transition"
      >
        {isSubmitting ? "Creating Event..." : "Create Event"}
      </button>
    </form>
  );
}