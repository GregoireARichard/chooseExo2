const puppeteer = require('puppeteer');
(async () => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	await page.goto("https://storage.googleapis.com/export.appchoose.io/static/sitemap/sitemap.xml");
	const links = await page.evaluate(() => {
		let links = [];
		let elements = document.querySelectorAll('url');
		for (element of elements) {
           const salesLink = element.querySelector('loc')?.textContent
           if(salesLink.includes("/sales/")){
            links.push({
				Links_of_sales: element.querySelector('loc')?.textContent
			})
           }
		}
		return links;
	});
	console.log(links);
	await browser.close();
})();