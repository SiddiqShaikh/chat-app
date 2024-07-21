import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AddUserDialog } from "@/components/layout/addUserDialog";
import AvatarBox, { CommonAvatar } from "@/components/layout/avatarBox";
import { UserFindDialog } from "@/components/layout/UserFindDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { CiSearch } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { FiUsers } from "react-icons/fi";

import { SocketContext } from "@/context/socketContext";
import useUserAddModal from "@/hooks/useUserAdd";
import Sidebar from "@/components/sidebar";
import useChatDrawer from "@/hooks/useChatDrawer";
const msgData = [
  {
    name: "Siddiq",
    avatar: "https://github.com/shadcn.png",
    email: "siddiq@gmail.com",
    chatData: [
      {
        message: "Hello brother",
        id: 1,
      },

      {
        message: "Hello brother",
        id: 2,
      },
    ],
  },
  {
    name: "John",
    avatar: "https://github.com/shadcn.png",
    email: "john@gmail.com",
    chatData: [
      {
        message: "Hello brother",
        id: 1,
      },

      {
        message: "Hello brother",
        id: 2,
      },
    ],
  },
  {
    name: "Doe",
    avatar: "https://github.com/shadcn.png",
    email: "doe@gmail.com",
    chatData: [],
  },
  {
    name: "Siddiq",
    avatar: "https://github.com/shadcn.png",
    email: "siddiq@gmail.com",
    chatData: [],
  },
  {
    name: "John",
    avatar: "https://github.com/shadcn.png",
    email: "john@gmail.com",
    chatData: [
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
    ],
  },
  {
    name: "Doe",
    avatar: "https://github.com/shadcn.png",
    email: "doe@gmail.com",
    chatData: [
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
    ],
  },
];

const userId = 1;

// const chatData = [
//   {
//     message: "Hello brother",
//     id: 1,
//   },

//   {
//     message: "Hello brother",
//     id: 2,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },

//   {
//     message: "Hello brother",
//     id: 2,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },

//   {
//     message: "Hello brother",
//     id: 2,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },

//   {
//     message: "Hello brother",
//     id: 2,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },

//   {
//     message: "Hello brother",
//     id: 2,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message:
//       "Hello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brotherHello brother",
//     id: 1,
//   },

//   {
//     message: "Hello brother",
//     id: 2,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
//   {
//     message: "Hello brother",
//     id: 1,
//   },
// ];
const Chat = () => {
  const navigate = useNavigate();
  const userAdd = useUserAddModal();
  const chatDrawer = useChatDrawer();
  const [chatData, setChatData] = useState(msgData[0]);
  const socket = useContext(SocketContext);

  const onSelectChat = (index) => {
    setChatData(msgData[index]);
  };
  const onLogout = () => {
    navigate("/auth");
  };
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
      <AddUserDialog />
      <UserFindDialog />
      <div className="block md:hidden">
        <Sidebar data={msgData} onSelectChat={onSelectChat}/>
      </div>
      {/* main container */}
      <div className="w-full min-h-[100vh]">
        {/* inner container */}
        <div className="w-full flex h-screen">
          {/* sidebar container */}
          <div className="p-2 flex-[0.2] hidden md:flex flex-col">
            {/* input container */}
            <div className="my-4 ">
              <Input placeholder="Search" className="" />
            </div>
            <div className="text-sm mb-2">
              {" "}
              <Button onClick={() => userAdd.onOpen()}>Add User</Button>
            </div>
            {/* list container */}
            <div className="flex-1 overflow-auto">
              {msgData.map((msg, index) => (
                <AvatarBox
                  key={index}
                  data={msg}
                  onClick={() => onSelectChat(index)}
                />
              ))}
            </div>
            <div className="mt-4">
              <Button className="w-full" onClick={() => onLogout()}>
                Logout
              </Button>
            </div>
          </div>
          <div className="flex flex-col h-screen flex-1">
            <div className="h-16 px-6 flex items-center border-b border-neutral-300 sticky top-0 bg-white z-10">
              <FiUsers
                className="md:hidden block mr-4"
                size={25}
                onClick={() => chatDrawer.onOpen()}
              />
              <div className="flex-1 text-lg font-semibold">
                {chatData.name}
              </div>
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
              {chatData.chatData.length > 0 ? (
                chatData.chatData.map((message, index) => (
                  <ChatMessages key={index} message={message} />
                ))
              ) : (
                <div>No messages yet</div>
              )}
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
      {message.id !== userId && <CommonAvatar />}
      <div
        className={`max-w-96 break-words bg-blue-200 p-2 text-sm rounded-md`}
      >
        {message.message}
      </div>
    </div>
  );
};
