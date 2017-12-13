var numColor=6;
var colors=[];
var pickedColor;
var square=document.querySelectorAll(".square");
var rgb=document.querySelector("#color");
var result=document.querySelector("#result");
var head=document.querySelector("#heading");
var reset=document.querySelector("#reset"); 
var modeButtons=document.querySelectorAll(".mode");
init();
function init(){
	selectMode();
	setUpSquares();
	resetGame();	
}

function selectMode(){
	console.log(modeButtons);
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="easy"){
				numColor=3;
			}
			else {
				numColor=6;
			}
			resetGame();
		});
	}
}
function resetGame(){
	colors=getRandomColors(numColor);
	console.log(colors);
	for(var i=0;i<square.length;i++){

		if(colors[i]){
			square[i].style.display="block";
			square[i].style.background=colors[i];
		}
		else{
			square[i].style.display="none";
		}
	}
	result.textContent="play";
	heading.style.background="steelblue";
	pickedColor=colors[randomNumber(numColor)];
	rgb.textContent=pickedColor;
}
function setUpSquares(){
	for(var i=0;i<numColor;i++)
	{
		square[i].addEventListener("click",function(){
			var clicked=this.style.background;
			//console.log(clicked);
			///console.log(pickedColor);
			if(clicked===pickedColor){
				//make all same 
				result.textContent="correct!";
				changeColors(clicked);
				heading.style.background=clicked;
			}
			else {
				//hide that square
				result.textContent="Try Again";
				this.style.background= "#232323";
			}
		});
	}	
	reset.addEventListener("click",function(){
		resetGame();
	});
}


//reset.addEventListener("click",resetGame());
function changeColors(c){
	for(var i=0;i<numColor;i++){
		square[i].style.background=c;
	}
}
function getRandomColors(n) {
	var arr=[];
	for(var i=0;i<n;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor() {
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb"+"("+ r +", " + g + ", " + b + ")";
}
function randomNumber(n){
	var v1=Math.floor(Math.random()*n);
	return v1;
}