'use client'
export default function ErrorBoundary({error}:{
  error: Error
}) {
  return (
    <>
      {/* Error in reviewId */}
      {error.message}
    </>
  )
}
