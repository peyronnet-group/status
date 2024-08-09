export interface Incident {
  title: string;
  id: string;
  services: string[];
  date: Date;
  status: "up" | "partial" | "down";
  isOpen: boolean;
  content: string; // MDX content
}
