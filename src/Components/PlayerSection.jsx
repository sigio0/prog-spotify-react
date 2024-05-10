import React from "react";
import next from '../Assets/next.png'
import play from '../Assets/play.png'
import prev from '../Assets/prev.png'
import repeat from '../Assets/repeat.png'
import shuffle from '../Assets/shuffle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';


const PlayerSection = () =>{
  const selectedSong = useSelector(state => state.music.selectedSong);
  const dispatch = useDispatch();
  const savedSongs = useSelector(state => state.music.savedSong);
    return (
<>
<div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div
            className="row h-100 flex-column justify-content-center align-items-center"
          >
            <div className="col-6 col-md-4 playerControls">
            <h6 className="text-white text-center">{selectedSong}</h6>
              <div className="d-flex">
                
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
                
                <FontAwesomeIcon className={savedSongs.some(song => song === selectedSong) ? "saved" : "regular"}  icon={faHeart} onClick={()=>  dispatch({ type: 'SAVED_SONG', payload: selectedSong })}/>
                
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
    )
}

export default PlayerSection