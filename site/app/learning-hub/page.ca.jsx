import BlogCA from "@/components/ca/BlogCA";
import { caMeta, CA_PAGES } from "@/lib/ca/meta";
import { getAllPosts } from "@/lib/posts";

export const metadata = caMeta(CA_PAGES.blog);

export default function Page() {
  return <BlogCA posts={getAllPosts().map(({ body, ...p }) => p)} />;
}
