
import { useEffect } from "react";
import { useState } from "react";
const useOnlineStatus=()=>{
 
  const [onlineStatus,setonlineStatus]=useState(true);

   // just only one time we want to add our eventlistner and that is why we are using useEffect
   useEffect(()=>{
    window.addEventListener("offline",()=>{
      setonlineStatus(false);
    });

    window.addEventListener("online",()=>{
        setonlineStatus(true);
   });
     
   },[])
 
  return onlineStatus;
}

export default useOnlineStatus;