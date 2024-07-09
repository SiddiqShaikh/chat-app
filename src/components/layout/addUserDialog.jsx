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

export const AddUserDialog = ({ isOpen, setIsOpen }) => {
  const { toast } = useToast();
  const onHandleClose = () => {
    setIsOpen(false);
  };
  const onHandleAdd = () => {
    toast({
      title: "Scheduled: Catch up",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={onHandleClose}>
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
