"use server";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { prisma } from "@/lib";

const createPostSchema = z.object({
  title: z.string().min(3, "Title is required"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
});

export const createPost = async (slug, prevState, formData) => {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        title: ["You must be logged in to create a post"],
        content: ["You must be logged in to create a post"],
      },
    };
  }

  const topic = await prisma.topic.findFirst({
    where: {
      slug,
    },
  });

  if (!topic) {
    return {
      errors: {
        title: ["Topic not found"],
        content: ["Topic not found"],
      },
    };
  }

  let postData;

  try {
    postData = await prisma.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      errors: {
        title: ["Failed to create a Post."],
        content: ["Failed to create a Post."],
      },
    };
  }

  revalidatePath(`/topics/${slug}`);

  redirect(`/topics/${encodeURIComponent(slug)}/posts/${encodeURIComponent(postData.id)}`);
};
