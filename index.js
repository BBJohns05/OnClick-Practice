{const btn = document.getElementById('btn');

let start = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[start];
  btn.style.color = 'white';

  start = start >= colors.length - 1 ? 0 : start + 1;

});
}

let answers = [
	'You should go snowboarding!',
	'I would stay away from snowboarding if I was you...',
	'Have you ever wanted to try snowboarding, you should go do it now!',
	'I think the weather is too nice for snowboarding today'
]

let displayAnswer = function()
{
	let index = Math.floor(Math.random() * answers.length);
	let answer = answers[index];
	let element = document.getElementById( 'circle' );
	element.style.display = 'inline-block';
	element.innerHTML = '<br><br>' + answer;
}
let answerPower=function()
{
    let index = Math.floor((Math.random() *20));
    let answerTwo = index**2;
    let element = document.getElementById( 'circle' );
    element.style.display = 'inline-block';
    element.innerHTML = '<br><br>' + answerTwo;
}

//since there are only 30 perfect squares from 1 to 1000, this is the cheat way of doing it
//I wasnt sure how to do the perfect square root the way you asked so this is the method I came up with
let answersThree = [
	'4',
	 '9', 
	 '16',
	  '25', 
	  '36', 
	  '49', 
	  '64',
	   '81', 
	   '100', 
	   '121',
	   '144', 
	   '169', 
	   '196',
	    '225', 
		'256', 
		'289', 
		'324', 
		'361', 
		'400', 
		'441', 
		'484', 
		'529', 
		'576', 
		'625', 
		'676', 
		'729', 
		'784', 
		'841', 
		'900',  
		'961'
]
let answerSquare=function()
{

	let index = Math.floor(Math.random() * answersThree.length);
	let answerThree = answersThree[index];
	let element = document.getElementById( 'circle' );
	element.style.display = 'inline-block';
	element.innerHTML = '<br><br>' + answerThree;
}