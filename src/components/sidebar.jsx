import { Drawer, DrawerContent } from "@/components/ui/drawer";
import useChatDrawer from "@/hooks/useChatDrawer";
import AvatarBox from "./layout/avatarBox";
import { useCallback, useState } from "react";

export default function Sidebar({ data,onSelectChat }) {
  const chatDrawer = useChatDrawer();
const [open,setIsOpen] = useState(false)
  const onHandleChange = useCallback((index) => {
    // if (!chatDrawer.isOpen) return;
    onSelectChat(index)
    chatDrawer.onClose();
    setIsOpen(false)

  }, [chatDrawer.isOpen]);

  return (
    <Drawer open={chatDrawer.isOpen || open} onOpenChange={setIsOpen}>
      <DrawerContent>
        <div className="flex-1 overflow-auto">
          {data.map((msg, index) => (
            <AvatarBox
              key={index}
              data={msg}
              //   onClick={() => onSelectChat(index)}
              onClick={()=>onHandleChange(index)}
            />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
