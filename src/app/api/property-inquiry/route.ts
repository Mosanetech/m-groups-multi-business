import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {

  const body = await req.json();

  await prisma.propertyInquiry.create({

    data: {

      propertyId: body.propertyId,

      fullName: body.fullName,

      email: body.email,

      phone: body.phone,

      message: body.message,

    },

  });

  return NextResponse.json({
    success: true,
  });

}