import { contentfulClient } from "@/lib/contentfulServer";
import BlogListClient from "./BlogListClient";


export default async function BlogPage() {
  const res = await contentfulClient.getEntries({ content_type: "blogPost" });

  return (
    <BlogListClient posts={res.items} includes={res.includes} />
  );
}
