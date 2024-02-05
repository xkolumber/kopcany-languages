import { client } from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

async function getHomePageData() {
  const query = `*[_type == "homepage"][0]`;

  const data = await client.fetch(query);
  return data;
}

export async function GET(req: NextRequest) {
  const data = await getHomePageData();

  return NextResponse.json(data);
}
//
