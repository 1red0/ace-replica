import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const id = String(req.nextUrl.searchParams.get('id'))
    console.log(id)

    try {
        const newsDetails = await prisma.post.findUnique({
        where: { id, published: true },
        });

        if (newsDetails) {
        return NextResponse.json({ news: newsDetails });
        } else {

        return NextResponse.json({ message: 'No news found for the given id' }, { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred while fetching news details' }, { status: 500 });
    }
  

}