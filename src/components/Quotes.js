import React, { useState, useEffect } from 'react';
import './style.css';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=faith', {
      headers: {
        'X-Api-Key': 'ABCDefghI+jKLTaOqgkxvQ==eMp3O3NdPxMEhBQR',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <div className="quote-container">
      <p className="quote">{quote}</p>
      <h5>
        -
        {author}
      </h5>
    </div>
  );
}

export default Quote;
