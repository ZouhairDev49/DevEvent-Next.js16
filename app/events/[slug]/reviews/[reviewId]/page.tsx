import NotFound from "./not-found";

export default async function page({params}:{
  params : Promise<{reviewId: string,slug: string}>
}) {
  const reviewId = (await params).reviewId;
  const eventId = (await params).slug;
  if(parseInt(reviewId) > 1001){
    return <NotFound/>;
  }
  return (
    <>
      <h1>Review {reviewId} Pour Event {eventId} </h1>
    </>
  )
}
