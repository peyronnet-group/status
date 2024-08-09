import { getIncidentContent } from "@/lib/mdxUtils";
import { MDXRemote } from "next-mdx-remote/rsc";

const IncidentPage = async ({ params }: { params: any }) => {
  const { content, data } = getIncidentContent(params.slug);
  return (
    <div>
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </div>
  );
};

export default IncidentPage;
