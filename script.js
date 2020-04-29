function playGame()
{
    var n = Math.random();
    n= ((n*6) +1);
    var num = ( Math.floor(n) ) ;
  var randomImage =  "dice" + num + ".png" ;
   var image1 = document.querySelectorAll("img")[0];
   image1.setAttribute("src", randomImage);


   /*for 2nd dice */


   var n2 = Math.random();
   n2= ((n2*6) +1);
   var num2 = ( Math.floor(n2) ) ;
 var randomImage2 =  "dice" + num2 + ".png" ;
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImage2);

  if(num>num2) 
  {
      document.querySelector("h1").innerHTML = "Player 1 is the Winner! <i class='fas fa-cocktail'></i>" ;
  }
  else if(num2>num)
  {
    document.querySelector("h1").innerHTML = "Player 2 is the Winner! <i class='fas fa-cocktail'></i>";
  }
  else
  {
    document.querySelector("h1").innerHTML = "Draw! <i class='fas fa-surprise'></i>";
  }
}