import React, {useState, useEffect} from 'react'
import { FaReply } from "react-icons/fa";
import { PiPencilSimpleFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import DeleteModal from '../DeleteModal/DeleteModal.jsx';


const Comments = () => {

  const [comment, setComment] = useState([])
  const [newComment, setNewComment] = useState([])

  function handleCommentChange(e){
    setNewComment(e.target.value)
  }

  function addReply(){
    // if(newComment.trim() !== []){
    //   setComment(c => [...c, newComment])
    // }
    setComment(c => [...c, newComment])
    setNewComment([])
  }

  function deleteComment(index){
    setComment(comment.filter((_, i) => i!== index))
  }


  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false)

  const showDeleteModal = () => {
    setDisplayConfirmationModal(true)
  }
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false)
  }
  const submitDelete = () => {
    setDisplayConfirmationModal(false)
  }




  return (
    <div className='bg-background'>
      <div className='pt-10 pb-5 md:pt-20 md:px-30 lg:px-60'>
        {/* amyrobson */}
        <div className='mx-3 p-4 shadow-sm rounded-lg bg-white md:flex md:flex-row'>
          <div className='md:order-2 md:flex-3'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3 mb-3'>
                <img src="../src/assets/images/avatars/image-amyrobson.png" alt=""
                className='w-9' />

                <div className='flex flex-row items-center gap-3 text-dark-blue order-2'>
                  <p className='font-bold'>amyrobson</p>
                  <p className=''>1 month ago</p>
                </div>
              </div>

              <div className='flex gap-2 items-center pb-3 text-moderate-blue cursor-pointer max-md:hidden'
              onClick={addReply}>
                <FaReply/>
                <p>Reply</p>
              </div>
            </div>

            <div className="order-1 text-dark-blue">
              <p>
              Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
              </p>
            </div>
            
          </div>

          <div className='flex justify-between mt-3 md:'>
            <div className='flex bg-light-gray rounded-lg gap-2 px-3 py-2 items-center md:order-1 md:flex-1 md:flex-col md:items-center md:justify-center md:w-8 md:h-22 md:mr-4'>
              <button className='text-soft-grayish-blue text-xl cursor-pointer'>+</button>
              <p className='text-md px-3 text-moderate-blue'>12</p>
              <button className='text-soft-grayish-blue text-xl cursor-pointer'>-</button>
            </div>

            <div className='flex gap-2 items-center text-moderate-blue md:hidden cursor-pointer'
            onClick={addReply}>
              <FaReply/>
              <p>Reply</p>
            </div>
          </div>
        </div>


        {/* maxblagun */}
        <div className='mx-3 mt-8 p-4 shadow-sm rounded-lg bg-white md:flex md:flex-row'>
          <div className='md:order-2 md:flex-3'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-3 mb-3'>
                <img src="../src/assets/images/avatars/image-maxblagun.png" alt="maxblagun"
                className='w-9' />

                <div className='flex flex-row items-center gap-3 text-dark-blue order-2'>
                <p className='font-bold'>maxblagun</p>
                <p className=''>2 weeks ago</p>
                </div>
              </div>

              <div className='flex gap-2 items-center pb-3 text-moderate-blue max-md:hidden'>
                <FaReply/>
                <p>Reply</p>
              </div>
            </div>

              <div className="order-1 text-dark-blue">
              <p>
              Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React?
              Thanks!
              </p>
            </div>
          </div>

          <div className='flex justify-between mt-3'>
            <div className='flex bg-light-gray rounded-lg gap-2 px-3 py-2 items-center md:order-1 md:flex-1 md:flex-col md:items-center md:justify-center md:w-8 md:h-22 md:mr-4'>
            <button className='text-soft-grayish-blue text-xl cursor-pointer'>+</button>
            <p className='text-md px-3 text-moderate-blue'>5</p>
            <button className='text-soft-grayish-blue text-xl cursor-pointer'>-</button>
            </div>

          <div className='flex gap-2 items-center text-moderate-blue md:hidden'>
            <FaReply/>
            <p>Reply</p>
          </div>
          </div>
        </div>


        {/* ramses and juliu */}
        <div className='ml-4 mr-0 border-l-2 border-l-light-blue pl-2 md:ml-10 lg:ml-20'>
          {/* ramses */}
          <div className='mx-4 mt-8 p-4 shadow-sm rounded-lg bg-white md:flex md:flex-row'>
            <div className='md:order-2 md:flex-3'>
              <div className='flex justify-between items-center'>
                <div className='flex gap-3 mb-3'>
                  <img src="../src/assets/images/avatars/image-ramsesmiron.png" alt=""
                  className='w-9' />

                  <div className='flex flex-row items-center gap-3 text-dark-blue'>
                  <p className=' font-bold'>ramsesmiron</p>
                  <p className=''>1 week ago</p>
                  </div>
                </div>

                <div className='flex gap-2 items-center pb-3 text-moderate-blue max-md:hidden'>
                  <FaReply/>
                  <p>Reply</p>
                </div>
              </div>

              <div className="order-2">
                <p className='text-dark-blue'>
                <b className='text-moderate-blue'>@maxblagun</b> If you're still new. l'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.
                </p>
              </div>
            </div>

            <div className='flex justify-between mt-3'>
              <div className='flex bg-light-gray rounded-lg gap-2 px-3 py-2 items-center md:order-1 md:flex-1 md:flex-col md:items-center md:justify-center md:w-8 md:h-22 md:mr-4'>
                <button className='text-soft-grayish-blue text-xl cursor-pointer'>+</button>
                <p className='text-md px-3 text-moderate-blue'>4</p>
                <button className='text-soft-grayish-blue text-xl cursor-pointer'>-</button>
              </div>

              <div className='flex gap-2 items-center text-moderate-blue md:hidden'>
                <FaReply/>
                <p className=' text-[18px]'>Reply</p>
              </div>
            </div>
          </div>


          {/* juliu */}
          
        </div>


        {/* add comment section */}
        <div className='mx-4 mt-6 rounded-lg shadow-md p-5 bg-white md:flex md:flex-row md:pb-0'>
          <div className='md:order-2 md:flex-2 md:mr-3 md:pb-0'>
            <textarea placeholder='Add a comment...' className='border-2 border-light-gray w-full h-35 rounded-lg px-5 py-3 md:h-20 '></textarea>
          </div>

          <div className='flex justify-between items-center pt-3 md:pt-0'>
          <div className='md:order-2 md:flex md:pb-28 md:pt-0 md:pr-3'>
            <img src="../src/assets/images/avatars/image-juliusomo.png" alt=""
            className='h-9' />
          </div>
          <button className='bg-moderate-blue text-white py-3 px-6 rounded-lg uppercase cursor-pointer md:hidden'>Send</button>
          </div>

          <div className='md:order-3'>
            <button className='bg-moderate-blue text-white py-2 px-6 rounded-lg uppercase cursor-pointer max-md:hidden'>Send</button>
          </div>
        </div>
      </div>
      <DeleteModal showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal}/>
    </div>
  )
}

export default Comments