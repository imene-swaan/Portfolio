import React, {useRef,useEffect,Component } from "react";

import lottie from 'lottie-web';

export default function FullStackImg(){
     const container = useRef(null)
     useEffect(() => {
       lottie.loadAnimation({
         container: container.current,
         renderer: 'svg',
         loop: true,
         autoplay: true,
         animationData: require('./web.json')
       })
     }, [])
     return (
       <div className="App">
         <div className="container" ref={container}></div>
       </div>
     );
 }
