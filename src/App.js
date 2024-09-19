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
  const [volume, setVolume] = useState(0.3); // Default volume

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
      <a className="navbar-brand" href="#about">Navbar</a> {/* Changed label to "Navbar" */}
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#about">About Me</a>
        <a className="nav-item nav-link" href="#portfolios">Portfolios</a>
        <a className="nav-item nav-link" href="#contact">Contact Me</a> {/* New link */}
      </div>
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
          
          <p className="lead pb-3">ABOUT ME</p>
          <p className="lead pb-3">I'm a 20 year old Writer, Voice actor, Streamer and a whole lot of other smaller minor things, but for the time being, the most relevant is that I am a CS student<br /> I do alot of things, These days however, its a whole lot of Dungeons and Dragons 5e, And Voice acting shennanigans with a little self indulgent instagram antics <br></br> Thats really all there is about me, But hey maybe a bit of conversation will bring up a few cool stories...as i sure do have alot </p>

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
          <TestComponent 
  title="Port1" 
  img={port1} 
  onClick={openModal} 
  cardsynopsis={<p className="card-text">Eternity is rarely a blessing <br /> "Til Death do us part? I'm afraid it shall, my dear."</p>}
  modcontent={
    <p>
      It is only human, Only mortal, to crave immortality and its permeance. 
      Like an ethereal dream always out of reach one grasps so tightly at eternal life they neglect the reality of this world. 
      <br /><br /> 
      That eternity is a curse, Not a blessing. <br /> 
      <i>For what is a long lived life, if lived alone?</i> 
      Eternity is a life of goodbyes, a life of running, a life of stagnation in a sea of change. 
      How little would I love you mean, How little would Til death do us part?  
      <br /><br /> 
      <b>To some unfortunate few, I love you, is synonymous to goodbye.</b>
    </p>
  }  
/>


<TestComponent 
  title="Port2" 
  img={port2} 
  onClick={openModal} 
  cardsynopsis={<p className="card-text">A Lie, no matter how beautiful, no matter how exquisite. Will remain a lie.</p>}
  modcontent={
    <p>
      How far would you go for the people you love? The people so deeply entrenched into your heart? 
      Would the price you pay be so gladly steep that you give not just heart, but mind as well? 
      <br /><br /> 
      A journey of tested faith, a battle against destined fate. A Daughter and a Father, a Prince and his King. 
      A battle against the frigid North, Climate and Creature. <br /> 
      <i>A Crown of madness</i> and a song of love, will the crown be a burden beared, or will a madness take root? 
      <br /><br /> 
      <b>Heavy is the head that wears the crown, burdened is the mind that leads the land.</b>
    </p>
  }  
/>



<TestComponent 
  title="Port3" 
  img={port3} 
  onClick={openModal} 
  cardsynopsis={<p className="card-text">A Duty at world's End, a Blind faith to carry the burden. <br /> Heroism? Or Foolishness.</p>}
  modcontent={
    <p>
      Faith, Duty, Sacrifice. Ideals so synonymous and intertwined their meaning may as well be one. 
      <br /><br /> 
      The heroically tragic tale of a Queen gone mad, a hero served by her madness, and a monster whose monstrosity is all but a facade. 
      <i>Sacrifice</i>—their one unifying truth: The queen, the Father, the Monster. 
      <br /><br /> 
      <b>And a sacrifice for the greater good.</b>
    </p>
  }  
/>


            
<TestComponent 
  title="Omniscient Reader's Viewpoint" 
  img={port4} 
  onClick={openModal} 
  cardsynopsis={<p className="card-text">A Reader in a story already well read, and the hero he loved reading about. <br /> To save this world together? Or ruin it in the attempt.</p>}
  modcontent={
    <p>
      One Thousand, Eight Hundred and Sixty Four, how many times will you go back? How many more? How many resets, how many regressions, all to see an ending you've already forgotten, all to save lives already lost. 
      <br /><br /> 
      The grand tale of a regressor and a reader, a story written and born through chance, a sacrifice, a repeat, an acceptance, a hero, and a demon king of salvation. 
      <br /><br />
      <i>"Tell me, you fool. If I continue to regress, will I get to ever meet you again?"</i> 
      <br /><br /> 
      Will their brotherhood, their bond, tenuous and fraying, be able to save humanity? 
      <br /><br /> 
      <b>Or will there be a sacrifice irreversible?</b>
    </p>
  }  
/>

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
    <form onSubmit={(e) => {
      e.preventDefault(); // Prevent the default form submission
      alert("Message has been sent"); // Show the alert
      // Here you can add logic to actually send the message if needed
    }}>
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
