import { client } from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

async function getHomePageBaroque() {
  const query = `*[_type == "baroque"][0]`;

  const data = await client.fetch(query);
  return data;
}

export async function GET(req: NextRequest) {
  const data = await getHomePageBaroque();

  return NextResponse.json(data);
}
//
