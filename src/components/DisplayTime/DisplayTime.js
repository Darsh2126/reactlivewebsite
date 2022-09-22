import './DisplayTime.scss';
import {useState, useEffect} from 'react';


const DisplayTime = () => {
    const [time, setTime] = useState(new Date());
 
    useEffect(() => setTime(new Date()),[setTime]);

  return (
    <>
        <div className="time">
        <div className="display" >TIME : {time.toLocaleTimeString()}</div>
        <button className="time_btn" onClick={() => setTime(new Date())}>Get Time</button>
        </div>
    </>
  )
}

export default DisplayTime