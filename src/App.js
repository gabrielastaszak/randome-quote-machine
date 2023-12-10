import React, { useState } from 'react';
import './App.css';
import IconButton from './Components/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [quote, setQuote] = useState('I want my friend to miss me as long as I miss him.');
  const [author, setAuthor] = useState('— Augustine of Hippo');
  const [color, setColor] = useState('rgb(255, 255, 255)'); 

  const generateRandomColor = () => {
    const maxVal = 150; 
    const randomColor = `rgb(${Math.floor(Math.random() * maxVal)}, ${Math.floor(Math.random() * maxVal)}, ${Math.floor(Math.random() * maxVal)})`;
    return randomColor;
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`;

  const handleTweet = () => {
    window.open(tweetUrl, "_blank");
  };

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            setQuote(data.content);
            setAuthor(data.author);
        })
        .catch(error => console.error('Error:', error));

        const newColor = generateRandomColor();
        setColor(newColor);
        document.body.style.backgroundColor = newColor;
};

    return (
      
      <div id="quote-box" style={{ color: color }}>
      
      
      <h1 id="text"><FontAwesomeIcon icon={faQuoteLeft} id="ikonka" />{quote}</h1>
      
      <p id="author">— {author}</p>

      <div className="buttons-container" id="new-quote">

      <a id="tweet-quote" href={tweetUrl} target="_blank" style={{ backgroundColor: color }}>
    <FontAwesomeIcon icon={faTwitter} /> 
</a>

      <IconButton id="button" onClick={fetchQuote} color={color}>New quote</IconButton>
      </div>

      </div>
    );
}

export default App;


