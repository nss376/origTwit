  //if host is twitter change name parameter to orig and open in same window
  // else alert fail
  javascript:(function()
  { 
    const myUrl = new URL(window.location.href);
    const myCheck = myUrl.hostname;
    if (myCheck == "pbs.twimg.com") 
    {
        myUrl.searchParams.set("name","orig");
        window.open(myUrl, "_self"); 
    }
    else{
          alert("Not a Twitter Image");
        }    
})();
