import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { events } from "@/lib/data";

export function SkeletonCard() {
  return (
    <Card className="w-full  bg-transparent">
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
    </Card>
  );
}

export default function loading() {
  return (
    <>
      <h1 className="text-center">Loading ...</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        {events.map((_,i) => (
          <div key={i} className="rounded-xl p-6">
            <SkeletonCard />
          </div>
        ))}
      </div>
    </>
  );
}
