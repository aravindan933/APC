import { motion } from "framer-motion";
import PropTypes from "prop-types";

const VideoBackground = ({ 
  videoSrc = "/videos/petrochemical-plant.mp4", 
  posterSrc = "https://images.unsplash.com/photo-1539185441755-769473a23570",
  children,
  overlay = true,
  overlayOpacity = 0.5
}) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterSrc}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback image if video doesn't load */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

VideoBackground.propTypes = {
  videoSrc: PropTypes.string,
  posterSrc: PropTypes.string,
  children: PropTypes.node,
  overlay: PropTypes.bool,
  overlayOpacity: PropTypes.number,
};

export default VideoBackground;