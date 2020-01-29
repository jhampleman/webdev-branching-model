function planTemplate() {
			var devlnk ="";
/* Demo Server */
			var srvurl = "/corporate/webcon/aem-components/";
			
/* Local Server
			var srvurl = "/corporate/webcon/aem-components/"; 
					devlnk = '<center><a id="linput" href="/corporate/webcon/input.html" class="vlnk" tabindex="0">Text field</a> | <a id="lselect" href="/corporate/webcon/select.html" class="vlnk">Select</a> | <a id="lsect" href="/corporate/webcon/sections.html" class="vlnk">Sections</a> | <a id="lselect" href="/corporate/webcon/sections-cuts.html" class="vlnk">Cuts</a> | <a id="lsecthelp" href="/corporate/webcon/sections-howhelp.html" class="vlnk">Help</a></center>';

			var srvurl = "/Projects/corporate/webcon/aem-components/";
			devlnk = '<center><a id="linput" href="/Projects/corporate/webcon/input.html" class="vlnk" tabindex="0">Text field</a> | <a id="lselect" href="/Projects/corporate/webcon/select.html" class="vlnk">Select</a> | <a id="lsect" href="/Projects/corporate/webcon/sections.html" class="vlnk">Sections</a> | <a id="lselect" href="/Projects/corporate/webcon/sections-cuts.html" class="vlnk">Cuts</a> | <a id="lsecthelp" href="/Projects/corporate/webcon/sections-howhelp.html" class="vlnk">Help</a></center>';*/
/*	/ Local Server end*/
			
			var html = '<div class="demo-srv-only">'+ devlnk +'<b>Sprint #0</b> :  <a id="dinput" href="'+ srvurl +'text-fields/input.html" class="vlnk" tabindex="0">Text field</a> | <a id="dselect" href="'+ srvurl +'select/select.html" class="vlnk">Select </a> |  <a id="dradio" href="'+ srvurl +'radio-chkbox/radio_checkbox.html" class="vlnk">Radio buttons & Checkboxes</a> | <a id="dbtn" href="'+ srvurl +'button/button.html" class="vlnk">Buttons</a> | <a id="dtypog" href="'+ srvurl +'typography/typography.html" class="vlnk">Typography</a><br><b>Sprint #1</b> :  <a id="dsect" href="'+ srvurl +'sections/sections.html" class="vlnk" tabindex="0">Sections</a><br><b>Sprint #2</b> :  <a id="dsecthelp" href="'+ srvurl +'sections/sections-howhelp.html" class="vlnk" tabindex="0">How can I Help</a> | <a id="dsectcut" href="'+ srvurl +'sections/sections-cuts.html" class="vlnk">Section Cuts</a></div>';
			
			return html;
		}
		document.getElementById("inclHdr").innerHTML = planTemplate();
