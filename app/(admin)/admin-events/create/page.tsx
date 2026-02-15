import EventForm from "@/components/event/event-form";

export default function CreateEventPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <EventForm />
    </div>
  );
}