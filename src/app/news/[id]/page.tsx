'use client'
import React from 'react';
import Image from 'next/image';
import { LoadingSpinner } from '@/components/loadingSpinner/loadingSpinner.component';
import NewsLogo from '../../../assets/news.png';

export default function NewsDetails({ params }: Readonly<{ params: { id: string } }>) {
  
  const [news, setNews] = React.useState<News | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchNewsDetails = async () => {
      if (params.id) {
        try {
          const response = await fetch(`/api/post?id=${params.id}`);
          const data = await response.json();
          setNews(data.news);
        } catch (error) {
          console.error('Error fetching news details: ', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchNewsDetails();
  }, [params.id]);

  if (loading) {
    return (
      <div className='flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300'><LoadingSpinner />;</div>
    )
  }

  if (!news) {
    return <div className='flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300'>No news found</div>;
  }

  return (
    <div className="flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300">
      <div className="max-w-3xl w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray">{news.title}</h2>
          <h3>{news.date}</h3>
          <figure className="relative">
            <Image src={NewsLogo} alt={news.title} width={240} height={160} />
          </figure>
          <div className="mt-4">
            <h3 className="text-gray">{news.description}</h3>
            <p>{news.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

