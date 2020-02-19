import React, {useEffect, useState} from "react";
import uuid from 'uuid/v1';
import NewSongForm from "./NewSongForm";

const SongList = () => {

    const [songs, setSongs] = useState([
        {
            title: 'Sonhos das esquinas',
            id: 1
        },
        {
            title: 'O show nunca acaba',
            id: 2
        },
        {
            title: 'Sigo na sombra',
            id: 3
        }
    ]);

    useEffect(() => {
        console.log('useEffect hook first');
    },[]);
    useEffect(() => {
        console.log('useEffect hook', songs);
    },[songs]);
    // o a parametro apos a virgula significa em que momento isso isso sera usado de novo, quando esta um array vazio acontecera  apenas uma vez
    // quando for um exemplo tipo array de songs toda vez que tivemos que incluir algo no songs ele ira ser usado novamente

    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid()}]);
    }

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => <li key={song.id} >{song.title}</li>)}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
    );
}

export default SongList;
