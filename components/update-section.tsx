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
      <div className="flex items-center sm:flex-row flex-col gap-2 text-sm text-center sm:text-left text-muted-foreground">
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
      <p className="prose dark:prose-headings:text-slate-100 dark:prose-em:text-white dark:prose-strong:text-white dark:prose-a:text-slate-100 max-w-none prose-sm text-black dark:text-white">
        {children}
      </p>
    </div>
  );
}
