// selecting side Navbar,MenuIcon

var sideNva = document.getElementById("sideNav")
var menuIcon= document.getElementById("menuIcon") 
var closeNav= document.getElementById("closeNav")

menuIcon.addEventListener("click",function()
{ 
  sideNva.style.right=0

}) 
closeNav.addEventListener("click",function(){

   sideNav.style.right="-50%"
      
    })

// products search functionality 
var productContainer = document.getElementById("product-container") 
var search = document.getElementById("search")
var productList = productContainer.querySelectorAll("div") 

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

     for(count = 0; count<productList.length; count=count+1)
     { 
        var productName = productList[count].querySelector("h1").textContent  

        if(productName.toUpperCase().indexOf(enteredValue)<0)
        { 
            productList[count].style.display="none"
        }
        else{ 
            productList[count].style.display="block"
        }
     }

})