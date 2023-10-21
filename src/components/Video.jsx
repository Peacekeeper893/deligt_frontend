import {React , useState , useRef} from 'react'

import meal from '../assets/meal.mp4'

const Video = () => {

  const vidRef = useRef();

  const [play, setPlay] = useState(false)
  return (
    <div className='min-h-fit bg-primary hidden md:block sticky top-0 '>


      <video src={meal} className="md:py-0 py-44" autoPlay={play} muted loop ref={vidRef}  onWheel={() => {

          vidRef.current.play();
        
      
      
      }}></video>
          
        {/* <ReactPlayer url={meal} playing={true} loop={true} muted={true} width = {16*87} height={9*87} controls={true} /> */}
        
      </div>
  )
}

export default Video