import { client } from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

async function getHomePageText() {
  const query = `*[_type == "homepage"][0].text_o_projekte`;

  const data = await client.fetch(query);
  return data;
}

export async function GET(req: NextRequest) {
  const data = await getHomePageText();

  return NextResponse.json(data);
}
//
