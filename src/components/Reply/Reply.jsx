import React, {useState} from 'react'



const Reply = ({addReply, setActiveReplyTargetId, setActiveReplyComment, commentId, newReplyText, setNewReplyText, setActiveReplyReply}) => {

  const handleReply = () => {
     addReply?.(newReplyText, commentId)
      setNewReplyText('')
      setActiveReplyComment?.(null)
      setActiveReplyReply?.(null)
      setActiveReplyTargetId?.(null)
  }

  return (
    <div>
     <div className='mx-4 my-2 rounded-lg shadow-md p-5 bg-white md:flex md:flex-row md:pb-0 md:my-3'>
         <div className='md:order-2 md:flex-2 md:mr-3 md:pb-0'>
           <textarea placeholder='Add a reply...' className='border-2 border-light-gray w-full h-35 rounded-lg px-5 py-3 md:h-20 focus:outline focus:outline-grayish-blue'
           value={newReplyText}
           onChange={(e) => setNewReplyText(e.target.value)}></textarea>
         </div>

         <div className='flex justify-between items-center pt-3 md:pt-0'>
         <div className='md:order-2 md:flex md:pb-28 md:pt-0 md:pr-3'>
           <img src="../src/assets/images/avatars/image-juliusomo.png" alt=""
           className='h-9' />
         </div>
         <button className='bg-moderate-blue text-white py-3 px-6 rounded-lg uppercase cursor-pointer md:hidden hover:bg-moderate-blue/50'
         onClick={() => handleReply()}>Reply</button>
         </div>

         <div className='md:order-3'>
           <button className='bg-moderate-blue text-white py-2 px-6 rounded-lg uppercase cursor-pointer max-md:hidden hover:bg-moderate-blue/50'
           onClick={() => handleReply()}>Reply</button>
         </div>
      </div>
    </div>
  )
}

export default Reply