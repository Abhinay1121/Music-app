import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  artistId,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
    <div>
      {data?.map((song, i)=>(
        <SongBar
        key={`${song.key}-${artistId}`}
        i={i}
        song={song}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={() => handlePlayClick(song, i)}/>
      ))}
    </div>
  </div>
);

export default RelatedSongs;
