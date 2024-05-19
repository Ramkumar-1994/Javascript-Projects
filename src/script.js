// Project1
let container=document.getElementById('container')
function setColor(bg,color)
{
  
  container.style.backgroundColor=bg
  container.style.color=color
}

// Project-2

let input=document.getElementById('input')
let result=document.getElementById('result')

function checkPalindrome()
{
  let reverse=input.value.split("").reverse().join('')
  if (input.value==reverse)
    {
      result.textContent='It is Palindrome'
    }

  else{
    result.textContent='Not A Palindrome'
  }
  input.value=''
}

let closebtn=document.getElementById('close')
let menubtn=document.getElementById('menubtn')
let sidebar=document.getElementById('sidebar')
function hide()
{
  sidebar.style.display='none'
}

function show()
{

    sidebar.style.display='block'
}


// offer-----------------------------

let highlight=document.getElementById('highlight')

let flag1 = true;

const glowlight = () => {
    setInterval(() => {
      if (flag1) 
        {
          highlight.classList.add('bg-yellow-600');
          flag1 = false;
        } 
      else 
      {
        highlight.classList.remove('bg-yellow-600');
        flag1 = true;
        }
    }, 500); 
};

glowlight();

// Project-3 Fb friend card

let friend=document.getElementById('friend')
let flag=true
const display=()=>
  {
    if(flag==true)
     {
      fbbtn.textContent='Remove Friend'
      friend.innerText='✔'+'Friends'
      flag=false
     } 
    else
    {
      fbbtn.textContent='Add Friend'
      friend.innerText=''
      flag=true
    }
  }

  // Project-4 Automatic color changer

let card=document.getElementById('card')

function displayColor()
{
  setInterval(() => {
    let randomColorR=Math.ceil(Math.random()*255)
    let randomColorG=Math.ceil(Math.random()*255)
    let randomColorB=Math.ceil(Math.random()*255)
    let rgbColor=`rgb(${randomColorR},${randomColorG},${randomColorB})`
    card.style.backgroundColor=rgbColor
    card.style.transition='1s ease-in-out'
  },800);
}

displayColor()

let enterName=document.getElementById('enterName')
function showCard()
{
  displayName.innerText=enterName.value
  card.style.transition='display 1s'
  card.style.display='block'
  enterName.value=''
}