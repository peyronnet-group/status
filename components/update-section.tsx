import { ClockIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { MDXRemote } from "next-mdx-remote/rsc";

interface UpdateProps {
  title: string;
  date: Date;
  description: string;
}
export default function UpdateSection(props: UpdateProps) {
  return (
    <div className="grid gap-2">
      <Separator className="mb-2" />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Badge
          variant="outline"
          className="rounded-full px-3 py-1 text-sm font-medium"
        >
          {props.title}
        </Badge>
        <ClockIcon className="h-4 w-4" />
        {props.date.toLocaleString("en-US", {
          dateStyle: "long",
          timeStyle: "long",
        })}
      </div>
      <p className="prose max-w-none prose-sm text-black">
        <MDXRemote source={props.description} />
      </p>
    </div>
  );
}
