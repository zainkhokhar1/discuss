import React from "react";
import { PostCreateForm } from "@/components/posts/PostCreateDialog";

const TopicShowPage = async ({ params }) => {
  const { slug } = await params;
  console.log("Topic slug:", slug);

  return (
    <div className="grid grid-cols-4 gap-4 p-4 w-full">
      <div className="col-span-3">{slug}</div>
      <div>
        <PostCreateForm />
      </div>
    </div>
  );
};

export default TopicShowPage;
