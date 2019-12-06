//This code go at the end of your theme's function.php file

function add_js_scripts() {
	wp_enqueue_script( 'script_locker', get_template_directory_uri().'/js/script_locker.js', array('jquery'), '2.1', true );

	// pass Ajax Url to script.js
	wp_localize_script('script_locker', 'ajaxurl', admin_url( 'admin-ajax.php' ) );
}
add_action('wp_enqueue_scripts', 'add_js_scripts');

add_action( 'wp_ajax_mon_action', 'mon_action' );
add_action( 'wp_ajax_nopriv_mon_action', 'mon_action' );

function mon_action() {

	$email = $_POST['email'];
	
	wp_mail('yourmail@mail.com', 'Someone watched your video', $email);

	die();
}
