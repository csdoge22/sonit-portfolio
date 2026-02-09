import fs from 'fs/promises';
import path from 'path';
import { chromium } from 'playwright';
import { injectAxe, getAxeResults } from '@axe-core/playwright';

const REPORT_DIR = path.resolve('reports', 'a11y');
await fs.mkdir(REPORT_DIR, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
const base = process.env.BASE_URL || 'http://127.0.0.1:5173';
await page.goto(base);
await injectAxe(page);

const results = await getAxeResults(page);
const outPath = path.join(REPORT_DIR, `a11y-scan-${Date.now()}.json`);
await fs.writeFile(outPath, JSON.stringify(results, null, 2), 'utf-8');
console.log('A11y scan saved to', outPath);
await browser.close();
