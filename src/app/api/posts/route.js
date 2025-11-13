import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const pageParam = searchParams.get("page");
  const cat = searchParams.get("cat");

  const page = parseInt(pageParam, 10) || 1;
  const POST_PER_PAGE = 2;


  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: cat ? { catSlug: cat } : {},
    orderBy: {
      createdAt: "desc",
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);

    return NextResponse.json({ posts, count });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

// CREATE A POST
export const POST = async (request) => {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Not Authenticated!" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });


    if (!post) {
      return NextResponse.json({ message: "Failed to create comment" }, { status: 400 });
    }

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("API error in /api/post:", error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
};