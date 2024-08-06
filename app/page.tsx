import { StatusCard } from "@/components/status-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Léo Corporation</h2>
          <div className="grid gap-6 mt-4">
            <StatusCard
              title="Web Experiences"
              status="up"
              message="Our web applications are running smoothly and serving customers without any issues."
            />
            <StatusCard
              title="Update System"
              status="up"
              message="Our automated update system is working as expected."
            />
            <StatusCard
              title="Gavilya Services"
              status="up"
              message="All Gavilya services are working as expected."
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Synapsy</h2>
          <div className="grid gap-6 mt-4">
            <StatusCard
              title="Write"
              status="up"
              message="Our writing platform is operating normally, allowing users to create and publish content without any issues."
            />
            <StatusCard
              title="Genidoc"
              status="up"
              message="Genidoc is operating normally."
            />
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
