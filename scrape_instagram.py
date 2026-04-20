import asyncio
import os
import re
import urllib.request
from playwright.async_api import async_playwright

USERNAME = os.environ.get("INSTAGRAM_USERNAME", "")
PASSWORD = os.environ.get("INSTAGRAM_PASSWORD", "")
TARGET = "usa_boston_shun_mo_ving_tsun"
OUT_DIR = "assets/gallery"
MAX_IMAGES = 100

os.makedirs(OUT_DIR, exist_ok=True)

captured_urls = []

def on_response(response):
    url = response.url
    if ("cdninstagram.com" in url or "fbcdn.net" in url) and any(
        ext in url for ext in [".jpg", ".jpeg", ".png", "&e="]
    ) and "s150x150" not in url and "s320x320" not in url:
        if url not in captured_urls:
            captured_urls.append(url)

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        ctx = await browser.new_context(viewport={"width": 1280, "height": 900})
        page = await ctx.new_page()
        page.on("response", lambda r: on_response(r))

        # Login
        print("Logging in...")
        await page.goto("https://www.instagram.com/accounts/login/", wait_until="domcontentloaded", timeout=60000)
        await page.wait_for_timeout(3000)

        # Handle cookie consent
        for sel in ['button:has-text("Allow all cookies")', 'button:has-text("Accept all")']:
            try:
                if await page.locator(sel).is_visible(timeout=2000):
                    await page.locator(sel).click()
                    await page.wait_for_timeout(1000)
            except:
                pass

        await page.wait_for_selector('input', timeout=15000)
        inputs = await page.query_selector_all('input')
        await inputs[0].fill(USERNAME)
        await inputs[1].fill(PASSWORD)
        await inputs[1].press("Enter")

        # Wait for login to complete
        print("Waiting for login...")
        try:
            await page.wait_for_url(lambda url: "login" not in url, timeout=30000)
        except:
            pass
        await page.wait_for_timeout(4000)

        # Dismiss popups
        for sel in ['button:has-text("Not Now")', 'button:has-text("Not now")', 'button:has-text("Dismiss")', '[aria-label="Dismiss"]']:
            try:
                if await page.locator(sel).first.is_visible(timeout=1500):
                    await page.locator(sel).first.click()
                    await page.wait_for_timeout(1000)
            except:
                pass

        # Go to profile
        print(f"Loading @{TARGET} profile...")
        await page.goto(f"https://www.instagram.com/{TARGET}/", wait_until="domcontentloaded", timeout=60000)
        await page.wait_for_timeout(4000)
        print(f"Current URL: {page.url}")

        # Scroll to load posts and capture image URLs
        print("Scrolling to collect images...")
        last_count = 0
        stale_rounds = 0

        while len(captured_urls) < MAX_IMAGES and stale_rounds < 5:
            await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            await page.wait_for_timeout(3000)

            current = len(captured_urls)
            print(f"  Captured so far: {current}")
            if current == last_count:
                stale_rounds += 1
            else:
                stale_rounds = 0
            last_count = current

        print(f"\nCollected {len(captured_urls)} image URLs. Downloading...")

        downloaded = 0
        for i, url in enumerate(captured_urls[:MAX_IMAGES]):
            try:
                ext = "jpg"
                filename = f"{OUT_DIR}/ig_{i+1:03d}.{ext}"
                if not os.path.exists(filename):
                    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
                    with urllib.request.urlopen(req) as resp, open(filename, "wb") as f:
                        f.write(resp.read())
                downloaded += 1
                print(f"  [{downloaded}] {filename}")
            except Exception as e:
                print(f"  Failed {i+1}: {e}")

        await browser.close()
        print(f"\nDone. {downloaded} images saved to {OUT_DIR}/")

asyncio.run(main())
