!function(e){var t=function(){function t(e){var t=new Image;t.src=e;var i={height:t.height,width:t.width};return i}var i=this;this.tabs=null,this.activePanel=null,this.selectedItem=null,this.mdSliderToolbar=new MdSliderToolbar(i),this.mdSliderTimeline=new MdSliderTimeline(i),this.textBoxTemplate='<div class="slider-item ui-widget-content item-text" data-top="0" data-left="0" data-width="100" data-height="50" data-borderstyle="solid" data-mdtclass="md-layer" data-type="text" data-title="Text" style="width: 100px; height: 50px;"><div>Text</div><span class="sl-tl"></span><span class="sl-tr"></span><span class="sl-bl"></span><span class="sl-br"></span><span class="sl-top"></span><span class="sl-right"></span><span class="sl-bottom"></span><span class="sl-left"></span> </div>',this.imageBoxTemplate='<div class="slider-item ui-widget-content item-image" data-top="0" data-left="0" data-width="100" data-height="50" data-borderstyle="solid" data-mdtclass="md-layer" style="height: 80px;width: 80px;" data-type="image"><img width="100%" height="100%" src="http://files.megadrupal.com/other/image.jpg" /><span class="sl-tl"></span><span class="sl-tr"></span><span class="sl-bl"></span><span class="sl-br"></span><span class="sl-top"></span><span class="sl-right"></span><span class="sl-bottom"></span><span class="sl-left"></span></div>',this.videoBoxTemplate='<div class="slider-item ui-widget-content item-video" data-top="0" data-left="0" data-width="100" data-height="50" data-borderstyle="solid" data-mdtclass="md-layer" style="height: 80px;width: 80px;" data-type="video"><img width="100%" height="100%" src="http://files.megadrupal.com/other/video.jpg" /><span class="sl-tl"></span><span class="sl-tr"></span><span class="sl-bl"></span><span class="sl-br"></span><span class="sl-top"></span><span class="sl-right"></span><span class="sl-bottom"></span><span class="sl-left"></span></div>',this.tab_counter=e("#md-tabs ul.md-tabs-head li.tab-item").size(),this.init=function(){i.initTab(),i.initPanel(),i.initSliderItem(),e(document).keyup(function(t){var s=t.keyCode||t.which,a=e(t.target).is("input, textarea, select");if(!a&&46==s&&null!=i.selectedItem){var n=i.selectedItem.data("timeline");null!=n&&(n.remove(),i.selectedItem.remove(),i.triggerChangeSelectItem())}}),e(window).resize(function(){i.resizeWindow()})},this.initTab=function(){i.tabs=e("#md-tabs").tabs({tabTemplate:'<li class="tab-item first clearfix"><a class="tab-link" href="#{href}"><span class="tab-text">#{label}</span></a> <span class="ui-icon ui-icon-close">Remove Tab</span></li>',show:function(t,s){e(i.activePanel).find(".slider-item.ui-selected").removeClass("ui-selected"),i.activePanel=e(s.panel),i.mdSliderTimeline.changeActivePanel(),i.triggerChangeSelectItem(),i.resizeBackgroundImage()}}),e(".md-tabs-head li").live({mouseenter:function(){e(this).find(".ui-icon-close").show()},mouseleave:function(){e(this).find(".ui-icon-close").hide()}}),e(".md-tabs-head span.ui-icon-close").live("click",function(){var t=e(this),s=t.prev().attr("href"),a=JSON.parse(e(".settings input",e(s)).val());if(confirm("Are you sure want to delete this slide? After accepting this slide will be removed completely."))if(-1==a.slide_id){{e("li",i.tabs).index(e(this).parent())}t.parent().remove(),e(s).remove(),i.tabs.tabs("select",0),i.tabs.tabs("refresh")}else e.post(location.protocol+"//"+location.host+Drupal.settings.basePath+Drupal.settings.pathPrefix+"?q=admin/structure/md-slider/slide/delete",{sid:a.slide_id},function(a){if("OK"==a){{e("li",i.tabs).index(t.parent())}t.parent().remove(),e(s).remove(),i.tabs.tabs("select",0),i.tabs.tabs("refresh")}})}),i.tabs.find(".ui-tabs-nav").sortable({axis:"x",stop:function(){i.tabs.tabs("refresh")}}),e("#slide-setting-dlg").dialog({resizable:!1,autoOpen:!1,draggable:!1,modal:!0,width:960,open:function(){var t=e(this).data("tab");if(t){var s=e("input.panelsettings",t).val();""!=s&&(s=e.stringToObject(s)),i.setSlideSettingValue(s)}},buttons:{Save:function(){var t=e(this).data("tab");if(t){var s=i.getSlideSettingValue(),a=e.stringToObject(e("input.panelsettings",t).val()),n=e("input[name=slider_id]").val();s=e.extend(a,s),e("input.panelsettings",t).val(e.objectToString(s)),e.post(Drupal.settings.basePath+Drupal.settings.pathPrefix+"?q=admin/structure/md-slider/get-background-image",{fid:s.background_image,slider_id:n},function(t){if(t){var a=e("<img alt=''>").attr("src",t);e(".md-slide-image img",i.activePanel).remove(),e(".md-slide-image",i.activePanel).append(a)}else e(".md-slide-image img",i.activePanel).remove(),e(".md-slide-image",i.activePanel).css("background-color",s.background_color);e(".md-slide-overlay",i.activePanel).css("background-color",s.background_overlay)})}e(this).dialog("close")},Cancel:function(){e(this).dialog("close")}}}),e(".panel-settings-link").live("click",function(){return e("#slide-setting-dlg").data("tab",e(this).parent().parent()).dialog("open"),!1}),e(".random-transition").click(function(){e("#navbar-content-transitions input").removeAttr("checked");for(var t=0;3>t;t++){var i=Math.floor(26*Math.random())+1;e("#navbar-content-transitions li:eq("+i+") input").attr("checked","checked")}return!1}),e(".slide-choose-image-link").live("click",function(){var t=e(this);Drupal.media.popups.mediaBrowser(function(i){var s=i[0];Drupal.settings.select_image=s,e("#slide-backgroundimage").val(s.fid),e("img",t.next()).attr("src",s.url),t.next().show(),t.next().next().show()})}),e(".slide-choose-thumbnail-link").live("click",function(){var t=e(this);Drupal.media.popups.mediaBrowser(function(i){var s=i[0];Drupal.settings.select_image=s,e("#slide-thumbnail").val(s.fid),e("img",t.next()).attr("src",s.url),t.next().show()})}),e("#slide-setting-dlg a.delete-thumbnail, #slide-setting-dlg a.delete-background").click(function(t){e(this).parent().hide(),e(this).hasClass("delete-background")&&e(this).parent().next().hide(),e(this).parent().parent().hasClass("choose-thumbnail")?e("#slide-setting-dlg #slide-thumbnail").val("-1"):e("#slide-setting-dlg #slide-backgroundimage").val("-1"),t.preventDefault()}),e("#slide-background-color, #slide-background-overlay","#slide-setting-dlg").spectrum({allowEmpty:!0,preferredFormat:"rgb",showAlpha:!0,showInput:!0});e("#md-slider").mdSlider({transitions:"fade",height:150,width:290,fullwidth:!1,showArrow:!0,showLoading:!1,slideShow:!0,showBullet:!0,showThumb:!1,slideShowDelay:3e3,loop:!0,strips:5,transitionsSpeed:1500});e("#navbar-content-transitions li").hoverIntent(function(){var t=e("input",this).attr("value");e("#md-slider").data("transitions",t);var i=e(this).position();e("#md-tooltip").css({left:i.left-200+e(this).width()/2,top:i.top-180}).show()},function(){e("#md-tooltip").hide()}),e(".panel-clone").live("click",function(){return i.cloneTab(e(this).parent().parent()),!1})},this.resizeWindow=function(){i.resizeBackgroundImage()},this.resizeBackgroundImage=function(){if(e(".md-slidewrap",i.activePanel).hasClass("md-fullwidth")){var s=e(".md-slide-image",i.activePanel).width(),a=e(".md-slide-image",i.activePanel).height(),n=e(".md-slide-image img",i.activePanel),l=t(n.attr("src")),d=l.width,o=l.height;if(o>0&&a>0)if(d/o>s/a){var r=s-a/o*d;n.css({width:"auto",height:"100%"}),n.css(0>r?{left:r/2+"px",top:0}:{left:0,top:0})}else{var c=a-s/d*o;n.css({width:"100%",height:"auto"}),n.css(0>c?{top:c/2+"px",left:0}:{left:0,top:0})}}},this.initSliderItem=function(){e("#md-tabs div.slider-item").each(function(){var t=e(this).getItemValues();e(this).setItemStyle(t)})},this.initPanel=function(){e("#add_tab").click(function(){return i.addTab(),!1}),e("#md-tabs .slider-item").each(function(){e(this).data("slidepanel",i).triggerItemEvent()})},this.addTab=function(){i.tab_counter++;var t,s="Slide "+i.tab_counter;i.tabs.tabs("add","#tabs-"+i.tab_counter,s),t=e("#tabs-"+i.tab_counter),t.append(e("#dlg-slide-setting").html()).data("timelinewidth",e("input[name=default-timelinewidth]").val()),i.tabs.append(t),i.tabs.tabs("refresh"),i.tabs.tabs("select",e(".md-tabs-head li").length-1)},this.cloneTab=function(t){var s=e.stringToObject(e("input.panelsettings",t).val());i.addTab(),i.activePanel=e("#tabs-"+i.tab_counter),e("#tabs-"+i.tab_counter).find(".md-slidewrap").html(t.find(".md-slidewrap").html()).find(".slider-item").remove(),s.slide_id=-1,e("input.panelsettings",i.activePanel).val(e.objectToString(s)),i.activePanel.data("timelinewidth",t.data("timelinewidth")),i.mdSliderTimeline.setTimelineWidth(t.data("timelinewidth")),e(".slider-item",t).each(function(){i.cloneBoxItem(e(this))})},this.cloneBoxItem=function(t){var s=e(t).getItemValues();if(s&&null!=i.activePanel){var a,n=s.type;if("text"==n){var l=t.find("div:first").html();a=e(i.textBoxTemplate).clone(),a.find("div:first").html(l)}else a="image"==n?e(i.imageBoxTemplate).clone():e(i.videoBoxTemplate).clone();return a.data("slidepanel",i).appendTo(e(".md-objects",i.activePanel)),a.setItemValues(s),a.setItemStyle(s),a.setItemHtml(s),a.triggerItemEvent(),i.mdSliderTimeline.addTimelineItem(n,a),!0}},this.addBoxItem=function(t){if(null!=this.activePanel){var s;return s="text"==t?e(this.textBoxTemplate).clone():"image"==t?e(this.imageBoxTemplate).clone():e(this.videoBoxTemplate).clone(),i.mdSliderTimeline.addTimelineItem(t,s),s.data("slidepanel",this).appendTo(e(".md-objects",this.activePanel)).triggerItemEvent(),i.changeSelectItem(s),i.mdSliderTimeline.triggerChangeOrderItem(),i.mdSliderToolbar.focusEdit(),!0}return!1},this.triggerChangeSelectItem=function(){if(null!=this.activePanel){var t=e(this.activePanel).find(".slider-item.ui-selected");this.selectedItem=1==t.size()?t:null,this.mdSliderToolbar.changeSelectItem(this.selectedItem),this.mdSliderTimeline.changeSelectItem(this.selectedItem)}},this.setItemAttribute=function(e,t){if(null!=this.selectedItem)switch(e){case"width":return i.setBoxWidth(this.selectedItem,t);case"height":return i.setBoxHeight(this.selectedItem,t);case"left":return i.setPositionBoxLeft(this.selectedItem,t);case"top":return i.setPositionBoxTop(this.selectedItem,t)}},this.setItemSize=function(e,t){i.setBoxWidth(this.selectedItem,e),i.setBoxHeight(this.selectedItem,t)},this.setItemBackground=function(t,i){if(null!=this.selectedItem){e(this.selectedItem).data(e.removeMinusSign(t),i);var s=e(this.selectedItem).data("backgroundcolor");if(s&&""!=s){var a=parseInt(e(this.selectedItem).data("backgroundtransparent")),n=e.HexToRGB(s);a=a?a:100;var l="rgba("+n.r+","+n.g+","+n.b+","+a/100+")";this.selectedItem.css("background-color",l)}else this.selectedItem.css("backgroundColor","transparent")}return!1},this.setItemFontSize=function(t,i){null!=this.selectedItem&&(e(this.selectedItem).data(e.removeMinusSign(t),i),this.selectedItem.css(t,i+"px"))},this.setItemColor=function(t){null!=this.selectedItem&&(e(this.selectedItem).data("color",t),""!=t?this.selectedItem.css("color",t):this.selectedItem.css("color",""))},this.setItemBorderColor=function(t,i){null!=this.selectedItem&&(e(this.selectedItem).data(e.removeMinusSign(t),i),this.selectedItem.css("border-color",i))},this.setItemCssPx=function(t,i){null!=this.selectedItem&&(e(this.selectedItem).data(e.removeMinusSign(t),i),this.selectedItem.css(t,i+"px"))},this.setItemCss=function(t,i){null!=this.selectedItem&&(e(this.selectedItem).data(e.removeMinusSign(t),i),this.selectedItem.css(t,i))},this.setItemStyle=function(t,i){if(null!=this.selectedItem){_tmpSelectedItem=this.selectedItem,e(_tmpSelectedItem).data(t,i);var s=e.map(e(".mdt-style option","#md-toolbar"),function(e){return e.value});e.each(s,function(e,t){_tmpSelectedItem.removeClass(t)}),_tmpSelectedItem.addClass(i)}},this.setItemOpacity=function(t,i){null!=this.selectedItem&&(e(this.selectedItem).data(t,i),this.selectedItem.css(t,i/100))},this.setItemClass=function(e,t){null!=this.selectedItem&&(this.selectedItem.data(e,t),this.selectedItem.addClass(t))},this.setItemTitle=function(t){null!=this.selectedItem&&(e(this.selectedItem).data("title",t),"text"==e(this.selectedItem).data("type")&&e(this.selectedItem).find("div").html(t.replace(/\n/g,"<br />")),this.mdSliderTimeline.changeSelectedItemTitle())},this.setImageData=function(t,s,a){null!=this.selectedItem&&(e(this.selectedItem).data("title",s),e(this.selectedItem).data("fileid",t),e(this.selectedItem).find("img").attr("src",a).load(function(){var e=new Image;e.src=a;var t=e.width,s=e.height,n=i.activePanel.find(".md-objects").width(),l=i.activePanel.find(".md-objects").height();s>0&&l>0&&(t>n||s>l?t/s>n/l?i.setItemSize(n,s*n/t):i.setItemSize(t*l/s,l):i.setItemSize(t,s),i.mdSliderToolbar.changeSelectItem(i.selectedItem))}),i.mdSliderTimeline.changeSelectedItemTitle())},this.setItemFontWeight=function(t){null!=this.selectedItem&&(e(this.selectedItem).data("fontweight",t),this.selectedItem.css("font-weight",parseInt(t)),isNaN(t)?this.selectedItem.css("font-style","italic"):this.selectedItem.css("font-style","normal"))},this.setVideoData=function(t,s,a){null!=this.selectedItem&&(e(this.selectedItem).data("title",s),e(this.selectedItem).data("fileid",t),e(this.selectedItem).find("img").attr("src",a).load(function(){var e=new Image;e.src=a;var t=e.width,s=e.height,n=i.activePanel.find(".md-objects").width(),l=i.activePanel.find(".md-objects").height();s>0&&l>0&&(t>n||s>l?t/s>n/l?i.setItemSize(n,s*n/t):i.setItemSize(t*l/s,l):i.setItemSize(t,s),i.mdSliderToolbar.changeSelectItem(i.selectedItem))}),i.mdSliderTimeline.changeSelectedItemTitle())},this.setItemLinkData=function(t){null!=this.selectedItem&&e(this.selectedItem).data("link",t)},this.changeBorderPosition=function(t){if(null!=this.selectedItem){e(this.selectedItem).data("borderposition",t);var s=e(this.selectedItem).data("borderstyle");i.changeBorder(t,s)}},this.changeBorderStyle=function(t){if(consol.log("this"),null!=this.selectedItem){e(this.selectedItem).data("borderstyle",t);var s=e(this.selectedItem).data("borderposition");i.changeBorder(s,t)}},this.changeBorder=function(t,i){if(null!=this.selectedItem){var s="";s=1&t?i:"none",s+=2&t?" "+i:" none",s+=4&t?" "+i:" none",s+=8&t?" "+i:" none",e(this.selectedItem).css("border-style",s)}},this.changeFontFamily=function(t){null!=this.selectedItem&&(e(this.selectedItem).data("fontfamily",t),e(this.selectedItem).css("font-family",t))},this.alignLeftSelectedBox=function(){var t=e(i.activePanel).find(".slider-item.ui-selected");if(t.size()>1){var s=1e4;t.each(function(){s=e(this).position().left<s?e(this).position().left:s}),t.each(function(){i.setPositionBoxLeft(this,s)})}},this.alignRightSelectedBox=function(){var t=e(i.activePanel).find(".slider-item.ui-selected");if(t.size()>1){var s=0;t.each(function(){var t=e(this).position().left+e(this).outerWidth();s=t>s?t:s}),t.each(function(){i.setPositionBoxLeft(this,s-e(this).outerWidth())})}},this.alignCenterSelectedBox=function(){var t=e(i.activePanel).find(".slider-item.ui-selected");if(t.size()>1){var s=t.first().position().left+t.first().outerWidth()/2;t.each(function(){i.setPositionBoxLeft(this,s-e(this).outerWidth()/2)})}},this.alignTopSelectedBox=function(){var t=e(i.activePanel).find(".slider-item.ui-selected");if(t.size()>1){var s=1e4;t.each(function(){s=e(this).position().top<s?e(this).position().top:s}),t.each(function(){i.setPositionBoxTop(this,s)})}},this.alignBottomSelectedBox=function(){var t=e(i.activePanel).find(".slider-item.ui-selected");if(t.size()>1){var s=0;t.each(function(){thisBottom=e(this).position().top+e(this).outerHeight(),s=thisBottom>s?thisBottom:s}),t.each(function(){i.setPositionBoxTop(this,s-e(this).outerHeight())})}},this.alignMiddleSelectedBox=function(){var t=e(i.activePanel).find(".slider-item.ui-selected");if(t.size()>1){var s=t.first().position().top+t.first().outerHeight()/2;t.each(function(){i.setPositionBoxTop(this,s-e(this).outerHeight()/2)})}},this.spaceVertical=function(t){var s=e(i.activePanel).find(".slider-item.ui-selected");if(s.size()>1){t=parseInt(t);for(var a=s.size(),n=0;a-1>n;n++)for(var l=n+1;a>l;l++)if(e(s[n]).position().top>e(s[l]).position().top){var d=s[n];s[n]=s[l],s[l]=d}if(t>0)for(var n=1;a>n;n++)i.setPositionBoxTop(e(s[n]),e(s[n-1]).position().top+e(s[n-1]).outerHeight()+t);else if(a>2){for(var o=0,n=0;a-1>n;n++)o+=e(s[n]).outerHeight();t=(e(s[a-1]).position().top-e(s[0]).position().top-o)/(a-1);for(var n=1;a-1>n;n++)i.setPositionBoxTop(e(s[n]),e(s[n-1]).position().top+e(s[n-1]).outerHeight()+t)}}},this.spaceHorizontal=function(t){var s=e(i.activePanel).find(".slider-item.ui-selected");if(s.size()>1){t=parseInt(t);for(var a=s.size(),n=0;a-1>n;n++)for(var l=n+1;a>l;l++)if(e(s[n]).position().left>e(s[l]).position().left){var d=s[n];s[n]=s[l],s[l]=d}if(t>0)for(var n=1;a>n;n++)i.setPositionBoxLeft(e(s[n]),e(s[n-1]).position().left+e(s[n-1]).outerWidth()+t);else if(a>2){for(var o=0,n=0;a-1>n;n++)o+=e(s[n]).outerWidth();t=(e(s[a-1]).position().left-e(s[0]).position().left-o)/(a-1);for(var n=1;a-1>n;n++)i.setPositionBoxLeft(e(s[n]),e(s[n-1]).position().left+e(s[n-1]).outerWidth()+t)}}},this.setPositionBoxLeft=function(t,i){i=i>0?i:0;var s=e(t).parent().width()-e(t).outerWidth(!0);return i>s&&(i=s),e(t).css("left",i+"px"),e(t).data("left",i),i},this.setPositionBoxTop=function(t,i){i=i>0?i:0;var s=e(t).parent().height()-e(t).outerHeight();return i>s&&(i=s),e(t).css("top",i+"px"),e(t).data("top",i),i},this.setBoxWidth=function(t,i){if(i>0){var s=e(t).parent().width()-e(t).position().left;return i>s&&(i=s),e(t).width(i),e(t).data("width",i),i}return e(t).width()},this.setBoxHeight=function(t,i){if(i>0){var s=e(t).parent().height()-e(t).position().top;return i>s&&(i=s),e(t).height(i),e(t).data("height",i),i}return e(t).height()},this.triggerChangeSettingItem=function(){i.mdSliderToolbar.changeToolbarValue()},this.changeSelectItem=function(t){e(i.activePanel).find(".slider-item.ui-selected").removeClass("ui-selected"),e(t).addClass("ui-selected"),this.triggerChangeSelectItem()},this.getAllItemBox=function(){return e("div.slider-item",i.activePanel)},this.changeTimelineValue=function(){i.mdSliderToolbar.changeTimelineValue()},this.setTimelineWidth=function(t){i.activePanel&&e(i.activePanel).data("timelinewidth",t)},this.getTimelineWidth=function(){return i.activePanel?e(i.activePanel).data("timelinewidth"):null},this.getSliderData=function(){var t=[],i=!1;return e("#md-tabs .ui-tabs-nav a.tab-link").each(function(){var s=e(e(this).attr("href"));if(s.size()){i=!1,s.hasClass("ui-tabs-hide")&&(s.removeClass("ui-tabs-hide"),i=!0);var a=e.stringToObject(e("input.panelsettings",s).val());a.timelinewidth=s.data("timelinewidth");var n=[];e("div.slider-item",s).each(function(){n.push(e(this).getItemValues())}),t.push({itemsetting:a,boxitems:n}),i&&s.addClass("ui-tabs-hide")}}),t},this.getSlideSettingValue=function(){var t={background_image:e("#slide-backgroundimage").val(),background_image_alt:e("#custom-bg-alt").val(),custom_thumbnail:e("#slide-thumbnail").val(),custom_thumbnail_alt:e("#custom-thumb-alt").val(),background_color:e("#slide-background-color").val(),background_overlay:e("#slide-background-overlay").val(),disabled:e("#disable-slide").is(":checked")?1:0},i=[];return e("#navbar-content-transitions input:checked").each(function(){i.push(e(this).val())}),t.transitions=i,t},this.setSlideSettingValue=function(t){if("object"!=typeof t&&(t={}),e.extend({background_image:"-1",background_image_alt:"",background_color:"",background_overlay:"",custom_thumbnail:"-1",custom_thumbnail_alt:"",disabled:0,transitions:[]},t),e("#slide-backgroundimage").val(t.background_image),e("#slide-thumbnail").val(t.custom_thumbnail),t.disabled?e("#disable-slide").attr("checked",!0):e("#disable-slide").attr("checked",!1),e("#navbar-content-transitions input").attr("checked",!1),t&&t.transitions&&e.each(t.transitions,function(t,i){e("#navbar-content-transitions input[value="+i+"]").attr("checked",!0)}),e("#slide-background-color","#slide-setting-dlg").spectrum("set",t.background_color),e("#slide-background-overlay","#slide-setting-dlg").spectrum("set",t.background_overlay),e("#slide-thumbnail-preview").hide(),e("#custom-thumb-alt").val(t.custom_thumbnail_alt),t&&-1!=t.custom_thumbnail){var i=e("input[name=slider_id]").val();e.post(Drupal.settings.basePath+Drupal.settings.pathPrefix+"?q=admin/structure/md-slider/get-background-image",{fid:t.custom_thumbnail,slider_id:i},function(t){e("#slide-thumbnail-preview img").attr("src",t),e("#slide-thumbnail-preview").show()})}if(e("#slide-background-preview").hide(),e(".custom-bg-alt-info").hide(),e("#custom-bg-alt").val(t.background_image_alt),t&&-1!=t.background_image){var i=e("input[name=slider_id]").val();e.post(Drupal.settings.basePath+Drupal.settings.pathPrefix+"?q=admin/structure/md-slider/get-background-image",{fid:t.background_image,slider_id:i},function(t){e("#slide-background-preview img").attr("src",t),e("#slide-background-preview").show(),e("#slide-background-preview").next().show()})}}};window.MdSliderPanel=t}(jQuery);