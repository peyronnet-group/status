import { ClockIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

interface UpdateProps {
  title: string;
  date: Date;
  children: any;
}
export default function UpdateSection({ title, date, children }: UpdateProps) {
  return (
    <div className="grid gap-2">
      <Separator className="mb-2" />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Badge
          variant="outline"
          className="rounded-full px-3 py-1 text-sm font-medium"
        >
          {title}
        </Badge>
        <ClockIcon className="h-4 w-4" />
        {date.toLocaleString("en-US", {
          dateStyle: "long",
          timeStyle: "long",
        })}
      </div>
      <p className="prose max-w-none prose-sm text-black">{children}</p>
    </div>
  );
}
