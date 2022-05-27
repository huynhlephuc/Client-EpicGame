import React, {useState , useEffect} from 'react'
import axios from 'axios';
import './Stroe.scss'

const Store = () => {

  const  [games, setGames] = useState([]);

  useEffect( () => {
    const getApi = async () => {
        const getGames = await axios.get("https://server-epic-game.herokuapp.com/games");

        setGames(getGames.data)
    }
    getApi();

    /* console.log('data game',games.data) */

    
  },[])

  console.log(games)

  return (
    <>
        <div className="All-Game-Container">
            <div className="Margin-Content">
                <div className="All-Game">

                    <div className="SortBy">
                       <div className="Btn-Filter">
                         <select name="" id="Box"> 
                            <option value="">New Reless</option>
                         </select>
                       </div>
                    </div>
                  
                    <div className="Game-space">
                      {/* one game */}
                       {
                         games.map(function (game) {
                            return (
                              <div className="One-Game">
                                  <div className="Game-Content">
                                      <img src={game.image} alt="" />
                                  </div>
                                  <div className="Game-Price">
                                    <p>{game.name}</p>
                                  </div>
                                  <div className="Price">
                                    <p>{game.price} $</p>
                                    <span>-{game.salerate}</span>
                                  </div>
                              </div>
                            )
                         })
                       }
                        {/* one game */}

                         
                    </div>
                </div>
                <div className="Filter">
                    <p>Filters</p>
                  <div className="Input-Filter">
                    <span class="ri-search-line"></span>
                    <input type="text" placeholder="Keywords"/>
                  </div>
                  <div className="Filter-List">
                    <ul>
                      <li>ALL GAME</li>
                      <li>SALE</li>
                      <li>ACHIEVERMENT</li>
                      <li>HOT</li>
                      <li>POPULAR</li>
                      <li>NEW</li>
                    </ul>
                  </div>
                </div>
               
            </div>
        

           
        </div>
    </>
  )
}

export default Store