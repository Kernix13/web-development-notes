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
