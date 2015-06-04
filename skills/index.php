<?php
/**
 * Created by IntelliJ IDEA.
 * User: flo
 * Date: 10/05/15
 * Time: 21:36
 */
if ($_SERVER['REQUEST_URI'] == '/skills/index.php?type=dev') {
    include('views/skills_dev.html');
} else if ($_SERVER['REQUEST_URI'] == '/skills/index.php?type=design') {
    include('views/skills_design.html');
} else if ($_SERVER['REQUEST_URI'] == '/skills/index.php?type=tools') {
    include('views/skills_tools.html');
}