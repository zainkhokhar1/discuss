import { prisma } from "..";

export const fetchPostByTopicSlug = async (slug) => {
  return prisma.post.findMany({
    where: {
      topic: { slug },
    },
    include: {
      topic: { select: { slug: true } },
      _count: { select: { comments: true } },
      user: { select: { name: true } },
    },
  });
};

export const fetchTopPosts = async () => {
  return prisma.post.findMany({
    orderBy: {
      comments: { _count: "desc" },
    },
    include: {
      topic: { select: { slug: true } },
      _count: { select: { comments: true } },
      user: { select: { name: true } },
    },
    take: 5,
  });
};
