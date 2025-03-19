import Link from "next/link"
import { JobList } from "@/components/job-list"
import { SearchBar } from "@/components/search-bar"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 max-w-5xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Job Listings</h1>
        <p className="text-muted-foreground">Find your next opportunity</p>
      </header>

      <SearchBar />

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Available Positions</h2>
        <Link
          href="/post-job"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Post a Job
        </Link>
      </div>

      <JobList />
    </main>
  )
}

