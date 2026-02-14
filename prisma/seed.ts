import prisma from "@/lib/db";

async function main() {
  const events = [
    {
      image: "/images/event1.png",
      title: "Angular Connect 2025",
      slug: "event-1",
      location: "New York",
      date: new Date("2024-09-15"),
      time: "18:00",
    },
    {
      image: "/images/event2.png",
      title: "Vue.js Summit 2025",
      slug: "event-2",
      location: "Los Angeles",
      date: new Date("2024-09-16"),
      time: "19:00",
    },
    {
      image: "/images/event3.png",
      title: "React Conference 2025",
      slug: "event-3",
      location: "Chicago",
      date: new Date("2024-09-17"),
      time: "20:00",
    },
    {
      image: "/images/event4.png",
      title: "Latest Next.js Features",
      slug: "event-4",
      location: "San Francisco",
      date: new Date("2024-09-18"),
      time: "21:00",
    },
    {
      image: "/images/event5.png",
      title: "DjangoCon 2025",
      slug: "event-5",
      location: "San Francisco",
      date: new Date("2024-09-18"),
      time: "21:00",
    },
    {
      image: "/images/event6.png",
      title: "Flask Symposium 2025",
      slug: "event-6",
      location: "San Francisco",
      date: new Date("2024-09-18"),
      time: "21:00",
    },
  ];

  await prisma.event.createMany({
    data: events,
    skipDuplicates: true,
  });

  console.log("✅ Events seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
