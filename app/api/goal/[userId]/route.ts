import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const body = await req.json();
  const { userId } = await params;
  const createdGoal = await prisma.goal.create({
    data: {
      title: body.title,
      userId,
    },
  });
  return NextResponse.json({ message: "success", createdGoal });
};
