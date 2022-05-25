import React, { useState, useEffect } from 'react'
import './Sale.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

/* const a = array.filter((e) =>{
  return e.category.name = "Hot"
 } )
 
 console.log(a); */


const Sales = () => {

    /* get api sales */
    const [games, setGames] = useState([]);
    const [hots, setHot] = useState([]);
    const [sales, setSale] = useState([]);
    const [achis, setAchi] = useState([]);
    const [updates, setUpdate] = useState([]);
    const [populars, setPopular] = useState([]);
    const [newgames, setNewgame] = useState([]);
    const [editor, setEditor] = useState([]);
    
    useEffect( () => {
      const getApi = async () => {
          const getGames = await axios.get("https://server-epic-game.herokuapp.com/games");
          /* const a = array.filter((e) =>{
                return e.category.name = "Hot"
              } )
              
              console.log(a); */

          const HotGame = getGames.data.filter((e) => {
            return e.category.name=="Hot"
          });

          const SaleGame = getGames.data.filter((e) => {
            return e.category.name=="Sale"
          });

          const AchiGame = getGames.data.filter((e) => {
            return e.category.name=="Achievements"
          });

          const UpdateGame = getGames.data.filter((e) => {
            return e.category.name=="Recently Updated"
          });

          const PopularGame = getGames.data.filter((e) => {
            return e.category.name=="Most Popular"
          });

          const NewGame = getGames.data.filter((e) => {
            return e.category.name=="New To The Epic Games Store"
          });

          const editorGame = getGames.data.filter((e) => {
            return e.category.name=="Editor's Picks"
          });          

          setGames(getGames.data);
          ;
          setAchi(AchiGame)
          setEditor(editorGame);
          setUpdate(UpdateGame);
          setPopular(PopularGame);
          setNewgame(NewGame);
          setHot(HotGame);
          setSale(SaleGame)
          
         
      }
      getApi();
      console.log(games);
      
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
    <div className="Sale-Container">
        <div className="Sale-Product">

                <Carousel responsive={responsive}>
                {sales.map(function (sale) {
                  return (
                    <div className="Film" key={sale._id}>
                    <img src={sale.image} />
                    <p>{sale.name}</p>
                    <div className="price">
                      <p>{sale.price} $</p>
                      <span>-{sale.salerate}</span>
                    </div>
                  </div>
                  )
                }) }
                   

                   
                </Carousel>
        </div>
       {/*  <div className="Space">
        </div> */}
        <div className="Top-Game">
          <div className="Game">
              <img src="https://vtv1.mediacdn.vn/zoom/550_339/2020/2/18/gwent-the-witcher-card-game-is-coming-to-android-in-march-15820301299182062282228.jpg" alt="" />
              <p>Fortnite Volcanic Assassin Quest Pack</p>
              <span>Get the Volcanic Assassin Quest Pack from the item shop. Log in on PC to claim your pack for free!</span>
             
          </div>
          <div className="Game">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1817490/capsule_616x353.jpg?t=1652200040" alt="" />
              <p>Rocket League Wheels Deal</p>
              <span>To get the HNY: Inverted wheels for free, simply log into Rocket League on PC now!</span>
          </div>
          <div className="Game">
              <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/07/gta-5-5.png" alt="" />
              <p>Warframe Giveaway</p>
              <span>Grab your free, Dual Kamas plus Lotus Color Bundle just by logging into Warframe through the Epic Games launcher.</span>
          </div>
        </div>
        <div className="Free-Game">
            <div className="Tool">
              <div className="Tool-Container">
                <div className="Game-1">
                    <i className="ri-gift-fill"></i>
                    <a href="">Free Game</a>
                </div>
                <div className="Game-2">
                      <button>VIEW MORE</button>
                </div>
              </div>
            </div>
            <div className="Game-Top-Content">
              <div className="Game-img">
                <img src="https://images.firstpost.com/wp-content/uploads/2019/04/borderlands-31.jpg" alt="" />
                <h4>FREE NOW</h4>
                <p>Borderlands 3</p>
                <span>Free Now - May 26 at 10:00 PM</span>
              </div>
              <div className="Game-img">
                <img src="https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/egs-vault-tease-generic-promo-1920x1080_1920x1080-f7742c265e217510835ed14e04c48b4b?h=854&resize=1&w=640" alt="" />
                <h4>MYSTERY NAME</h4>
                <p>Coming soon</p>
              </div>
            </div>
        </div>

        {/* game co thanh tuu */}

        <div className="More-Info-Link">
            <a href="">Games with Achievements</a>
        </div>

        <div className="Sale-Product">
        <Carousel responsive={responsive}>
                {achis.map(function (achi) {
                  return (
                    <div className="Film" key={achi._id}>
                    <img src={achi.image} />
                    <p>{achi.name}</p>
                    <div className="price">
                      <p>{achi.price} $</p>
                      <span>-{achi.salerate}</span>
                    </div>
                  </div>
                  )
                }) }
        </Carousel>
        </div>

        <div className="More-Info-Link">
            <a href="">Editor's Picks</a>
        </div>
        <div className="Sale-Product">
        <Carousel responsive={responsive}>
                {editor.map(function (edi) {
                  return (
                    <div className="Film" key={edi._id}>
                    <img src={edi.image} />
                    <p>{edi.name}</p>
                    <div className="price">
                      <p>{edi.price} $</p>
                      <span>-{edi.salerate}</span>
                    </div>
                  </div>
                  )
                }) }
        </Carousel>
        </div>


        <div className="Top-Game">
          <div className="Game">
              <img src="https://www.gamebyte.com/wp-content/uploads/2019/01/21946df5-afb8-4e98-aac0-605e1391e751.jpeg" alt="" />
              <p>Fortnite Volcanic Assassin Quest Pack</p>
              <span>Get the Volcanic Assassin Quest Pack from the item shop. Log in on PC to claim your pack for free!</span>
             
          </div>
          <div className="Game">
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/524220/capsule_616x353.jpg?t=1646911723" alt="" />
              <p>Rocket League Wheels Deal</p>
              <span>To get the HNY: Inverted wheels for free, simply log into Rocket League on PC now!</span>
          </div>
          <div className="Game">
              <img src="https://o.rada.vn/data/image/2021/07/30/setting-among-us.jpg" alt="" />
              <p>Warframe Giveaway</p>
              <span>Grab your free, Dual Kamas plus Lotus Color Bundle just by logging into Warframe through the Epic Games launcher.</span>
          </div>
        </div>

        
        <div className="More-Info-Link">
            <a href="">Recently Updated</a>
        </div>
        <div className="Sale-Product">
                <Carousel responsive={responsive}>
                {updates.map(function (update) {
                  return (
                    <div className="Film" key={update._id}>
                    <img src={update.image} />
                    <p>{update.name}</p>
                    <div className="price">
                      <p>{update.price} $</p>
                      <span>-{update.salerate}</span>
                    </div>
                  </div>
                  )
                }) }
                </Carousel>
        </div>


        <div className="More-Info-Link">
            <a href="">Most Popular</a>
        </div>
        <div className="Sale-Product">
                <Carousel responsive={responsive}>
                {populars.map(function (popular) {
                  return (
                    <div className="Film" key={popular._id}>
                    <img src={popular.image} />
                    <p>{popular.name}</p>
                    <div className="price">
                      <p>{popular.price} $</p>
                      <span>-{popular.salerate}</span>
                    </div>
                  </div>
                  )
                }) }
                </Carousel>
        </div>


        <div className="More-Info-Link">
            <a href="">New To The Epic Games Store</a>
        </div>
        <div className="Sale-Product">
                <Carousel responsive={responsive}>
                {newgames.map(function (newgame) {
                  return (
                    <div className="Film" key={newgame._id}>
                    <img src={newgame.image} />
                    <p>{newgame.name}</p>
                    <div className="price">
                      <p>{newgame.price} $</p>
                      <span>-{newgame.salerate}</span>
                    </div>
                  </div>
                  )
                }) }
                </Carousel>
        </div>


        <div className="More-Container-End">
            <div className="Catelory">
                <img src="https://www.xgn.nl/images/articles/2021/202101/_970x545_crop_center-center_82_line/4509799/Still-Image_Xbox-Game-Pass_2_EA-Play-Title-Cards.f1620123579.jpg" alt="" />
                <div className="More-Info">
                    <h2>Explore Our Catalog</h2>
                    <p>Browse by genre, features, price, and more to find your next favorite game.</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Sales