import React, { useState, useRef } from 'react';
import './App.css';
import lyle from './lyle.jpg';
import port1 from './port1.jpg';
import port2 from './port2.jpg';
import port3 from './port3.jpg';
import port4 from './port4.jpg';
import TestComponent from './card';
import Modal from './CustomModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent('');
  };

  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5); // Default volume

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="App">
     <header className="App-header">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#about">About Me</a>
      <a className="navbar-brand" href="#portfolios">Portfolios</a>
      <a className="navbar-brand" href="#contact">Contact Me</a> {/* New link */}
    </div>
  </nav>
</header>

      {/* About me */}
      <section id="about" className="jumbotron text-center mr-3 pb-3">
        <div className="bg-img"></div>
        <div className="container content">
          <img src={lyle} alt="It's a me! Mario" className="rounded-circle shadow p-img mr-3 mt-3 mb-3" />
          <h1 className="jumbotron-heading">Welcome to my portfolio</h1>
          <p className="lead quote pb-3">
  "Writing is the quiet art of bleeding ink onto a page,<br />
  where every word is a whisper of longing, and every silence is the echo of stories never told."
          </p>
          
          <p className="lead pb-3">~ABOUT ME~</p>
          <p className="lead pb-3">~Well I'm a writer~</p>

        </div>
      </section>

      {/* Portfolios */}
      <div id="portfolios" className="App-body">
        {/* Writing Work Portfolios Heading */}
        <div className="writing-portfolios">
          <h2>Writing Work Portfolios:</h2>
        </div>

        {/* Flexbox container for cards */}
        <div className="cards-wrapper">
          <div className="card-container">
            <TestComponent title="Port1" img={port1} onClick={openModal} 
            modcontent="11111111111111}"
            modcontent2="Test1" />

            <TestComponent title="Port2" img={port2} onClick={openModal} 
            modcontent="22222222222222}" 
            modcontent2="Test2"/>

            <TestComponent title="Port3" img={port3} onClick={openModal} 
            modcontent="33333333333333}" 
            modcontent2="Test3"/>
            
            <TestComponent title="Port4" img={port4} onClick={openModal}
            modcontent="444444444444444}"
            modcontent2="Test4"/>
          </div>

          {/* Audio Controls */}
          <div className="audio-controls">
            <p>Play World of Warcraft - "Invincible"</p>
            <audio id="audio" ref={audioRef} loop>
              <source src="/music/invincible.mp3" type="audio/mpeg" />
            </audio>
            <button className="audio-button" onClick={playAudio}>Play</button>
            <button className="audio-button" onClick={pauseAudio}>Pause</button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              style={{ width: '50%' }} // Make the slider full-width
            />
          </div>

          {modalOpen && (
            <Modal onClose={closeModal}>
              <p>{modalContent}</p>
            </Modal>
          )}
        </div>
      </div>
      {/* Contact Form Section */}
<section id="contact" className="contact-section">
  <div className="contact-wrapper">
    <h2>Contact Me</h2>
    <form>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" className="form-control" id="name" placeholder="Your Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" id="email" placeholder="Your Email" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send</button>
    </form>
  </div>
</section>

    </div>
  );
}

export default App;
