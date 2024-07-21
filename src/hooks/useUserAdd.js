import { create } from "zustand";


const useUserAddModal = create((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false}),
}))

export default useUserAddModal;