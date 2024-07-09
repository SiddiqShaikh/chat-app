import { AddUserDialog } from "@/components/layout/addUserDialog";
import AvatarBox, { CommonAvatar } from "@/components/layout/avatarBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocketContext } from "@/context/socketContext";
import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
const msgData = [
  {
    name: "Siddiq",
    avatar: "https://github.com/shadcn.png",
    email: "siddiq@gmail.com",
  },
  {
    name: "John",
    avatar: "https://github.com/shadcn.png",
    email: "john@gmail.com",
  },
  {
    name: "Doe",
    avatar: "https://github.com/shadcn.png",
    email: "doe@gmail.com",
  },
  {
    name: "Siddiq",
    avatar: "https://github.com/shadcn.png",
    email: "siddiq@gmail.com",
  },
  {
    name: "John",
    avatar: "https://github.com/shadcn.png",
    email: "john@gmail.com",
  },
  {
    name: "Doe",
    avatar: "https://github.com/shadcn.png",
    email: "doe@gmail.com",
  },
  {
    name: "Siddiq",
    avatar: "https://github.com/shadcn.png",
    email: "siddiq@gmail.com",
  },
  {
    name: "John",
    avatar: "https://github.com/shadcn.png",
    email: "john@gmail.com",
  },
  {
    name: "Doe",
    avatar: "https://github.com/shadcn.png",
    email: "doe@gmail.com",
  },
  {
    name: "Siddiq",
    avatar: "https://github.com/shadcn.png",
    email: "siddiq@gmail.com",
  },
  {
    name: "John",
    avatar: "https://github.com/shadcn.png",
    email: "john@gmail.com",
  },
  {
    name: "Doe",
    avatar: "https://github.com/shadcn.png",
    email: "doe@gmail.com",
  },
];

const userId = 1;

const chatData = [
  {
    message: "Hello brother",
    id: 1,
  },

  {
    message: "Hello brother",
    id: 2,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },

  {
    message: "Hello brother",
    id: 2,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },

  {
    message: "Hello brother",
    id: 2,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },

  {
    message: "Hello brother",
    id: 2,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },

  {
    message: "Hello brother",
    id: 2,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message:
      "Hello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brother",
    id: 1,
  },

  {
    message: "Hello brother",
    id: 2,
  },
  {
    message: "Hello brother",
    id: 1,
  },
  {
    message: "Hello brother",
    id: 1,
  },
];
const Chat = () => {
  const [openAddUserDialog, setopenAddUserDialog] = useState(false);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("message", (message) => {
      // setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  return (
    <>
      <AddUserDialog
        isOpen={openAddUserDialog}
        setIsOpen={setopenAddUserDialog}
      />
      {/* main container */}
      <div className="w-full min-h-[100vh]">
        {/* inner container */}
        <div className="w-full flex h-screen">
          {/* sidebar container */}
          <div className="p-2 flex-[0.2] flex flex-col">
            {/* input container */}
            <div className="my-4 ">
              <Input placeholder="Search" className="" />
            </div>
            <div className="text-sm mb-2">
              {" "}
              <Button onClick={() => setopenAddUserDialog(true)}>
                Add User
              </Button>
            </div>
            {/* list container */}
            <div className="flex-1 overflow-auto">
              {msgData.map((msg) => (
                <AvatarBox data={msg} />
              ))}
            </div>
            <div className="mt-4">
              <Button className="w-full">Logout</Button>
            </div>
          </div>
          <div className="flex flex-col h-screen flex-1">
            <div className="h-16 px-6 flex items-center border-b border-neutral-300 sticky top-0 bg-white z-10">
              <div className="flex-1 text-lg font-semibold">Chat Name</div>
              <div className="flex gap-3 items-center">
                <CiSearch
                  className="cursor-pointer"
                  aria-label="search"
                  size={25}
                />
                <IoMdMore
                  className="cursor-pointer"
                  aria-label="more"
                  size={25}
                />
              </div>
            </div>
            <div className="flex-1 px-6 overflow-auto">
              {chatData.map((message, index) => (
                <ChatMessages key={index} message={message} />
              ))}
            </div>
            <div className="h-16 px-6 flex items-center justify-center sticky bottom-0 bg-white z-10 shadow-md">
              <div className="flex w-full mb-4 gap-2 items-end">
                {" "}
                <Textarea />
                <Button>Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
const ChatMessages = ({ message }) => {
  return (
    <div
      className={`my-2 flex gap-x-2 ${
        message.id === userId ? "justify-end" : "justify-start"
      }  `}
    >
      {message.id !== userId && <CommonAvatar  />}
      <div
        className={`max-w-96 break-words bg-blue-200 p-2 text-sm rounded-md`}
      >
        {message.message}
      </div>
    </div>
  );
};
