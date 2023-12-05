'use client'
import React from 'react';
import { LoadingSpinner } from '@/components/loadingSpinner/loadingSpinner.component';
import { NewsCard } from '@/components/newsCard/newsCard.component';

const News: React.FC = () => {
  const [feed, setFeed] = React.useState<News[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        setFeed(data.feed);
      } catch (error) {
        console.error('Error fetching news: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  let newsContent;

  if (loading) {
    newsContent = <LoadingSpinner />;
  } else {
    newsContent = (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {feed.map((news, index) => (
          <NewsCard key={news.id} news={news} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300">
      <div className="max-w-3xl w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray">News</h2>
          {newsContent}
        </div>
      </div>
    </div>
  );
};

export default News;
