<?php
/*
Plugin Name: myfaq
Plugin URI: http://wp-master.ir
Description: FAQ Page for wordpress. 
Version: 1.3.2
Author: wp-master.ir
Author URI: http://wp-master.ir
License: GPL2
http://www.gnu.org/licenses/gpl-2.0.html
*/

if(!defined('G_DBG')){
	define('G_DBG' , false ); /* DEBUG SWITCH KEY*/
}
if(G_DBG)
	{
	error_reporting(E_ALL);
	ini_set('dusplay_errors','on');
	}

define('MYFAQ_DIR' 					, dirname( __FILE__ ).DIRECTORY_SEPARATOR);
define('MYFAQ_PATH' 				, plugin_dir_url( __FILE__ ));
define('MYFAQ_TEXT_DOMAIN' 			, 'myfaq');
define('MYFAQ_NAME' 				, 'myfaq');
define('MYFAQ_JS_PATH' 				, MYFAQ_PATH.'CONTENTS/JS/');
define('MYFAQ_CSS_PATH' 			, MYFAQ_PATH.'CONTENTS/CSS/');
define('MYFAQ_IMG_PATH' 			, MYFAQ_PATH.'CONTENTS/IMG/');
define('MYFAQ_PHP_PATH' 			, MYFAQ_PATH.'CONTENTS/PHP/');
define('MYFAQ_PHP_DIR' 				, MYFAQ_DIR.'CONTENTS'.DIRECTORY_SEPARATOR.'PHP'.DIRECTORY_SEPARATOR.'');
define('MYFAQ_LANG_DIR' 			, MYFAQ_DIR.'CONTENTS'.DIRECTORY_SEPARATOR.'LANG'.DIRECTORY_SEPARATOR.'');

require_once 'CONTENTS'.DIRECTORY_SEPARATOR.'load.php';
