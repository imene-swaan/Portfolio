import React, {useRef,useEffect,Component } from "react";

import lottie from 'lottie-web';


//for animated svgs use json file
export default function DataScienceImg(){
  const container = useRef(null)
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./data2.json')
    })
  }, [])
  return (
    <div className="App">
      <div className="container" ref={container}></div>
    </div>
  );
}
