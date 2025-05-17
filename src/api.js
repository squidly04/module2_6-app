import { useState } from 'react';
import { useEffect } from 'react';

const API_KEY = '8664ff9ab505442c878d5918f19f09fd'; // dde09fef5dfd4b1698c16f9cd8b49b84

async function getHeadlines() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    
    let res = await fetch(url);
    let data = await res.json();
    let articles = data.articles;

    return articles.map((article) => ({
      title: article.title,
      url: article.url,
    }));
}

export function useNewsArticles() {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setHeadlines(await getHeadlines());
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  return {
    loading,
    headlines,
    error
  };
}