import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const createdUser = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      firstName: body.firstname,
      lastName: body.lastname,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });
  return NextResponse.json({ message: "success", createdUser });
};
export const GET = async (
  _req: Request,
  { params }: { params: Promise<{ userId: string }> },
) => {
  const { userId } = await params;
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
};
