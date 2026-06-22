import { getPart7 } from "@/lib/700-toeic/getPart7";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      test: string;
      passageType: string;
    }>;
  },
) {
  const { test, passageType } = await params;

  return NextResponse.json(getPart7(test, passageType));
}
