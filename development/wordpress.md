# WordPress notes

### Short-cuts Folder > Wordpress themes.rtf (deleted)

- underscores, understrap, bones,
- host companys that re good and cheap: name hero, A2 hosting, search: redis siteground, memcached siteground
- **Starter themes**: starter theme is a blank theme with minimum design, and a basic or absolutely no layout.
- These themes usually come with the most commonly used templates in a WordPress theme. They have code to display posts, archive pages, single posts, comments, but with minimum or no styling at all.
- This allows theme developers to quickly start adding their own styles and build a totally new theme.
- Starter themes do not come with styling, you are not supposed to use them as it is, and they are not frameworks with custom hooks, filters, and template tags. However, they can be used to make a parent theme.
- [A Beginner’s Guide to Developing a WordPress Theme](https://www.dreamhost.com/wordpress/guide-to-developing-a-wp-theme/)
- [19 Best WordPress Starter Themes for Developers in 2022](https://www.wpbeginner.com/wp-themes/21-best-wordpress-starter-themes-for-developers/)
- [22 Best WordPress Starter Themes for Developers](https://blog.hubspot.com/website/best-wordpress-starter-themes)
- [WP Bootstrap Starter](https://wordpress.org/themes/wp-bootstrap-starter/)
- [How to Create WordPress Theme from Scratch: Step by Step Guide](https://blog.templatetoaster.com/create-wordpress-theme-scratch/)
- [WordPress Codex: Theme Development](https://codex.wordpress.org/Theme_Development)
- **Parent theme**: a theme that is declared parent by a another theme, child theme
- **Theme framework**: refers to a code library that is used to facilitate development of a theme. There was no good way of upgrading WordPress themes without losing all the custom styling options...led to introducing the concept of Parent Theme and Child Theme.
- WordPress theme frameworks are intended to be used as a parent theme template where all the functionality resides. Developers can then create a child theme to add custom styling while leaving the functionality aspects of it to the framework.
- This method allows you to keep the “framework” of your site strong without modifying how it looks...they speed up development...features can range anywhere from (drag-drop functionality, sliders, SEO widgets, and more).
- Instead of creating a theme from scratch and modifying all the files, creating a child theme can be as simple as creating a new style.css file and customize a few functions using the functions.php file - genesis framework - $59.95
- [10 of the Best Free WordPress Theme Frameworks for Developers](https://lonewolfonline.net/wordpress-theme-frameworks/)
- [Top 10 Open-Source WordPress Theme Frameworks](https://speckyboy.com/wordpress-theme-frameworks/)
- [10 Best WordPress Theme Frameworks 2022](https://athemes.com/collections/best-wordpress-theme-frameworks/)
- [5 WordPress Frameworks](https://digital.com/blog/wordpress-frameworks/)
- [12 Best WordPress Frameworks](https://www.hostinger.com/tutorials/best-wordpress-frameworks)
- [10 Best WordPress Theme Frameworks for 2022](https://blog.hubspot.com/website/best-wordpress-theme-frameworks)
- underscores, understrap, bones, roots, sage
- wordpress starter theme vs framework
- completely from scratch. This is actually simpler than it sounds, because at a minimum you only need two files — `style.css` and `index.php`. At a minimum, you’d probably want a `functions.php` file for custom functions, and perhaps several other template files for the various sections of the site, such as a 404.php template file
- jimmy security - add to functions.php:

```php
add_filter( 'wp_is_application_passwords_available', '\_\_return_false' );
```

customize_register:

- [Adding a custom field to the site identity menu](https://wordpress.stackexchange.com/questions/309981/adding-a-custom-field-to-the-site-identity-menu)
- [WordPress Developer Resources: customize_register](https://developer.wordpress.org/reference/hooks/customize_register/)

```php
function mytheme_customize_register( $wp_customize ) {

    $wp_customize->add_section( 'mytheme_company_section' , array(
      'title'      => __( 'Additional Company Info', 'mytheme' ),
      'priority'   => 30,
    ));

    $wp_customize->add_setting( 'mytheme_company-name', array());
    $wp_customize->add_control( new WP_Customize_Control(
      $wp_customize,
      'mytheme_company_control',
        array(
            'label'      => __( 'Company Name', 'mytheme' ),
            'section'    => 'mytheme_company_section',
            'settings'   => 'mytheme_company-name',
            'priority'   => 1
        )
      )
    );

  // ..repeat ->add_setting() and ->add_control() for mytheme_company-division
}
add_action( 'customize_register', 'mytheme_customize_register' );
```

- wordpress core javascript libraries noconflict jquery wordpress codex
  wordpress thickbox
- Jimmy I. security: no plugin, uses wp-config.php, .htaccess and cloudflare
- Jimmy - my cloudflare \ staging Q: You can ask support if they can remove the CF portal and try creating CF accounts on your own
- flying pages by wp speed matters, ACF & ACF Pro, user role editor, Custom post type UI, relavanssi, Pro WP Rocket, wp migrate db pro,
- ultimate member plugin - $25 / month or free version, Together with User Role Editor (also free) you're basically done
- [How to Properly Move WordPress From Subdomain to Root Domain](https://www.wpbeginner.com/wp-tutorials/how-to-properly-move-wordpress-from-subdomain-to-root-domain/)
- [How to Easily Accept Credit Card Payments on Your WordPress Site](https://www.wpbeginner.com/wp-tutorials/how-to-easily-accept-credit-card-payments-on-your-wordpress-site/)
- canonical - when you use the same keywords - point all to the main article
- BJ lazyload plugin, asset cleanup
- font awesome, stripe-payments, paypal, googleadservices, googleads, google.ca, assets.pinterest.com, log.pinterest.com, static.addtoany.com, paypalobjects.com

### What is this?

I don't use a full blown security plugin, I do it all with code snippets...I'm assuming this would be the same with a Wordfence of IThemes running with the same settings ... I use `define( 'DISALLOW_FILE_EDIT', true );` and `define( 'DISALLOW_FILE_MODS', true );` to deny file editing/plugin adding ect. on the backend. RM has attempted to add a .`htaccess` editor just like Yoast ... The only real difference is that Yoast editor obeys the rules set and makes the editor button unclickable ... RM does not and your `.htaccess` is left exposed to be modified

- [How TO - Hero Image](https://www.w3schools.com/howto/howto_css_hero_image.asp)
- Terms of service example:
- Privacy page example: https://www.vintageheavymetal.com/privacy/
- Cookies page example: https://www.vintageheavymetal.com/cookies/
- Velvet Blues Update URL plugin use for all migrations - can i install WP in public_html, restore my old .html pages, then move my entire /Blog site tp public_html with the same address?
- get rid of the Leverage Browser Caching plugin and hook Cloudflare through WPFastestCache
- [WP Fastest Cache Settings](https://blogaid.net/wp-fastest-cache-settings/)
- [WP Fastest Cache Settings 2022](https://onlinemediamasters.com/wp-fastest-cache-settings/)
- search WP Fastest Cache Blog and the developer name Emre
- [WP Fastest Cache](https://www.wpfastestcache.com/category/blog/)
- RANK MATH - need to create a sitemap when you switch
- [WordPress SEO plugin](https://rankmath.com/wordpress/plugin/seo-suite/)
- PLUGIN: Structured Content json-ld
- [How to Optimize WordPress for Better Performance](https://www.siteground.com/tutorials/wordpress/optimize-performance/#Enable_Dynamic_Caching)

In child theme, functions.php add the following filter

```php
add_filter( 'admin_email_check_interval', '__return_false' );
```

General WordPress:

- [All in one wp migration](https://wordpress.org/plugins/all-in-one-wp-migration/)
- file size issues:
- [Import file size](https://wordpress.org/support/topic/import-file-size/) |
- [How to Increase Maximum Upload File Size in WordPress](https://help.servmask.com/2018/10/27/how-to-increase-maximum-upload-file-size-in-wordpress/) |
- [How to Increase the Maximum File Upload Size in WordPress](https://www.wpbeginner.com/wp-tutorials/how-to-increase-the-maximum-file-upload-size-in-wordpress/) |

author.php

- [WP Dev Themebook: Author Templates](https://codex.wordpress.org/Author_Templates)
- [Twenty_Fourteen author.php](https://github.com/WordPress/WordPress/blob/master/wp-content/themes/twentyfourteen/author.php)
- [Author tags](https://developer.wordpress.org/themes/references/list-of-template-tags/#author-tags)
- [Codex: Author Templates](https://codex.wordpress.org/Author_Templates)

list of template files:

- look at all of these template files 2014: [twentyfourteen theme](https://github.com/WordPress/WordPress/tree/master/wp-content/themes/twentyfourteen)
- 2013!: [thenty_thirteen theme](https://github.com/WordPress/WordPress/tree/master/wp-content/themes/twentythirteen)
- [WordPress Themes](https://github.com/WordPress/WordPress/tree/master/wp-content/themes)

### WebDev/wp-config.docx

Wp-config security

you can also add secutiry via the functions file – and remember the file – search the last two udemy files for the words ‘sanitization’ and ‘validation’ -

- [Best .htaccess Snippets to Improve WordPress Security](https://www.wpexplorer.com/htaccess-wordpress-security/)
- Block Bad Bots, Disable Directory Browsing, Allow Only Selected Files from wp-content, Restrict All Access to wp-includes, Allow only Selected IP Addresses to Access wp-admin, Protect wp-config.php and .htaccess from everyone, Deny Image Hotlinking, Enable Browser Caching, Redirect to a Maintenance page, Custom Error Pages,
- [How to Secure Your WordPress Site with WP-Config.php](https://www.malcare.com/blog/how-to-secure-your-wordpress-site-with-wp-config-php/)
- Change Database Prefix, Disable Editing Theme/Plugins Files, Prevent Users From Installing or Updating Plugin & Themes, Enforce the Use of ‘FTP’, Change Security Keys, Hide the ‘wp-config.php’, Secure the wp-config.php File,
- [How to Secure Your WordPress wp-config.php](https://webdesign.tutsplus.com/tutorials/how-to-secure-your-wordpress-wp-configphp--cms-27737)
- move file???
- search: wordpress protect wp-config.php

some of the below is also theme security

- [32 Extremely Useful Tricks for the WordPress Functions File](https://www.wpbeginner.com/wp-tutorials/25-extremely-useful-tricks-for-the-wordpress-functions-file/) - lots of god stuff here
- [PHP And WordPress Functions That Can Make Your Site Insecure](https://www.smashingmagazine.com/2018/01/php-wordpress-functions-site-insecure/)
- [wp-security-functions on GitHub](https://github.com/anantshri/wp-security)
- [WordPress securtity tips](https://digital.com/wordpress-hosting/security/)
- [25 WordPress Security Tricks to Keep Your Website Safe in 2022
  ](https://www.codeinwp.com/blog/secure-your-wordpress-website/)
- [Theme Security](https://developer.wordpress.org/themes/theme-security/)
- [Hardening WordPress](https://wordpress.org/support/article/hardening-wordpress/)
- [FAQ My site was hacked](https://wordpress.org/support/article/faq-my-site-was-hacked/)
- [How to Secure WordPress 2021](https://websitesetup.org/wordpress-security/)
- [Why You Shouldn’t Use functions.php](https://premium.wpmudev.org/blog/why-you-shouldnt-use-functions-php/)
- [Baseline Security for WordPress Theme Developers](https://torquemag.io/2017/06/introduction-baseline-security-wordpress-theme-developers/)
- [How to Ensure Your Theme Is Secure](https://secure.wphackedhelp.com/blog/wordpress-theme-security/)
- [WordPress Security As A Process](https://www.smashingmagazine.com/2018/06/wordpress-security-as-a-process/)
- [How to Secure WordPress Theme and Plugin Code](https://www.htmlgoodies.com/beyond/cms/how-to-secure-wordpress-theme-and-plugin-code.html)

SPEED:

- [How to Speed Up Your WordPress Site Ultimate 2022 Guide](https://kinsta.com/learn/speed-up-wordpress/)

### WebDev/WordPress Articles.docx

> HUGE AMOUNT OF LINKS

WP Casts: How to clean up your WordPress installation | WordPress Development Tutorial

- things he won't be using: emojis, gutenberg block-library,
- removing wp-embed - https://kinsta.com/knowledgebase/disable-embeds-wordpress/ - added the following to functions:

```php
add_action('wp-footer', function(){
	wp_dequeue_script( 'wp-embed' );
});
```

- if you are using ACF, elementor, or something else, then you won’t need Gutenberg -
- in wp-config add :

```php
define( 'WP_POST_REVISIONS', 5 )
```

Blogs:
Kinsta: https://kinsta.com/blog/
WPMU DEV: https://premium.wpmudev.org/blog/

contract for WP des & dev: ???
https://gist.github.com/malarkey/4031110

security:
https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/

website \ html templates:
you get all the files – JS & CSS – find a design I like to overwrite \_s CSS code – maybe copy js as well from the template sites if possible
https://www.w3schools.com/w3css/w3css_templates.asp | (40)

- https://templated.co/ | transitive, theory, epilogue, typify, spatial, transit, done pg 1
- https://nicepage.com/html-templates |
- https://html5up.net/ |
- https://colorlib.com/wp/free-html-website-templates/

multiple WP sites:
https://kinsta.com/blog/share-logins-wordpress/
https://premium.wpmudev.org/multisite/ - check all that out
https://premium.wpmudev.org/projects/category/plugins/ - read thru the plugins for insights
https://premium.wpmudev.org/blog/wordpress-multi-network/
https://premium.wpmudev.org/blog/ultimate-guide-multisite/
https://premium.wpmudev.org/docs/using-wordpress/wordpress-multisite/
https://premium.wpmudev.org/blog/category/multisite/
https://premium.wpmudev.org/blog/multisite-client-sites/
https://premium.wpmudev.org/blog/domain-mapping-wordpress-multisite/
https://premium.wpmudev.org/blog/wordpress-multisite-domain-mapping/

- did a google seatch for wpmudev multisite & there are more articles on pages 2 & 3of the SERPs

javascript
https://kinsta.com/blog/defer-parsing-of-javascript/#the-different-methods-to-defer-parsing-of-javascript
https://kinsta.com/blog/defer-parsing-of-javascript/#how-to-defer-parsing-of-javascript-in-wordpress-4-methods
https://wpengineer.com/415/use-javascript-libraries-in-and-of-wordpress/ | https://www.sitepoint.com/including-javascript-in-plugins-or-themes/ | https://www.smashingmagazine.com/2011/10/developers-guide-conflict-free-javascript-css-wordpress/ | https://premium.wpmudev.org/blog/adding-jquery-scripts-wordpress/ | https://wordpress.stackexchange.com/questions/7221/how-to-correctly-include-jquery-ui-effects-on-wordpress |
https://make.wordpress.org/plugins/2016/02/17/reminder-javascript-libraries/

WP Search
https://wordpress.stackexchange.com/questions/4192/search-in-wordpress-difference-of-searchpage-php-searchform-php-and-search-php
https://stackoverflow.com/questions/14802498/how-to-display-wordpress-search-results

css:
https://css-tricks.com/full-bleed/
https://joshwcomeau.com/css/full-bleed/
code copy.docx – links for responsive tables
https://joshwcomeau.com/css/full-bleed/
https://kilianvalkhof.com/2020/css-html/full-bleed-layout-using-simple-css/
https://css-tricks.com/newsletter/220-the-principle-of-least-power/
https://grid.layoutit.com/
https://cssgrid-generator.netlify.app/
flex & grid.docx and responsive layouts.docx
https://css-tricks.com/tale-width-max-width/
https://css-tricks.com/considerations-styling-modal/
https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/
https://medium.com/@nataliagoncharova_85641/css-case-study-floats-vs-flex-grid-36c6d42116d0
https://code.likeagirl.io/css-layouts-understanding-the-differences-between-grid-flex-and-float-1d6ed96d3182
https://medium.com/dvt-engineering/css-flexbox-a-useful-alternative-to-div-and-float-551c98d26aeb
https://www.reddit.com/r/web_design/comments/6x5ubv/floating_vs_flexbox_what_do_you_use/
https://www.quora.com/Should-I-use-Flexbox-floats-or-anything-else-for-my-CSS-layout
https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
https://material.io/design/color/the-color-system.html#tools-for-picking-colors

misc:
XAMPP
https://premium.wpmudev.org/blog/setting-up-xampp/
Installing WordPress Locally with XAMPP

- Create a New MySQL Database for Your WordPress Installation: http://localhost/phpmyadmin/ -
  how to update xampp php version
  https://stackoverflow.com/questions/2154762/upgrading-php-in-xampp-for-windows
- https://php.tutorials24x7.com/blog/how-to-update-php-version-in-xampp-on-windows
  https://php.tutorials24x7.com/blog/update-php-version-to-php-8-in-xampp-on-windows
- This looks good: https://wecode101.com/upgrade-xampp-from-php-7-to-8-windows-10
-

xampp Allowed memory size of 268435456 bytes exhausted
https://stackoverflow.com/questions/43838591/fatal-error-allowed-memory-size-exhausted-in-xampp

- https://www.inmotionhosting.com/support/website/error-numbers/allowed-memory-size-exhausted/
-

port 80 xampp issue
https://stackoverflow.com/questions/23317372/xampp-port-80-in-use-by-unable-to-open-process-with-pid-4

-

Wordpress DB size:
https://wpengine.com/support/database-optimization-best-practices/

- https://wpwebsitetools.com/the-average-size-of-a-wordpress-site-faqs-does-size-matter/
-

https://wordpress.stackexchange.com/questions/218588/post-preview-mechanism-architecture
https://www.envano.com/2014/10/creating-a-custom-preview-post-page-in-wordpress/
http://justintadlock.com/archives/2012/09/06/post-formats-aside
https://developer.wordpress.org/themes/advanced-topics/child-themes/
child themes
https://www.hostinger.com/tutorials/how-to-create-wordpress-child-theme
https://kinsta.com/blog/wordpress-child-theme/
https://premium.wpmudev.org/blog/how-to-create-wordpress-child-theme/
https://www.smashingmagazine.com/2016/01/create-customize-wordpress-child-theme/

https://www.reddit.com/r/web_design/comments/7esldy installed_jointswp_foundation_doesnt_seem_to_load/
https://codex.wordpress.org/Right_to_Left_Language_Support  
https://www.webdesignsun.com/tech-blog/create-custom-post-type-wordpress-without-plugin
https://www.wpbeginner.com/wp-tutorials/how-to-create-custom-post-types-in-wordpress/
https://firstsiteguide.com/wordpress-custom-post-types/
https://www.webdesignsun.com/tech-blog/create-custom-post-type-wordpress-without-plugin
https://www.wpbeginner.com/beginners-guide/beginners-guide-to-wordpress-database-management-with-phpmyadmin/  
https://www.hostinger.com/tutorials/wordpress-database
https://themeisle.com/blog/wordpress-customer-database/
https://www.sitepoint.com/working-with-databases-in-wordpress/
https://premium.wpmudev.org/blog/mysql-databases/
https://www.siteground.com/tutorials/php-mysql/create-user-database/
https://www.siteground.com/tutorials/wordpress/transfer/
try this plugin with WPFC optimizations on or off: https://wordpress.org/plugins/phastpress/
https://make.wordpress.org/core/handbook/best-practices/coding-standards/php/
https://www.wpbeginner.com/wp-themes/how-to-add-dummy-content-for-theme-development-in-wordpress/  
https://motopress.com/blog/how-to-import-sample-wordpress-data/  
https://www.tipsandtricks-hq.com/how-to-add-widgets-to-wordpress-themes-footer-1033
https://www.wpbeginner.com/wp-themes/how-to-add-a-wordpress-widget-to-your-website-header/
https://www.greengeeks.com/tutorials/article/how-to-place-a-header-widget-in-wordpress/
https://wordpress.org/support/topic/custom-widget-area-in-the-header/
https://kinsta.com/blog/wordpress-widgets/
https://premium.wpmudev.org/blog/widgetize-page-post-template-wordpress/
https://premium.wpmudev.org/blog/wordpress-development-beginners-widgets-menus/
https://stackoverflow.com/questions/31113603/get-dashicon-to-align-vertically-with-text
https://www.smashingmagazine.com/2015/10/customize-tree-like-data-structures-wordpress-walker-class/

htaccess
https://www.siteground.com/kb/?s=htaccess
https://premium.wpmudev.org/blog/htaccess/
https://blog.templatetoaster.com/wordpress-htaccess-file-guide/#performance-optimisation
https://wordpress.org/support/article/htaccess/
https://httpd.apache.org/docs/2.4/howto/htaccess.html
https://kinsta.com/blog/wordpress-security/
https://securityheaders.com/
https://developer.wordpress.org/cli/commands/core/verify-checksums/
https://kinsta.com/blog/file-integrity-monitoring/
ttps://premium.wpmudev.org/blog/change-database-name/
https://www.wpbeginner.com/wp-tutorials/how-to-change-the-wordpress-database-prefix-to-improve-security/  
https://wordpress.org/support/article/changing-file-permissions/#permission-scheme-for-wordpress
https://www.cloudways.com/blog/protect-wordpress-with-htaccess/
https://www.whoishostingthis.com/resources/htaccess/
https://serverguy.com/security/cpanel-security/
https://www.siteground.com/tutorials/wordpress/security/
https://kinsta.com/blog/wordpress-security/
https://www.cloudways.com/blog/protect-wordpress-with-htaccess/
https://thematosoup.com/wordpress-security-htaccess/
https://www.wpexplorer.com/htaccess-wordpress-security/
https://www.cloudways.com/blog/protect-wordpress-with-htaccess/
https://www.wpbeginner.com/wp-tutorials/9-most-useful-htaccess-tricks-for-wordpress/
https://www.geckoandfly.com/25102/htaccess-snippets-hardening-wordpress-security-hacking/
https://www.wpwhitesecurity.com/restrict-access-wordpress-files-htaccess/
https://wordpress.org/support/article/hardening-wordpress/
https://blog.templatetoaster.com/wordpress-htaccess-file-guide/
https://mageewp.com/use-htaccess-to-improve-wordpress-security.html
https://premium.wpmudev.org/blog/htaccess/

WP $ \ Clients:
https://onlinemediamasters.com/how-to-make-money-with-wordpress/
https://theme4press.com/wordpress-services-offer-clients/
https://www.theistudio.com/wordpress-consultant/
htaccess.docs towards bottom has way more links

Theme dev:
http://frontendbabel.info/articles/webpage-rendering-101/
http://www.lostsaloon.com/technology/7-advantages-of-developing-a-wordpress-custom-theme/
https://www.sitepoint.com/creating-wordpress-themes-overview/  
https://tomelliott.com/wordpress/advantages-developing-bespoke-wordpress-themes
https://tomelliott.com/wordpress/improve-wordpress-website-speed
https://webdesignerwall.com/tutorials/building-custom-wordpress-theme
https://www.dreamhost.com/wordpress/guide-to-developing-a-wp-theme/
https://www.taniarascia.com/developing-a-wordpress-theme-from-scratch
https://blog.templatetoaster.com/create-wordpress-theme-scratch/
https://medium.com/@ethanryan/building-a-custom-wordpress-theme-6fe577c59329
https://www.templatemonster.com/blog/tutorials-build-wordpress-theme/
https://www.lyrathemes.com/bootstrap-wordpress-theme-tutorial-1/
https://vegibit.com/wordpress-theme-development-tutorial-step-by-step/
https://www.hostinger.com/tutorials/create-wordpress-theme-html5
https://www.worldwebtechnology.com/step-by-step-tutorial-wordpress-theme-development/

### WebDev/Child Theme.docx

Child theme basics (from udemy theme 2.1.docx)

- Normal themes: regular updates for security or new functionality or for updates to WP core
- Child theme: 1. has a reference to parent theme in style.css file, 2. include parent style in functions.php file (you have to manually include the parent style), 3. copy template files from parent theme you want to modify
- Parent theme – 1. keeps all original files unedited, 2. b4 loading a file \ page, WP looks to see if that template exists in the child theme, 3. can be updated w\o affecting code in child theme -
- if your parent theme makes a HUGE amount of changes that drastically change how it functions & works, some of the templates you copied may not work (RARE)

Demo child theme

- twentyseventeen-child > style.css – functions.php > get_template_directory_uri goes to the parent theme and gets the stylesheet – but get_stylesheet_directory_uri gets style.css from your child theme
- footer.php in child theme – he added a div of custom-footer which is for a float but the php file has esc_html_e |
- create a folder in your WordPress installation with -child
- create `style.css` file with proper comments: theme name, theme url, desc, author, author url, template, version, text domain & maybe license and license uri
- create `functions.php` with a Fx to pull in \ enqueue parent styles(`get_template_directory_uri`) and child styles (ge`t_stylesheet_directory_uri) and add action of wp enqueue scripts
- `get_template_directory_uri` will always refer to the parent theme folder for assets.
- `get_stylesheet_directory_uri` will refer to the "current" theme folder for assets (which could be the parent or the child, depending on where it is called).

```
 Theme Name:   Your Theme Name Child
 Description:  Your Theme Name Child Theme
 Author:       Your Name
 Author URI:   http://zacgordon.com
 Template:     yourthemename
```

- `get_template_directory_uri` vs `get_stylesheet_directory_uri`: They both work - if only parent theme, use either, but what if you have a child theme
- stylesheet vs stylesheet directory vs template directory: ANSWER: [How to Create a WordPress Child Theme](https://premium.wpmudev.org/blog/how-to-create-wordpress-child-theme/)

> When linking to assets using the mentioned functions you should always be aware that the get*template* family of functions will always point to === the directory of the parent theme while the get*stylesheet* family of functions will always point to the child theme’s directory

1. `get_stylesheet_uri()` => Retrieves stylesheet URI for current theme
1. `get_stylesheet_directory_uri()` => Retrieves stylesheet directory URI for current theme
1. `get_template_directory_uri()` => Retrieves template directory URI for current theme

- only works as `wp_enqueue_style( 'main-style', get_stylesheet_uri());`
- [Child themes](https://developer.wordpress.org/themes/advanced-topics/child-themes/)

1. Create a child theme folder: First, create a new folder in your themes directory, located at wp-content/themes. The directory needs a name. It’s best practice to give a child theme the same name as the parent, but with -child appended to the end, e.g.: astra-child
2. Create a stylesheet: style.css: contains all of the CSS rules and declarations that control the look of your theme. Your stylesheet must contain the below required header comment at the very top of the file. This tells WordPress basic info about the theme, including the fact that it is a child theme with a particular parent. The following information is required:

- Theme Name – needs to be unique to your theme
- Template – the name of the parent theme directory.
- The only required child theme file is style.css, but functions.php is necessary to enqueue styles correctly (below)

3. Enqueue stylesheet: The final step is to enqueue the parent and child theme stylesheets - lots of notes: [Enqueue stylesheet](https://developer.wordpress.org/themes/advanced-topics/child-themes/#3-enqueue-stylesheet)

4. & 5. install and activate theme – zip it, upload it -

- Note:You may need to re-save your menu from Appearance > Menus and theme options (including background and header images) after activating the child theme |

5. adding template files: Other than the functions.php file (as noted above), any file you add to your child theme will overwrite the same file in the parent theme

- it’s best to create a copy of the template files you want to change from the parent theme, then make your modifications to the copied files, leaving the parent files unchanged -
- Tip:There are several plugins which allow you to detect what specific template is being used on the page at which you are looking: 1) What The File, 2) What Template File Am I Viewing?, 3) Debug Bar
- You can also include files in the child theme that are not included in the parent theme. For instance, you might want to create a more specific template than is found in your parent theme, such as a template for a specific page or category archive (e.g. page-3.php would load for a Page w\ the ID of 3)
- See the Template Hierarchy page for more information about how WordPress determines which template to use.

8. using functions.php: Unlike style.css, the functions.php of a child theme does not override its counterpart from the parent. Instead, it is loaded in addition to the parent’s functions.php. (Specifically, it is loaded right before the parent’s file.)

- In that way, the functions.php of a child theme provides a smart, trouble-free method of modifying the functionality of a parent theme
- Do not copy the full content of functions.php of the parent theme into functions.php in the child theme
- The structure of functions.php is simple: An opening PHP tag at the top, and below it, your bits of PHP. In it you can put as many or as few functions as you wish.
- Tip: The fact that a child theme’s functions.php is loaded first means that you can make the user functions of your theme pluggable —that is, replaceable by a child theme— by declaring them conditionally (see code on page)
- search for child on [Theme Functions](https://developer.wordpress.org/themes/basics/theme-functions/)

9. Referencing or Including Other Files: When you need to include files that reside within your child theme’s directory structure, you will need to use get_stylesheet_directory(). Since the style.css is in the root of your child theme’s subdirectory, get_stylesheet_directory() points to your child theme’s directory (not the parent theme’s directory). To reference the parent theme directory, you would use get_template_directory() instead -

- Below is an example illustrating how to use get_stylesheet_directory() when referencing a file stored within the child theme directory (see code on page) - Meanwhile, this example uses get_stylesheet_directory_uri() to display an image that is stored within the /images folder in the child theme directory (see code on page)
- Unlike get_stylesheet_directory(), which returns a file path, get_stylesheet_directory_uri() returns a URL, which is useful for front-end assets

10. Enqueueing Styles and Scripts: Scripts and styles should each be enqueued with their own function, and then those should be wrapped in an action. For more information, read the page on Including CSS and JavaScript.

- WordPress won’t automatically load the stylesheet for your child theme on the front-end. Below is an example of using the wp_enqueue_scripts() action hook to call a function that enqueues the child theme’s stylesheet

11. Special Considerations:

- Post formats: A child theme inherits post formats as defined by the parent theme. But when creating child themes, be aware that using add_theme_support('post-formats') will override the formats as defined by the parent theme, not add to it
- RTL support: To support RTL languages, add a rtl.css file to your child theme, containing (see code on page) - Even if the parent theme does not have an rtl.css file, it’s recommended to add the rtl.css file to your child theme. WordPress will auto-load the rtl.css file only if is_rtl() is true
- Internationalization: Child themes can be prepared for translation into other languages by using the WordPress Internationalization API. There are special considerations regarding internationalization of child themes. To internationalize a child theme follow these steps:

1. Add a languages directory. For example: twentyfifteen-child/languages/
1. Add language files. Your filenames have to be he_IL.po & he_IL.mo (depending on your language), unlike plugin files which are domain-he_IL.xx.
1. Load a textdomain. Use load_child_theme_textdomain() in functions.php during the after_setup_theme action. The text domain defined in load_child_theme_textdomain() should be used to translate all strings in the child theme.
1. Use GetText functions to add i18n support for your strings. (see code below for textdomain ) At this point, strings in the child theme are ready for translation. To ensure they are properly internationalized for translation, each string needs to have the twentyfifteenchild textdomain
1. The text domain defined in load_child_theme_textdomain() should be used to translate all strings in the child theme. In the event that a template file from the parent them has been included, the textdomain should be changed from the one defined in the parent theme to the one defined by the child theme
1. [UI Best Practices](https://developer.wordpress.org/themes/advanced-topics/ui-best-practices/)

From WordPress developer Resources on child themes:

> "A child theme allows you to change small aspects of your site’s appearance yet still preserve your theme’s look and functionality… a child theme inherits the look and feel of the parent theme and all of its functions, but can be used to make modifications to any part of the theme…a child theme lets you upgrade the parent theme without affecting the customizations you’ve made to your site"

- the parent theme includes all the required template files – only include the template files you want to modify

1. create a new folder in your themes directory, located at wp-content/themes/parentName-child
2. create a stylesheet file named style.css, which will contain all of the CSS rules and declarations that control the look of your theme
3. The only required child theme file is style.css, but functions.php is necessary to enqueue styles correctly (below).
4. The final step is to enqueue the parent and child theme stylesheets - https://developer.wordpress.org/themes/advanced-topics/child-themes/#3-enqueue-stylesheet

- The ideal way of enqueuing stylesheets is for the parent theme to load both (parent’s and child’s), but not all themes do this. Therefore, you need to examine the code of the parent theme to see what it does and to get the handle name that the parent theme uses. The handle is the first parameter of wp_enqueue_style().
- Both functions can be used in a parent or a child theme.
- get_template_directory_uri will always refer to the parent theme folder for assets.
- get_stylesheet_directory_uri will refer to the "current" theme folder for assets (which could be the parent or the child, depending on where it is called).
- from twentyseventeen-child theme:

```php
 wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
// child styles
wp_enqueue_style( 'main-css', get_stylesheet_directory_uri() . '/style.css' );
```

- [How to Include Styles in WordPress Child Themes](https://digwp.com/2016/01/include-styles-child-theme/) by Jeff Starr
- Download the Example Child Theme: [WordPress Example Child Theme](https://wp-mix.com/wordpress-example-child-theme/)
- [Kinsta: How to Create a Child Theme in WordPress](https://kinsta.com/blog/wordpress-child-theme/)
