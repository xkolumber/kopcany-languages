"use server";

import { client } from "./sanity";

export async function getHomePageData() {
  const query = `*[_type == "homepage"][0]`;

  const data = await client.fetch(query);
  return data;
}

export async function getHomePageThemes() {
  const query = `*[_type=='themes']`;

  const data = await client.fetch(query);
  return data;
}

export async function getHomePageBaroque() {
  const query = `*[_type == "baroque"][0]`;

  const data = await client.fetch(query);
  return data;
}

export async function getActualEvents(currentDate: string) {
  const query = `*[_type == 'events' && kedy >= ${currentDate}]`;

  const data = await client.fetch(query);
  return data;
}

export async function getAboutProject() {
  const query = `*[_type=='about_project']`;

  const data = await client.fetch(query);
  return data;
}
