import { useState } from 'react';
import { useEffect } from 'react';

const API_KEY = 

async function getHeadlines(search) {
    let url = 'https://newsapi.org/v2/';
    
    if (search === '') {
      url += `/top-headlines?country=us&apiKey=${API_KEY}`;
    }
    else {
      url += `/everything?q=${search}&apiKey=${API_KEY}`;
    }
    
console.log(url);

    let res = await fetch(url);
    let data = await res.json();
    let articles = data.articles;

    return articles.map((article) => ({
      title: article.title,
      url: article.url,
    }));
}

export function useNewsArticles(search) {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setHeadlines(await getHeadlines(search));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [search]);

  return {
    loading,
    headlines,
    error
  };
}