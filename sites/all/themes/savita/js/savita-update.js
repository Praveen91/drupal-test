/*
**	index-1 starts
*/
jQuery(document).ready(function(){
	if(jQuery(".circ_numbers_holder.animationBegin").length){
		var opts = {
		    lines: 1, // The number of lines to draw
		    angle: 0.49, // The length of each line
		    lineWidth: 0.05, // The line thickness
		    colorStart: "#ffffff", // Colors
		    colorStop: "#07bee5", // just experiment with them
		    strokeColor: "#f5f5f5", // to see which ones work best for you
		    shadowColor: "#eeeeee",
		    generateGradient: true
		};
		jQuery(".circ_numbers_holder.animationBegin").appear({
		    once: true,
		    forEachVisible: function(i, e) {
		        jQuery(e).data("delay", i);
		    },
		    appear: function() {
		        var delay = 800,
		            stagger = 1000,
		            sequential_delay = stagger * parseInt(jQuery(this).data("delay")) || 0;
		        jQuery(this).find(".circ_counter").each(function(i, e) {
		            jQuery(e).trans(i * delay + sequential_delay + "ms", "-delay");
		            setTimeout(function() {
		                end_nu = parseInt(jQuery(e).find("canvas:first").attr("data-end-nu"));
		                jQuery(e).find("canvas:first").gauge(opts, end_nu);
		                jQuery(e).find(".counter_percent_sign:first").addClass("shown")
		            }, i * delay + sequential_delay);
		        });
		        jQuery(this).removeClass("animationBegin");
		    }
		});
	}
});
jQuery.fn.gauge = function(opts, set_to) {
    this.each(function() {
        var $this = jQuery(this),
            data = $this.data();
        if (data.gauge) {
            //  data.gauge.stop();
            delete data.gauge;	
        }
        if (opts !== false) {
            data.gauge = new Donut(this).setOptions(opts);
            data.gauge.setTextField(document.getElementById($this.next(".circ_counter_text_holder").children(".circ_counter_text").attr("id")));
            data.gauge.maxValue = 100; // set max gauge value
            data.gauge.animationSpeed = 30; // set animation speed (32 is default value)
            data.gauge.set(set_to); // set actual value
        }
    });
    return this;
};



jQuery(document).ready(function() {
	if(jQuery('.portfolio_carousel_block').length){		
		jQuery(".portfolio_carousel_block").jcarousel({
			scroll: (jQuery(window).width() > 768 ? 3 : 1),
			easing: "easeInOutExpo",
			animation: 700
		});
	}
});	
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery(".portfolio_carousel_block").length){
		var el = jQuery(".portfolio_carousel_block"), carousel = el.data("jcarousel"), win_width = jQuery(window).width();
		var visibleItems = (win_width > 768 ? 3 : 1);
		carousel.options.visible = visibleItems;
		carousel.options.scroll = visibleItems;
		carousel.reload();
	}
});






				        
jQuery(".numbers_holder.animationBegin").appear({
	once: true,
	forEachVisible: function (i, e) {
		jQuery(e).data("delay", i);
	},
	appear: function () {
		var delay = 400;

		jQuery(this).find(".counter").each(function (i, e) {
			jQuery(e).trans(i * delay + "ms", "-delay");

			setTimeout(function(){
				end_nu = jQuery(e).find(".counter_hidden:first").attr("data-end-nu");
				jQuery(e).flipCounter("startAnimation", { end_number: end_nu }).find(".counter_desc").addClass("shown");
			}, i * delay);									
	        
	    
		});
		jQuery(this).removeClass("animationBegin");
	}
});







																			
jQuery(document).ready(function($) {

	if($('.posts_carousel').length){							
		$(".posts_carousel").jcarousel({
		   	scroll: ($(window).width() > 768 ? 4 : 1),
		   	easing: "easeInOutExpo",
		   	animation: 700
		});
	}
});

// Reload carousels on window resize to scroll only 1 item if viewport is small if Responsive Mode is enabled				   
jQuery(window).resize(function() {
	if(jQuery(".posts_carousel").length){
	   	var el = jQuery(".posts_carousel"), carousel = el.data("jcarousel"), win_width = jQuery(window).width();									   
	   	var visibleItems = (win_width > 768 ? 4 : 1);
	   	carousel.options.visible = visibleItems;
	   	carousel.options.scroll = visibleItems;
	   	carousel.reload();
	}
}); 
					

