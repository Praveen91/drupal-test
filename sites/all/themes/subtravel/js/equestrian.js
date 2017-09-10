var pi = "1";
var sort = "";
var sortAsc = "";
var rdBuget = "";
var rdRating = "";
var rdStars = "";

var evYear = "xx";
var evMonth = "";
var evSrc = "";
var evRegion = "";
var evPrice = "";
var evArchive = "";

$(function() {
	UpdateSomme();
	$(window).scroll(function(){
		Scroll();
 	})
 	Scroll();
});


$(document).ready(function(){
	$("[id^=imgWrap]").mouseenter(function() {
		$(this).find('[id^=buttInsMore]').show("speed");
		$(this).find('[id^=buttInsAdd]').show("speed"); 
	});
	
	$("[id^=imgWrap]").mouseleave(function() {
		 $(this).find('[id^=buttInsMore]').hide("speed");
		 $(this).find('[id^=buttInsAdd]').hide("speed"); 
	});	
	
	$("[id^=buttInsAdd]").on('click',function(e) {
		 e.preventDefault();
		var str = $(this).attr("id");
		var res = str.split("Add"); 
		$("[id^=checkBox"+res[1]+"]").prop('checked', true);
		  UpdateSomme();  
	});		
	$("[id^=addPack]").on('click',function() {
		var str = $(this).attr("id");
		var res = str.split("Pack"); 
		$("[id^=checkBox"+res[1]+"]").prop('checked', true);
		  UpdateSomme();  
	});			
});

	


function Scroll(){
	var wintop = $(window).scrollTop();
	var logo = $(".logo");
	var tf = $(".top-filter");
	var tfs = $(".top-search-filter");
    if (wintop > 10){
		logo.attr("class","logo small");
		tf.attr("class","top-filter fade");
		tfs.attr("class","top-search-filter fade");
	}
	else{
		logo.attr("class","logo");
		tf.attr("class","top-filter");
		tfs.attr("class","top-search-filter");
	}
}



function ExecSearch(a,b,c,d,e,f){
	window.location = "/search/" + pi + "?checkin=" + a + "&checkout=" + b +"&region=" + c + "&sort=" + sort + "&sortAsc=" + sortAsc
	 + "&buget=" + d + "&rating=" + e + "&stars=" + f;
	
}

function UpdateSomme(){
		var region = 0;
	$('[id^=price]').each(function() {
						if($(this).parent().find('input').is(':checked'))
						region+=parseInt($(this).html());
					});
	$('#sumPrice').html(region);			
}

function addToPackage(_packageName){
		var getURL = "";
		var getURLDist = "";
		 var currentDist = "";
		packageName = _packageName;

	$('[id^=nameAtt]').each(function() {
						if($(this).parent().find('input').is(':checked')) 
						getURL+=$(this).html()+",";
					});
		var distItem = $('[id^=distItem]').html();
		var distL = distItem.split(","); 
		
	$('[id^=distAtt]').each(function() {							
						if($(this).parent().find('input').is(':checked')) {
							var currentdistAtt = $(this).html().split(",");
							currentDist="";
										$.ajax({
										 async: false,
										 url: "http://dev.romaniahorseholiday.com/src/distance.php?lat1="+currentdistAtt[0]+"&long1="+currentdistAtt[1]+"&lat2="+distL[0]+"&long2="+distL[1]
										 ,context:document.body
										}).done(function(response) {
											currentDist=response+"";
										});
							getURLDist += currentDist+",";
						}
					});					
    if(getURL!="") getURL = getURL.substring(0, getURL.length - 1);   
    if(getURLDist!="") getURLDist = getURLDist.substring(0, getURLDist.length - 1);   

	
	window.location = "/product/"+ packageName +"?attractions="+getURL+"&distance="+getURLDist;
}

 
function DoSearch(c1,c2,c3,c4,c5,c6){
	var region = "";
	if (c3 !=""){
		region = $(c3).val();
		var regionIndex = $(c3)[0].selectedIndex;
		if (regionIndex == 0)
			region = "";
	}

  
   if (c4 != undefined && c5!= undefined && c6 != undefined){
   rdBuget  = $('input[name='+ c4 + ']').filter(':checked')[0].value;
   rdRating = $('input[name='+ c5 + ']').filter(':checked')[0].value;
   rdStars  = $('input[name='+ c6 + ']').filter(':checked')[0].value;
   }
   
	ExecSearch( $(c1)[0].value,  $(c2)[0].value, region,rdBuget,rdRating,rdStars);
}

function ExecEvent(a,b,c,d){
	window.location = "/events/" + pi + "?src=" + a + "&region=" + b +"&price=" + c + "&archive=" + d + "&month=" + evMonth + "&year=" + evYear;
}


