// ==UserScript==
// @name        TwitterPic
// @description resize twitter pic to full size
// @include     https://pbs.twimg.com/*
// @version  1
// @grant    none
// ==/UserScript==
(function()
  { 
    var myUrl = new URL(window.location.href);
    var name = myUrl.searchParams.get("name");
    if (name != "orig")
    {
    
    myUrl.searchParams.set("name","orig");
    window.open(myUrl, "_self");
    
    } 
    else
    {
        alert("fail");
    }
  })();