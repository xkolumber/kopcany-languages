import { client } from "@/lib/sanity";
import { NextRequest, NextResponse } from "next/server";

async function getAboutProject() {
  const query = `*[_type=='about_project']`;

  const data = await client.fetch(query);
  return data;
}

export async function GET(req: NextRequest) {
  const data = await getAboutProject();

  return NextResponse.json(data);
}
//
