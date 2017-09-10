<?php 

$out = '';

if(!empty($block->block_id)) {

	$id = 'id="'.$block->block_id.'"';

}else{

	$id = '';

}

if($block->region == 'main_menu'){

	$out .= '<div '.$id.' class="'.$classes.'" '.$attributes.' '.$block->naviteam_block_attributes.'>';

	$out .= render($title_suffix);

	$out .= $content;

	$out .= '</div>';

}elseif($block->region == 'section'){

	$out .= '<div '.$id.' class="'.$classes.'" '.$attributes.' '.$block->naviteam_block_attributes.'>';

	$out .= render($title_suffix);

	if ($block->subject):

		$out .= '<h2>'.$block->subject.'</h2>';

	endif;	

	$out .= $content;

	$out .= '</div>';

}elseif($block->region == 'footer'){

	$out .= '<div class="four columns">';

	$out .= render($title_suffix);

	if ($block->subject):

		$out .= '<h3>'.$block->subject.'</h3>';

	endif;	

	$out .= '<div '.$id.' class="'.$classes.'" '.$attributes.' '.$block->naviteam_block_attributes.'>';

		

	$out .= $content;

	$out .= '</div></div>';

}elseif($block->region == 'sidebar_second'){

	$out .= '<div '.$id.' class="'.$classes.'" '.$attributes.' '.$block->naviteam_block_attributes.'>';

	$out .= render($title_suffix);

	if ($block->subject):

		$out .= '<h4 class="left_title">'.$block->title.'</h4>';

	endif;		

	$out .= $content;

	$out .= '</div>';

}else{

	$out .= '<div '.$id.' class="'.$classes.'" '.$attributes.' '.$block->naviteam_block_attributes.'>';

	$out .= render($title_suffix);

	if ($block->subject):

		$out .= '<h5>'.$block->subject.'</h5>';

	endif;

	$out .= $content;

	$out .= '</div>';	

}

print $out;

?>