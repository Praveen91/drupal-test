<?php
	$n = count($items) - 1; 
	foreach ($items as $delta => $item){
		if($delta != $n){
		 	print render($item).', '; 
		}else{
			print render($item);
		}
 	}
?>

