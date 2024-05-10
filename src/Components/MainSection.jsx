import { reactHooksModule } from "@reduxjs/toolkit/query/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

const MainSection = () => {
  const dispatch = useDispatch();
  const { rock, pop, hiphop } = useSelector(state => state.music); 
  const fillMusicSection = async (artistName, category) => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artistName
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: 'FETCH_MUSIC_DATA', payload: { category, data } });
      } else {
        throw new Error('Error in fetching songs');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    fillMusicSection('rock', 'rock');
    fillMusicSection('pop', 'pop');
    fillMusicSection('hiphop', 'hiphop');
  }, []);

  
  const handleSongClick = (song) => {
    dispatch({ type: 'SELECT_SONG', payload: song });
  };

  return (
    <>
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
        <h2 className="text-white">Rock Classics</h2>
          <div  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rock">
           
            {rock.slice(0,4).map((singleSong, index) => (
              <div className="col text-center" key={index} onClick={() => handleSongClick(singleSong.title)}>
                <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
                <p>
                  Track: {singleSong.title}<br />
                  Artist: {singleSong.artist.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
        <h2 className="text-white">Pop Culture</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="pop">
            
            {pop.slice(0,4).map((singleSong, index) => (
              <div className="col text-center" key={index} onClick={() => handleSongClick(singleSong.title)}>
                <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
                <p>
                  Track: {singleSong.title}<br />
                  Artist: {singleSong.artist.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div className="pop">
        <h2 className="text-white">HipHop</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hiphop">
           
            {hiphop.slice(0,4).map((singleSong, index) => (
              <div className="col text-center" key={index} onClick={() => handleSongClick(singleSong.title)}>
                <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
                <p>
                  Track: {singleSong.title}<br />
                  Artist: {singleSong.artist.name}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </main>
  </>
  );
};

export default MainSection;
