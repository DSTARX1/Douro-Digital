/**
 * Seed content blocks from static data files into the database.
 * Run: npx tsx scripts/seed-content.ts
 * Requires DATABASE_URL environment variable.
 */

import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../lib/schema";

// Static data imports
import {
  aboutHero,
  aboutIntro,
  aboutValues,
  teamIntro,
  teamMembers,
  teamHighlights,
  aboutCTA,
} from "../data/about";
import {
  heroHeadline,
  missionText,
  aboutTopics,
  ctaTexts,
  testimonials,
  videoTestimonials,
  navLinks,
  footerDescription,
  footerContact,
  footerNav,
} from "../data/home";
import { services } from "../data/services";
import { clients } from "../data/clients";
import { workHero } from "../data/work";
import { caseStudies } from "../data/case-studies";
import { blogCategories } from "../data/blog";

const db = drizzle({
  connection: { connectionString: process.env.DATABASE_URL! },
  schema,
});

const blocks: Record<string, unknown> = {
  // About
  "about.hero": aboutHero,
  "about.intro": aboutIntro,
  "about.values": aboutValues,
  "about.team.intro": teamIntro,
  "about.team.members": teamMembers,
  "about.team.highlights": teamHighlights,
  "about.cta": aboutCTA,

  // Home
  "home.hero": heroHeadline,
  "home.mission": missionText,
  "home.aboutTopics": aboutTopics,
  "home.cta": ctaTexts,
  "home.testimonials": testimonials,
  "home.videoTestimonials": videoTestimonials,
  "home.nav": navLinks,
  "home.footer.description": footerDescription,
  "home.footer.contact": footerContact,
  "home.footer.nav": footerNav,

  // Services
  services: services,

  // Clients
  clients: clients,

  // Work
  "work.hero": workHero,

  // Case Studies
  "case-studies": caseStudies,

  // Blog
  "blog.categories": blogCategories,
};

async function seed() {
  console.log(`Seeding ${Object.keys(blocks).length} content blocks...\n`);

  for (const [key, value] of Object.entries(blocks)) {
    await db
      .insert(schema.contentBlocks)
      .values({ key, value, updatedAt: new Date() })
      .onConflictDoUpdate({
        target: schema.contentBlocks.key,
        set: { value, updatedAt: new Date() },
      });
    console.log(`  + ${key}`);
  }

  console.log("\nDone!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
