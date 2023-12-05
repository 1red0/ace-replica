'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LoadingSpinner } from '@/components/loadingSpinner/loadingSpinner.component';
import NewsLogo from '../../../assets/news.png';

export default function NewsDetails({ params }: Readonly<{ params: { id: string } }>) {
  
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
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
      <div className='flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300'><LoadingSpinner /></div>
    )
  }

  if (!news) {
    return <div className='flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300'>No news found</div>;
  }

  return (
    <div className="flex-1 flex items-center min-h-screen justify-center p-8 bg-base-300">
      <div className="max-w-3xl w-full">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{news.title}</h2>
          <h3 className="text-sm text-gray-500">{news.date}</h3>
          <figure className="relative">
            <Image src={NewsLogo} alt={news.title} width={240} height={160} />
          </figure>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">{news.description}</h3>
            <p className="text-gray-600">{news.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


