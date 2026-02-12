import NotFound from "./not-found";

function getRandomInt(count: number){
  return Math.floor(Math.random() * count)
}
export default async function page({params}:{
  params : Promise<{reviewId: string,slug: string}>
}) {
  const random = getRandomInt(2);
  if (random === 1){
    throw new Error('Errore loading review');
  }
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
