
import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    // console.log(res)
    try {
      const newsFeed = await prisma.post.findMany({
        where: { published: true },
      });

    return NextResponse.json({feed: newsFeed})

      
    } catch (error) {
      console.error(error);
      
    }
    
    
}