import IncidentCard from "@/components/incident-card";
import { StatusCard } from "@/components/status-card";
import { parseAllIncidents } from "@/lib/incidentUtils";
import Link from "next/link";

export default async function ViewIncidentsPage() {
  const incidents = await parseAllIncidents();
  const openedIncidents = incidents.filter((incident) => incident.isOpen);
  return (
    <main className="w-full max-w-4xl px-2 mx-auto py-12 md:py-16">
      <h2 className="text-2xl font-bold">Active Incidents</h2>
      {openedIncidents.length === 0 && (
        <div className="my-4">
          <StatusCard
            status="up"
            title="No active incidents"
            message="All our services are working as expected."
          />
        </div>
      )}
      <div className="grid gap-6 mt-4"></div>
      <h2 className="text-2xl font-bold">Past Incidents</h2>
      <div className="grid gap-6 mt-4">
        {incidents
          .filter((incident) => !incident.isOpen)
          .map((incident, id) => (
            <Link key={id} href={"incidents/" + incident.id}>
              <IncidentCard incident={incident} />
            </Link>
          ))}
      </div>
    </main>
  );
}
