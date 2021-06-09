import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import classNames from 'classnames';

export default function App() {
  const imgs = [1, 2, 3].map(i => `src/assets/img${i}.jpg`);
  const [idx, setIdx] = useState(0);
  const [img, setImg] = useState(imgs[ idx ]);
  const handleClick = (i: number) => () => { setIdx(i); setImg(imgs[i]) };

  return (
    <>
      <Navbar />
      <div className="img-container">
        <img src={ img } alt="" />
      </div>
      <section className="template">
        <div>
          <h1>Choose a Template.</h1>
          <h1>Fill in The Blank</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta quis a. Deserunt veniam, facere quo obcaecati voluptatibus.</p>
        </div>
        <div>
          <div className="style-selector">
            <img src="./src/assets/img1.jpg" className={ classNames({ active: idx === 0 }) } onClick={ handleClick(0) }/>
            <img src="./src/assets/img2.jpg" className={ classNames({ active: idx === 1 }) } onClick={ handleClick(1) }/>
            <img src="./src/assets/img3.jpg" className={ classNames({ active: idx === 2 }) } onClick={ handleClick(2) }/>
            <button> Create CV </button>
          </div>
          <div className="mini">
            <img src="./src/assets/mini.webp" alt="" />
          </div>
        </div>
      </section>
      <section className="actions">
        <div>
          <p> <strong>About</strong> Thanks to our professional CV builder you won't waste your hours on designing and tweaking your CV. </p>
          <span>For support <a href="mailto:support@gmail.com">support@gmail.com</a></span>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="icon-container" id="icon1">
              <img src="./src/assets/icon1.svg" alt="" />
            </div>
            <h3>Choose your</h3>
            <span>Sports betting, lottery and bingo playing for the fun.</span>
          </div>
          <div className="card">
            <div className="icon-container" id="icon2">
              <img src="./src/assets/icon2.svg" alt="" />
            </div>
            <h3>Edit and change</h3>
            <span>The Myspace page defines the individual.</span>
          </div>
          <div className="card">
            <div className="icon-container" id="icon3">
              <img src="./src/assets/icon3.svg" alt="" />
            </div>
            <h3>Download your</h3>
            <span>Personal choices and the overall personality of the person.</span>
          </div>
        </div>
      </section>
    </>
  );
}