#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

async function getPuppeteer() {
  try {
    return await import("puppeteer");
  } catch {
    console.log("Installing Puppeteer...");
    execSync("npm install puppeteer", { stdio: "inherit" });
    return await import("puppeteer");
  }
}

const VOLUMES = [
  ["NOTION OPERATING SYSTEM","Turn scattered work into a system that runs itself."],
  ["SAAS FUNNEL ARCHITECT","Build funnels that convert traffic into revenue."],
  ["AI WORKFLOW AUTOMATIONS","Replace repetitive work with scalable AI systems."],
  ["B2B LEAD ENGINE","Generate consistent, high-quality leads."],
  ["PRODUCTIZED SERVICE SYSTEMS","Turn services into scalable revenue machines."],
  ["SAAS CONTENT FACTORY","Produce high-volume authority content."],
  ["CUSTOMER SUCCESS OS","Systemize onboarding and retention."],
  ["FOUNDER PRODUCTIVITY PROTOCOLS","Execute at peak efficiency."],
  ["SALES PLAYBOOK GENERATOR","Close deals with repeatable systems."],
  ["SAAS BRAND IDENTITY SYSTEM","Build a premium brand presence."],
  ["AI MARKET RESEARCH","Extract insights faster than competitors."],
  ["LAUNCH ENGINE","Execute product launches that convert."],
  ["PRICING SYSTEMS","Optimize pricing for maximum revenue."],
  ["SAAS OPERATIONS","Build internal systems that scale."],
  ["VIRAL CONTENT SYSTEM","Create high-reach content consistently."],
  ["FOUNDER LEVERAGE","Remove yourself from operations."]
];

function buildHTML(title, subtext) {
  return `
  <html>
  <body style="margin:0;background:black;color:white;display:flex;align-items:center;justify-content:center;height:100vh;font-family:Arial;">
    <div style="text-align:center;max-width:900px;">
      <h1 style="font-size:80px;">The<span style="color:red;">SaaS</span>sin</h1>
      <h2 style="font-size:50px;">${title}</h2>
      <p style="font-size:24px;color:red;">${subtext}</p>
    </div>
  </body>
  </html>
  `;
}

(async () => {
  const puppeteer = await getPuppeteer();

  const browser = await puppeteer.default.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  const outDir = path.join(__dirname, "output");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

  for (let i = 0; i < VOLUMES.length; i++) {
    const [title, subtext] = VOLUMES[i];

    await page.setContent(buildHTML(title, subtext));

    const filePath = path.join(outDir, `vol_${String(i+1).padStart(2,"0")}.png`);

    await page.screenshot({
      path: filePath,
      type: "png"
    });

    console.log("Generated:", filePath);
  }

  await browser.close();
})();
