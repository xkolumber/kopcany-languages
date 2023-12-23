import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req:NextApiRequest, res:NextApiResponse) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
      
      // Instructing the Vercel edge to cache the file
      res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      
      // generate sitemap here
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
      <url>
        <loc>https://www.lavkoucezmoravu.eu</loc>
        <lastmod>2023-12-23</lastmod>
        <priority>1</priority>
      </url>
      <url>
        <loc>https://www.lavkoucezmoravu.eu/sk/about_project</loc>
        <lastmod>2023-12-23</lastmod>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://www.lavkoucezmoravu.eu/sk/theme/pamiatky-velkej-moravy</loc>
        <lastmod>2023-12-23</lastmod>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://www.lavkoucezmoravu.eu/sk/baroque</loc>
        <lastmod>2023-12-23</lastmod>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://www.lavkoucezmoravu.eu/sk/theme/po-stopach-t-g-masaryka</loc>
        <lastmod>2023-12-23</lastmod>
        <priority>0.8</priority>
      </url>
    </urlset>`;

    res.end(xml)
  }