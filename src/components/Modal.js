import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const whenClicked = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className='backdrop'
      onClick={whenClicked}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <img
        className='shadow-lg'
        src={selectedImg}
        alt='modal'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
