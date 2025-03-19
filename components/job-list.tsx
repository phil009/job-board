"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { getAllJobs } from "@/lib/jobs"

export function JobList() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")?.toLowerCase() || ""

  const allJobs = getAllJobs()
  const filteredJobs = query
    ? allJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.location.toLowerCase().includes(query) ||
          job.description.toLowerCase().includes(query),
      )
    : allJobs

  const [visibleCount, setVisibleCount] = useState(6)
  const hasMore = visibleCount < filteredJobs.length

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  if (filteredJobs.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No jobs found</h3>
        <p className="text-muted-foreground">Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredJobs.slice(0, visibleCount).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore} variant="outline" size="lg">
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}

