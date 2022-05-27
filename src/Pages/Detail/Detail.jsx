import React, {useState , useEffect} from 'react';
import { Routes, Route, useParams } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import './Detail.scss';
import {Link} from 'react-router-dom'
import axios from 'axios';


const Detail = () => {
    const [game, setGame] = useState([]);
    const [relate, setRelate] = useState([]);
    let params = useParams();
    const idGame = params.id;

    useEffect( () => {
        const getApi = async () => {
            const getGame = await axios.get("https://server-epic-game.herokuapp.com/games");
            
            const gameDetail = getGame.data.filter((e) => {
                return e._id == idGame;
            });

            const gameRelate = getGame.data.filter((e) => {
                return e.category.name === gameDetail[0].category.name;
            });
            
            setGame(gameDetail[0]);
            setRelate(gameRelate);
        }
        getApi();
        
        /* console.log(game.name) */

      },[])

      /* slider  */
        const responsive = {
            superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
            }
        };

        /* end slider */



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
               <h4>Face the unknown, uncover the truth and save the city</h4>
               <p>Tokyo is overrun by deadly supernatural forces, perpetrated by a dangerous occultist, causing Tokyo’s population to vanish in an instant. Ally with a powerful spectral entity on their quest for vengeance and master a powerful arsenal of abilities to unravel the dark truth behind the disappearance as you FACE THE UNKNOWN in Ghostwire: Tokyo.</p>
            </div>
            <div className="Sale-Product-Detail">
                    <p>Relative Game:</p>
                    <div className="Content-Card">
                        {
                            relate.map( function (game) {
                              return (
                                <div className="Card">
                                <div className="Img-Card">
                                    <img src={game.image} alt="123" />
                                </div>
                                <div className="Text">
                                    <p>{game.name}</p>
                                    <div className="Price">
                                        <p>{game.price}</p>
                                        <p>{game.salerate}</p>
                                    </div>
                                </div>
                            </div>
                              )
                            })
                        }
                      
                    </div>
                 
            </div>
          </div>
         
         

        </>

    )
}

export default Detail