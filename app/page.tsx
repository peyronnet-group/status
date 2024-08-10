import IncidentCard from "@/components/incident-card";
import { StatusCard } from "@/components/status-card";
import { Button } from "@/components/ui/button";
import { parseAllIncidents } from "@/lib/incidentUtils";
import { LeoCorpSystems, SynapsySystems } from "@/lib/systems";
import Link from "next/link";

export default async function Home() {
  const incidents = await parseAllIncidents();
  return (
    <div className="w-full max-w-4xl px-2 mx-auto py-12 md:py-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Léo Corporation</h2>
          <div className="grid gap-6 mt-4">
            {LeoCorpSystems.map((system, i) => (
              <StatusCard
                key={i}
                title={system.name}
                status={system.status}
                message={system.description}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Synapsy</h2>
          <div className="grid gap-6 mt-4">
            {SynapsySystems.map((system, i) => (
              <StatusCard
                key={i}
                title={system.name}
                status={system.status}
                message={system.description}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Past Incidents</h2>
          <div className="grid gap-6 mt-4">
            {incidents
              .filter((incident) => !incident.isOpen)
              .slice(0, 3)
              .map((incident, id) => (
                <Link key={id} href={"incidents/" + incident.id}>
                  <IncidentCard incident={incident} />
                </Link>
              ))}
          </div>
          <div className="flex justify-center p-2">
            <Link href="incidents">
              <Button variant="outline">View More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
