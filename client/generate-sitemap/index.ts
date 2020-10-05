import { config } from "dotenv";
import * as fs from "fs";
import * as path from "path";
import * as url from "url";

import { HOST_NAME } from "../src/const";
config();

function removeDotHtmlFileExtension(fileName: string) {
  return fileName.substr(0, fileName.indexOf(".html"));
}

function main() {
  const buildDir = path.join(__dirname, "../build");
  const articlesDir = path.join(buildDir, "blog");
  const articlesFileName = fs.readdirSync(articlesDir);

  const urls = articlesFileName
    .map((articleFileName) => {
      const articleSlug = removeDotHtmlFileExtension(articleFileName);
      return `  <url>
    <loc>${url.resolve(HOST_NAME, `blog/${articleSlug}`)}</loc>
    <priority>0.5</priority>
  </url>`;
    })
    .join("\n");

  const fileContent = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(path.join(buildDir, "sitemap-blog.xml"), fileContent);

  console.log("👍 Successfully generated sitemap-blog.xml");
}

main();
