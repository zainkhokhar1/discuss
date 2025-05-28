import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const PostList = async ({ fetchData }) => {
  const posts = await fetchData();

  return (
    <div className="col-span-4">
      {posts.map((post, index) => (
        <Card key={index} className="p-3 my-2">
          <CardHeader>
            <CardTitle>{post?.title}</CardTitle>
            <CardDescription className="flex items-center justify-between">
              <h1>By {post?.user?.name}</h1>
              <h2>{post?._count?.comments} comments</h2>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
