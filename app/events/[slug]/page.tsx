import { events } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const event = events.find((event) => event.slug === slug);
  if (!event) {
    notFound();
  }
  return (
    <>
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Navigation */}
          <Link
            href="/"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition mb-8 block"
          >
            ← Back to Events
          </Link>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Featured Event
                  </span>
                  <span className="text-gray-400 text-sm">|</span>
                  <div className="flex items-center text-yellow-500 font-bold">
                    ⭐ {event.reviews.average}{" "}
                    <span className="text-gray-400 font-normal ml-1">
                      ({event.reviews.total})
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                  {event.title}
                </h1>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-600">
                    <span className="w-8 text-xl">📍</span>
                    <span className="font-medium">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="w-8 text-xl">📅</span>
                    <span className="font-medium">
                      {event.date} at {event.time}
                    </span>
                  </div>
                </div>

                <p className="text-gray-500 leading-relaxed mb-8">
                  Join top industry leaders for an immersive experience at{" "}
                  {event.title}. Connect with fellow developers and explore the
                  future of tech in the heart of {event.location}.
                </p>

                <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all active:scale-95">
                  Register for Event
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
