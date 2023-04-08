import React from 'react'
import '../styles/home.scss'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
<>
<div className='home' id="home">
        <main>
            <h1>Digital Marketing Company</h1>
            <p>Top Digital Marketing Company in USA,UK, AU & UAE</p>
        </main>
    </div>

    <div className="home2">

      <img src={vg} alt="Graphics"/>

      <div>
        <p>
        We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings — even when it comes to highly competitive keywords.
        </p>
      </div>
    </div>
    <div className="home3" id="about">
      <div>
      <h1>Who We Are?</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, id iusto magnam iure, necessitatibus architecto accusantium molestias at voluptate voluptatem facilis nostrum eligendi obcaecati ex mollitia. Nihil voluptatibus numquam aliquam dignissimos iure veritatis asperiores deleniti? Qui pariatur commodi sapiente quo, quas perspiciatis at laborum delectus aliquam eligendi alias voluptas natus debitis fuga! Fuga amet, commodi pariatur vero voluptates reiciendis at? A, officiis. Voluptate, corporis quo. Exercitationem sunt qui error dolores voluptatum officiis molestiae nemo. Illum, tempore laborum! Praesentium perferendis ex similique quaerat, tenetur atque hic recusandae cupiditate sed fugit eius officiis veritatis quibusdam non reprehenderit. Laudantium corrupti quos vel fugiat.</p>
      </div>

    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>

          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube/>
            <p>YouTube</p>
          </div>

          <div style={{animationDelay:"0.1s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>

        </article>
      </div>
    </div>
</>
  )
}

export default Home