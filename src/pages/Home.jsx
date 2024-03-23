import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import HomeInfo from "../components/HomeInfo";
import "../index.css";

export default function Home() {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prevStage) => prevStage + 1);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='max-h-full max-w-full'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        <HomeInfo currentStage={currentStage} />
      </div>
      <Spline scene='https://prod.spline.design/74jmRrZRoheQ30TB/scene.splinecode' />
    </div>
  );
}
