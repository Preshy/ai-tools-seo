// scripts/generate.js
// Run with: npm run generate
// Generates additional keyword entries for data/keywords.json

import fs from 'fs';
import path from 'path';

const tasks = [
  "writing product descriptions",
  "generating LinkedIn posts",
  "creating YouTube thumbnails",
  "transcribing podcasts",
  "writing cold emails",
  "generating blog outlines",
  "removing image backgrounds",
  "creating presentations",
  "summarizing research papers",
  "writing job descriptions",
  "generating social media captions",
  "creating logos for startups",
  "writing meta descriptions",
  "generating FAQ sections",
  "creating video subtitles",
  "writing landing page copy",
  "generating email newsletters",
  "creating infographics",
  "summarizing meeting notes",
  "writing press releases"
];

const categories = ["Content Creation", "Marketing", "Design", "Productivity"];

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

function generateEntry(task) {
  const slug = `best-ai-tool-for-${slugify(task)}`;
  const title = `Best AI Tools for ${task.charAt(0).toUpperCase() + task.slice(1)} in 2026`;
  const category = categories[Math.floor(Math.random() * categories.length)];
  
  return {
    slug,
    title,
    task: task,
    category,
    tools: [
      {
        name: "Tool A",
        bestFor: task,
        pricing: "$X/mo",
        rating: 4.5,
        description: `AI-powered solution for ${task}.`,
        pros: ["Fast", "Accurate", "Easy to use"],
        cons: ["Pricing", "Learning curve"],
        affiliateLink: "https://example.com/?ref=yourid"
      },
      {
        name: "Tool B",
        bestFor: task,
        pricing: "$Y/mo",
        rating: 4.3,
        description: `Alternative AI tool for ${task}.`,
        pros: ["Affordable", "Good support"],
        cons: ["Limited features", "Occasional bugs"],
        affiliateLink: "https://example.com/?ref=yourid"
      }
    ],
    faq: [
      { question: `What is the best AI tool for ${task}?`, answer: "It depends on your budget and specific needs. We recommend starting with Tool A for most users." },
      { question: `Are free AI tools for ${task} worth it?`, answer: "Free tools are great for testing, but paid versions offer better accuracy and support." }
    ]
  };
}

const existing = JSON.parse(fs.readFileSync(path.join('data', 'keywords.json'), 'utf8'));
const newEntries = tasks
  .filter(t => !existing.some(e => e.slug.includes(slugify(t))))
  .map(generateEntry);

const combined = [...existing, ...newEntries];
fs.writeFileSync(path.join('data', 'keywords.json'), JSON.stringify(combined, null, 2));
console.log(`Generated ${newEntries.length} new entries. Total: ${combined.length}`);
