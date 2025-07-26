import React, {useState, useEffect} from 'react'
import { FaReply } from "react-icons/fa";
import { PiPencilSimpleFill } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import Reply from '../Reply/Reply.jsx'
import {motion, AnimatePresence} from 'framer-motion'
import { GiLetterBomb } from 'react-icons/gi';
import CommentThread from './CommentThread.jsx';
import UserActionButtons from '../UserActions/UserActionButtons.jsx';



const Comments = () => {
  const [comments, setComments] = useState([])

  const [currentUser, setCurrentUser] = useState(null)

  const [activeReplyComment, setActiveReplyComment] = useState(null)
  
  const [activeReplyReply, setActiveReplyReply] = useState(null)

  const [activeReplyTargetId, setActiveReplyTargetId] = useState(null)
  
  const[newCommentText, setNewCommentText] = useState('')
  
  const [newReplyText, setNewReplyText] = useState('')

  const [score, setScore] = useState({})

  const [replyState, setReplyState] = useState({})

  const [editingId, setEditingId] = useState(null)

  const [editedContent, setEditedContent] = useState('')

  const [voted, setVoted] = useState({})

  const [showModal, setShowModal] = useState(false)

  const [targetDeleteId, setTargetDeleteId] = useState(null)




  useEffect(() => {
    fetch('../../../data.json')
      .then(res => {
        if(!res.ok){
          throw new Error('Failed to fetch data')
        }
        return res.json()
      })
      .then(data => {
        const fetchedComments = data.comments || []

        setComments(fetchedComments)
        setCurrentUser(data.currentUser)

        const initialScores = {}

        fetchedComments.forEach(comment => {
          initialScores[comment.id] = comment.score

          if(Array.isArray(comment.replies)){
            comment.replies.forEach(reply => {
              initialScores[reply.id] = reply.score
            })
          }
        })
        setScore(initialScores) 
        
      })
  }, [])

  if (!currentUser) return <p>Loading...</p>;
    
  function handleCommentChange(e){
    setNewCommentText(e.target.value)
  }
  function handleReplyChange(e){
    setNewReplyText(e.target.value)
  }

  function addComment(){
    if(newCommentText.trim() === '' || !currentUser) return;

    const newComment = {
      'id': Date.now(),
      'user': currentUser,
      'createdAt': 'just now',
      'score': 0,
      'content': newCommentText,
      'replies': [],
    }

    
    setComments(c => [...c, newComment])
    setScore(s => ({
      ...s,
      [newComment.id]: 0,
    }))
    setNewCommentText('')
    
  }

  function addReply(text, commentId) {
    if (text.trim() === '' || !currentUser || !commentId) return
    const parentNode = findNodeById(comments, commentId)
    const replyingToUsername = parentNode?.user?.username || '';

    const newReply = {
      'id': Date.now(),
      'user': currentUser,
      'createdAt': 'just now',
      'score': 0,
      'content': text,
      'replyingTo': replyingToUsername,
      'replies': [],
    }

    let updatedTree = insertReply(comments, commentId, newReply)
  
    setComments(updatedTree)
    setNewReplyText('')
    setScore(s => ({
        ...s,
        [newReply.id]: 0,
      }))
    setActiveReplyTargetId(null)
  }

  function findNodeById(tree, id){
    for(let node of tree){
      if (node.id === id) return node;
      const foundInChildren = findNodeById(node.replies || [], id)
      if (foundInChildren) return foundInChildren;
    }
    return null
  }

  function insertReply(tree, targetId, reply){
    return tree.map(node => {
      if(node.id === targetId){
        return {
          ...node,
          replies: [reply, ...(node.replies || [])],
        }
      }

      if (node.replies && node.replies.length > 0){
        return{
          ...node,
          replies: insertReply(node.replies,targetId, reply),
        }
      }

      return node;
    })
  }

  function deleteReply(targetId) {
    const removeById = (items) =>
      items.filter(item => item.id !== targetId)
            .map(item => ({
              ...item,
              replies: removeById(item.replies || []),
            }))
    
    setComments(c => removeById(c))
  }

  function confirmDelete(){
    deleteReply(targetDeleteId)
    setShowModal(false)
    setTargetDeleteId(null)
  }

  function hideModal(){
    setShowModal(false)
    setTargetDeleteId(null)
  }
  
  function saveEditedContent(id, newContent){
    const updatedContent = (items) => 
      items.map(item => {
        if (item.id === id) return {...item, content: newContent}
        return{
          ...item,
          replies: updatedContent(item.replies || []),
        }
      })

      setComments(updatedContent)
  }

  function updateScore(id, direction){
    const preVote = voted[id]

    if (!preVote){
      const newScore = (score[id] || 0 ) + (direction === 'up' ? 1 : -1)
      setScore(s => ({
      ...s,
      [id]: Math.max(0, newScore),
    }))

    setVoted(v => ({
      ...v,
      [id]: direction
    }))
    } else if(preVote === direction) {
      return;
    }else{
      const change = direction === 'up' ? 1 : -1
      const newScore = (score[id] || 0) + change

      setScore(s => ({
      ...s,
      [id]: Math.max(0, newScore),
    }))

    setVoted(v => ({
      ...v,
      [id]: direction
    }))
    }
  }

  return (
    <div className=''>
      <DeleteModal
        showModal={showModal}
        hideModal={hideModal}
        confirmModal={confirmDelete}
        className='flex justify-center items-center'
        />
      <div className='pt-10 '>
        
        
        {
        comments.map((comment) => {
          const commentScore = score[comment.id]
          

         return (
          <div key={comment.id}
          className=' pb-5 md:px-30 lg:px-60'>
            <div className='mx-5 p-4 shadow-sm rounded-lg bg-white md:flex md:flex-row'>
              <div className='md:order-2 md:flex-3'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-3 mb-3'>
                      <div>
                        <img className='w-9'
                        src={comment.user.image.png} alt="" />
                      </div>

                      <div className='flex flex-row items-center gap-3 text-dark-blue order-2'>
                        <p className='font-bold'>{comment.user.username}</p>
                        {comment.user.username === 'juliusomo' ? (
                            <p className='bg-moderate-blue text-white px-2 rounded-sm text-sm'>you</p>
                          ):(
                            ''
                          )}
                        <p className=''>{comment.createdAt}</p>
                      </div>
                    </div>

                  <UserActionButtons
                  isOwner={comment.user.username === currentUser.username}
                  onDelete={() => {
                    setTargetDeleteId(comment.id)
                    setShowModal(true)
                  }}
                  onEdit={() => {
                    setEditedContent(comment.content)
                    setEditingId(comment.id)
                  }}
                  onReply={() => setActiveReplyTargetId(comment.id)}
                  isMobile={true}
                  />

                  </div>

                  {editingId === comment.id ? (
                    <>
                      <textarea className="border-2 border-light-gray w-full h-35 rounded-lg px-5 py-3 md:h-20"
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}/>

                      <button
                      className='text-moderate-blue text-[18px] cursor-pointer hover:text-moderate-blue/50 pr-3'
                      onClick={() => {
                        saveEditedContent(comment.id, editedContent)
                        setEditingId(null)
                      }}>Save</button>

                      <button 
                      className='text-pale-red cursor-pointer hover:text-pale-red/50 text-[18px]'
                      onClick={() => setEditingId(null)}>Cancel</button>
                    </>
                  ):(
                  <p className="order-1 text-dark-blue">
                    {comment.content}
                  </p>
                  )}
                 
              </div>

              <div className='flex justify-between mt-3 md:'>
                <div className='flex bg-light-gray rounded-lg gap-2 px-3 py-2 items-center md:order-1 md:flex-1 md:flex-col md:items-center md:justify-center md:w-8 md:h-22 md:mr-4'>
                  <button className='text-soft-grayish-blue text-xl cursor-pointer hover:text-moderate-blue'
                  onClick={() => updateScore(comment.id, 'up')}
                  
                  >+</button>
                  <p className='text-md px-3 text-moderate-blue'
                  >{commentScore}</p>
                  <button className='text-soft-grayish-blue text-xl cursor-pointer hover:text-moderate-blue'
                  onClick={() => updateScore(comment.id, 'down')}
                  >-</button>
                </div>

                <UserActionButtons
                  isOwner={comment.user.username === currentUser.username}
                  onDelete={() => {
                    setTargetDeleteId(comment.id)
                    setShowModal(true)
                  }}
                  onEdit={() => {
                    setEditedContent(comment.content)
                    setEditingId(comment.id)
                  }}
                  onReply={() => setActiveReplyTargetId(comment.id)}
                  isMobile={false}
                  />

              </div>
            </div>

            <AnimatePresence>
            {activeReplyTargetId === comment.id && (
            <motion.div
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -50}}
            transition={{duration: 0.3}}
            className='my-3 md:mx-0 lg:mx-0'>
              <Reply addReply={addReply} 
              newReplyText={newReplyText}  
              onChange={handleReplyChange}
              commentId={comment.id}
              setNewReplyText={setNewReplyText}
              setActiveReplyComment={setActiveReplyComment}
              setActiveReplyReply={setActiveReplyReply}
              setReplyState={setReplyState}
              setActiveReplyTargetId={setActiveReplyTargetId} />
            </motion.div>
            )}
            </AnimatePresence>


            <div className='ml-4 mr-0 border-l-2 border-l-light-blue pl-2 md:ml-10 lg:ml-20'>
              {comment.replies.map(reply => (
                <CommentThread
                  key={reply.id}
                  node={reply}
                  currentUser={currentUser}
                  score={score}
                  editingId={editingId}
                  editedContent={editedContent}
                  setEditedContent={setEditedContent}
                  setEditingId={setEditingId}
                  updateScore={updateScore} 
                  voted={voted}
                  deleteReply={deleteReply}
                  saveEditedContent={saveEditedContent}
                  newReplyText={newReplyText}
                  setNewReplyText={setNewReplyText}
                  setActiveReplyComment={setActiveReplyComment}
                  setActiveReplyReply={setActiveReplyReply}
                  setReplyState={setReplyState}
                  addReply={addReply}
                  activeReplyTargetId={activeReplyTargetId}
                  setActiveReplyTargetId={setActiveReplyTargetId}
                  setShowModal={setShowModal}
                  setTargetDeleteId={setTargetDeleteId}
                />
          ))}
            </div>
          </div>
        )})}

        
        <div className='mx-4 my-2 rounded-lg shadow-md p-5 bg-white md:flex md:flex-row md:pb-0 md:mx-35 lg:mx-65'>
         <div className='md:order-2 md:flex-2 md:mr-3 md:pb-0'>
           <textarea placeholder='Add a comment...' 
          value={newCommentText} onChange={handleCommentChange} className='border-2 border-light-gray w-full h-35 rounded-lg px-5 py-3 md:h-20 '></textarea>
         </div>

         <div className='flex justify-between items-center pt-3 md:pt-0'>
         <div className='md:order-2 md:flex md:pb-28 md:pt-0 md:pr-3'>
           <img src={currentUser.image.png} alt=""
           className='h-9' />
         </div>
         <button className='bg-moderate-blue text-white py-3 px-6 rounded-lg uppercase cursor-pointer md:hidden hover:bg-moderate-blue/50'
         onClick={addComment}>Send</button>
         </div>

         <div className='md:order-3'>
           <button className='bg-moderate-blue text-white py-2 px-6 rounded-lg uppercase cursor-pointer max-md:hidden hover:bg-moderate-blue/50'
           onClick={addComment}>Send</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Comments