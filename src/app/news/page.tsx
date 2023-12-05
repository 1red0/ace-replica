'use client';
import { useEffect, useState, useMemo, FC } from 'react';
import { LoadingSpinner } from '@/components/loadingSpinner/loadingSpinner.component';
import { NewsCard } from '@/components/newsCard/newsCard.component';

const News: FC = () => {
  const [feed, setFeed] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const newsPerPage = useMemo(() => 6, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();

        const sortedNews = data.feed.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });

        setFeed(sortedNews);
      } catch (error) {
        console.error('Error fetching news: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = feed.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  let newsContent;

  if (loading) {
    newsContent = <LoadingSpinner />;
  } else {
    newsContent = (
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentNews.map((news, index) => (
            <NewsCard key={news.id} news={news} index={index} />
          ))}
        </div>
        <div className="mt-4">
          {feed.length > newsPerPage && (
            <nav>
              <ul className="flex justify-center">
                {Array.from({ length: Math.ceil(feed.length / newsPerPage) }, (_, index) => (
                  <li key={index} className="mr-2">
                    <button
                      className={`${
                        index + 1 === currentPage ? 'btn btn-primary' : 'btn btn-secondary'
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
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
