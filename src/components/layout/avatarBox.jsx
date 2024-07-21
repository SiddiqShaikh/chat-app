import React from 'react'
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const AvatarBox = ({data,onClick}) => {
  return (
    <>
    <div className=" px-2 py-4 flex gap-2 items-center cursor-pointer hover:bg-slate-200" onClick={onClick}>
      <CommonAvatar src={data.avatar} />
      <div>
      <div className="text-sm text-slate-900">{data.name}</div>
      <div className="text-sm text-slate-600">{data.email}</div>
      </div>
    </div>
    <Separator/>
    </>
  )
}

export default AvatarBox


export const CommonAvatar = ({ src }) => {
    return (
      <Avatar>
        <AvatarImage src={`${src ?? "https://github.com/shadcn.png"}`} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    );
  };