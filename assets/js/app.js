/*
https://spreadsheets.google.com/feeds/worksheets/{SHEET-ID}/public/basic?alt=json       get grid ids
https://spreadsheets.google.com/feeds/worksheets/1OYdT891rY4eH1RCj918OuZyvuJHEo_Ofr3eKA55E13c/public/basic?alt=json


https://spreadsheets.google.com/feeds/list/{SHEET-ID}/{GRID-ID}/public/values?alt=json  get whole sheet data
https://spreadsheets.google.com/feeds/cells/1OYdT891rY4eH1RCj918OuZyvuJHEo_Ofr3eKA55E13c/od6/public/basic?alt=json


https://spreadsheets.google.com/feeds/cells/{SHEET-ID}/{GRID-ID}/public/values          get all cell data
alt=json                                                                                return json
alt=json-in-script&callback={CALLBACK}                                                  return data to callback function
 */

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-111565302-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

const SHEET_ID = '1OYdT891rY4eH1RCj918OuZyvuJHEo_Ofr3eKA55E13c';
const GRID_ID = 'od6';

const DATA_URL = 'https://spreadsheets.google.com/feeds/cells/' + SHEET_ID + '/' + GRID_ID + '/public/values?alt=json-in-script&callback=dataParser';

function dataParser(data) {
    var words = [];
    for(var index in data.feed.entry) {
        words.push(data.feed.entry[index].content["$t"]);
    }
    words.sort(function() { return 0.5 - Math.random() });
    $('.word').html(words[0].replace(/\n/g,'<br/>'));
}

$(document).ready(function() {
    s = document.createElement( 'script' )
    s.setAttribute( 'src', DATA_URL )
    document.body.appendChild( s )
});

