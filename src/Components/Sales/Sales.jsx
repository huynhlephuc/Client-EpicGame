import React from 'react'
import './Sale.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Sales = () => {
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
      
  return (
    <div className="Sale-Container">
        <div className="Sale-Product">
                <Carousel responsive={responsive}>
                    <div className="Film">
                      <img src="https://thichlaviet.com/wp-content/uploads/2019/06/game-Megaman-X9.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://tiennghich.mobi/download-game-alien-shooter-2-full-crack/imager_10501.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://production-gameflipusercontent.fingershock.com/us-east-1:8a4e56ff-7064-4a07-bc91-a814d07d551d/f5539e50-eeb4-49f7-be9d-06297c4b866d/501ca246-5887-4f7d-af10-3871ba8e8174" />
                    </div>
                    <div className="Film">
                      <img src="https://authstore.vn/wp-content/uploads/2022/01/New-Super-Mario-Bros.-U-Deluxe1.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" />
                    </div>
                    <div className="Film">
                      <img src="https://images-na.ssl-images-amazon.com/images/I/41ICHsXkTvL.jpg" />
                    </div>
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
                    <div className="Film">
                      <img src="https://thichlaviet.com/wp-content/uploads/2019/06/game-Megaman-X9.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://tiennghich.mobi/download-game-alien-shooter-2-full-crack/imager_10501.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://production-gameflipusercontent.fingershock.com/us-east-1:8a4e56ff-7064-4a07-bc91-a814d07d551d/f5539e50-eeb4-49f7-be9d-06297c4b866d/501ca246-5887-4f7d-af10-3871ba8e8174" />
                    </div>
                    <div className="Film">
                      <img src="https://authstore.vn/wp-content/uploads/2022/01/New-Super-Mario-Bros.-U-Deluxe1.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" />
                    </div>
                    <div className="Film">
                      <img src="https://images-na.ssl-images-amazon.com/images/I/41ICHsXkTvL.jpg" />
                    </div>
                </Carousel>
        </div>

        <div className="More-Info-Link">
            <a href="">Editor's Picks</a>
        </div>
        <div className="Sale-Product">
                <Carousel responsive={responsive}>
                    <div className="Film">
                      <img src="https://thichlaviet.com/wp-content/uploads/2019/06/game-Megaman-X9.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://tiennghich.mobi/download-game-alien-shooter-2-full-crack/imager_10501.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://production-gameflipusercontent.fingershock.com/us-east-1:8a4e56ff-7064-4a07-bc91-a814d07d551d/f5539e50-eeb4-49f7-be9d-06297c4b866d/501ca246-5887-4f7d-af10-3871ba8e8174" />
                    </div>
                    <div className="Film">
                      <img src="https://authstore.vn/wp-content/uploads/2022/01/New-Super-Mario-Bros.-U-Deluxe1.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" />
                    </div>
                    <div className="Film">
                      <img src="https://images-na.ssl-images-amazon.com/images/I/41ICHsXkTvL.jpg" />
                    </div>
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
                    <div className="Film">
                      <img src="https://thichlaviet.com/wp-content/uploads/2019/06/game-Megaman-X9.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://tiennghich.mobi/download-game-alien-shooter-2-full-crack/imager_10501.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://production-gameflipusercontent.fingershock.com/us-east-1:8a4e56ff-7064-4a07-bc91-a814d07d551d/f5539e50-eeb4-49f7-be9d-06297c4b866d/501ca246-5887-4f7d-af10-3871ba8e8174" />
                    </div>
                    <div className="Film">
                      <img src="https://authstore.vn/wp-content/uploads/2022/01/New-Super-Mario-Bros.-U-Deluxe1.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" />
                    </div>
                    <div className="Film">
                      <img src="https://images-na.ssl-images-amazon.com/images/I/41ICHsXkTvL.jpg" />
                    </div>
                </Carousel>
        </div>


        <div className="More-Info-Link">
            <a href="">Most Popular</a>
        </div>
        <div className="Sale-Product">
                <Carousel responsive={responsive}>
                    <div className="Film">
                      <img src="https://thichlaviet.com/wp-content/uploads/2019/06/game-Megaman-X9.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://tiennghich.mobi/download-game-alien-shooter-2-full-crack/imager_10501.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://production-gameflipusercontent.fingershock.com/us-east-1:8a4e56ff-7064-4a07-bc91-a814d07d551d/f5539e50-eeb4-49f7-be9d-06297c4b866d/501ca246-5887-4f7d-af10-3871ba8e8174" />
                    </div>
                    <div className="Film">
                      <img src="https://authstore.vn/wp-content/uploads/2022/01/New-Super-Mario-Bros.-U-Deluxe1.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" />
                    </div>
                    <div className="Film">
                      <img src="https://images-na.ssl-images-amazon.com/images/I/41ICHsXkTvL.jpg" />
                    </div>
                </Carousel>
        </div>


        <div className="More-Info-Link">
            <a href="">New To The Epic Games Store</a>
        </div>
        <div className="Sale-Product">
                <Carousel responsive={responsive}>
                    <div className="Film">
                      <img src="https://thichlaviet.com/wp-content/uploads/2019/06/game-Megaman-X9.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://tiennghich.mobi/download-game-alien-shooter-2-full-crack/imager_10501.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://production-gameflipusercontent.fingershock.com/us-east-1:8a4e56ff-7064-4a07-bc91-a814d07d551d/f5539e50-eeb4-49f7-be9d-06297c4b866d/501ca246-5887-4f7d-af10-3871ba8e8174" />
                    </div>
                    <div className="Film">
                      <img src="https://authstore.vn/wp-content/uploads/2022/01/New-Super-Mario-Bros.-U-Deluxe1.jpg" />
                      <p>Game's name</p>
                      <div className="price">
                        <p>550.000</p>
                        <span>-50%</span>
                      </div>
                    </div>
                    <div className="Film">
                      <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" />
                    </div>
                    <div className="Film">
                      <img src="https://images-na.ssl-images-amazon.com/images/I/41ICHsXkTvL.jpg" />
                    </div>
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