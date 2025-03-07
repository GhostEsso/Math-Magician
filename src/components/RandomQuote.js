import React, { useState, useEffect } from 'react';
import './RandomQuote.css';

const MATH_QUOTES = [
  {
    quote: 'Les mathématiques sont la porte et la clé des sciences.',
    author: 'Roger Bacon',
  },
  {
    quote: 'La mathématique est une science dangereuse : elle dévoile les supercheries et les erreurs de calcul.',
    author: 'Galileo Galilei',
  },
  {
    quote: "Les mathématiques sont le langage avec lequel Dieu a écrit l'univers.",
    author: 'Galileo Galilei',
  },
  {
    quote: 'Sans les mathématiques, on ne pénètre point au fond de la philosophie. Sans la philosophie, on ne pénètre point au fond des mathématiques. Sans les deux, on ne pénètre au fond de rien.',
    author: 'Leibniz',
  },
  {
    quote: "L'essence des mathématiques, c'est la liberté.",
    author: 'Georg Cantor',
  },
  {
    quote: 'Les mathématiques sont la musique de la raison.',
    author: 'James Joseph Sylvester',
  },
  {
    quote: 'La vie est bonne à trois choses : étudier les mathématiques, les enseigner, en écrire.',
    author: 'Siméon Denis Poisson',
  },
  {
    quote: "En mathématiques, on ne comprend pas les choses, on s'y habitue.",
    author: 'John von Neumann',
  },
  {
    quote: 'La simplicité est la sophistication suprême.',
    author: 'Leonardo da Vinci',
  },
  {
    quote: 'Les mathématiques ne sont pas une moindre immensité que la mer.',
    author: 'Victor Hugo',
  },
];

function RandomQuote() {
  const [currentQuote, setCurrentQuote] = useState(() => {
    const randomIndex = Math.floor(Math.random() * MATH_QUOTES.length);
    return MATH_QUOTES[randomIndex];
  });

  const getNewQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * MATH_QUOTES.length);
    } while (MATH_QUOTES[newIndex].quote === currentQuote.quote);

    setCurrentQuote(MATH_QUOTES[newIndex]);
  };

  useEffect(() => {
    const intervalId = setInterval(getNewQuote, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="quotes-container">
      <div className="quote-card">
        <blockquote>
          {currentQuote.quote}
        </blockquote>
        <cite>
          —
          {' '}
          {currentQuote.author}
        </cite>
      </div>
    </div>
  );
}

export default RandomQuote;
