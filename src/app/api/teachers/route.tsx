
import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const teachersFeed = await prisma.teacher.findMany();

    return NextResponse.json({teachers: teachersFeed})
      
    } catch (error) {
      console.error(error);
      
    }
    
}