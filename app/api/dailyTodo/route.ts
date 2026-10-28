import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const createdTodo = await prisma.dailyTodo.create({
    data: {
      name: body.name,
    },
  });
  return NextResponse.json(createdTodo);
};
export const GET = async (req: NextRequest) => {
  const todos = await prisma.dailyTodo.findMany();
  return NextResponse.json(todos);
};
