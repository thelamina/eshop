import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home-Landing'>
        <div className='Home-Landing-Text'>
          <h1 className='Home-Title'>Feel the Comfort Using Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            possimus dignissimos explicabo, error voluptate
          </p>
          <div className='Home-Button-Group'>
            <Link to='/'>Shop Now</Link>
            <Link to='/'>Try Products</Link>
          </div>
        </div>
        <div className='Home-Landing-Image'>
          <img src='assets/img2.jpg' alt='' />
        </div>
      </div>

      <div className='Home-Categories container'>
        <h2>Categories</h2>
        <div>
          <Link to='/shop/clothings'>Clothings</Link>
          <Link>Entertainment</Link>
          <Link>Shoes</Link>
          <Link>Watches</Link>
          <Link>Jewelries</Link>
          <Link>Beauty</Link>
        </div>
      </div>
      <div className='Home-Brands container'>
        <h2>Popular Brands</h2>
        <div>
          {/* <img src='assets/brand1.png' alt='' /> */}
          <img src='assets/brand2.png' alt='' />
          <img src='assets/brand1.png' alt='' />
          <img src='assets/brand2.png' alt='' />
          <img src='assets/brand1.png' alt='' />
          <img src='assets/brand2.png' alt='' />
        </div>
      </div>
      <div className='Home-Service'>
        <div className='container'>
          <div className='Home-Service-Title'>
            <h2>The Service We Provide</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus repudiandae amet dolorum iure aspernatur similique
              facere, architecto impedit animi enim!
            </p>
          </div>
          <div className='Home-Service-Content'>
            <div className='Home-Service-Card'>
              <img src='assets/logo2.png' alt='' />
              <h4>Custom Product</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur porro reprehenderit commodi ad, iusto obcaecati,
                magni fugiat ipsam aliquid eligendi officiis alias? Earum,
                voluptatem non.
              </p>
            </div>
            <div className='Home-Service-Card'>
              <img src='assets/logo2.png' alt='' />
              <h4>All Product Warranty</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur porro reprehenderit commodi ad, iusto obcaecati,
                magni fugiat ipsam aliquid eligendi officiis alias? Earum,
                voluptatem non.
              </p>
            </div>
            <div className='Home-Service-Card'>
              <img src='assets/logo2.png' alt='' />
              <h4>Seamless Service</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur porro reprehenderit commodi ad, iusto obcaecati,
                magni fugiat ipsam aliquid eligendi officiis alias? Earum,
                voluptatem non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
