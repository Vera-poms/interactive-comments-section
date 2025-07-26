import React from 'react'
import Reply from '../Reply/Reply'
import {motion, AnimatePresence} from 'framer-motion'
import UserActionButtons from '../UserActions/UserActionButtons.jsx'


const CommentThread = ({node, currentUser, score, editingId, editedContent, setEditedContent, setEditingId, updateScore, deleteReply, saveEditedContent, newReplyText, setNewReplyText, setActiveReplyComment, setActiveReplyReply, setReplyState, addReply, activeReplyTargetId, setActiveReplyTargetId, handleReplyChange, voted, setTargetDeleteId, setShowModal
}) => {
  return (
    <div className=''>
      <div
        className='mx-4 mt-8 p-4 shadow-sm rounded-lg bg-white md:flex md:flex-row'>
        <div className='md:order-2 md:flex-3'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-3 mb-3'>
              <img src={node.user.image.png} alt=""
              className='w-9' />

              <div className='flex flex-row items-center gap-3 text-dark-blue'>
              <p className=' font-bold'>
                {node.user.username}
              </p>
              {node.user.username === 'juliusomo' ? (
                <p className='bg-moderate-blue text-white px-2 rounded-sm text-sm'>you</p>
              ):(
                ''
              )}
              <p className=''>
                {node.createdAt}
              </p>
              </div>
              
            </div>

            <UserActionButtons
              isOwner={node.user.username === currentUser.username}
              onDelete={() => {
                setTargetDeleteId(node.id)
                setShowModal(true)
              }}
              onEdit={() => {
                setEditedContent(node.content)
                setEditingId(node.id)
              }}
              onReply={() => setActiveReplyTargetId(node.id)}
              isMobile={true}
              />

          </div>
          
          {editingId === node.id ? (
            <>
              <textarea className="border-2 border-light-gray w-full h-35 rounded-lg px-5 py-3 md:h-20"
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}/>

              <button
              className=' text-moderate-blue text-[18px] cursor-pointer hover:text-moderate-blue/50 pr-3'
              onClick={() => {
                saveEditedContent(node.id, editedContent)
                setEditingId(null)
              }}>Save</button>

              <button 
              className='text-pale-red cursor-pointer   hover:text-pale-red/50 '
              onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ):(
          <div className="order-2">
          <p className='text-dark-blue'>
          <b className='text-moderate-blue'>@{node.replyingTo}</b> {node.content}
          </p>
          </div>
          )}
        </div>
        <div className='flex justify-between mt-3'>
            <div className='flex bg-light-gray rounded-lg gap-2 px-3 py-2 items-center md:order-1 md:flex-1 md:flex-col md:items-center md:justify-center md:w-8 md:h-22 md:mr-4'>
              <button className='text-soft-grayish-blue text-xl cursor-pointer hover:text-moderate-blue'
              onClick={() => updateScore(node.id, 'up')}
              >+</button>
              <p className='text-md px-3 text-moderate-blue'
              >{score[node.id]}</p>
              <button className='text-soft-grayish-blue text-xl cursor-pointer hover:text-moderate-blue'
              onClick={() => updateScore(node.id, 'down')}
              >-</button>
            </div>

            <UserActionButtons
              isOwner={node.user.username === currentUser.username}
              onDelete={() => {
                setTargetDeleteId(node.id)
                setShowModal(true)
              }}
              onEdit={() => {
                setEditedContent(node.content)
                setEditingId(node.id)
              }}
              onReply={() => setActiveReplyTargetId(node.id)}
              isMobile={false}
              />
          </div>
          </div>
          <AnimatePresence>
          {activeReplyTargetId === node.id && (
          <motion.div
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -50}}
          >
            <Reply addReply={addReply} 
            newReplyText={newReplyText}  
            onChange={handleReplyChange}
            commentId={node.id}
            setNewReplyText={setNewReplyText}
            setActiveReplyTargetId={setActiveReplyTargetId}
            setActiveReplyComment={setActiveReplyComment}
            setActiveReplyReply={setActiveReplyReply}
            setReplyState={setReplyState}
            />
          </motion.div>
          )}
          </AnimatePresence>

          {node.replies && node.replies.length > 0 && (
            <div className='ml-4'>
              {node.replies.map((child) => (
                <CommentThread
                  key={child.id}
                  node={child}
                  {...{
                    currentUser,
                    score,
                    editingId,
                    editedContent,
                    setEditedContent,
                    setEditingId,
                    updateScore,
                    deleteReply,
                    saveEditedContent,
                    newReplyText,
                    setNewReplyText,
                    setActiveReplyComment,
                    setActiveReplyReply,
                    setReplyState,
                    addReply,
                    activeReplyTargetId,
                    setActiveReplyTargetId,
                    setTargetDeleteId, 
                    setShowModal
                  }}
                />
              ))}
            </div>
          )}

    </div>
  )
}

export default CommentThread