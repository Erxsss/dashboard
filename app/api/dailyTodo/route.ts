import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const createdTodo = await prisma.dailyTodo.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(createdTodo);
  } catch (error) {
    console.error("POST /api/dailyTodo failed:", error);

    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 },
    );
  }
};

export const GET = async () => {
  try {
    const todos = await prisma.dailyTodo.findMany();
    return NextResponse.json(todos);
  } catch (error) {
    console.error("GET /api/dailyTodo failed:", error);

    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 },
    );
  }
};
