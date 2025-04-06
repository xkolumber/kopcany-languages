"use server";

import { EmailContactPage } from "@/components/EmailContactPage";
import { client } from "./sanity";
import { Resend } from "resend";
import { urlFor } from "./sanityImageUrl";

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
  const query = `*[_type=='about_project'][0]`;

  const data = await client.fetch(query);
  return data;
}

export async function sendForm(name: string, email: string, message: string) {
  const resend = new Resend(process.env.RESEND_API_KEY!);

  const emailHtml = EmailContactPage({
    name,
    email,
    message,
  });
  try {
    const data = await resend.emails.send({
      from: "info@lavkoucezmoravu.eu",
      to: "lavkoucezmoravu@gmail.com",
      subject: "Lávkou cez Moravu | Dotaz od návštevníka",
      html: emailHtml,
    });

    console.log(data);

    if (data.id) {
      return "success";
    } else {
      return "false";
    }
  } catch (error) {
    console.error(error);
    return "false";
  }
}

export async function dynamicImageUrlAboutProject() {
  const query = `*[_type == "about_project"][0]`;
  const data = await client.fetch(query);
  const src = urlFor(data.titulna_foto).url();
  return src;
}

export async function dynamicDescriptionAboutProject() {
  const query = `*[_type == "about_project"][0]`;
  const data = await client.fetch(query);
  const text = data.financovanie_text["sk"];
  return text;
}

export async function getPhotosAboutUs() {
  const query = `*[_type == "about_project"][0]{
    skupina_obrazkov[]{
           asset->{
        _id,
        url
      }
       }
  }`;
  const data = await client.fetch(query);
  return data;
}
