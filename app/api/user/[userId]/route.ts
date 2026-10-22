import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const { userId } = await params;
  const body = await req.json();
  const createdUser = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      firstName: body.firstname,
      lastName: body.lastname,
    },
  });
  return NextResponse.json({ message: "success", createdUser });
};
export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const { userId } = await params;
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  return NextResponse.json(user);
};
