import {useState,useEffect} from 'react'
import {projectFireStore} from '../firebase.js'


const useFireStore = (collection) => {
    const [docs,setDocs]=useState();
     useEffect(()=>{
       const unsub = projectFireStore.collection(collection).onSnapshot((snap)=>{
            let documents=[];
            snap.forEach(doc=>{
            documents.push({...doc.data(), id:doc.id})
            });
            setDocs(documents);
         });
         return ()=>unsub();
     },[collection])

    return{ docs }
}
export default useFireStore;
