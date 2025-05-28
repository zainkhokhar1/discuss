import PostList from "@/components/posts/PostList";
import { TopicCreateForm } from "@/components/ui/topics/TopicCreateDialog";
import { fetchTopPosts } from "@/lib/query/post";

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-semibold">Top Posts</h1>
      </div>
      <TopicCreateForm />
      <PostList fetchData={() => fetchTopPosts()} />
    </div>
  );
}
