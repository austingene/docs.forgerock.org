<?php
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
 *     Copyright 2014 ForgeRock AS
 *
 */

    if($_SERVER['REQUEST_METHOD'] == "GET")
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        $latest = file_get_contents('latest.json');
        echo $latest;
    }

    elseif($_SERVER['REQUEST_METHOD'] == "OPTIONS")
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header("Content-Length: 0");
        header("Content-Type: text/plain");
    }

    else
    {
        die("Only GET and OPTIONS methods are allowed.");
    }
?>
