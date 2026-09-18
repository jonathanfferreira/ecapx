import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));

  console.log('Testing /go ...');
  for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('http://localhost:3000/go/', { waitUntil: 'networkidle' });
    const layout = await page.evaluate(() => ({
      viewport: innerWidth,
      width: document.documentElement.scrollWidth,
    }));
    assert.ok(layout.width <= width, `Horizontal overflow on /go at ${width}: ${layout.width}`);
  }

  // Verify /go content and track attributes
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/go/', { waitUntil: 'networkidle' });
  const goTitle = await page.title();
  assert.ok(goTitle.includes('ECAPX'), `Title should include ECAPX: ${goTitle}`);
  const goH1 = await page.locator('h1').innerText();
  assert.ok(goH1.includes('IDEIAS QUE'), `H1 should contain IDEIAS QUE: ${goH1}`);
  const goCaseLink = page.locator('a[data-track="go-smile-case"]');
  assert.equal(await goCaseLink.count(), 1, 'Should have go-smile-case link');
  const goContactLinks = page.locator('a[data-track="go-contact"], a[data-track="go-contact-bottom"]');
  assert.equal(await goContactLinks.count(), 2, 'Should have 2 contact links');
  // Verify traditional header is hidden on /go
  assert.equal(await page.locator('.site-header').count(), 0, 'Site header should not appear on /go');
  assert.equal(await page.locator('.site-footer').count(), 0, 'Full site footer should not appear on /go');
  assert.ok(await page.locator('.go-footer-pace').innerText().then(t => t.includes('MULTIPLY THE PACE')));

  console.log('Testing /work ...');
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('http://localhost:3000/work/', { waitUntil: 'networkidle' });
    const layout = await page.evaluate(() => ({
      viewport: innerWidth,
      width: document.documentElement.scrollWidth,
    }));
    assert.ok(layout.width <= width, `Horizontal overflow on /work at ${width}: ${layout.width}`);
  }
  const workH1 = await page.locator('h1').innerText();
  assert.ok(workH1.includes('IDEIAS QUE'), `H1 on /work: ${workH1}`);
  const smileWorkLink = page.locator('a[href*="/work/smile-burger"]');
  assert.ok(await smileWorkLink.count() >= 1, 'Should link to /work/smile-burger');

  console.log('Testing /work/smile-burger ...');
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('http://localhost:3000/work/smile-burger/', { waitUntil: 'networkidle' });
    const layout = await page.evaluate(() => ({
      viewport: innerWidth,
      width: document.documentElement.scrollWidth,
    }));
    assert.ok(layout.width <= width, `Horizontal overflow on /work/smile-burger at ${width}: ${layout.width}`);
  }

  // Case study sections check
  const caseH1 = await page.locator('h1').innerText();
  assert.ok(caseH1.includes('DÁ FOME ANTES'), `H1 on case study: ${caseH1}`);
  assert.ok(await page.locator('#desafio-title').count() > 0, 'Section 01 should exist');
  assert.ok(await page.locator('#ideia-title').count() > 0, 'Section 02 should exist');
  assert.ok(await page.locator('#interacao-title').count() > 0, 'Section 03 should exist');
  assert.ok(await page.locator('#produto-title').count() > 0, 'Section 04 should exist');
  assert.ok(await page.locator('#conversao-title').count() > 0, 'Section 05 should exist');
  assert.ok(await page.locator('#mobile-title').count() > 0, 'Section 06 should exist');
  assert.ok(await page.locator('#tech-title').count() > 0, 'Tech section should exist');
  assert.ok(await page.locator('#resultado-title').count() > 0, 'Result section should exist');
  assert.ok(await page.locator('#case-final-title').count() > 0, 'Final CTA should exist');

  // Interactive Exploded Burger Slider check
  const slider = page.locator('#spread-range');
  assert.equal(await slider.count(), 1, 'Slider should be rendered');
  await slider.fill('1');
  const spreadValText = await page.locator('.spread-val').innerText();
  assert.equal(spreadValText, '100% ABERTO', 'Slider interaction should update percentage to 100%');
  await page.locator('.preset-btn:has-text("FECHADO")').click();
  const closedValText = await page.locator('.spread-val').innerText();
  assert.equal(closedValText, '0% ABERTO', 'Preset FECHADO should close layers');

  // Scroll each image into view to trigger lazy loading
  for (const img of await page.locator('img').all()) {
    await img.scrollIntoViewIfNeeded();
    await page.waitForTimeout(30);
  }

  // Verify all images loaded
  const imagesOk = await page.evaluate(() => {
    return [...document.images].every((i) => i.complete && i.naturalWidth > 0);
  });
  assert.ok(imagesOk, 'All images on smile-burger case must be loaded and non-empty');

  // Helper to scroll and trigger lazy images
  async function scrollPage(targetPage) {
    const height = await targetPage.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < height; y += 400) {
      await targetPage.evaluate((y) => window.scrollTo(0, y), y);
      await targetPage.waitForTimeout(40);
    }
    await targetPage.evaluate(() => window.scrollTo(0, 0));
    await targetPage.waitForTimeout(200);
  }

  // Screenshots of the new pages
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/go/', { waitUntil: 'networkidle' });
  await scrollPage(page);
  await page.screenshot({ path: 'verification/go-mobile.png', fullPage: true });

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/work/', { waitUntil: 'networkidle' });
  await scrollPage(page);
  await page.screenshot({ path: 'verification/work-desktop.png', fullPage: true });

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/work/smile-burger/', { waitUntil: 'networkidle' });
  await scrollPage(page);
  await page.screenshot({ path: 'verification/smile-case-desktop.png', fullPage: true });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/work/smile-burger/', { waitUntil: 'networkidle' });
  await scrollPage(page);
  await page.screenshot({ path: 'verification/smile-case-mobile.png', fullPage: true });

  await browser.close();

  if (errors.length) {
    console.error('Errors encountered:', errors);
    process.exit(1);
  }
  console.log('ALL PORTFOLIO & ACQUISITION VERIFICATIONS PASSED SUCCESSFULLY!');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
