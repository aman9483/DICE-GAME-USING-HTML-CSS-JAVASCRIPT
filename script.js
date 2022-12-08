const ClickMe = document.querySelector('button');

ClickMe.addEventListener('click',e=> {


const randomNumberForFirstDice = Math.floor(Math.random()*6 + 1)

const randomDiceImage1 = "dice" + randomNumberForFirstDice + ".png"; //dice1.png - dice6.png

const randomImageSource = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png

const image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomImageSource);


const  randomNumberForSecondDice = Math.floor(Math.random()*6 + 1);

 const randomImageSource2  = "images/dice" + randomNumberForSecondDice + ".png";

 document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);;




if(randomNumberForFirstDice > randomNumberForSecondDice){

    document.querySelector("h1").innerHTML = "Player 1 Wins ! ";

   const gif =  document.querySelector('iframe');

   gif.style.display = 'block';
   gif.style.marginLeft = '80px'
   
   


}

else if(randomNumberForSecondDice>randomNumberForFirstDice){

    document.querySelector("h1").innerHTML = "Player 2 Wins ! ";

    gif =  document.querySelector('iframe');

      gif.style.display = 'block';
      gif.style.marginLeft = '80px'
   
}

else{

    document.querySelector("h1").innerHTML = "Draw ! ";

    gif =  document.querySelector('iframe');

    gif.style.display = 'none';
    gif.style.marginLeft = '80px'

}

});
