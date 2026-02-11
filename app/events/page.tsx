import EventCard from "@/components/EventCard";
import { events } from "@/lib/data";

export default function page() {
  return (
    <>
      <h1 className="text-center">Events</h1>
            <div className="mt-20 space-y-7">
              <ul className="events">
                {
                  events.map((event)=>(
                    <div key={event.title}>
                      <EventCard  {...event}/>
                    </div>
                  ))
                }
              </ul>
            </div>
    </>
  )
}
