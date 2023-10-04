import React,{useState,useEffect ,useRef} from "react";

function StopWatch(){
    const [currTime,setCurrTime] = useState(0);
    const [start,setStart] = useState(false);
    const interval = useRef(0);

    
    
    useEffect(()=>{
        if(start){
            interval.current = setInterval(()=>{
                setCurrTime(prevTime => prevTime + 1)
            },1000)
        }else {
            clearInterval(interval.current);
        }

        return ()=> clearInterval(interval.current); //prevent from memory leaks
        
    },[start])


    return <div className="watchContainer"> 
    <div className="timeContainer">
        <div className="time">{('0'+ Math.floor(currTime/3600)).slice(-2)}</div>
        <div className="time">{('0'+ (Math.floor(currTime/60))%60).slice(-2)}</div>
        <div className="time">{('0'+(currTime%60)).slice(-2)}</div>
    </div>
        <div className="buttonsContainer">
            <button className="button" onClick={()=> setStart(true)}>Start</button>
            <button className="button" onClick={()=> setStart(false)}>Stop</button>
            <button className="button" onClick={()=> setCurrTime(0)}>reset</button>
        </div>
    </div>

}

export default StopWatch;