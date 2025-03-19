import { notFound } from "next/navigation"
import Link from "next/link"
import { getJobById } from "@/lib/jobs"
import { formatSalary } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2, MapPin, DollarSign, Calendar } from "lucide-react"

export default function JobPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id)

  if (!job) {
    notFound()
  }

  return (
    <main className="min-h-screen p-4 md:p-8 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to listings
      </Link>

      <div className="bg-card rounded-lg shadow-sm border p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{job.title}</h1>
            <div className="flex items-center text-muted-foreground mb-1">
              <Building2 className="h-4 w-4 mr-2" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{job.location}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
              <DollarSign className="h-4 w-4 mr-1" />
              {formatSalary(job.salary)}
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted">
              <Calendar className="h-4 w-4 mr-1" />
              {job.type}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Job Description</h2>
          <div className="prose max-w-none">
            {job.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Requirements</h2>
          <ul className="list-disc pl-5 space-y-2">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        <Button size="lg" className="w-full md:w-auto">
          Apply Now
        </Button>
      </div>
    </main>
  )
}

