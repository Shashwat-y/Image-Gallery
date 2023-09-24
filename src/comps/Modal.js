import React from 'react';
import { motion } from 'framer-motion';
import useFireStore from '../Hooks/useFireStore';

const Modal = ({ selectedimg, setSelectedImg, currentImgIndex, setCurrentImgIndex }) => {
  const { docs } = useFireStore('images');

  const isDocsAvailable = docs && docs.length > 0;

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) setSelectedImg(null);
  };

  const handlePrevious = () => {
    if (isDocsAvailable && currentImgIndex !== null) {
      const previousIndex = (currentImgIndex - 1 + docs.length) % docs.length;
      setSelectedImg(docs[previousIndex].url);
      setCurrentImgIndex(previousIndex);
    }
  };

  const handleNext = () => {
    if (isDocsAvailable && currentImgIndex !== null) {
      const nextIndex = (currentImgIndex + 1) % docs.length;
      setSelectedImg(docs[nextIndex].url);
      setCurrentImgIndex(nextIndex);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedimg} alt="anlarged pic" initial={{ y: '-100vh' }} animate={{ y: 0 }} />
      {isDocsAvailable && (
        <div>
        <div id ="previous" onClick={handlePrevious}>
            <p>{"<"}</p>
        </div>
        <div id='next' onClick={handleNext}>
        <p>{">"}</p>
        </div>
      </div>
      )}
    </motion.div>
  );
};

export default Modal;
