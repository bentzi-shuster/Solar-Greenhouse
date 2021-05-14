const template1 = document.createElement('template');
template1.innerHTML=
`
<style>
#home{border-radius: 50%;
    display: flex;
     justify-content: center;
     align-items: center;
     width: 4em;
     height: 4em;
     position:absolute;
    top: 0;
     left: 0;
    z-index:1;
    }

#home_button{
    background-color:rgb(255, 220, 61);
    border: green 3px solid;
    border-radius: 50%;
    position: absolute;
   top: 0;
    left: 0;
   padding: 1vh;
    margin: 1vh;
    transition: .125s linear;
    z-index:1;
}
img:hover{transform:scale(1.1)}
#menu{
    display :none;
    position:absolute;
    border-radius:1em;
    height:4em;
    width:4em;
    left:3em;
    top:3em;
}
#NP{
    padding:2em;
    border-radius:1em;
}
#next_img{
    height:4em;
    width:4em;
    background-color:rgb(255, 220, 61);
    border: green 3px solid;
    border-radius: 50%;
    position: absolute;
    margin: 1vh;
    transition: .125s linear;
    z-index:1;
}
</style>


<a id="home" href="./index.html">
<img id="home_button"
onmouseover='this.style.transform = "scale(1.1)";'
onmouseout='this.style.transform = "none";'
 height="100%"
width="100%"
 src="./images/Animated Home Button.svg" 
 alt="fancy solar dashboard flower" >
 <div id="menu"><a id="NP"> <img id="next_img" height="20%" src="./images/next.svg" /></a> </div>
</a>


`



class HomeButton extends HTMLElement {
    constructor() {
        super();
this.attachShadow({mode: 'open'});
this.shadowRoot.appendChild(template1.content.cloneNode(true));
this.shadowRoot.getElementById("NP").href = this.getAttribute('NextPage');
    }
    connectedCallback(){
        this.onmouseover = function(){
            this.shadowRoot.getElementById("menu").style.display = "block"

        }
        this.onmouseout = function(){
            this.shadowRoot.getElementById("menu").style.display = "none"

        }
    }
}
window.customElements.define('home-button', HomeButton);




const template2 = document.createElement('template');
template2.innerHTML=
`
<style>
p{
    word-spacing: .25em;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; scrollbar-width: none;font-size: 1em;;
  }
h2{scrollbar-width: none;
    z-index: 1;
    background-color: yellow;
    border:green 3px solid;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
  }
  legend{ scrollbar-width: none;margin: 0; padding: 0;}
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
    overflow-y:scroll;
    scrollbar-width: none;
    padding: 1em;
    z-index: 2;
    
    }
    *::-webkit-scrollbar{display:none}
    *{-ms-overflow-style: none; 
        scrollbar-width: none;  }
    p{max-height:25vh}
} </style>
<fieldset><legend><h2>

</h2></legend><p>
<slot/>
</p></fieldset> 

`
class Card extends HTMLElement {
    constructor() {
        super();
this.attachShadow({mode: 'open'});
this.shadowRoot.appendChild(template2.content.cloneNode(true));
this.shadowRoot.querySelector('h2').innerText = this.getAttribute('lable');
    }
}
window.customElements.define('content-card', Card);

