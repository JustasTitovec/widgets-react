import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const searchArticles = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term && !results.length) {
      searchArticles();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          searchArticles();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <div>
            <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Terms</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </div>
  );
};

export default Search;
