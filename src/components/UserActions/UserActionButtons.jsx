import React from 'react'
import { PiPencilSimpleFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import { FaReply } from "react-icons/fa";

const UserActionButtons = ({onDelete, onEdit, isOwner, onReply, isMobile=true}) => {

const mobileClass = 'gap-2 pb-3 '
const desktopClass = 'gap-3'


  if (isOwner) {
   return(
    <div className={`flex items-center text-moderate-blue  ${isMobile ? `max-md:hidden ${mobileClass}`:`md:hidden ${desktopClass}`}`}>
         <button className={`flex  items-center text-[18px] text-pale-red cursor-pointer   hover:text-pale-red/50 ${isMobile ? 'gap-1' : 'gap-3'}`}
         onClick={onDelete}>
         <MdDelete/>
         Delete
         </button>
         <button className='flex gap-1 items-center text-moderate-blue text-[18px] cursor-pointer hover:text-moderate-blue/50'
         onClick={onEdit}>
         <PiPencilSimpleFill/>
         Edit
         </button>
       </div>
   )
  };

  return (
    <div className={`flex gap-2 items-center  text-moderate-blue cursor-pointer hover:text-moderate-blue/50 ${isMobile ? 'max-md:hidden pb-3' : 'md:hidden'}`}
     onClick={onReply}>
       <FaReply/>
       <p>Reply</p>
     </div>
  )
}

export default UserActionButtons