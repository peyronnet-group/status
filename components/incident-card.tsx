import { Incident } from "@/lib/incident";
import { Badge } from "./ui/badge";
import { ClockIcon } from "lucide-react";

interface IncidentCardProps {
  incident: Incident;
}

export default function IncidentCard(props: IncidentCardProps) {
  return (
    <div className="grid grid-cols-[1fr,auto] gap-4 rounded-lg border bg-background p-4 md:p-6">
      <h2 className="text-lg font-semibold">{props.incident.title}</h2>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <ClockIcon className="h-4 w-4" />
        <p>
          {new Date(props.incident.date).toLocaleString("en-US", {
            dateStyle: "long",
            timeStyle: "long",
          })}
        </p>
        <Badge
          variant="outline"
          className="rounded-full px-3 py-1 text-sm font-medium"
        >
          {props.incident.isOpen ? "Active" : "Resolved"}
        </Badge>
      </div>
    </div>
  );
}
