<div class="header">
     <div class="social">
        <a onmouseover="ChangeImage(this,'sites/all/themes/subtravel/images/facebook.png')" onmouseout="ChangeImage(this,'sites/all/themes/subtravel/images/facebook_bw.png')" href=""><img src="Equestrian%20Adventures_files/facebook_bw.png"></a>
        <a onmouseover="ChangeImage(this,'sites/all/themes/subtravel/images/youtube.png')" onmouseout="ChangeImage(this,'sites/all/themes/subtravel/images/youtube_bw.png')" href=""><img src="Equestrian%20Adventures_files/youtube_bw.png"></a>
        <a onmouseover="ChangeImage(this,'sites/all/themes/subtravel/images/vimeo.png')" onmouseout="ChangeImage(this,'sites/all/themes/subtravel/images/vimeo_bw.png')" href=""><img src="Equestrian%20Adventures_files/vimeo_bw.png"></a>
        <a onmouseover="ChangeImage(this,'sites/all/themes/subtravel/images/instagram.png')" onmouseout="ChangeImage(this,'sites/all/themes/subtravel/images/instagram_bw.png')" href=""><img src="Equestrian%20Adventures_files/instagram_bw.png"></a>
     </div>

<div class="header-top-right">
    <img src="sites/all/themes/subtravel/images/phone.png"><span class="pn">+0040.745.456.123</span>
    <br>
    <input id="nsEmail" placeholder="insert email" type="text">
    <a href="javascript:SendNewsletter('#nsEmail')" class="sb-btn">Subscribe</a>
</div>

<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">

            <?php if ($logo): ?>
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="navbar-brand navbar-link" id="logo">
                  <img class="logo" src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
                </a>
              <?php endif; ?>
            <?php if ($site_name || $site_slogan): ?>
                <hgroup id="site-name-slogan">
                  <?php if ($site_name): ?>
                    <h1 id="site-name">
                      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><span><?php print $site_name; ?></span></a>
                    </h1>
                  <?php endif; ?>
                  <?php if ($site_slogan): ?>
                    <h2 id="site-slogan"><?php print $site_slogan; ?></h2>
                  <?php endif; ?>
                </hgroup>
              <?php endif; ?>


           <!--  <div class="hm">Select Menu</div>
            <button data-toggle="collapse" data-target="#navcol-1" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
            </button>
 -->    </div>
 <?php //print render($page['header']); ?>

  <div class="collapse navbar-collapse" id="navcol-1">



        <?php
        if ($main_menu || $secondary_menu || !empty($page['navigation'])): ?>

              <?php if (!empty($page['navigation'])): ?> <!--if block in navigation region, override $main_menu and $secondary_menu-->
                <?php print render($page['navigation']); ?>
              <?php endif; ?>
              <?php if (empty($page['navigation'])): ?>
            <?php

            print theme('links__system_main_menu', array(
                  'links' => $main_menu,
                  'attributes' => array(
                    'id' => 'main-menu',
                    'class' => array('links', 'clearfix', 'nav', 'navbar-nav'),
                  ),
                  'heading' => array(
                    'text' => t('Main menu'),
                    'level' => 'h2',
                    'class' => array('element-invisible'),
                  ),
                )); ?>

              <?php endif; ?>

        <?php endif; ?>
</div>

        <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="nav navbar-nav">
                 <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About Romania<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="http://dev.romaniahorseholiday.com/info">General</a></li>
                      <li><a href="http://dev.romaniahorseholiday.com/culture">Culture</a></li>
                      <li><a href="http://dev.romaniahorseholiday.com/top_attractions">Top Attractions</a></li>
                      <li><a href="http://dev.romaniahorseholiday.com/arhitecture">Arhitecture</a></li>
                      <li><a href="http://dev.romaniahorseholiday.com/nature">Nature</a></li>
                      <li><a href="http://dev.romaniahorseholiday.com/region/Vrancea">Regions</a></li>
                      <li><a href="http://dev.romaniahorseholiday.com/city/Bucuresti">Cities</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Equitation<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                      <li><a href="http://dev.romaniahorseholiday.com/eq-history">History</a></li>
                      <li><a href="http://dev.romaniahorseholiday.com/eq-practice">Best practice</a></li>
                      <li><a href="http://dev.romaniahorseholiday.com/eq-advices">Advices</a></li>
                    </ul>
                </li>
                <li role="presentation"><a href="http://dev.romaniahorseholiday.com/map">Romania Map</a></li>
                <li role="presentation"><a href="http://dev.romaniahorseholiday.com/events/1?src=">Events</a></li>
                <li role="presentation"><a href="http://dev.romaniahorseholiday.com/contact">Contact</a></li>
            </ul>
        </div>
    </div>
