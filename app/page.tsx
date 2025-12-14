"use client";

import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";

export default function Home() {
  const events = [
    {
      image:'/images/event1.png',
      title:'Angular Connect 2025',
      slug:'event-1',
      location:'New York',
      date:'2024-09-15',
      time:'18:00'
    },
    {
      image:'/images/event2.png',
      title:'Vue.js Summit 2025',
      slug:'event-2',
      location:'Los Angeles',
      date:'2024-09-16',
      time:'19:00'
    },
    {
      image:'/images/event3.png',
      title:'React Conference 2025',
      slug:'event-3',
      location:'Chicago',
      date:'2024-09-17',
      time:'20:00'
    },
    {
      image:'/images/event4.png',
      title:'Latest Next.js Features',
      slug:'event-4',
      location:'San Francisco',
      date:'2024-09-18',
      time:'21:00'
    },
    {
      image:'/images/event5.png',
      title:'DjangoCon 2025',
      slug:'event-5',
      location:'San Francisco',
      date:'2024-09-18',
      time:'21:00'
    },
    {
      image:'/images/event6.png',
      title:'Flask Symposium 2025',
      slug:'event-6',
      location:'San Francisco',
      date:'2024-09-18',
      time:'21:00'
    }
  ]
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
