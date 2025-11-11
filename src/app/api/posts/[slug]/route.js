import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = await params;

  try {
    const post = await prisma.post.update({
      where: { slug },
      data:{view: {increment: 1}},
      include: {
        user: {
          select: { name: true, email: true, image: true },
        },
        comments: {
          include: {
            user: { select: { name: true } }, 
          },
        },
      }
    });

    if (!post) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("API error in /api/posts/[slug]:", error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};