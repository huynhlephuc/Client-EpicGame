import React, {useState , useEffect} from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import './Detail.scss';
import axios from 'axios';

const Detail = () => {
    const [game, setGame] = useState([]);
    let params = useParams();
    const idGame = params.id;

    useEffect( () => {
        const getApi = async () => {
            const getGame = await axios.get("https://server-epic-game.herokuapp.com/games");
            
            const gameDetail = getGame.data.filter((e) => {
                return e._id == idGame;
            });     
            
            setGame(gameDetail[0]);
            
        }
        getApi();
        
        /* console.log(game.name) */

      },[])
    return (
        <>
           {/*  
          <h2>{game.name}</h2>
          <h3>{game.price}</h3> */}
          <div className="Game-Detail-Container">
            <h1>{game.name}</h1>
            <div className="Detail-Content">
                <div className="Game-Detail-Image">
                    <img src={game.image} alt={game.name} />
                </div>
                <div className="Game-Info">
                    <h2>{game.price} $</h2>
                    <h3>-{game.salerate}</h3>
                    <button className="Btn-Buy">BUY NOW</button>
                    <button className="Btn-AddCart">ADD TO CART</button>
                    <button className="Btn-Wish">ADD TO WISHLIST</button>
                </div>
            </div>
            <div className="Describe">
                <p>
                Face the unknown, uncover the truth and save the city
                    Tokyo is overrun by deadly supernatural forces, perpetrated by a dangerous occultist, causing Tokyo’s population to vanish in an instant. Ally with a powerful spectral entity on their quest for vengeance and master a powerful arsenal of abilities to unravel the dark truth behind the disappearance as you FACE THE UNKNOWN in Ghostwire: Tokyo.
                    A beautifully haunted Tokyo
                    Explore a unique vision of Tokyo twisted by a supernatural presence. From its ultra-modern cityscape to its traditional temples and narrow alleyways, discover a hauntingly beautiful city teeming with Yokai - vengeful spirts spirits that prowl the streets. Discover iconic landmarks like Shibuya Crossing and Tokyo Tower, stunningly rendered with incredible detail and built to take advantage of next-generation technology. Experience the city frozen in time when the city’s population disappeared, and travel to the surreal underworld on your quest to save your family.
                    Devastating Elemental Abilities
                    Wield a combination of upgradeable elemental powers and ghost-hunting skills to combat the supernatural threat. Use your ethereal abilities to ascend to the to the top of Tokyo's skyline and soar over the streets to discover new missions or even get the drop on your enemies.
                </p>
            </div>
          </div>
         

        </>

    )
}

export default Detail