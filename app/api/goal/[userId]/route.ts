import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const body = await req.json();
  const { userId } = await params;
  const createGoal = await prisma.goal.create({
    data: {
      title: body.title,
      userId,
    },
  });

};
