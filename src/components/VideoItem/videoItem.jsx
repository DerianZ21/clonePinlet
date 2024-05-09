 
import './videoItem.css'

export const VideoItem = ({src}) => {

  return (
    <div className='video-item'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          <video className='video-dom' controls>
            <source src={`assets/videos/${src}.mp4`}></source>
          </video>
        </div>
      </div>
    </div>
  );
}