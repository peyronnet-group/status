export interface System {
  name: string;
  status: Status;
  description: string;
  id: string;
}

export type Status = "up" | "partial" | "down";

export const LeoCorpSystems: System[] = [
  {
    id: "web",
    name: "Web Experiences",
    status: "up",
    description:
      "Our web applications are running smoothly and serving customers without any issues.",
  },
  {
    id: "update",
    name: "Update System",
    status: "up",
    description: "Our automated update system is working as expected.",
  },
  {
    id: "gavilya",
    name: "Gavilya Services",
    status: "up",
    description: "All Gavilya services are working as expected.",
  },
];
export const SynapsySystems: System[] = [
  {
    id: "write",
    name: "Write",
    status: "up",
    description:
      "Our writing platform is operating normally, allowing users to create and publish content without any issues.",
  },
  {
    id: "genidoc",
    name: "Genidoc",
    status: "up",
    description: "Genidoc is operating normally.",
  },
];
export const Systems: System[] = [...LeoCorpSystems, ...SynapsySystems];

export function getNameFromId(id: string): string {
  for (let i = 0; i < Systems.length; i++) {
    if (Systems[i].id === id) {
      return Systems[i].name;
    }
  }
  return id;
}
