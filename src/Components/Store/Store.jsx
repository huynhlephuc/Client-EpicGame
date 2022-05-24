import React from 'react';
import './Store.css';
import ImageGallery from 'react-image-gallery';


const Store = () => {
  const images = [
    {
      original: 'https://www.triangle-factory.be/new/wp-content/uploads/2018/11/TheHallow01.jpg',
      thumbnail: 'https://www.triangle-factory.be/new/wp-content/uploads/2018/11/TheHallow01.jpg',
    },
    {
      original: 'https://ecdn.game4v.com/g4v-content/uploads/2020/08/Game4V-Thoi-luong-Resident-Evil-8-4.jpg',
      thumbnail: 'https://ecdn.game4v.com/g4v-content/uploads/2020/08/Game4V-Thoi-luong-Resident-Evil-8-4.jpg',
    },
    {
      original: 'https://sm.ign.com/ign_in/gallery/e/elden-ring/elden-ring-summer-game-fest-trailer-screenshots_v9zj.jpg',
      thumbnail: 'https://atualinerd.com.br/wp-content/uploads/2022/02/Elden-Ring-Game-4.png',
    },
    {
      original: 'https://hanoicomputercdn.com/media/news/779_resident_evil_8_village.jpg',
      thumbnail: 'https://hacom.vn/media/lib/12-07-2021/download-game-hnh-ng-resident-evil-village-min-ph-cho-pc.jpg',
    },
    {
      original: 'https://image.thanhnien.vn/w1024/Uploaded/2022/tqdxwpmdh/2020_09_23/left-4-dead-2-update-02_tpag.jpg',
      thumbnail: 'https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg',
    },
    {
      original: 'https://o.rada.vn/data/image/2020/05/22/Top-game-kinh-di-am-anh-2020-Dear-Father.jpg',
      thumbnail: 'https://genk.mediacdn.vn/2018/10/4/1-15386257412911800914300.jpg',
    },
    {
      original: 'https://1.bp.blogspot.com/-YB9peZ1qarI/XYywu7pJDnI/AAAAAAAAElQ/JTpxUa5YwNI5HIA5Y87QeyUxX076xjchQCNcBGAsYHQ/s1600/Nier-0.jpg',
      thumbnail: 'https://i.imgur.com/VmdtMWN.jpg',
    },
  ];
  
  return (
    <div className="Big-Container">
        <div className="Second-Menu">
            <div className="Search">
                <input type="search" placeholder="Search"/>
                <i class="ri-search-line"></i>
            </div>
            <div className="Menu-Bar">
              <ul>
                <li>Discover</li>
                <li>Browse</li>
                <li>News</li>
              </ul>
            </div>
        </div>

        <div className="Silde">
          <ImageGallery items={images} />;
        </div>
        <div className="Achieverment-Game">
            <a href="">MEGA Sale Spotlight</a>
        </div>
    </div>
  )
}

export default Store