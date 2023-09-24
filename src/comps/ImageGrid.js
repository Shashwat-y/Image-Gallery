import React from 'react'
import useFireStore from '../Hooks/useFireStore'
import {motion} from 'framer-motion';


const ImageGrid=({setSelectedImg,setCurrentImgIndex})=>{
  const {docs} =useFireStore('images');
  return(
    <div className="img-grid">
        { docs && docs.map(doc=>(
            <motion.div className="imag-wrap" 
            key={doc.id}
            layout
            whileHover={{opacity:1}}
            onClick={()=>{
              setSelectedImg(doc.url)
              setCurrentImgIndex(docs.indexOf(doc))
            }
          }
            >

            <motion.img src={doc.url} 
            alt="uploaded file"
            initial={{opacity:0}}
            animate={{opacity:1}}
            />
            </motion.div> 
        ))}
        </div>
  )
}

export default ImageGrid;
