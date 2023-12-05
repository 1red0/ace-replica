import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    const id = String(req.nextUrl.searchParams.get('id'))
    console.log(id)

    try {
        const teacherDetails = await prisma.teacher.findUnique({
            where: { id },
            include: {
                department: true,
            }
        });

        if (teacherDetails) {
        return NextResponse.json({ teacher: teacherDetails });
        } else {

        return NextResponse.json({ message: 'No teacher found for the given id' }, { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'An error occurred while fetching teacher details' }, { status: 500 });
    }
  

}