<?php 
	$social_network = theme_get_setting('social_network', 'savita');
	$email = theme_get_setting('email', 'savita');
	$phone = theme_get_setting('phone', 'savita');
?>
<header id="header" class="has_subheader">
    <!-- Container -->
    <div class="full_header">
        <div class="container">
            <div id="subheader" class="row">
                <div class="sixteen columns">
                    <div class="subheader_inside">
                    	<?php if($page['search']): ?>                       
                        	<?php print render($page['search']); ?>
                        <?php endif; ?>
                        <?php if(!empty($social_network)): ?>
                        	<?php print $social_network; ?>
                        <?php endif; ?>
                        <?php if(!(empty($email) && empty($phone))): ?>
                        <div class="header_contacts">
                        	<?php if(!empty($email)): ?>
                            <div class="header_mail"><?php print $email; ?></div>
                        	<?php endif; ?>
                        	<?php if(!empty($phone)): ?>
                            <div class="header_phone"><?php print $phone; ?></div>
                        	<?php endif; ?>
                        </div>
                    	<?php endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header_container_holder">
        <!-- Container -->
        <div class="container">
            <div class="sixteen columns">
            	<?php if($logo): ?>
                <div id="logo">
                    <div class="logo_img"><a href="<?php print base_path(); ?>" title="<?php print $site_name; ?>" rel="home"><img src="<?php print $logo; ?>" alt="<?php print $site_name; ?>"></a></div>
                </div>
            	<?php endif; ?>
            	<!--DESKTOP MENU STARTS-->
                <div id="mobile_menu_toggler"></div>
                <!-- Main Navigation -->
                <div id="desktop-menu" class="custom_menu8">
                   	<?php if($page['main_menu']): ?>
                   		<?php print render($page['main_menu']); ?>
                   	<?php endif; ?>
                </div>
                <!--DESKTOP MENU ENDS-->
            </div>
        </div>
    </div>
    <!--MOBILE MENU STARTS-->
    <?php if($page['main_menu']): ?>
    <div id="mobile-menu">
       	<?php print render($page['main_menu']); ?>
    </div>
	<?php endif; ?>
    <!--MOBILE MENU ENDS-->
</header>