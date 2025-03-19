import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Job Not Found</h2>
      <p className="mt-2 text-muted-foreground">
        The job listing you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return to Job Listings</Link>
      </Button>
    </div>
  )
}

