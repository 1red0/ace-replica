const groupNewsByDate = (newsList: News[]): Record<string, News[]> => {
    const groupedNews: Record<string, News[]> = {};
    newsList.forEach((news) => {
      const date = news.date;
      if (!groupedNews[date]) {
        groupedNews[date] = [];
      }
      groupedNews[date].push(news);
    });
    return groupedNews;
  };

export default groupNewsByDate