
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";

import { prisma } from "./lib/index.js";

if (
  process.env.GITHUB_CLIENT_ID === undefined ||
  process.env.GITHUB_CLIENT_SECRET === undefined
) {
  throw new Error(
    "Missing github clientId or clientSecret in environment variables"
  );
}
 
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ user, session }) {
      if (session && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
