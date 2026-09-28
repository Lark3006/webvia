import './VideoFrame.css'

function shouldReduceMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function VideoFrame({ mp4, webm, poster, loop = false, fill = false }) {
  const showVideo = Boolean(mp4) && !shouldReduceMotion()

  return (
    <div className={`video-frame${fill ? ' video-frame--fill' : ''}`}>
      {showVideo ? (
        <video
          className="video-frame__media"
          autoPlay
          muted
          loop={loop}
          playsInline
          preload="metadata"
          poster={poster}
        >
          {webm && <source src={webm} type="video/webm" />}
          <source src={mp4} type="video/mp4" />
        </video>
      ) : (
        <img className="video-frame__media" src={poster} alt="" />
      )}
    </div>
  )
}

export default VideoFrame