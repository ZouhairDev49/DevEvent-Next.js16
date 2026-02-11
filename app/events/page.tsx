import EventCard from "@/components/EventCard";
import { events } from "@/lib/data";
import { Metadata } from "next";

export const metadata : Metadata = {
  title: {
    absolute: "Events List"
  },
}


export default async function page() {
  await new Promise((resolve) =>{
    setTimeout(() => {
      resolve("Intentional delay")
    }, 2000);
  })
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
