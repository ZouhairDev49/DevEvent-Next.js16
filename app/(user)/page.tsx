"use client";

import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/data";

export default  function Home() {

  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev <br /> Event You Can't Miss</h1>
      <p className="text-center mt-5">Hackatons, Meetups, and conferences all in one place</p>

      <ExploreBtn/>

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {
            events.map((event)=>(
              <div key={event.title}>
                <EventCard {...event}/>
              </div>
            ))
          }
        </ul>
      </div>
    </section>
  );
}
