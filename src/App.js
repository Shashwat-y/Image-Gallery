import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [selectedimg,setSelectedImg]=useState(null);
  const[currentImgIndex, setCurrentImgIndex] = useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg}
      setCurrentImgIndex={setCurrentImgIndex}
      />

     {
       selectedimg &&
        <Modal selectedimg={selectedimg}
         setSelectedImg={setSelectedImg}
         currentImgIndex={currentImgIndex}
         setCurrentImgIndex={setCurrentImgIndex}
          />
     }
    </div>
  );
}

export default App;
