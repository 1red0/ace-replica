'use client';
import { useEffect, useRef, useState } from 'react';
import NewsLogo from '../../assets/news.png';
import Image from 'next/image';
import groupNewsByDate from '@/services/news.service';
import newsData from '@/dummy-data/news.list';
  
  const NewsCard: React.FC<{ news: News; index: number }> = ({ news, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
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
    const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const groupedNews = groupNewsByDate(newsData);
    const todayNews = groupedNews[selectedDate] || [];
  
    return (
      <div className="flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300">
        <div className="max-w-3xl w-full">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray">News</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {todayNews.map((news, index) => (
                <NewsCard key={news.id} news={news} index={index} />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray">Select Date</h2>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default News;