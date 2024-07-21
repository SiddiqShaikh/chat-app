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
import useUserAddModal from "@/hooks/useUserAdd";
import useUserFoundModal from "@/hooks/useUserFound";

export const AddUserDialog = () => {
  const { toast } = useToast();
  const userAdd = useUserAddModal();
  const userFound = useUserFoundModal();
  const onHandleClose = () => {
    userAdd.onClose();
  };
  const onHandleAdd = () => {
    // toast({
    //   title: "Scheduled: Catch up",
    //   description: "Friday, February 10, 2023 at 5:57 PM",
    // });
    userFound.onOpen();
    userAdd.onClose();
  };
  return (
    <Dialog open={userAdd.isOpen} onOpenChange={onHandleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">
            Enter User id or email here
          </DialogTitle>
          <DialogDescription className="space-y-4">
            <Input placeholder="Enter email here.." />
            <Button
              className="w-full"
              onClick={() => {
                onHandleAdd();
              }}
            >
              Search
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
