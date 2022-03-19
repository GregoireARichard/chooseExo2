# Choose technical interview, second exercise(bonus) - Grégoire Richard
 
In order to realize this exercise, I used **Node.js** with the **"puppeteer"** library

At first I wanted to use a third party software like **screaming frog** that would have allowed me to get every links from the website of Choose.
But I could not sort them.
The second option was using NodeJs with Puppeteer which I did.

The idea I had was to fetch all the links of the website via the sitemap.xml. To get it I went on https://appchoose.io/sitemapxl which redirected me to : https://storage.googleapis.com/export.appchoose.io/static/sitemap/sitemap.xml which is the URL I used in puppeteer's goto function's argument.

The rest of the algorithm is rather simple, a parent element taken as a variable then an iteration through a for .. of, then a declaration of variable of the element I wanted. In this case it was the "<loc>" element.

The results are then put into an array. But before that I obviously had to sort them as some of them didn't have /sales/ in the URL.
In order to do that, I usef a simple condition that allowed me to select the ones I wanted and then push them into the result array.


 