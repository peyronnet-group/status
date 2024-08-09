export interface System {
  name: string;
  status: Status;
  description: string;
}

export type Status = "up" | "partial" | "down";

export const LeoCorpSystems: System[] = [
  {
    name: "Web Experiences",
    status: "up",
    description:
      "Our web applications are running smoothly and serving customers without any issues.",
  },
  {
    name: "Update System",
    status: "up",
    description: "Our automated update system is working as expected.",
  },
  {
    name: "Gavilya Services",
    status: "up",
    description: "All Gavilya services are working as expected.",
  },
];
export const SynapsySystems: System[] = [
  {
    name: "Write",
    status: "up",
    description:
      "Our writing platform is operating normally, allowing users to create and publish content without any issues.",
  },
  {
    name: "Genidoc",
    status: "up",
    description: "Genidoc is operating normally.",
  },
];
