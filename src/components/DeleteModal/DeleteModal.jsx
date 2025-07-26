import React from 'react'
// import {Modal, Button} from 'react-bootstrap'
import {AnimatePresence, motion} from 'framer-motion'


const DeleteModal = ({showModal, hideModal, confirmModal}) => {

  



  return (
    <div className=''>
      <AnimatePresence
       
       
      >
    {
      showModal && (
        <motion.div
        className='fixed inset-0 z-60 bg-black/40 h-screen w-screen flex flex-col justify-center items-center'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
        <div className='bg-white mx-5 p-5 rounded-lg w-[400px]'>
          <h1 className='text-bold text-xl pb-3 text-dark-blue'>Delete comment</h1>

          <p className='text-grayish-blue text-xl pr-10 pb-4'>
            Are you sure you want to delete this comment? This will remove the comment and can't be undone.
            </p>

            <div className='flex text-white '>
              <button onClick={hideModal}
              className='bg-grayish-blue  py-3 px-6 rounded-lg uppercase text-lg mr-5 cursor-pointer hover:bg-grayish-blue/70 transition duration-300'
              >No, Cancel</button>
              <button onClick={confirmModal}
              className='bg-pale-red py-3 px-6 rounded-lg uppercase text-lg cursor-pointer hover:bg-pale-red/70 transition duration-300'
              >
                Yes, Delete
              </button>
            </div>
        </div>
        </motion.div>
      )
    }
  </AnimatePresence>
      
    </div>


    // <Modal show={showModal} 
    // onHide={hideModal}
    // size='lg
    // centered'
    // >
    //   <Modal.Title>
    //   <h1 className='text-bold'>Delete comment</h1>
    //   </Modal.Title>
    //   <Modal.Body>
    //     <p>
    //     Are you sure you want to delete this comment? This will remove the comment and can't be undone.
    //     </p>
    //   </Modal.Body>
    //   <Modal.Footer>
    //     <Button variant='primary' onClick={hideModal}>
    //     No, Cancel
    //     </Button>
    //     <Button variant='danger' onClick={() => confirmModal()}>
    //     Yes, Delete
    //     </Button>
    //   </Modal.Footer>
    
    // </Modal>
  )
}

export default DeleteModal