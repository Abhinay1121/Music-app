import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
const PlayPause = ({ activeSong, isPlaying, handlePlay, handlePause, song }) =>
  isPlaying && activeSong.title === song.title ? (
    <FaPauseCircle size={35}
    onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35}
    onClick={handlePlay}  />
  );

export default PlayPause;
