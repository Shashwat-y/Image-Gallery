import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [selectedimg,setSelectedImg]=useState(null);
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />

     {
       selectedimg &&
        <Modal selectedimg={selectedimg}
         setSelectedImg={setSelectedImg} />
     }
    </div>
  );
}

export default App;
