import { StatusCard } from "@/components/status-card";
import { LeoCorpSystems, SynapsySystems } from "@/lib/systems";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16">
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
          <div className="grid gap-6 mt-4">{/* TODO */}</div>
        </div>
      </div>
    </div>
  );
}