/*
**	index-1 ends
*/



/*
** index-2 starts
*/
jQuery(document).ready(function() {	
	if(jQuery('#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963').length){			
		jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963").jcarousel({
			scroll: (jQuery(window).width() > 768 ? 3 : 1),
			easing: "easeInOutExpo",
			animation: 700
		});
	}
});	


// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery('#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963').length){
		var el = jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963"), carousel = el.data("jcarousel"), win_width = jQuery(window).width();
	  	var visibleItems = (win_width > 768 ? 3 : 1);
	   	carousel.options.visible = visibleItems;
	   	carousel.options.scroll = visibleItems;
	   	carousel.reload();
	}
});


jQuery(document).ready(function(){
	if(jQuery(".circ_numbers_holder_2.animationBegin").length){
		var opts_2 = {
		   lines: 1, // The number of lines to draw
		   angle: 0.49, // The length of each line
		   lineWidth: 0.05, // The line thickness
		   colorStart: "#ffffff", // Colors
		   colorStop: "#07bee5", // just experiment with them
		   strokeColor: "#444444", // to see which ones work best for you
		   shadowColor: "#333",
		   generateGradient: true
		};
		jQuery(".circ_numbers_holder_2.animationBegin").appear({
		   once: true,
		   forEachVisible: function(i, e) {
		       jQuery(e).data("delay", i);
		   },
		   appear: function() {
		       var delay = 800,
		           stagger = 1000,
		           sequential_delay = stagger * parseInt(jQuery(this).data("delay")) || 0;
		       jQuery(this).find(".circ_counter").each(function(i, e) {
		           jQuery(e).trans(i * delay + sequential_delay + "ms", "-delay");
		           setTimeout(function() {
		               end_nu = parseInt(jQuery(e).find("canvas:first").attr("data-end-nu"));
		               jQuery(e).find("canvas:first").gauge(opts_2, end_nu);
		               jQuery(e).find(".counter_percent_sign:first").addClass("shown")
		           }, i * delay + sequential_delay);
		       });
		       jQuery(this).removeClass("animationBegin");
		   }
		});
		jQuery.fn.gauge = function(opts_2, set_to) {
		   this.each(function() {
		       var $this = jQuery(this),
		           data = $this.data();
		       if (data.gauge) {
		           //  data.gauge.stop();
		           delete data.gauge;
		       }
		       if (opts_2 !== false) {
		           data.gauge = new Donut(this).setOptions(opts_2);
		           data.gauge.setTextField(document.getElementById($this.next(".circ_counter_text_holder_2").children(".circ_counter_text").attr("id")));
		           data.gauge.maxValue = 100; // set max gauge value
		           data.gauge.animationSpeed = 30; // set animation speed (32 is default value)
		           data.gauge.set(set_to); // set actual value
		       }
		   });
		   return this;
		};
	}
  
});
/*
** index-2 ends
*/

/*
** index-3 starts
*/

