import React from "react";
import { PostCreateForm } from "@/components/posts/PostCreateDialog";
import PostList from "@/components/posts/PostList";
import { fetchPostByTopicSlug } from "@/lib/query/post";

const TopicShowPage = async ({ params }) => {
  const { slug } = await params;
  console.log("Topic slug:", slug);

  return (
    <div className="grid grid-cols-4 gap-1 p-4 w-11/12">
      <div className="col-span-3 font-bold text-2xl">{slug}</div>
      <div className="col-span-1 flex justify-end">
        <PostCreateForm slug={slug} />
      </div>
      <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
    </div>
  );
}; 

export default TopicShowPage;