</nav>

 <div class="top-filter">
    <input id="datepicker-top-filter1" placeholder="check in" class="hasDatepicker" type="text">
    <input id="datepicker-top-filter2" placeholder="check out" class="hasDatepicker" type="text">
    <div onclick="DoSearch('#datepicker-top-filter1','#datepicker-top-filter2','')" class="btn-search">SEARCH</div>
 </div>

  <script>
  $( function() {
    $( "#datepicker-top-filter1" ).datepicker({ dateFormat: 'dd-mm-yy' }).val();
        $( "#datepicker-top-filter2" ).datepicker({ dateFormat: 'dd-mm-yy' }).val();

    } );
  </script>


  </div>

    <div class="content">
        <div class="pageTitle"><img class="frunza_mica" src="sites/all/themes/subtravel/images/romb.png"> Equestrian Adventures Home Page        </div>
        <nav class="pag-right">

            <ul class="pagination">
                        </ul>
        </nav>
        <div class="page">

<div class="home">

  <h1>Best enjoyed slowly</h1>
  <div class="home-tabs">
      <ul class="nav nav-tabs">
          <li class="active"><a href="#tab-1" role="tab" data-toggle="tab">ROMANIA &amp; HORSES</a></li>
          <li><a href="#tab-2" role="tab" data-toggle="tab">REGIONS</a></li>
          <li><a href="#tab-3" role="tab" data-toggle="tab">BEST ATTRACTIONS</a></li>
      </ul>
      <div class="tab-content">
          <div class="tab-pane active" role="tabpanel" id="tab-1">
          <div class="home-carousel">
          <div class="carousel slide" data-ride="carousel" id="carousel-1">
              <div class="carousel-inner" role="listbox">
                  <div class="item"><img src="sites/all/themes/subtravel/images/carousel1.jpg" alt="Slide Image"></div>
                  <div class="item"><img src="sites/all/themes/subtravel/images/carousel2.jpg" alt="Slide Image"></div>
                  <div class="item active"><img src="sites/all/themes/subtravel/images/carousel3.jpg" alt="Slide Image"></div>
              </div>
              <div>
                <a class="left carousel-control" href="#carousel-1" role="button" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i><span class="sr-only">Previous</span></a>
                  <a class="right carousel-control" href="#carousel-1" role="button" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i><span class="sr-only">Next</span></a>
              </div>
              <ol class="carousel-indicators">
                  <li data-target="#carousel-1" data-slide-to="0" class=""></li>
                  <li data-target="#carousel-1" data-slide-to="1" class=""></li>
                  <li data-target="#carousel-1" data-slide-to="2" class="active"></li>
              </ol>
          </div>
        </div>
          </div>
          <div class="tab-pane" role="tabpanel" id="tab-2">
            <img style="width:720px;" src="sites/all/themes/subtravel/images/home2.jpg">
          </div>
          <div class="tab-pane" role="tabpanel" id="tab-3">
            <img style="width:720px;" src="sites/all/themes/subtravel/images/home3.jpg">
          </div>
      </div>
  </div>


  <div class="home-bottom">
    <h1>Romania,</h1>
    <h2>among world's greenest countries....</h2>
    <h3>
      To say that Latvia boasts pristine nature is no exaggeration, which
means that many options are available for green tourism from simple
walks in the woods to special offerings for bird-watchers, hunters and
friends and connoisseurs of nature.
      <br>
      <br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The treasures of Latvian
