import React from 'react'

const Video = () => {
  return (
    <div>
      <video
        src="https://res.cloudinary.com/dnszjyuxi/video/upload/v1773676530/Coffe1_tlxjvt.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
        linear-gradient(358.82deg, #040404 0.95%, rgba(106, 89, 61, 0) 83.76%),
        linear-gradient(71.98deg, #262626 -1.41%, rgba(106, 89, 61, 0) 30.34%)
      `,
        }}
      />
    </div>
  )
}

export default Video
