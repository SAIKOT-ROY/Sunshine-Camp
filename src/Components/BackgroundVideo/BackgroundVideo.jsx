import vid from "../../assets/video/5274563-uhd_4096_2160_25fps.mp4";

const BackgroundVideo = () => {
  return (
    <div className="relative h-[60vh] mb-20 overflow-hidden">
      <video
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto min-w-full min-h-full max-w-none"
        loop
        autoPlay
        muted
        poster="Are you Ready"
        style={{
          backfaceVisibility: "hidden",
          willChange: "transform",
        }}
      >
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;

