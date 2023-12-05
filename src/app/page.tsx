'use client'
import Logo from '../assets/sigla.png';
import NewsLogo from '../assets/news.png'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { LoadingSpinner } from '@/components/loadingSpinner/loadingSpinner.component';

export default function Home (){

  const [feed, setFeed] = React.useState<News[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [isEmpty, setIsEmpty] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();

        if (data.feed && data.feed.length > 0) {
          setFeed(data.feed);
        } else {
          setIsEmpty(true);
        }

        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching news: ', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchNews();
  }, []);


  const noNewsAvailable = !loading && isEmpty;
  let newsContent;

  if (loading) {
    newsContent = <div className="text-center p-10"><LoadingSpinner /></div>;
  } else if (noNewsAvailable) {
    newsContent = <div className="text-center">No news available</div>;
  } else {
    newsContent = (
      <div className="flex flex-wrap justify-center">
        {feed.map((news: News) => (
          <div key={news.id} className="card lg:card-side bg-base-300 shadow-2xl border mx-4 my-4 flex-grow p-4 w-full md:w-80 min-h-fit max-w-7xl">
            <figure>
              <Image src={NewsLogo} alt={news.title} width={70} height={70}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news.description}</p>
              <p>{news.date}</p>
              <div className="card-actions justify-end">
                <Link href={`/news/${news.id}`}><button className="btn btn-primary">Citește</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }


  return (

    <div className="min-h-screen flex flex-col md:flex-row bg-base-300 overflow-x-auto">
        {/* Presentation Container */}
        <div className="md:flex-1 flex justify-center p-8 bg-base-300 min-w-screen-md mx-auto md:max-w-screen-2xl overflow-x-auto">
          <div className="max-w-lg text-center">
            <div className="mockup-window border bg-base-200 shadow-xl">
              <div className="flex justify-center px-4 md:px-0 py-16 bg-base-100">
                <div className="hero min-w-screen bg-base-100">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={Logo} alt='LOGO' width={200} height={234}/>
                    <div>
                      <h1 className="text-5xl font-bold">ACE</h1>
                      <p className="py-6">Facultatea de Automatică, Calculatoare și Electronică</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Container */}


    <div className="md:flex-1 flex flex-col max-w-screen-md mx-auto items-center justify-center p-8 bg-base-100 overflow-x-auto border md:max-w-screen-2xl">
      <Link href="/news"><button className="btn btn-primary mb-4">Toate știrile</button></Link>
      {newsContent}
    </div>

      </div>
      
  );
}
