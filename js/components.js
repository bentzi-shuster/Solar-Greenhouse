const template1 = document.createElement('template');
template1.innerHTML=
`
<style>
a{border-radius: 50%;
    display: flex;
     justify-content: center;
     align-items: center;
     width: 4em;
     height: 4em;
     position:absolute;
    top: 0;
     left: 0;}

img{
    background-color:rgb(255, 220, 61);
    border: green 3px solid;
    border-radius: 50%;
    position: absolute;
   top: 0;
    left: 0;
   padding: 1vh;
    margin: 1vh;
    transition: .125s linear;
}
</style>


<a href="./index.html">
<img id="home_button"
onmouseover='document.getElementById("home_button").style.transform = "scale(1.1)";'
onmouseout='document.getElementById("home_button").style.transform = "none";'
 height="100%"
width="100%"
 src="./images/Animated Home Button.svg" 
 alt="fancy solar dashboard flowr" >
</a>


`
const template2 = document.createElement('template');
template2.innerHTML=
`
<style>
p{
    word-spacing: .25em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
h2{
    z-index: 1;
    background-color: yellow;
    border:green 3px solid;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  legend{margin: 0; padding: 0;}
  fieldset::-webkit-scrollbar{
      display:none;
  }
fieldset{
    margin-top: 5vh;
    width: 35vw;
      background-color: yellow;
      border: green solid;
      color: green;
      position: relative;
    overflow-y:auto;
    padding: 1em;
    z-index: 2;
    -ms-overflow-style: none; 
    scrollbar-width: none;  
    }
    p{max-height:25vh}
} </style>
<fieldset><legend><h2>

</h2></legend><p>
<slot/>
</p></fieldset> 

`


class HomeButton extends HTMLElement {
    constructor() {
        super();
this.attachShadow({mode: 'open'});
this.shadowRoot.appendChild(template1.content.cloneNode(true));
    }
}
window.customElements.define('home-button', HomeButton);


class Card extends HTMLElement {
    constructor() {
        super();
this.attachShadow({mode: 'open'});
this.shadowRoot.appendChild(template2.content.cloneNode(true));
this.shadowRoot.querySelector('h2').innerText = this.getAttribute('lable');
    }
}
window.customElements.define('content-card', Card);


