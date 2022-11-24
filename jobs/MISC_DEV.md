# General dump file

> Drop notess from various files

- Memcache: The Memcached technology speeds up database calls, API calls and page rendering by storing data and objects in memory to reduce the number of times a database is queried. To configure your website to work with memory cache, first check if your application has the functionality to work with Memcached. Then you need to enable the Memcached option from here, and take the hostname and generated password to set up your website. For more information on how to configure a specific application to work with Memcached
- page rules: 1) browser integrity check on, 2) always use https, 3) 1 again wtf
- network: websockets – ip geolocation
- scrape shield: Email Address Obfuscation – server side excludes
- caching: caching level: standard – expiration = 24 days – always online, new is set to “aggressive” , cache purge
- crypto: hosts: fairmountpetservice.com, *.fairmountpetservice.com (2 hosts) , always use https, opportunistic encryption, onion routing
- speed: minify js, css, html – enable accelerated mobile links (yes for both options) – brotli – rocket loader

### Responsive Layouts TWO

- TAKEAWAY: percentages, em, rem are responsible, pixels are not | max-width on parent, rarely ever on child | doublt true or fixed heights
- TAKEAWAY: setting the width of a parent AND the child as a percentage | 
- TAKEAWAY: ALWAYS width %, max-width px, and most times margin 0, auto | 
- TAKEAWAY: rem for font ALWAYS, rem for padding on buttons, em for padding, magin, height, width, etc | :root is = html for setting font-size but :root is higher | 
- TAKEAWAY: don't allow text to stretch full width, max-width allows you to design for large screens | bottom-margin for an element for btn below it | 
- TAKEAWAY: don't understand except eight: 100vh for hero images |  using vh for titles is great as the viewport size changes though you may need media queries  where vmax and vmin are useful try vmin for titles in the font size | do extensive testing (screen sizes and orientations) | 
- day5 & 6 - skip, day 7 - - use more divs for easier control | `<link>` vs @ for Google fonts
- TAKEAWAY: col width 100% given container at 80% giving "margin" | display flex of divs with .row
TAKEAWAY: `<main>` `<section>` `<aside>`, Main > Div.containe > Section | Aside| padding fol cols more than margin |  align-self: flex-start; | justify content is all about spacing |  image max-width 100 - which makes all your images responsive | 

### misc

Wireframe tutorial
- sketch out EVERY section on each page - start with a sitemap though - make notes about nav links, buttons, etc.
- label the sections and what is in them - you want a consistent header on all the pages - 
- after the main pages consider doing internal pages: category pages, product pages, search pages - also do mock ups of what the pages will look like on mobile and tablets 
- mobile "heders" - hamburger button on one side and CTA button on other side - add logo in middle and below the above - 

Responsive HTML & CSS Side Menu From Scratch - Traversy
- svg tag with path tags inside - need to learn this
- using svg tag is just one choice for the hamburger icon - and path tag
- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg
- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
- quick summary - nav > then svg tag > below that the ul and li>a items - but then for the slide-out for mobile, go below the nav tag and add a div with an id and class - classes are for style, the id is for js to hook onto 
- `&times;` is the code for the X mark - that's a link, then the other links - 
- the js in script tags - you want to run a fx called openSlideMenu - that will set the width  nd you need to set margin for main content - and you need to add a click event <a> tag for the svg tag - also add an event to the close button 

Mobile First Responsive Contact Form Featuring Grid CSS - Traversy
- nice form - wrapped the form labels and inputs in p tags???
- used > * { } to style every element in the wrapper div - also used rem instead of em for margin 
- gtc 1fr 1fr - form label display: block - paragraph tags have a default top and bottom magin
- grid-column: 1 / 3; - that puts the textarea ans button on their on line since there are only 2 columns
- on larger screen sizes he sett the wrapper to grid with 1fr 2fr - and there is a grid in the 2fr section (the form) as well - I would like to reduce the width of the form elements on large screens but it didn't work
- font-awesome icons cdn - https://www.bootstrapcdn.com/fontawesome/ - he added the `<link>` and then went into  the `<li>` and added an `<i>` with a class of fa and fa-road - also fa-phone and fa-envelope - 
- THEN ANIMATE CSS CDN - https://cdnjs.com/libraries/animate.css - ad 2 classes to the wrapper - animate to tell it use use animate css and then the type of animation you want - bounceInLeft - didn't work for me - 

### WebDev/Code Copy.docx

