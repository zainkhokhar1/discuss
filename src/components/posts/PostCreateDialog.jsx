"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label.jsx";
import { Textarea } from "../ui/textarea";
import { createPost } from "@/actions/create-post";
import { useActionState } from "react";

export const PostCreateForm = ({ slug }) => {
  const [formState, action] = useActionState(createPost.bind(null, slug), {
    errors: {},
  });

  console.log("Form state:", formState);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New Post</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <form action={action} className="w-full">
          <DialogHeader>
            <DialogTitle>Create a Post</DialogTitle>
            <DialogDescription>
              Write a new post and click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="title" className="mb-2">
                Title
              </Label>
              <Input id="title" name="title" />
            </div>
            {formState?.errors?.title && (
              <div className="text-red-500 text-sm">
                {formState?.errors?.title}
              </div>
            )}
            <div>
              <Label htmlFor="content" className="mb-2">
                Content
              </Label>
              <Textarea id="content" name="content" />
            </div>
          </div>
          {formState?.errors?.content && (
            <div className="text-red-500 text-sm">
              {formState?.errors?.content}
            </div>
          )}
          <DialogFooter>
            <Button type="submit" className="w-full">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
