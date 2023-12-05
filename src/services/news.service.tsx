import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export const groupNewsByDate = (newsList: News[]): Record<string, News[]> => {
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



export const getNews = async () => {
  const newsFeed = await prisma.post.findMany({
    where: { published: true },
  });
  return {
    props: { 
        feed: newsFeed
      }
  };
};

export async function getFeed() {
  const { props:{feed} } = await getNews();
  return feed;
}