jQuery(document).ready(function() {
	if(jQuery("#portfolio_carousel_d55865092402824604e944acac4c220a").length){
	    jQuery("#portfolio_carousel_d55865092402824604e944acac4c220a").jcarousel({
	        scroll: (jQuery(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery("#portfolio_carousel_d55865092402824604e944acac4c220a").length){
	    var el = jQuery("#portfolio_carousel_d55865092402824604e944acac4c220a"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    //carousel.options.visible = visibleItems;
	    //carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});


jQuery(document).ready(function($) {
	if($("#posts_carousel_fdb2bcc7ab3948a1d5c6e171d4eb2b6c").length){
	    $("#posts_carousel_fdb2bcc7ab3948a1d5c6e171d4eb2b6c").jcarousel({
	        scroll: ($(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small if Responsive Mode is enabled				   
jQuery(window).resize(function() {
	if(jQuery("#posts_carousel_fdb2bcc7ab3948a1d5c6e171d4eb2b6c").length){
	    var el = jQuery("#posts_carousel_fdb2bcc7ab3948a1d5c6e171d4eb2b6c"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    carousel.options.visible = visibleItems;
	    carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});


/*
** index-3 ends
*/


/*
** index-4 starts
*/
jQuery(document).ready(function(){
	if(jQuery(".circ_numbers_holder_4.animationBegin").length){
		var opts_4 = {
		    lines: 1, // The number of lines to draw
		    angle: 0.49, // The length of each line
		    lineWidth: 0.05, // The line thickness
		    colorStart: "#ffffff", // Colors
		    colorStop: "#07bee5", // just experiment with them
		    strokeColor: "#f5f5f5", // to see which ones work best for you
		    shadowColor: "#eeeeee",
		    generateGradient: true
		};
		jQuery(".circ_numbers_holder_4.animationBegin").appear({
		    once: true,
		    forEachVisible: function(i, e) {
		        jQuery(e).data("delay", i);
		    },
		    appear: function() {
		        var delay = 800,
		            stagger = 1000,
		            sequential_delay = stagger * parseInt(jQuery(this).data("delay")) || 0;
		        jQuery(this).find(".circ_counter").each(function(i, e) {
		            jQuery(e).trans(i * delay + sequential_delay + "ms", "-delay");
		            setTimeout(function() {
		                end_nu = parseInt(jQuery(e).find("canvas:first").attr("data-end-nu"));
		                jQuery(e).find("canvas:first").gauge(opts_4, end_nu);
		                jQuery(e).find(".counter_percent_sign:first").addClass("shown")
		            }, i * delay + sequential_delay);
		        });
		        jQuery(this).removeClass("animationBegin");
		    }
		});
		jQuery.fn.gauge = function(opts_4, set_to) {
		    this.each(function() {
		        var $this = jQuery(this),
		            data = $this.data();
		        if (data.gauge) {
		            //  data.gauge.stop();
		            delete data.gauge;
		        }
		        if (opts_4 !== false) {
		            data.gauge = new Donut(this).setOptions(opts_4);
		            data.gauge.setTextField(document.getElementById($this.next(".circ_counter_text_holder_4").children(".circ_counter_text").attr("id")));
		            data.gauge.maxValue = 100; // set max gauge value
		            data.gauge.animationSpeed = 30; // set animation speed (32 is default value)
		            data.gauge.set(set_to); // set actual value
		        }
		    });
		    return this;
		};
	}
});



jQuery(document).ready(function() {
	if(jQuery("#portfolio_carousel_259fc6a049bc9b10936b6add83bc1782").length){
	    jQuery("#portfolio_carousel_259fc6a049bc9b10936b6add83bc1782").jcarousel({
	        scroll: (jQuery(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery("#portfolio_carousel_259fc6a049bc9b10936b6add83bc1782").length){
	    var el = jQuery("#portfolio_carousel_259fc6a049bc9b10936b6add83bc1782"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    carousel.options.visible = visibleItems;
	    carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});



jQuery(document).ready(function($) {
    if($("#posts_carousel_11bd78ad20b9c797cde1684d907f90ff").length){
        $("#posts_carousel_11bd78ad20b9c797cde1684d907f90ff").jcarousel({
            scroll: ($(window).width() > 768 ? 4 : 1),
            easing: "easeInOutExpo",
            animation: 700
        });
    }
});
// Reload carousels on window resize to scroll only 1 item if viewport is small if Responsive Mode is enabled                  
jQuery(window).resize(function() {
    if(jQuery("#posts_carousel_11bd78ad20b9c797cde1684d907f90ff").length){
        var el = jQuery("#posts_carousel_11bd78ad20b9c797cde1684d907f90ff"),
            carousel = el.data("jcarousel"),
            win_width = jQuery(window).width();
        var visibleItems = (win_width > 768 ? 4 : 1);
        carousel.options.visible = visibleItems;
        carousel.options.scroll = visibleItems;
        carousel.reload();
    }
});


/*
** index-4 ends
*/

/*
** index-5 starts
*/
jQuery(document).ready(function(){
    if(jQuery(".numbers_holder_5.animationBegin").length){
        jQuery(".numbers_holder_5.animationBegin").appear({
            once: true,
            forEachVisible: function(i, e) {
                jQuery(e).data("delay", i);
            },
            appear: function() {
                var delay = 400;
                jQuery(this).find(".counter").each(function(i, e) {
                    jQuery(e).trans(i * delay + "ms", "-delay");
                    setTimeout(function() {
                        end_nu = jQuery(e).find(".counter_hidden:first").attr("data-end-nu");
                        jQuery(e).flipCounter("startAnimation", {
                            end_number: end_nu
                        }).find(".counter_desc").addClass("shown");
                    }, i * delay);
                });
                jQuery(this).removeClass("animationBegin");
            }
        });
    }
});



jQuery(document).ready(function() {
    if(jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963").length) {
	    jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963").jcarousel({
	        scroll: (jQuery(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
    if(jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963").length){
        var el = jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963"),
            carousel = el.data("jcarousel"),
            win_width = jQuery(window).width();
        var visibleItems = (win_width > 768 ? 3 : 1);
        carousel.options.visible = visibleItems;
        carousel.options.scroll = visibleItems;
        carousel.reload();
    }
});

/*
** index-5 ends
*/


/*
** index-6 starts
*/

jQuery(document).ready(function() {
    if(jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963").length){
        jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963").jcarousel({
            scroll: (jQuery(window).width() > 768 ? 3 : 1),
            easing: "easeInOutExpo",
            animation: 700
        });
    }
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
    if(jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963").length){
        var el = jQuery("#portfolio_carousel_8eb5f7869b6069528edd764eaaf4e963"),
            carousel = el.data("jcarousel"),
            win_width = jQuery(window).width();
        var visibleItems = (win_width > 768 ? 3 : 1);
        carousel.options.visible = visibleItems;
        carousel.options.scroll = visibleItems;
        carousel.reload();
    }
});

jQuery(document).ready(function() {
    if (jQuery(".circ_numbers_holder_6.animationBegin").length) {
        var opts = {
            lines: 1, // The number of lines to draw
            angle: 0.49, // The length of each line
            lineWidth: 0.05, // The line thickness
            colorStart: "#ffffff", // Colors
            colorStop: "#07bee5", // just experiment with them
            strokeColor: "#f5f5f5", // to see which ones work best for you
            shadowColor: "#eeeeee",
            generateGradient: true
        };
        jQuery(".circ_numbers_holder_6.animationBegin").appear({
            once: true,
            forEachVisible: function(i, e) {
                jQuery(e).data("delay", i);
            },
            appear: function() {
                var delay = 800,
                    stagger = 1000,
                    sequential_delay = stagger * parseInt(jQuery(this).data("delay")) || 0;
                jQuery(this).find(".circ_counter").each(function(i, e) {
                    jQuery(e).trans(i * delay + sequential_delay + "ms", "-delay");
                    setTimeout(function() {
                        end_nu = parseInt(jQuery(e).find("canvas:first").attr("data-end-nu"));
                        jQuery(e).find("canvas:first").gauge(opts, end_nu);
                        jQuery(e).find(".counter_percent_sign:first").addClass("shown")
                    }, i * delay + sequential_delay);
                });
                jQuery(this).removeClass("animationBegin");
            }
        });
        jQuery.fn.gauge = function(opts, set_to) {
            this.each(function() {
                var $this = jQuery(this),
                    data = $this.data();
                if (data.gauge) {
                    //  data.gauge.stop();
                    delete data.gauge;
                }
                if (opts !== false) {
                    data.gauge = new Donut(this).setOptions(opts);
                    data.gauge.setTextField(document.getElementById($this.next(".circ_counter_text_holder_6").children(".circ_counter_text").attr("id")));
                    data.gauge.maxValue = 100; // set max gauge value
                    data.gauge.animationSpeed = 30; // set animation speed (32 is default value)
                    data.gauge.set(set_to); // set actual value
                }
            });
            return this;
        };
    }
});

jQuery(document).ready(function($) {
  if($("#posts_carousel_2c8deb82fb444d0da39f7ca6b09c4270").length){
    $("#posts_carousel_2c8deb82fb444d0da39f7ca6b09c4270").jcarousel({
        scroll: ($(window).width() > 768 ? 4 : 1),
        easing: "easeInOutExpo",
        animation: 700
    });
  }
});
// Reload carousels on window resize to scroll only 1 item if viewport is small if Responsive Mode is enabled          
jQuery(window).resize(function() {
  if(jQuery("#posts_carousel_2c8deb82fb444d0da39f7ca6b09c4270").length){
    var el = jQuery("#posts_carousel_2c8deb82fb444d0da39f7ca6b09c4270"),
        carousel = el.data("jcarousel"),
        win_width = jQuery(window).width();
    var visibleItems = (win_width > 768 ? 4 : 1);
    carousel.options.visible = visibleItems;
    carousel.options.scroll = visibleItems;
    carousel.reload();
  }
});

/*
** index-6 ends
*/


/*
** page portfolio starts
*/

jQuery(document).ready(function($) {
	if($('#portfolio_filter').length){
	    $('#portfolio_filter').on('mouseenter touchstart', function() {
	        $('#filter_list').stop(false, true).slideDown({
	            duration: 500,
	            easing: "easeOutExpo"
	        });
	    });
	}
	if($('#portfolio_filter').length){
	    $('#portfolio_filter').on('mouseleave', function() {
	        $('#filter_list').stop(false, true).slideUp({
	            duration: 200,
	            easing: "easeOutExpo"
	        });
	    });
	}
});
jQuery(window).load(function() {
	if(jQuery('#portfolio_items').length){
	    jQuery(function($) {
	        var $container = $('#portfolio_items');
	        $container.isotope({
	            itemSelector: '.isotope_element'
	        });
	        var $optionSets = $('#filter_list'),
	            $optionLinks = $optionSets.find('li div');
	        $optionLinks.click(function() {
	            var selector = $(this).attr('data-option-value');
	            $container.isotope({
	                filter: selector
	            });
	            $("#current_filter").html($(this).html());
	            $('#filter_list').stop(false, true).slideUp({
	                duration: 100,
	                easing: "easeOutExpo"
	            });
	            return false;
	        });
	        jQuery(window).smartresize(function($) {
	            $container.isotope();
	        });
	    });
	}
});

jQuery(document).ready(function(){
	if(jQuery("#filter_list").length){
		var new_w = jQuery("#filter_list").width() - 20;
		jQuery("#current_filter").css('width',new_w);
	}
});
/*
** page portfolio ends
*/


/*
** page portfolio styles starts
*/
//style 1
jQuery(document).ready(function() {
	if(jQuery("#portfolio_carousel_d3f1f7e0191834a9be04b740f72be485").length){
	    jQuery("#portfolio_carousel_d3f1f7e0191834a9be04b740f72be485").jcarousel({
	        scroll: (jQuery(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery("#portfolio_carousel_d3f1f7e0191834a9be04b740f72be485").length){
	    var el = jQuery("#portfolio_carousel_d3f1f7e0191834a9be04b740f72be485"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    carousel.options.visible = visibleItems;
	    carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});
// style 2
jQuery(document).ready(function() {
	if(jQuery("#portfolio_carousel_58a86910a3abb9c8904e3699c311ef45").length){
	    jQuery("#portfolio_carousel_58a86910a3abb9c8904e3699c311ef45").jcarousel({
	        scroll: (jQuery(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery("#portfolio_carousel_58a86910a3abb9c8904e3699c311ef45").length){
	    var el = jQuery("#portfolio_carousel_58a86910a3abb9c8904e3699c311ef45"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    carousel.options.visible = visibleItems;
	    carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});
//style 3
jQuery(document).ready(function() {
	if(jQuery("#portfolio_carousel_0f8066c0649c75480f7a42807c79a56a").length){
	    jQuery("#portfolio_carousel_0f8066c0649c75480f7a42807c79a56a").jcarousel({
	        scroll: (jQuery(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery("#portfolio_carousel_0f8066c0649c75480f7a42807c79a56a").length){
	    var el = jQuery("#portfolio_carousel_0f8066c0649c75480f7a42807c79a56a"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    carousel.options.visible = visibleItems;
	    carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});
//style 4
jQuery(document).ready(function() {
	if(jQuery("#portfolio_carousel_671823a0476240c0c334fee90583c43f").length){
	    jQuery("#portfolio_carousel_671823a0476240c0c334fee90583c43f").jcarousel({
	        scroll: (jQuery(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery("#portfolio_carousel_671823a0476240c0c334fee90583c43f").length){
	    var el = jQuery("#portfolio_carousel_671823a0476240c0c334fee90583c43f"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    carousel.options.visible = visibleItems;
	    carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});
//style 5
jQuery(document).ready(function() {
	if(jQuery("#portfolio_carousel_8925361ac3a035a6c846d0080b045998").length){
	    jQuery("#portfolio_carousel_8925361ac3a035a6c846d0080b045998").jcarousel({
	        scroll: (jQuery(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });

	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery("#portfolio_carousel_8925361ac3a035a6c846d0080b045998").length){
	    var el = jQuery("#portfolio_carousel_8925361ac3a035a6c846d0080b045998"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    carousel.options.visible = visibleItems;
	    carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});
//style 6
jQuery(document).ready(function() {
	if(jQuery("#portfolio_carousel_acea55634e1197e27f1e38ff6a89826e").length){
	    jQuery("#portfolio_carousel_acea55634e1197e27f1e38ff6a89826e").jcarousel({
	        scroll: (jQuery(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
	if(jQuery("#portfolio_carousel_acea55634e1197e27f1e38ff6a89826e").length){
	    var el = jQuery("#portfolio_carousel_acea55634e1197e27f1e38ff6a89826e"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    carousel.options.visible = visibleItems;
	    carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});

/*
** page portfolio styles ends
*/

/*
** page portfolio single image starts
*/
jQuery(document).ready(function() {
        if(jQuery("#portfolio_carousel_single").length){
                jQuery("#portfolio_carousel_single").jcarousel({
                scroll: (jQuery(window).width() > 768 ? 3 : 1),
                easing: "easeInOutExpo",
                animation: 600
                });
        }
});
// Reload carousels on window resize to scroll only 1 item if viewport is small
jQuery(window).resize(function() {
        if(jQuery("#portfolio_carousel_single").length){
                var el = jQuery("#portfolio_carousel_single"),
                carousel = el.data("jcarousel"),
                win_width = jQuery(window).width();
                var visibleItems = (win_width > 768 ? 3 : 1);
                carousel.options.visible = visibleItems;
                carousel.options.scroll = visibleItems;
                carousel.reload();
        }
});
/*
** page portfolio single image ends
*/

/*
** page portfolio single gallery list starts
*/
jQuery(window).load(function() {
	if(jQuery('.portfolio_description_scrolling').length){
	    var $float_box = jQuery('.portfolio_description_scrolling');
	    if (jQuery('.portfolio_page_custom').length > 0) {
	        var header_h = jQuery('header').height();
	        var bodyY = parseInt(jQuery('.portfolio_page_custom').offset().top) - header_h;
	        var float_right_h = jQuery('.portfolio_description').height();
	        var all = jQuery('.portfolio_media').height() + bodyY - float_right_h;
	        jQuery(window).scroll(function() {
	            var win_width = jQuery(window).width();
	            if (win_width > 1050) {
	                var scrollY = jQuery(window).scrollTop();
	                var isfixed = $float_box.css('position') == 'fixed';
	                var end = jQuery('.portfolio_page_custom').height() - float_right_h - 40;
	                var end2 = jQuery('.portfolio_page_custom').height() + (jQuery('.portfolio_description').height() / 2);
	                if ($float_box.length > 0) {
	                    if (scrollY > bodyY && scrollY < all && !isfixed) {
	                        $float_box.stop().css({
	                            position: 'fixed',
	                            top: header_h + 10
	                        });
	                    } else if (scrollY > all) {
	                        $float_box.stop().css({
	                            position: 'relative',
	                            top: end
	                        });
	                    } else if (scrollY < bodyY && scrollY < all && isfixed) {
	                        $float_box.css({
	                            position: 'relative',
	                            top: 0
	                        });
	                    }
	                }
	            }
	        });
	    }
	}
});
/*
** page portfolio single gallery list ends
*/

/*
** page blog single starts
*/
jQuery(document).ready(function($) {
    if(jQuery("#posts_carousel_7d4ea2809aa21cc304dfaa7725f61d9b").length){
        $("#posts_carousel_7d4ea2809aa21cc304dfaa7725f61d9b").jcarousel({
           scroll: ($(window).width() > 768 ? 3 : 1),
           easing: "easeInOutExpo",
           animation: 700
       });
    }
});
// Reload carousels on window resize to scroll only 1 item if viewport is small if Responsive Mode is enabled
jQuery(window).resize(function() {
    if(jQuery("#posts_carousel_7d4ea2809aa21cc304dfaa7725f61d9b").length){
        var el = jQuery("#posts_carousel_7d4ea2809aa21cc304dfaa7725f61d9b"),
        carousel = el.data("jcarousel"),
        win_width = jQuery(window).width();
        var visibleItems = (win_width > 768 ? 3 : 1);
        carousel.options.visible = visibleItems;
        carousel.options.scroll = visibleItems;
        carousel.reload();
    }
});
/*
** page blog single ends
*/


/*
**  page carousels starts
*/
jQuery(document).ready(function($) {
     if($("#posts_carousel_3547d26787c91e402ffbc6829c105e3c").length){
          $("#posts_carousel_3547d26787c91e402ffbc6829c105e3c").jcarousel({
            scroll: ($(window).width() > 768 ? 3 : 1),
            easing: "easeInOutExpo",
            animation: 700
        });
     }
});
// Reload carousels on window resize to scroll only 1 item if viewport is small if Responsive Mode is enabled
jQuery(window).resize(function() {
     if(jQuery("#posts_carousel_3547d26787c91e402ffbc6829c105e3c").length){
          var el = jQuery("#posts_carousel_3547d26787c91e402ffbc6829c105e3c"),
          carousel = el.data("jcarousel"),
          win_width = jQuery(window).width();
          var visibleItems = (win_width > 768 ? 3 : 1);
          carousel.options.visible = visibleItems;
          carousel.options.scroll = visibleItems;
          carousel.reload();
     }
});

/*
**  page carousels ends
*/

/*
** page counter starts
*/

jQuery(document).ready(function() {
    if (jQuery(".circ_numbers_holder_8.animationBegin").length) {
        var opts = {
            lines: 1, // The number of lines to draw
            angle: 0.49, // The length of each line
            lineWidth: 0.05, // The line thickness
            colorStart: "#ffffff", // Colors
            colorStop: "#07bee5", // just experiment with them
            strokeColor: "#f5f5f5", // to see which ones work best for you
            shadowColor: "#eeeeee",
            generateGradient: true
        };
        jQuery(".circ_numbers_holder_8.animationBegin").appear({
            once: true,
            forEachVisible: function(i, e) {
                jQuery(e).data("delay", i);
            },
            appear: function() {
                var delay = 800,
                    stagger = 1000,
                    sequential_delay = stagger * parseInt(jQuery(this).data("delay")) || 0;
                jQuery(this).find(".circ_counter").each(function(i, e) {
                    jQuery(e).trans(i * delay + sequential_delay + "ms", "-delay");
                    setTimeout(function() {
                        end_nu = parseInt(jQuery(e).find("canvas:first").attr("data-end-nu"));
                        jQuery(e).find("canvas:first").gauge(opts, end_nu);
                        jQuery(e).find(".counter_percent_sign:first").addClass("shown")
                    }, i * delay + sequential_delay);
                });
                jQuery(this).removeClass("animationBegin");
            }
        });
        jQuery.fn.gauge = function(opts, set_to) {
            this.each(function() {
                var $this = jQuery(this),
                    data = $this.data();
                if (data.gauge) {
                    //  data.gauge.stop();
                    delete data.gauge;
                }
                if (opts !== false) {
                    data.gauge = new Donut(this).setOptions(opts);
                    data.gauge.setTextField(document.getElementById($this.next(".circ_counter_text_holder_8").children(".circ_counter_text").attr("id")));
                    data.gauge.maxValue = 100; // set max gauge value
                    data.gauge.animationSpeed = 30; // set animation speed (32 is default value)
                    data.gauge.set(set_to); // set actual value
                }
            });
            return this;
        };
    }
});
/*
** page counter ends
*/

/*
** page elements starts
*/
jQuery(document).ready(function($) {
	if($("#posts_carousel_3547d26787c91e402ffbc6829c105e3c").length){
	    $("#posts_carousel_3547d26787c91e402ffbc6829c105e3c").jcarousel({
	        scroll: ($(window).width() > 768 ? 3 : 1),
	        easing: "easeInOutExpo",
	        animation: 700
	    });
	}
});
// Reload carousels on window resize to scroll only 1 item if viewport is small if Responsive Mode is enabled
jQuery(window).resize(function() {
	if(jQuery("#posts_carousel_3547d26787c91e402ffbc6829c105e3c").length){
	    var el = jQuery("#posts_carousel_3547d26787c91e402ffbc6829c105e3c"),
	        carousel = el.data("jcarousel"),
	        win_width = jQuery(window).width();
	    var visibleItems = (win_width > 768 ? 3 : 1);
	    carousel.options.visible = visibleItems;
	    carousel.options.scroll = visibleItems;
	    carousel.reload();
	}
});
/*
** page elements ends
*/

/*
** page contact us starts
*/
var path = Drupal.settings.pathToTheme;
jQuery(document).ready(function() {
	if(jQuery('#map_canvas').length){
		var geocoder;
		var map;
		var address = "692 5th Avenue, New York";

		function initialize() {
		    geocoder = new google.maps.Geocoder();
		    var myOptions = {
		        zoom: 14,
		        scrollwheel: false,
		        styles: [{
		            "featureType": "water",
		            "stylers": [{
		                "color": "#41d1f0"
		            }, {
		                "visibility": "on"
		            }]
		        }, {
		            "featureType": "landscape.man_made",
		            "elementType": "geometry.fill",
		            "stylers": [{
		                "visibility": "on"
		            }, {
		                "hue": "#00c3ff"
		            }, {
		                "saturation": -100
		            }, {
		                "lightness": 40
		            }]
		        }],
		        mapTypeControl: true,
		        mapTypeControlOptions: {
		            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		        },
		        navigationControl: true,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
		    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		    if (geocoder) {
		        geocoder.geocode({
		            'address': address
		        }, function(results, status) {
		            if (status == google.maps.GeocoderStatus.OK) {
		                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
		                    map.setCenter(results[0].geometry.location);
		                    var infowindow = new google.maps.InfoWindow({
		                        content: '<b>' + address + '</b>',
		                        size: new google.maps.Size(150, 50)
		                    });
		                    var marker = new google.maps.Marker({
		                        position: results[0].geometry.location,
		                        map: map,
		                        title: address,
		                        icon: path+'/images/custom_marker1.png',
		                        animation: google.maps.Animation.DROP
		                    });
		                    google.maps.event.addListener(marker, 'click', function() {
		                        infowindow.open(map, marker);
		                    });
		                } else {
		                    alert("No results found");
		                }
		            } else {
		                alert("Geocode was not successful for the following reason: " + status);
		            }
		        });
		    }
		}
		jQuery(document).ready(function() {
		    initialize();
		});
	}
});
/*
** page contact us ends
*/
//update starts
jQuery(document).ready(function($){
	jQuery('.person-shortcode-elements > .style-1').first().addClass('alpha');
	jQuery('.person-shortcode-elements > .style-1').last().addClass('omega');
	jQuery('.person-shortcode-elements > .columns .bg-avt').each(function(){
		var bg = jQuery(this).attr('data-background');
		jQuery(this).attr('style','background-image:url('+bg+')');

	});
	jQuery('.header_search input[type=submit]').val('');
	jQuery('.header_search input[type=text]').attr('placeholder','Search...');
	jQuery('#services-hp-2 .row .sixteen > div').first().addClass('alpha');
	jQuery('#services-hp-2 .row .sixteen > div').last().addClass('omega');
	jQuery('#specialties-hp-2 > div.acc_item').first().find('.acc_control').addClass('acc_is_open');
	jQuery('#specialties-hp-3 > .margined20 > div.acc_item').first().find('.acc_control').addClass('acc_is_open');
	jQuery('#person-shortcode > .style-1').first().addClass('alpha');
	jQuery('#person-shortcode > .style-1').last().addClass('omega');
	jQuery('#person-shortcode > .style-2').first().addClass('alpha');
	jQuery('#person-shortcode > .style-2').last().addClass('omega');
	jQuery('#person-shortcode > .columns .bg-avt').each(function(){
		var bg = jQuery(this).attr('data-background');
		jQuery(this).attr('style','background-image:url('+bg+')');

	});
	var count_row = 0;
	var i = 0;
	jQuery('#testimonials .image_featured_text_holder .image_featured_text').each(function(){
		count_row++;
		if(count_row %2 == 0){
			jQuery('#testimonials .image_featured_text_holder .image_featured_text').slice(i,count_row).wrapAll('<div class="image_featured_text_holder_row"></div>');
			i = count_row;
		}
	});
});
//update ends