WP INSTALL:
- afttter extracting the files, you’ll have a folder named ‘wordpress’ – DO NOT copy that folder into your htdocs dev folder, copied the folders and files WITHIN the ‘wordpress’ folder into your dev folder

HTML: 
- html template code https://www.w3schools.com/w3css/w3css_templates.asp  - 39 files
- GREAT: analytics.html, app-launch.html, band, blog-food, clothingstore, gourmetcatering, parallax, photo, restaurant-modal, strart-up, weddinginvite
- B\TW great & good: blog-fashion, cafe, interior-design, kitchen-sink, marketing-website, portfolio-nature, portfolio-ppl2, restaurant-pizza, 
- GOOD: apart-rent.html, architect.html, art, blog, mail, portfolio-dark, portfolio-ppl, 
- OKAY: cv.html, hotel.html, house-design, marketing, photo-bnw, portfolio-bnw, portfolio (???), social-media, split-screen (no <head>), start-page, travel-agency (no <head>), travel,
> Blog:  blog-fashion,  blog, 
> Center menu:  photo-bnw, 
> Sticky, no sidebar: cafe,  marketing-website,  restaurant-pizza, band,  gourmetcatering,  parallax,  strart-up,  architect,  marketing, start-page, 
> Sticky, double sidebar:  social-media, 
> sticky vert menu: analytics, interior-design,  portfolio-nature,  clothingstore,  apart-rent, mail,  portfolio-dark,  portfolio-ppl, 
> hamburger: kitchen-sink,  portfolio-ppl2, blog-food, photo,  house-design (hamburger doesn’t work), 
> landing page:  app-launch,  travel, weddinginvite,  travel-agency
> modal:  restaurant-modal, 
> generic \ misc \ ???: art, cv, hotel,  portfolio-bnw (sticky vert img), split-screen, 
Other templates: https://templated.co/ | https://nicepage.com/html-templates | https://html5up.net/ | https://colorlib.com/wp/free-html-website-templates/ | 

CSS:
- All of Kevin Powell – check his free course stuff, also
- PRICING CARDS: video on cards in CSS/vas/pricing.html and css
- full bleed w\in a container: https://css-tricks.com/full-bleed/ and https://joshwcomeau.com/css/full-bleed/
- responsive tables: https://codepen.io/AllThingsSmitty/pen/MyqmdM  and https://allthingssmitty.com/2016/10/03/responsive-table-layout/ then https://speckyboy.com/responsive-html-table-techniques/ - https://www.codementor.io/@aayusharora/responsive-design-in-tables-7f5e3hspy - https://www.logicalimagination.training/articles/2018/2/css-responsive-tables - https://renenyffenegger.ch/notes/development/web/CSS/tables/responsive - https://magenic.com/thinking/making-tables-responsive-for-mobile-devices - https://j.eremy.net/responsive-table/ - https://gist.github.com/AllThingsSmitty/cb32e5a377716bc8f147 - https://blog.apps.npr.org/2014/05/09/responsive-data-tables.html - https://www.orbitmedia.com/blog/responsive-tables/
- LWC Udemy grid-template-columns: repeat(auto-fit, minmax(11em, 1fr)); for responsive images on a row

PHP \ WP:
- Login \ register – Fictional University in header.php – GREAT!
- jointswp & foundation: https://www.reddit.com/r/web_design/comments/7esldy/installed_jointswp_foundation_doesnt_seem_to_load/

MISC ARTICLES:
- defer javascript: https://kinsta.com/blog/defer-parsing-of-javascript/#how-to-defer-parsing-of-javascript-in-wordpress-4-methods

MISCELLANEOUS:
- https://developers.pinterest.com/tools/widget-builder/?

### WebDev/Web Dev Tips.docx

VSCODE:
- link:css	- IMAGES: right-click > copy path – paste that into the image file download popup but hit ENTER to have that path actually in the d\l folder you want - 

IMAGES:
Photos → Unsplash → source.unsplash.com – instead had to go to https://unsplash.com/developers click register as dev, sign-in w\ FB, create an acct – user: Kernix, PW = Kernix_13 – already have an acct: gmail | 13swim | kernix | name -
> in href use https://source.unsplash.com/id – where the id is what is after photo in the link for a photo you opened: https://unsplash.com/photos/rDEOVtE7vOs - 
Icons → fontawesome → search for something like ‘bell’ then Free – click on one – click Download SVG link -  see above - 
SVG Icons: instead of linking using an img tag, copy in the svg and path info, then to change color use svg.class > path { fill: color } 
-  

