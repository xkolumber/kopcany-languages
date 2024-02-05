import { client } from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

async function getHomePageThemes() {
  const query = `*[_type=='themes']`;

  const data = await client.fetch(query);
  return data;
}

export async function GET(req: NextRequest) {
  const data = await getHomePageThemes();

  return NextResponse.json(data);
}
//