function DoEvents(a,b,c,d){
	
	if ($(a).length != 0){

	var src    = $(a)[0].value;
	var region = $(b)[0].value;
	var regionIndex = $(b)[0].selectedIndex;
	if (regionIndex == 0)
			region = "";
	var price  = $(c)[0].value;
	var priceIndex = $(c)[0].selectedIndex;
	if (priceIndex == 0)
		price = "";

	var arcC   = $(d)[0].checked;
	var arc = "1";
	if (arcC)
		arc = "2";
		ExecEvent(src,region,price,arc);

	}
	else 
		ExecEvent("","","","");

}

function ShowMap(){
	window.location = "/map";
}

function ChangeImage(elem,img){
	$(elem).find("img")[0].src = img;
}

function ViewProduct($pn){
	window.location = "/product/" + $pn;
}

function SelectSort(val){
	var change =false;
	if (sort == val){
		change = true;
	}
	else{
		sortAsc = "1";
	}
	sort = val;
	
	if (change){
		if (sortAsc == "1"){
			sortAsc = "2";
			ExecSearch(ci,co,rg,rdBuget,rdRating,rdStars);	
			return
		}

		sortAsc = "1";
	}
		ExecSearch(ci,co,rg,rdBuget,rdRating,rdStars);	

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function SendNewsletter(elem){
	var val = $(elem)[0].value;
	if (val == "" || !validateEmail(val))
		alert("ERROR: Please insert an email");
	else
	{
		$.ajax({
 		 url: "/send_newsletter?email=" + val,context: document.body
		}).done(function(response) {
			 var msg = response.split(String.fromCharCode(1));
				alert(msg[0]);
			 if (msg[1] == "1")
				 window.location = "/";
		});
	}	
}

function SendContact(name,email,phone,city,message){
	name = $(name)[0].value;
	email = $(email)[0].value;
	phone = $(phone)[0].value;
	city = $(city)[0].value;
	message = $(message)[0].value;

	if (name == "" || email == "" || phone == "" || city == "" || message == "")
	{
		alert("ERROR: Please complete all fields");
	}
	else
	{
		if (!validateEmail(email))
			alert("ERROR: Please type a correct email");
		else
		{

		$.ajax({
 		 url: "/send_contact?name=" + name + "&email=" + email + "&phone=" + phone + "&city=" + city + "&message=" + message
		 ,context: document.body
		}).done(function(response) {
			 var msg = response.split(String.fromCharCode(1));
				alert(msg[0]);
			 if (msg[1] == "1")
				 window.location = "/";
		});
		}
	}	
	
}


function SendReserve(_packageName,_rooms,_adults,_children,name,email,phone,attractions,distance){
	
	packageName = _packageName;
	rooms = $(_rooms)[0].value;
	var roomsIndex = $(_rooms)[0].selectedIndex;
	adults = $(_adults)[0].value;
	var adultsIndex = $(_adults)[0].selectedIndex;
	children = $(_children)[0].value;
	var childrenIndex = $(_children)[0].selectedIndex;
	name = $(name)[0].value;
	email = $(email)[0].value;
	phone = $(phone)[0].value;

	
	if (roomsIndex == 0 || adultsIndex == 0 || childrenIndex == 0 || packageName == "" || rooms == "" || adults == "" || children == "" || name == "" || email == "" || phone == "")
	{
		alert("ERROR: Please complete and select all fields");
	}
	else
	{
		if (!validateEmail(email))
			alert("ERROR: Please type a correct email");
		else
		{
		$.ajax({
 		 url: "/send_reserve?packageName=" + packageName + "&rooms=" + rooms + "&adults=" + adults + "&children=" + children + "&name=" + name + "&email=" + email+ "&phone=" + phone + "&att=" + attractions + "&distance=" + distance     
		 ,context: document.body
		}).done(function(response) {
			 var msg = response.split(String.fromCharCode(1));
				alert(msg[0]);
			 if (msg[1] == "1")
				 window.location.reload();
		});
		}
	}	
	
}


function SendReserveAtt(_packageName,_rooms,_adults,_children,name,email,phone){
	
	packageName = _packageName;
	rooms = $(_rooms)[0].value;
	var roomsIndex = $(_rooms)[0].selectedIndex;
	adults = $(_adults)[0].value;
	var adultsIndex = $(_adults)[0].selectedIndex;
	children = $(_children)[0].value;
	var childrenIndex = $(_children)[0].selectedIndex;
	name = $(name)[0].value;
	email = $(email)[0].value;
	phone = $(phone)[0].value;

	
	if (roomsIndex == 0 || adultsIndex == 0 || childrenIndex == 0 || packageName == "" || rooms == "" || adults == "" || children == "" || name == "" || email == "" || phone == "")
	{
		alert("ERROR: Please complete and select all fields");
	}
	else
	{
		if (!validateEmail(email))
			alert("ERROR: Please type a correct email");
		else
		{
		window.location = "/attraction/" + packageName + "?packageName=" + packageName + "&rooms=" + rooms + "&adults=" + adults + "&children=" + children + "&name=" + name + "&email=" + email+ "&phone=" + phone;
		}
	}	
	
}

