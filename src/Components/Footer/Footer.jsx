import React from 'react'
import './Footer.css';


const Footer = () => {
  return (
    <div className="Footer_Container">
        <div className="Footer_Content">
            <div className="Social_Link">
                <a href=""><i class="ri-facebook-fill"></i></a>
                <a href=""><i class="ri-instagram-line"></i></a>
                <a href=""><i class="ri-twitter-fill"></i></a>
                <a href=""><i class="ri-youtube-fill"></i></a>
            </div>
            <div className="Group_Name">
                <p>Resources</p>
            </div>
            <div className="Orther_Link">
                <div className="Link_group">
                    <a href="">Support-A-Creator</a>
                    <a href="">Publish on Epic Games</a>
                    <a href="">Careers</a>
                    <a href="">Company</a>

                </div>
                <div className="Link_group">
                    <a href="">Fan Art Policy</a>
                    <a href="">UX Research</a>
                    <a href="">Careers</a>
                   
                </div>
                <div className="Link_group">
                    <a href="">Online Services</a>
                    <a href="">Community Rules</a>
                    <a href="">Epic Newsroom</a>
                </div>
            </div>

            <div className="Group_Name">
                <p>Made By Phuc Huynh</p>
            </div>
            <div className="Orther_Link">
                <div className="Link_group">
                    <a href="https://github.com/huynhlephuc">Git Hub</a>
                    <a href="">Base on Epic game</a>
                    <a href="">Infinity Blade</a>
                    <a href="">Shadow Complex</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer