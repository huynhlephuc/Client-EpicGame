import React from 'react'
import './Stroe.scss'

const Store = () => {
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
                        <div className="One-Game">
                            <div className="Game-Content">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" alt="" />
                            </div>
                            <div className="Game-Price">
                              <p>Name</p>
                            </div>
                            <div className="Price">
                              <p>25$</p>
                              <span>- 25%</span>
                            </div>
                        </div>
                        {/* one game */}

                         {/* one game */}
                         <div className="One-Game">
                            <div className="Game-Content">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" alt="" />
                            </div>
                            <div className="Game-Price">
                              <p>Name</p>
                            </div>
                            <div className="Price">
                              <p>25$</p>
                              <span>- 25%</span>
                            </div>
                        </div>
                        {/* one game */}

                        {/* one game */}
                        <div className="One-Game">
                            <div className="Game-Content">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" alt="" />
                            </div>
                            <div className="Game-Price">
                              <p>Name</p>
                            </div>
                            <div className="Price">
                              <p>25$</p>
                              <span>- 25%</span>
                            </div>
                        </div>
                        {/* one game */}
                        {/* one game */}
                        <div className="One-Game">
                            <div className="Game-Content">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" alt="" />
                            </div>
                            <div className="Game-Price">
                              <p>Name</p>
                            </div>
                            <div className="Price">
                              <p>25$</p>
                              <span>- 25%</span>
                            </div>
                        </div>
                        {/* one game */}
                        {/* one game */}
                        <div className="One-Game">
                            <div className="Game-Content">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" alt="" />
                            </div>
                            <div className="Game-Price">
                              <p>Name</p>
                            </div>
                            <div className="Price">
                              <p>25$</p>
                              <span>- 25%</span>
                            </div>
                        </div>
                        {/* one game */}
                        {/* one game */}
                        <div className="One-Game">
                            <div className="Game-Content">
                                <img src="https://upload.wikimedia.org/wikipedia/vi/2/2b/FNAF3Artwork.png" alt="" />
                            </div>
                            <div className="Game-Price">
                              <p>Name</p>
                            </div>
                            <div className="Price">
                              <p>25$</p>
                              <span>- 25%</span>
                            </div>
                        </div>
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