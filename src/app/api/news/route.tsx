
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const newsFeed = await prisma.post.findMany({
        where: { published: true },
      });

    return NextResponse.json({feed: newsFeed})
      
    } catch (error) {
      console.error(error);
      
    }
    
}