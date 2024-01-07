import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles a GET request to retrieve news details from a database using Prisma.
 * @param req - The request object containing information about the incoming request.
 * @returns A JSON response with the news details, a message and a 404 status code if no news details are found, or an error message and a 500 status code if an error occurs.
 */

export async function GET(req: NextRequest) {

    const id = String(req.nextUrl.searchParams.get('id'))

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