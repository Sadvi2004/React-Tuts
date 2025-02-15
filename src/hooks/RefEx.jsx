import React, { useState, useRef } from 'react'
import Video from './sadvi internship.mp4'
function RefEx() {
    const [play, setPlay] = useState(true);
    let videoRef = useRef();
    let playORpause = () => {
        if (play == true) {
            videoRef.current.play();
            setPlay(false);
        } else {
            videoRef.current.pause();
            setPlay(true);
        }
    }
    return (
        <div>
            <video src={Video} ref={videoRef} onClick={playORpause}></video>
        </div>
    )
}

export default RefEx