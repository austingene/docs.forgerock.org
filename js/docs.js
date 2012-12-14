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
 *     Copyright 2011-2012 ForgeRock AS
 *
 */

function isValidProduct(product) {
  if (product == "openam") return true;
  if (product == "openam-pa") return true;
  if (product == "opendj") return true;
  if (product == "openicf") return true;
  if (product == "openidm") return true;
  if (product == "openig") return true;
  return false;
}

function isValidProductVersion(product, version) {
  if (product == "openam" && version == "10.1.0-Xpress") return true;
  if (product == "openam" && version == "10.0.1") return true;
  if (product == "openam" && version == "10.0.0") return true;
  if (product == "openam-pa" && version == "3.1.0-Xpress") return true;
  if (product == "opendj" && version == "2.5.0-Xpress1") return true;
  if (product == "openicf" && version == "1.1.0.1-Xpress") return true;
  if (product == "openidm" && version == "2.1.0-Xpress") return true;
  if (product == "openidm" && version == "2.0.3") return true;
  if (product == "openidm" && version == "2.0.2") return true;
  if (product == "openig" && version == "2.1.0") return true;
  return false;
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

function clearTextField(srchForm) {
  if (srchForm.q.value == "Google Search") srchForm.q.value = "";
}
function replaceTextIfEmpty(srchForm) {
  if (srchForm.q.value == "") srchForm.q.value = "Google Search";
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
