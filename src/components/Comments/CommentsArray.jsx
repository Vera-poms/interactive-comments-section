import React, {useState, useEffect} from 'react'
import { FaReply } from "react-icons/fa";
import { PiPencilSimpleFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";



 const CommentsArray = () => { 
//   const array = [
//   {
//     id: 1,
//     profilePic: '../src/assets/images/avatars/image-amyrobson.png',
//     username: 'amyrobson',
//     lastCommented: '1 month ago',
//     commentMade: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//     upVoteCount: {
//       increasedVoteCount: `${increasedCount}`,
//       voteCount: `${voteCount}`,
//       decreasedVoteCount: `${decreasedCount}`,
//     },
//     reply: `${<FaReply/>} Reply`,
//   },
//   {
//     id: 2,
//     profilePic: '../src/assets/images/avatars/image-maxblagun.png',
//     username: 'maxblagun',
//     lastCommented: '2 weeks ago',
//     commentMade: `Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!`,
//     upVoteCount: {
//       increasedVoteCount: '+1',
//       voteCount: 5,
//       decreasedVoteCount: '-1',
//     },
//     reply: `${<FaReply/>} Reply`,
//   },
//   {
//     id: 3,
//     profilePic: '../src/assets/images/avatars/image-maxblagun.png',
//     username: 'maxblagun',
//     lastCommented: '2 weeks ago',
//     commentMade: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//     upVoteCount: {
//       increasedVoteCount: '+1',
//       voteCount: 12,
//       decreasedVoteCount: '-1',
//     },
//     reply: `${<FaReply/>} Reply`,
//   },
//   {
//     id: 1,
//     profilePic: '../src/assets/images/avatars/image-amyrobson.png',
//     username: 'amyrobson',
//     lastCommented: '1 month ago',
//     commentMade: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
//     upVoteCount: {
//       increasedVoteCount: '+1',
//       voteCount: 12,
//       decreasedVoteCount: '-1',
//     },
//     reply: '',
//   },
//  ]

// let count

//  const increasedCount = () => {
//   console.log(`count: ${count++}` )
// }
//  const decreasedCount = () => {count ? count-- : count}

//  const voteCount = () => {
//   if(increasedCount){
//     return `${count++}`
//   }
//  }
}

{/* add reply */}



        // {/* maxblagun */}
        // <div className='mx-3 mt-8 p-4 shadow-sm rounded-lg bg-white md:flex md:flex-row'>
        //   <div className='md:order-2 md:flex-3'>
        //     <div className='flex justify-between items-center'>
        //       <div className='flex gap-3 mb-3'>
        //         <img src="../src/assets/images/avatars/image-maxblagun.png" alt="maxblagun"
        //         className='w-9' />

        //         <div className='flex flex-row items-center gap-3 text-dark-blue order-2'>
        //         <p className='font-bold'>maxblagun</p>
        //         <p className=''>2 weeks ago</p>
        //         </div>
        //       </div>

        //       <div className='flex gap-2 items-center pb-3 text-moderate-blue max-md:hidden'>
        //         <FaReply/>
        //         <p>Reply</p>
        //       </div>
        //     </div>

        //       <div className="order-1 text-dark-blue">
        //       <p>
        //       Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React?
        //       Thanks!
        //       </p>
        //     </div>
        //   </div>

        //   <div className='flex justify-between mt-3'>
        //     <div className='flex bg-light-gray rounded-lg gap-2 px-3 py-2 items-center md:order-1 md:flex-1 md:flex-col md:items-center md:justify-center md:w-8 md:h-22 md:mr-4'>
        //     <button className='text-soft-grayish-blue text-xl cursor-pointer'
        //     onClick={() => increasedCount()}>+</button>
        //     <p className='text-md px-3 text-moderate-blue'
        //     id='paragraph'>5</p>
        //     <button className='text-soft-grayish-blue text-xl cursor-pointer'
        //     onClick={() => decreasedCount()}>-</button>
        //     </div>

        //   <div className='flex gap-2 items-center text-moderate-blue md:hidden'>
        //     <FaReply/>
        //     <p>Reply</p>
        //   </div>
        //   </div>
        // </div>


        // {/* ramses and juliu */}
        // <div className='ml-4 mr-0 border-l-2 border-l-light-blue pl-2 md:ml-10 lg:ml-20'>
        //   {/* ramses */}
        //   <div className='mx-4 mt-8 p-4 shadow-sm rounded-lg bg-white md:flex md:flex-row'>
        //     <div className='md:order-2 md:flex-3'>
        //       <div className='flex justify-between items-center'>
        //         <div className='flex gap-3 mb-3'>
        //           <img src="../src/assets/images/avatars/image-ramsesmiron.png" alt=""
        //           className='w-9' />

        //           <div className='flex flex-row items-center gap-3 text-dark-blue'>
        //           <p className=' font-bold'>ramsesmiron</p>
        //           <p className=''>1 week ago</p>
        //           </div>
        //         </div>

        //         <div className='flex gap-2 items-center pb-3 text-moderate-blue max-md:hidden'>
        //           <FaReply/>
        //           <p>Reply</p>
        //         </div>
        //       </div>

        //       <div className="order-2">
        //         <p className='text-dark-blue'>
        //         <b className='text-moderate-blue'>@maxblagun</b> If you're still new. l'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.
        //         </p>
        //       </div>
        //     </div>

        //     <div className='flex justify-between mt-3'>
        //       <div className='flex bg-light-gray rounded-lg gap-2 px-3 py-2 items-center md:order-1 md:flex-1 md:flex-col md:items-center md:justify-center md:w-8 md:h-22 md:mr-4'>
        //         <button className='text-soft-grayish-blue text-xl cursor-pointer'>+</button>
        //         <p className='text-md px-3 text-moderate-blue'>4</p>
        //         <button className='text-soft-grayish-blue text-xl cursor-pointer'>-</button>
        //       </div>

        //       <div className='flex gap-2 items-center text-moderate-blue md:hidden'>
        //         <FaReply/>
        //         <p className=' text-[18px]'>Reply</p>
        //       </div>
        //     </div>
        //   </div>


        //   {/* juliu */}
        //   <div className='mx-4 mt-8 p-4 shadow-sm rounded-lg bg-white md:flex md:flex-row'>
        //     <div className='md:order-2 md:flex-3'>
        //       <div className='flex justify-between items-center'>
        //         <div className='flex gap-3 mb-3'>
        //           <img src="../src/assets/images/avatars/image-juliusomo.png" alt=""
        //           className='w-9' />

        //           <div className='flex flex-row items-center gap-3'>
        //           <p className='text-dark-blue font-bold'>juliusomo</p>
        //           <p className='bg-moderate-blue text-white px-2 rounded-sm text-sm'>you</p>
        //           <p className='text-dark-blue'>2 days ago</p>
        //           </div>
        //         </div>

        //         <div className='flex gap-2 items-center pb-3 text-moderate-blue max-md:hidden'>
        //           <button className='flex gap-1 items-center text-[18px] text-pale-red cursor-pointer'>
        //           <MdDelete/>
        //           Delete
        //           </button>
        //           <button className='flex gap-1 items-center text-moderate-blue text-[18px] cursor-pointer'>
        //           <PiPencilSimpleFill/>
        //           Edit
        //           </button>
        //         </div>
        //       </div>

        //       <div className="order-2">
        //       <p className='text-dark-blue'>
        //       <b className='text-moderate-blue'>@ramsesmiron</b> I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.
        //       </p>
        //       </div>
        //     </div>

        //     <div className='flex justify-between mt-3'>
        //       <div className='flex bg-light-gray rounded-lg gap-2 px-3 py-1 items-center md:order-1 md:flex-1 md:flex-col md:items-center md:justify-center md:w-8 md:h-22 md:mr-4'>
        //         <button className='text-soft-grayish-blue text-xl cursor-pointer'>+</button>
        //         <p className='text-md px-4 text-moderate-blue'>2</p>
        //         <button className='text-soft-grayish-blue text-3xl cursor-pointer'>-</button>
        //       </div>

        //       <div className='flex gap-3 items-center md:hidden'>
        //         <button onClick={() => showDeleteModal()}
        //          className='flex gap-1 items-center text-[18px] text-pale-red cursor-pointer '>
        //           <MdDelete/>
        //           Delete
        //           </button>
        //           <button className='flex gap-1 items-center text-moderate-blue text-[18px] cursor-pointer'>
        //           <PiPencilSimpleFill/>
        //           Edit
        //           </button>
                
        //       </div>
        //     </div>
        //   </div>
        // </div>


export default CommentsArray