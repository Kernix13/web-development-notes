// Function to sort words then strip out repeats
// Used to get unique keywords from different web languages/tools I've used to get ideas for blog posts. I tend to have a lot of repeats...

const commaSeparated = "local dev, staging, how to build a child theme yourself, template hierarchies, post formats in functions.php & examples and why to use, custom post types in mu-plugings, index, style, screenshot, body_class, post_class, search - yes or no, blank blog page for home.php and front-page - template files, custom author pages, date.php, what is taxonomy?, most common template tags (a lot here), parent vs children pages, custom queries, custom post types, relationships?, page banners, google maps api, live search via js, wp rest api, user roles";

const spaceSeparated = "split sort and filter strings separated by spaces with no repeats repeats repeats";

let commaWords = [];
let spaceWords = [];

function splitStrings(str, separator, output) {
  return str
    .toLowerCase()
    .split(separator)
    .sort((a, b) => a.localeCompare(b))
    .filter(word => {
      if (!output.includes(word)) {
        output.push(word);
      }
    });
}
const commaCount = splitStrings(commaSeparated, ", ", commaWords);
document.getElementById("comma-output").innerHTML = commaWords.join(", ");

splitStrings(spaceSeparated, " ", spaceWords);
document.getElementById("space-output").innerHTML = spaceWords.join(", ");
