import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import useUserFoundModal from "@/hooks/useUserFound";
import { CommonAvatar } from "./avatarBox";

export const UserFindDialog = ({ isOpen, setIsOpen }) => {
  const userFound = useUserFoundModal();
  const { toast } = useToast();
  const onHandleClose = () => {
    userFound.onClose();
  };
  const onHandleAdd = () => {
    toast({
      title: "User Added Successfully",
      //   description: "Friday, February 10, 2023 at 5:57 PM",
    });
    userFound.onClose();
  };
  return (
    <Dialog open={userFound.isOpen} onOpenChange={onHandleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">User Find Successfully!</DialogTitle>
          <DialogDescription className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center flex-1 gap-4">
                <CommonAvatar />
                <div className="">Name</div>
              </div>
              <div
                onClick={onHandleAdd}
                className="border border-neutral-300 p-2 rounded-md shadow-md hover:cursor-pointer hover:text-neutral-500 hover:border-neutral-400"
              >
                Add
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
