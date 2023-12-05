import NewsLogo from '../../assets/news.png';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useRef } from 'react';

export const NewsCard: FC<{ news: News; index: number }> = ({ news, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (cardRef.current) {
        cardRef.current.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s 1 normal both`;
      }
    }, [index]);
  
    return (
      <div ref={cardRef} className="bg-base-100 border rounded-lg overflow-hidden shadow-xl p-6 relative">
      <figure className="relative">
        <Image src={NewsLogo} alt={news.title} width={600} height={400} />
      </figure>
      <div className="mt-4 mb-8"> {/* Adjusted bottom margin */}
        <h2 className="text-xl font-semibold text-gray">{news.title}</h2>
        <p className="text-gray">{news.description}</p>
        <p>{news.date}</p>
      </div>
      <div className="absolute bottom-4 right-4">
        <Link href={`/news/${news.id}`}>
          <button className="btn btn-primary">Citește</button>
        </Link>
      </div>
    </div>
    );
  };