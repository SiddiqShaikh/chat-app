import { create } from "zustand";


const useChatDrawer = create((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
}))

export default useChatDrawer;