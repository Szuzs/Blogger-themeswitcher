# Blogger sablonválasztó
[Google Blogger](https://blogger.com) blogokba építhető témaválasztó külső stíluslapokból. Csak a kinézetre vonatkozik, az elrendezést nem módosítja.
A választott nézetet egy `localStorage` objektumban tárolja, így a látogatások között megőrződik (böngészőhöz kötött, nem felhasználóhoz).
### Használat
1. Ha nincs a blogon jQuery (amennyiben alapsablont használsz, nincs), a https://code.jquery.com oldalról a legújabb verzió *minified* változatát másold be (nem a *slim*, csak simán minified).
2. Első használat előtt érdemes mindent kitörölni a `<b:skin>` elemből. Magát az elemet ne töröld, különben nem tudod elmenteni a sablont!
3. Egy `script` elemben rakd be a themeswitcher.js fájlt, src attribútumnak a következőt javaslom:  https://cdn.rawgit.com/Szuzs/Blogger-themeswitcher/4123fbfc83d4c0bc4bd7852fde7269e44ff799ca/themeswitch.js
4. A script elemnek legyen egy `data-json` attribútuma, ami egy link a sablonválaszték adataihoz. A JSON objektum felépítése:
   * "titleValue": a rádiógombák értéke és a stíluselemek osztálya (ne használj ékezetes vagy különleges karaktereket, szóközöket)
   * "name": ez a megjelenített név (a láblécben és a választó gomboknál is)
   * "href": a .css fájl URL-címe
   * "image": (ha van) a fejléckép URL-címe
5. Használd a [RawGit](http://rawgit.com/) szolgáltatást, ha CDN-re van szükséged, ne a GitHubról linkelj! (Ez beállítja a megfelelő `Content-Type` fejlécet.)
6. A blogon a kívánt helyre adj egy *HTML/JavaScript* modult, a tartalma a következő legyen: `<div class="menu"></div>`

Ennyi! Minden mást a szkript végez a JSON adatok alapján. Ha szükséges, használhatod a *Személyre szabás* gomb megmaradt lehetőségeit, módosíthatod az elrendezést vagy plusz CSS-t is hozzáadhatsz.

# Blogger themeswitcher
Used on [Google Blogger](https://blogger.com) blogs with external stylesheets, JSON data and CDN. Just the skin element, the template layout is intact (still editable by Blogger template editor).
Choices are stored in a localStorge item, basically "saved" for the next visit.
### Usage
1. jQuery is required, so first get the latest minified version from https://code.jquery.com. (Not the slim! You'll need AJAX too.)
2. To avoid unwanted style inheritance empty the `<b:skin>' element. Don't delete!
3. Place the themeswitcher.js script somewhere in the `head` after the jQuery import. Use CDN link, I recommend: https://cdn.rawgit.com/Szuzs/Blogger-themeswitcher/4123fbfc83d4c0bc4bd7852fde7269e44ff799ca/themeswitch.js
4. The script element should have a `data-json` attribute with the link to your stylesheet-switch controlling json object.
   * "titleValue": the value for the radio button (no special characters, one spaces)
   * "name": the displayed name
   * "href": the URL of the .css file
   * "image": the URL for the header image, if there's any
5. Use [RawGit](http://rawgit.com/) or other CDN-provider, not Github only! (For the proper headers.)
6. Create a new _HTML/JavaScript_ widget. Place `<div class="menu"></div>` in it.

That's all! The script parse the JSON file, get all the names and URLs, create the switcher (you can write some CSS for these too) and load the selected theme. Enjoy!