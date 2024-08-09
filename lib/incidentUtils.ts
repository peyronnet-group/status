import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Incident } from "./incident";

const incidentDirectory = path.join(process.cwd(), "Incident");

export async function getIncidentData(): Promise<Incident[]> {
  const incidentFiles = fs.readdirSync(incidentDirectory);
  const incidents: Incident[] = [];

  for (const file of incidentFiles) {
    const fullPath = path.join(incidentDirectory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const incident: Incident = {
      id: file.replace(".mdx", ""),
      title: data.title,
      services: data.services,
      status: data.status,
      isOpen: data.isOpen,
      date: data.date,
      content, // Include the MDX content
    };

    incidents.push(incident);
  }

  return incidents;
}
