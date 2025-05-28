"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3, "Name is required")
    .regex(
      /^[a-z]+$/,
      "Only lowercase letters a-z allowed, no spaces, no capital letters"
    ),
  description: z
    .string()
    .min(7, "Description must be at least 7 characters long"),
});

export const createTopic = async (prevState, formData) => {
  let topicData;
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
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
        name: ["You must be logged in to create a topic"],
        description: ["You must be logged in to create a topic"],
      },
    };
  }

  try {
    topicData = await prisma.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (error) {
    console.error("Validation error:", error);
    return {
      errors: {
        name: ["Invalid input"],
        description: ["Invalid input"],
      },
    };
  }

  revalidatePath("/");

  const safeSlug = encodeURIComponent(result.data.name);
  redirect(`/topics/${safeSlug}`);
};
