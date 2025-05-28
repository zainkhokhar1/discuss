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
import Label from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
// import { createTopic } from "@/actions/create-topics";
// import { useActionState } from "react";

export const PostCreateForm = () => {
//   const [formState, action] = useActionState(createTopic, { errors: {} });

//   console.log("Form state:", formState);

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
              Write a new topic to start a discussion.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input id="name" name="name" />
            </div>
            {/* {formState?.errors?.name && (
              <div className="text-red-500 text-sm">
                {formState?.errors?.name}
              </div>
            )} */}
            <div>
              <Label htmlFor="description" className="mb-2">
                Description
              </Label>
              <Textarea id="description" name="description" />
            </div>
          </div>
          {/* {formState?.errors?.description && (
            <div className="text-red-500 text-sm">
              {formState?.errors?.description}
            </div>
          )} */}
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
