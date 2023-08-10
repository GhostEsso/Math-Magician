import React, { useState, useEffect } from 'react';

function RandomQuote() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'V8FzqJZj+pOipGZbfuVsdw==vKvb8VNKkoGE0fLQ',
            'Content-type': 'application/json',
          },
        });
        const quotes = await response.json();
        if (quotes.length > 0) {
          setQuote(quotes[0].quote);
          setAuthor(quotes[0].author); // Set the author of the quote
        } else {
          setQuote('');
          setAuthor('');
        }
      } catch (err) {
        setError(err.message);
      }
    };
    dataFetch();
  }, []);

  if (error) {
    return (
      <div className="Quotes">
        <p>
          Error:
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="Quotes">
      {quote ? (
        <div>
          <p>{quote}</p>
          {author && (
          <p>
            -
            {author}
          </p>
          )}
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default RandomQuote;
