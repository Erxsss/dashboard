import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const { userId } = await params;
  const body = await req.json();
  const createdUser = await prisma.user.create({
    data: {
      firstName: body.firstname,
      lastName: body.lastname,
    },
  });
  return NextResponse.json({ message: "success", createdUser });
};
