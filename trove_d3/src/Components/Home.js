import React from 'react';
import './Home.css'; 
import about from './asserts/img/about.png';
import card1 from './asserts/img/card1.png';
import card2 from './asserts/img/card2.png';
import card3 from './asserts/img/card3.png';
import card4 from './asserts/img/card4.png';
import favicon from './asserts/img/favicon.png';
import home from './asserts/img/home.png';
import product1 from './asserts/img/product1.png';
import product2 from './asserts/img/product2.png';
import product3 from './asserts/img/product3.png';
import product4 from './asserts/img/product4.png';
import product5 from './asserts/img/product5.png';
import product6 from './asserts/img/product6.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <i className="ri-leaf-line nav__logo-icon"></i> TROVE
          </a>
          <div className="nav__menu" id="nav-menu">
          <ul class="nav__list">
                    <li class="nav__item">
                        <a href="#home" class="nav__link active-link">Home</a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link">About</a>
                    </li>
                    <li class="nav__item">
                        <a href="#products" class="nav__link">Products</a>
                    </li>
                    <li class="nav__item">
                        <Link to="/Welcome" class="nav__link">Log out</Link>
                    </li>
                    <li class="nav__item">
                        <a href="#contact" class="nav__link">Contact Us</a>
                    </li>
                </ul>
                <div class="nav__close" id="nav-close">
                    <i class="ri-close-line"></i>
                </div>
          </div>
          <div className="nav__btns">
          <i class="ri-moon-line change-theme" id="theme-button"></i>
                <div class="nav__toggle" id="nav-toggle">
                    <i class="ri-menu-line"></i>
                </div>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="home" id="home">
          <div className="home__container container grid">
          <img src={home} alt="" class="home__img"/>
                <div class="home__data">
                    <h1 class="home__title">
                        Welcome to TROVE, where exploration meets inspiration!                     </h1>
                    <p class="home__description">
                        Dive into a world of endless possibilities as you discover captivating content tailored just for you. Uncover the extraordinary, ignite your curiosity, and embark on a journey of endless discovery. Your adventure begins now!                    </p>
                    <a href="#about" class="button button--flex">
                            Explore <i class="ri-arrow-right-down-line button__icon"></i>
                        </a>
                </div>
                <div class="home__social">
                    <span class="home__social-follow">Follow Us</span>
                    <div class="home__social-links">
                        <a href="https://www.facebook.com/" target="_blank" class="home__social-link">
                                <i class="ri-facebook-fill"></i>
                            </a>
                        <a href="https://www.instagram.com/" target="_blank" class="home__social-link">
                                <i class="ri-instagram-line"></i>
                            </a>
                        <a href="https://twitter.com/" target="_blank" class="home__social-link">
                                <i class="ri-twitter-fill"></i>
                            </a>
                    </div>
                </div>
          </div>
        </section>

        <section className="about section container" id="about">
          <div className="about__container grid">
          <img src={about} alt="" class="about__img"/>
                <div class="about__data">
                    <h2 class="section__title about__title">
                        Who we really are & <br/> why choose us
                    </h2>
                    <p class="about__description">
                        Innovators of immersive content discovery & Architects of digital exploration without limits
                    </p>
                    <div class="about__details">
                        <p class="about__details-description">
                            <i class="ri-checkbox-fill about__details-icon"></i> Personalized journey into endless possibilities..
                        </p>
                        <p class="about__details-description">
                            <i class="ri-checkbox-fill about__details-icon"></i> Curated premium content and thriving community.
                        </p>
                        <p class="about__details-description">
                            <i class="ri-checkbox-fill about__details-icon"></i> Champions of diverse creators and exceptional content.
                        </p>
                        <p class="about__details-description">
                            <i class="ri-checkbox-fill about__details-icon"></i> Your gateway to a world where curiosity knows no bounds.
                        </p>
                    </div>
                    <a href="#" class="button--link button--flex">
                            Explore Now <i class="ri-arrow-right-down-line button__icon"></i>
                        </a>
                </div>
          </div>
        </section>

        <section className="steps section container">
          <div className="steps__bg">
          <h2 class="section__title-center steps__title">
                    Steps to start your <br/> product off right
                </h2>
                <div class="steps__container grid">
                    <div class="steps__card">
                        <div class="steps__card-number">01</div>
                        <h3 class="steps__card-title">Explore</h3>
                        <p class="steps__card-description">
                            Ensuring you're just a touch away from discovering captivating content                        </p>
                    </div>
                    <div class="steps__card">
                        <div class="steps__card-number">02</div>
                        <h3 class="steps__card-title">Personalize Your Journey</h3>
                        <p class="steps__card-description">
                            Tailor your experience by selecting your interests. Whether it's art, tech, or travel, customize your content feed                        </p>
                    </div>
                    <div class="steps__card">
                        <div class="steps__card-number">03</div>
                        <h3 class="steps__card-title">Embark on Discovery</h3>
                        <p class="steps__card-description">
                            Dive into a world of endless possibilities! Start your journey of discovery                         </p>
                    </div>
                </div>
          </div>
        </section>

        <section className="product section container" id="products">
        <h2 class="section__title-center">
                Check out our <br/> products
            </h2>
            <p class="product__description">
                Here are some selected contents from our showroom, all are in excellent shape and has a long life span. Buy and enjoy best quality.
            </p>
            <div class="product__container grid">
                <article class="product__card">
                    <div class="product__circle"></div>
                    <img src={product1} alt="" class="product__img"/>
                    <h3 class="product__title">Digital Art Prints</h3>
                    <span class="product__price">---</span>
                    <button class="button--flex product__button">
                            <i class="ri-shopping-bag-line"></i>
                        </button>
                </article>
                <article class="product__card">
                    <div class="product__circle"></div>
                    <img src={product2} alt="" class="product__img"/>
                    <h3 class="product__title">E-books</h3>
                    <span class="product__price">---</span>
                    <button class="button--flex product__button">
                            <i class="ri-shopping-bag-line"></i>
                        </button>
                </article>
                <article class="product__card">
                    <div class="product__circle"></div>
                    <img src={product3} alt="" class="product__img"/>
                    <h3 class="product__title">Software Plugins and Extensions</h3>
                    <span class="product__price">---</span>
                    <button class="button--flex product__button">
                            <i class="ri-shopping-bag-line"></i>
                        </button>
                </article>
                <article class="product__card">
                    <div class="product__circle"></div>
                    <img src={product4} alt="" class="product__img"/>
                    <h3 class="product__title">Stock Photos and Videos</h3>
                    <span class="product__price">---</span>
                    <button class="button--flex product__button">
                            <i class="ri-shopping-bag-line"></i>
                        </button>
                </article>
                <article class="product__card">
                    <div class="product__circle"></div>
                    <img src={product5} alt="" class="product__img"/>
                    <h3 class="product__title">Online Courses and Tutorials</h3>
                    <span class="product__price">---</span>
                    <button class="button--flex product__button">
                            <i class="ri-shopping-bag-line"></i>
                        </button>
                </article>
                <article class="product__card">
                    <div class="product__circle"></div>
                    <img src={product6} alt="" class="product__img"/>
                    <h3 class="product__title">3D Models and Virtual Assets</h3>
                    <span class="product__price">---</span>
                    <button class="button--flex product__button">
                            <i class="ri-shopping-bag-line"></i>
                        </button>
                </article>
            </div>
        </section>

        <section className="contact section container" id="contact">
                <div class="contact__container grid">
                <div class="contact__box">
                    <h2 class="section__title">
                        Reach out to us today <br/> via any of the given <br/> information
                    </h2>
                    <div class="contact__data">
                        <div class="contact__information">
                            <h3 class="contact__subtitle">Call us for instant support</h3>
                            <span class="contact__description">
                                    <i class="ri-phone-line contact__icon"></i>
                                    +999 888 777
                                </span>
                        </div>
                        <div class="contact__information">
                            <h3 class="contact__subtitle">Write us by mail</h3>
                            <span class="contact__description">
                                    <i class="ri-mail-line contact__icon"></i>
                                    user@email.com
                                </span>
                        </div>
                    </div>
                </div>
                <form action="" class="contact__form">
                    <div class="contact__inputs">
                        <div class="contact__content">
                            <input type="email" placeholder=" " class="contact__input"/>
                            <label for="" class="contact__label">Email</label>
                        </div>
                        <div class="contact__content">
                            <input type="text" placeholder=" " class="contact__input"/>
                            <label for="" class="contact__label">Subject</label>
                        </div>
                        <div class="contact__content contact__area">
                            <textarea name="message" placeholder=" " class="contact__input"></textarea>
                            <label for="" class="contact__label">Message</label>
                        </div>
                    </div>
                    <button class="button button--flex">
                            Send Message
                            <i class="ri-arrow-right-up-line button__icon"></i>
                        </button>
                </form>
            </div>
        </section>
      </main>

      <footer className="footer section">
  <div className="footer__container container grid">
    <div class="footer__content">
      <a href="#" class="footer__logo">
        <i class="ri-leaf-line footer__logo-icon"></i> TROVE
      </a>
      <h3 class="footer__title">
        Subscribe to our newsletter <br /> to stay update
      </h3>
      <div class="footer__subscribe">
        <input type="email" placeholder="Enter your email" class="footer__input" />

        <button class="button button--flex footer__button">
          Subscribe
          <i class="ri-arrow-right-up-line button__icon"></i>
        </button>
      </div>
    </div>
    <div class="footer__content">
      <h3 class="footer__title">Our Address</h3>

      <ul class="footer__data">
        <li class="footer__information">1234 - Peru</li>
        <li class="footer__information">La Libertad - 43210</li>
        <li class="footer__information">123-456-789</li>
      </ul>
    </div>
    <div class="footer__content">
      <h3 class="footer__title">Contact Us</h3>
      <ul class="footer__data">
        <li class="footer__information">+999 888 777</li>

        <div class="footer__social">
          <a href="https://www.facebook.com/" class="footer__social-link">
            <i class="ri-facebook-fill"></i>
          </a>
          <a href="https://www.instagram.com/" class="footer__social-link">
            <i class="ri-instagram-line"></i>
          </a>
          <a href="https://twitter.com/" class="footer__social-link">
            <i class="ri-twitter-fill"></i>
          </a>
        </div>
      </ul>
    </div>
    <div class="footer__content">
      <h3 class="footer__title">We accept all credit cards</h3>
      <div class="footer__cards">
        <img src={card1} alt="" class="footer__card" />
        <img src={card2} alt="" class="footer__card" />
        <img src={card3} alt="" class="footer__card" />
        <img src={card4} alt="" class="footer__card" />
      </div>
    </div>
  </div>
</footer>
</div>

  );
};

export default Home;
