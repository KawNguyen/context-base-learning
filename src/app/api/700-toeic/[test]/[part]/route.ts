import { getPart5 } from "@/lib/700-toeic/getPart5";
import { getPart6 } from "@/lib/700-toeic/getPart6";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      test: string;
      part: string;
    }>;
  },
) {
  const { test, part } = await params;

  switch (part) {
    case "part-5":
      return NextResponse.json(getPart5(test));

    case "part-6":
      return NextResponse.json(getPart6(test));

    default:
      return NextResponse.json({ message: "Part not found" }, { status: 404 });
  }
}
