# Blogger sablonválasztó
[Google Blogger](https://blogger.com) blogokba építhető témaválasztó külső stíluslapokból. Csak a kinézetre vonatkozik, az elrendezést nem módosítja.
### Használat
A fájl jQuery-t igényel, ezért azt is importáld, ha szükséges. Helyettesítsd a `<b:skin>` elemet egy üres elemmel (a Blogger XML-sablon igényel egy skin elemet, ne töröld ki teljesen).

A szkript beillesztéséhez használd ezt a linket: https://cdn.rawgit.com/Szuzs/Blogger-themeswitcher/4064d336/themeswitch.js

Egy `data-json` attribútumban add meg a hivatkozott stíluslap-összefoglaló fájlt.

# Blogger themeswitcher
Used on [Google Blogger](https://blogger.com) blogs with external stylesheets, JSON data and CDN. Just the skin element, the template layout is intact (still editable by Blogger template editor).
Choices are stored in a localStorge item, basically "saved" for the next visit.
### Usage
1. jQuery is required, so first get the latest minified version from (https://code.jquery.com). (Not the slim! You'll need AJAX too.)
2. Empty the `<b:skin>' element. Don't delete!
3. Place the themeswitcher.js script somewhere in the `head` after the jQuery import. Use CDN link, I recommend: https://cdn.rawgit.com/Szuzs/Blogger-themeswitcher/4064d336/themeswitch.js
4. The script element should have a `data-json` attribute with the link to your stylesheet-switch controlling json object.
   * "title": the value for the radio button (no special characters, one spaces)
   * "name": the displayed name
   * "href": the URL of the .css file
   * "image": the URL for the header image, if there's any
5. Use [RawGit](http://rawgit.com/) or other CDN-provider, not Github only! (For the proper headers.)
6. Create a new _HTML/JavaScript_ widget. Place `<div class="menu"></div>` in it.

That's all! The script parse the JSON file, get all the names and URLs, create the switcher (you can write some CSS for these too, just don't forget to edit the stylesheets one by one) and load the selected theme. Enjoy!