CSS: 
Grid → grid-template-columns: 50px 1fr makes the 2nd column use up the remaining space - 

From video Web Dev Simplified “Can I create this tricky CSS vertical timeline”
- 

WEBPACK SETUP: WPCasts Simple Webpack Configuration (JS & PostCSS - Tailwind) | WordPress
- to get a package.json file, on cmd line do: npm init -y
- then need to install webpack: npm install -D webpack webpack-cli – that will install all the things that do the bundling plus the cmd line interface -
- by default webpack looks for a src directory/folder so create that and inside create index.js – if you do npm run start it will create a dist folder w\ main.js but he gutted the script and added just “webpack” I think – add --config webpack.config.js to the script 
- something about not wanting to pass in a bunch of flags so he created webpack.config.js – the way that every wenpack.config file starts is with a module.exports equal to an object – everything in the curly brackets will tell webpack what to use -
- the top layer of the module.exports object is global settings for webpack as well as for a main entry point for your javascript -
> First thing: give the object a mode – set it to “development” b\c the default in production and that minifies everything which is difficult to read - 
> he doesn’t like having the src and dist folders in the top directory since it’s in a wp theme -  so he is moving them to another directory called assets -  he has to add assets to the enqueue scripts line in functions.php 
- but now you have to require something out of node so you can change what the directory is – ‘path’ – path is something that is already in node
- then is is adding a global context with a value of path.resolve but for travel site path.resolve is a property of output.path - __dirname means where you are currently at in the folder structure – context is where webpack will assume where index.js is
- now he is doing output – 2 things inside of there – 1. filename, 2. path: path.resolve -
- then another global level property of watch: true, which means you won’t have to keep running npm run start each time you make a change -
- next is to add module rules for tailwind – module is an object – with a value of rules which is an array of objects -
- inside of rules there are lots of objects which are tasks that you want webpack to run – they will be things where you pass in options to them – there are a lot of things that are out of the box with them -
- the first thing that one of these rules take is a RegEx to see what type of file to run this task on – so the first option is test, what it will be testing for - `/\.css$/` where the $ means end of the string -
- next if that is true we will have something run – so next is a use array – w\ the use array, this is where you will start using things called loaders – loaders are the individual tasks that run for any of the css files that it finds – specifically w\ tailwind, tailwind uses postCSS – postcss uses a css loader and a postcss loader… so we need to install a few things for that to work:
> CTRL+C > npm install -D css-loader postcss-loader – then we need to do a few more things in webpack.config b4 we can use those – you would think that when these loaders run they would run from top to bottom – instead it goes from bottom to top, or last to first in the array - 
- so inside the use array pass in an object – first key is loader: then he says this first one will be the first one to run ??? - it’s postcss-loader – and that gets options: another object and give it its identity (?) with a key of ident and then plugins – and that one is an array with 2 plugins: autoprefixer and tailwindcss – those 2 things are required by tailwind
- so npm install -D autoprefixer tailwindcss – then use require() for them in the plugins part – now we should have a postcss loader that will work w\ tailwind -
once you have run postcss on your css file, then after that (new line after opening [ of ‘use’ key – or the reverse order thing) – then you want to run it thru a regular css loader – that will interpret the postcss – and this next loader will interprt that into something that javascript can understand – so this loader is throwing the css into webpack and then it will be loaded thru javascript - 
- so on that new line add another object - with loader and 1 options – the 1 option is very specific to using postcss → importLoaders – that option takes eith a 0, 1, or 2 where 0 is disabled, 1 is use postcss and 2 is use postcss and SASS -
- finally, import ‘./main.css’ in your main js file – then npm run start after adding tailwinds 3 variables into main.css and then you’ll see a lot of tailwind css in the main js file – but we don’t want js to inject the css into our page b\c
- forgot something – from our main.bundled.js to the actual DOM – so we need to install another loader – npm install -D style-loader – add it above the css-loaded line in use – it transform postcss into css into css, then the css-loader turns into something that js can understand then the style-loader takes that and outputs it on the page -
- if you hard refrsh the page you see the dreaded flash of unstyled text – that is b\c it is first going thru the js file so after js has loaded then it is being injected into the page -
- instead of style-loader, need to use a plugin – an actual webpack plugin – I know this one:
- npm install -D mini-css-extract-plugin - MiniCssExtractPlugin goes in 2 places: 1) as a loader – 2) above module, below watch add a plugins array – this is if you have if you use plugins – now it will output a css file into your dist folder - 