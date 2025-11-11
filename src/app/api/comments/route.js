// route.js
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENT OF A POST
export const GET = async (request) => {
  const { searchParams } = new URL(request.url);   
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: { 
        ...(postSlug && {postSlug})
      },
      include: {
        user: {
          select: { 
            name: true, 
            email: true, 
            image: true 
          },
        },
        post: {  
          select: {
            title: true,
            slug: true,
          },
        }
      }
    });

   
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error("API error in /api/comments:", error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};

// CREATE A COMMENT
export const POST = async (request) => {
  const session = await getAuthSession();
  
  if(!session){
    return NextResponse.json({ message: "Not Authenticated!" }, { status: 401 });
  }
  
  try {
    const body = await request.json();
    const comment = await prisma.comment.create({
      data: {...body, userEmail: session.user.email}, 
    });

    
    if (!comment) {
      return NextResponse.json({ message: "Failed to create comment" }, { status: 400 });
    }

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error("API error in /api/comments:", error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};