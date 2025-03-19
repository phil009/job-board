import Link from "next/link"
import { Building2, MapPin } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatSalary } from "@/lib/utils"
import type { Job } from "@/lib/types"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/job/${job.id}`} className="block h-full">
      <Card className="h-full transition-all hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg">{job.title}</CardTitle>
            <Badge variant="outline">{job.type}</Badge>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Building2 className="h-3 w-3 mr-1" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{job.location}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{job.description.substring(0, 150)}...</p>
        </CardContent>
        <CardFooter className="text-sm font-medium">{formatSalary(job.salary)}</CardFooter>
      </Card>
    </Link>
  )
}

