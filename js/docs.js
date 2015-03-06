/*
 * CCPL HEADER START
 *
 * This work is licensed under the Creative Commons
 * Attribution-NonCommercial-NoDerivs 3.0 Unported License.
 * To view a copy of this license, visit
 * http://creativecommons.org/licenses/by-nc-nd/3.0/
 * or send a letter to Creative Commons, 444 Castro Street,
 * Suite 900, Mountain View, California, 94041, USA.
 *
 * See the License for the specific language governing permissions
 * and limitations under the License.
 *
 * If applicable, add the following below this CCPL HEADER, with the fields
 * enclosed by brackets "[]" replaced with your own identifying information:
 *     Portions Copyright [yyyy] [name of copyright owner]
 *
 * CCPL HEADER END
 *
 *     Copyright 2011-2015 ForgeRock AS.
 *
 */

/**
 * Format is "product": [ "version", ...].
 * The latest version of a product is usually the first element of the array.
 */
var products = {
    "openam": [
        "12.0.0",
//        "11.0.3",
        "11.0.2",
        "11.0.1",
        "11.0.0",
        "10.1.0",
        "10.0.2",
        "10.0.1",
        "10.0.0"
    ],
    "openam-pa": [
        "3.5.0",
        "3.3.4",
        "3.3.3",
        "3.3.1",
        "3.3.0",
        "3.1.0-Xpress"
    ],
    "opendj": [
        "2.6.9",
        "2.6.2",
        "2.6.1",
        "2.6.0",
        "2.5.0-Xpress1"
    ],
    "openicf": [
        "1.1.1.0"
    ],
    "openig": [
        "3.1.0",
        "3.0.0",
        "2.1.0"
    ],
    "openidm": [
        "3.1.0",
        "3.0.0",
        "2.1.2",
        "2.1.1",
        "2.1.0",
        "2.0.3",
        "2.0.2"
    ]
};

function isValidProduct(product) {
    return products.hasOwnProperty(product);
}

function isValidProductVersion(product, version) {
    return (
      isValidProduct(product)
      && (products[product].indexOf(version) != -1)
    );
}

function setDisplay() {
  var product = getProduct();
  var version = getVersion();
  var uri = getUri();

  if (uri == "") {
    // A dot (.) is not valid in an HTML id attribute value.
    var versionId = version.replace(/\./g,"-");

    $("#overview").addClass("nodisplay");

    if (isValidProductVersion(product, version)) {
      $("#" + product + "-" + versionId).removeClass("nodisplay");
    } else if (isValidProduct(product)) {
      $("#" + product).removeClass("nodisplay");
    } else {
      $("#overview").removeClass("nodisplay");
    }
  } else {
    visitDeepLink();
  }
}

function getQuerystring(key, default_) {
  if (default_==null) default_="";
  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
  var qs = regex.exec(window.location.href);
  if(qs == null) return default_;
  else return qs[1];
}

function getProduct() {
  return getQuerystring("product", "overview");
}

function getVersion() {
  return getQuerystring("version", "");
}

function getUri() {
  return getQuerystring("uri", "");
}

function visitDeepLink() {
  var protocol = location.protocol;
  var host = location.host;
  var pathname = location.pathname;
  var hash = location.hash;

  var safeLocation = protocol + "//" + host + pathname;

  // For the deep link, strip trailing file name + add product, version, URI, hash.
  var deepLink = safeLocation.replace(/[^\\\/]+$/, "") + getProduct() + "/" + getVersion() + getUri() + hash;

  if (isValidProduct(getProduct())) {
    // The setDisplay() function tolerates invalid versions, pointing to the
    // product page instead.
    safeLocation = safeLocation + "?product=" + getProduct() + "&version=" + getVersion();
  }

  $.ajax({
    async: false,
    type: 'HEAD',
    url: deepLink,
    success: function() {
      window.location.assign(deepLink);
    },
    error: function() {
      window.location.assign(safeLocation);
    }
  });
}
