'use client'
import React from 'react';
import NewsLogo from '../../assets/news.png';
import Image from 'next/image';
import { LoadingSpinner } from '@/components/loadingSpinner/loadingSpinner.component';

const NewsCard: React.FC<{ news: News; index: number }> = ({ news, index }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s 1 normal both`;
    }
  }, [index]);

  return (
    <div ref={cardRef} className="bg-base-100 border rounded-lg overflow-hidden shadow-xl p-6">
      <figure className="relative">
        <Image src={NewsLogo} alt={news.title} width={600} height={400} />
      </figure>
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-gray">{news.title}</h2>
        <p className="text-gray">{news.description}</p>
        <p>{news.date}</p>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary">Citește</button>
      </div>
    </div>
  );
};


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
