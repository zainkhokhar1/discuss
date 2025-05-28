"use client";

import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "./button.jsx";
import { signIn } from "@/actions/sign-in.js";
import { signOut } from "@/actions/sign-out.js";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar.jsx";
import { Popover, PopoverContent, PopoverTrigger } from "./popover.jsx";
import { LogOut } from "lucide-react";
import { Separator } from "./separator.jsx";

const AuthHeader = () => {
  const session = useSession();
  let authContent;

  if (!session) {
    return null;
  }

  if (session?.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="size-12">
            <AvatarImage src={session.data.user.image} alt="Image" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-52 p-3">
          <h1 className="line-clamp-1">
            {session.data.user.name || session.data.user.email}
          </h1>
          <Separator className="mb-2 mt-1" />
          <form action={signOut}>
            <Button type="submit" className="w-full">
              <LogOut /> Logout
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <form action={signIn}>
          <Button variant={"outline"}>Sign In</Button>
        </form>
        <form action={signIn}>
          <Button>Sign Up</Button>
        </form>
      </>
    );
  }

  return authContent;
};

export default AuthHeader;
