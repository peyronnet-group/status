import { Incident, statusNames } from "@/lib/incident";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "./ui/badge";
import { ClockIcon } from "lucide-react";
import { getNameFromId, Status } from "@/lib/systems";
import UpdateSection from "./update-section";

export default function IncidentDetailsCard({
  incident,
}: {
  incident: Incident;
}) {
  const statusColors: Record<Status, string> = {
    up: "border-green-500 text-green-500",
    partial: "border-yellow-500 text-yellow-500",
    down: "border-red-500 text-red-500",
    "under-maintenance": "border-slate-500 text-slate-500",
  };
  return (
    <div className="grid gap-2 rounded-lg border bg-background p-4 md:p-6">
      <div className="grid gap-2">
        <div className="flex sm:flex-row flex-col text-center sm:text-left items-center gap-2">
          <Badge
            variant="outline"
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              statusColors[incident.status]
            }`}
          >
            {statusNames[incident.status]}
          </Badge>
          <div className="flex items-center gap-2 text-sm sm:flex-row flex-col text-muted-foreground">
            <ClockIcon className="h-4 w-4" />
            {new Date(incident.date).toLocaleString("en-US", {
              dateStyle: "long",
              timeStyle: "long",
            })}
          </div>
        </div>
        <h2 className="text-xl font-semibold">{incident.title}</h2>
      </div>
      <div className="grid gap-2 text-sm leading-loose">
        <MDXRemote components={{ UpdateSection }} source={incident.content} />
      </div>
    </div>
  );
}