nature are accessible to everyone, as the main objects of value are the
property of the state. In our country, one can freely access rivers and
lakes, the sea and the forests...
    </h3>
  </div>

  <div class="sidebar">
    <h1>select month</h1>
    <div id="datepicker-home" class="hasDatepicker"><div class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" style="display: block;"><div class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all"><a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="Prev"><span class="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="Next"><span class="ui-icon ui-icon-circle-triangle-e">Next</span></a><div class="ui-datepicker-title"><span class="ui-datepicker-month">February</span>&nbsp;<span class="ui-datepicker-year">2017</span></div></div><table class="ui-datepicker-calendar"><thead><tr><th scope="col" class="ui-datepicker-week-end"><span title="Sunday">Su</span></th><th scope="col"><span title="Monday">Mo</span></th><th scope="col"><span title="Tuesday">Tu</span></th><th scope="col"><span title="Wednesday">We</span></th><th scope="col"><span title="Thursday">Th</span></th><th scope="col"><span title="Friday">Fr</span></th><th scope="col" class="ui-datepicker-week-end"><span title="Saturday">Sa</span></th></tr></thead><tbody><tr><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">1</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">2</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">3</a></td><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">4</a></td></tr><tr><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">5</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">6</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">7</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">8</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">9</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">10</a></td><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">11</a></td></tr><tr><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">12</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">13</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">14</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">15</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">16</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">17</a></td><td class=" ui-datepicker-week-end  ui-datepicker-today" data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default ui-state-highlight" href="#">18</a></td></tr><tr><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">19</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">20</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">21</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">22</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">23</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">24</a></td><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">25</a></td></tr><tr><td class=" ui-datepicker-week-end " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">26</a></td><td class=" " data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default" href="#">27</a></td><td class=" ui-datepicker-days-cell-over  ui-datepicker-current-day" data-handler="selectDay" data-event="click" data-month="1" data-year="2017"><a class="ui-state-default ui-state-active ui-state-hover" href="#">28</a></td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td><td class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">&nbsp;</td></tr></tbody></table></div></div>
      <div onclick="DoEvents('#events-src','#events-reg','#events-price','#events-arc')" class="home-calendar-btn">SHOW EVENTS</div>
    <div class="map">
      <img src="sites/all/themes/subtravel/images/map.png">
    </div>
    <div onclick="ShowMap()" class="home-map-btn">ROMANIA MAP</div>



  <script>
  $( function() {

     $( "#datepicker-home" ).datepicker({
      dateFormat: 'dd-mm-yy'
      ,defaultDate: '10-' + evMonth + '-' + evYear
      , onChangeMonthYear: function(year,month) {
        evYear = year;
        evMonth = month;
      }
   }).val();
    } );
</script> </div>
 </div>

<script>
  $( function() {
     $( "#datepicker-home" ).datepicker();
    } );
</script>

            <diiv class="footer">



<div class="container-fluid">
    <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-3">
            <h1>Cities</h1>
                          <a href="http://dev.romaniahorseholiday.com/city/Bucuresti">Bucuresti</a>
                        <a href="http://dev.romaniahorseholiday.com/city/Sibiu">Sibiu</a>

        </div>
        <div class="col-md-3 col-sm-3 col-xs-3">
            <h1>Regions</h1>
                      <a href="http://dev.romaniahorseholiday.com/region/Vrancea">Vrancea</a>
                        <a href="http://dev.romaniahorseholiday.com/region/Apuseni">Apuseni</a>
                        <a href="http://dev.romaniahorseholiday.com/region/Calarasi">Calarasi</a>


        </div>
        <div class="col-md-3 col-sm-3 col-xs-3">
            <h1>Information about Latvia</h1>
            <a href="#">Brochure &amp; maps</a>
            <a href="#">Latvia.travel mobile site</a>
            <a href="#">Sitemap</a>
        </div>
        <div class="col-md-3 col-sm-3 col-xs-3">
            <h1>Othe links</h1>
        <a href="#">Corporate</a>
        <a href="#">Media</a>
        <a href="#">Terms of use</a>
        </div>
    </div>
</div>

    <div class="logos">
      <img src="sites/all/themes/subtravel/images/logo1.jpg">
      <img src="sites/all/themes/subtravel/images/logo2.png">
      <img src="sites/all/themes/subtravel/images/logo3.png">
    </div>
    <h2>@Investment  and development Agency of latvia sdas ddapdoasp[ doap[ dos]]</h2>
             </diiv>
        </div>
    </div>



<div id="ui-datepicker-div" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>

