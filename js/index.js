function fechar() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';

    let botao = document.querySelector('.btnR');
    botao.style.display = 'block';
}

//CONSTANTES
const ash = document.querySelector('.ash');
const end = document.querySelector('.obst');
const coinB = document.querySelector('.coinB');
const coinO = document.querySelector('.coinO');
const coinP = document.querySelector('.coinP');
const ar = document.querySelector('.obst-ar');
const fim = document.querySelector('.chegada');
const btn = document.querySelector('.inicio');

//PULAR


const loop = setInterval(() => {
    console.log('loop');
    const endPosition =end.offsetLeft;
    const arPosition =ar.offsetLeft;
    const coinBPosition = coinB.offsetLeft;
    const coinPPosition = coinP.offsetLeft;
    const coinOPosition = coinO.offsetLeft;
    const fimPosition = fim.offsetLeft;
    const ashPosition = +window.getComputedStyle(ash).bottom.replace('px','');

    if(endPosition<=100 && endPosition >0 && ashPosition<80){

        btn.style.display = 'none';

        end.style.animation = 'none';
        end.style.left = `${endPosition}px`;
 
        ash.style.animation = 'none';
        ash.style.bottom = `${ashPosition}px`;

        ash.src ='img/pikachu-sleep.gif '
        ash.style.width ='150px';

        ar.style.animation='none';
        ar.style.right ='350px';

        fim.style.animation='none';
        fim.style.right ='50px';

        let stop = document.querySelector('.filed');
        stop.style.display = 'block';

        clearInterval(loop);
        
    }
    if(coinOPosition<=120 && coinOPosition >0 && coinPPosition<=120 && coinPPosition >0 && coinBPosition<=120 && coinBPosition >0 && ashPosition<80){
        coinB.style.animation = 'none';
        coinB.style.left ='150px';

        coinP.style.animation = 'none';
        coinP.style.left ='300px';

        coinO.style.animation = 'none';
        coinO.style.left ='450px';


        clearInterval(loop);
    }

    if(fimPosition<50 && fimPosition>0 && ashPosition<120){
      document.write(
        '<html>'
        +'<link rel="stylesheet" href="./css/validacao.css">'
        +'<link rel="stylesheet" href="css/index.css">'
        +'<script defer src="js/index.js"></script>'
        +'<body class="sla">'
        +'<div class="finale">'
        +'</div>'
        +'<div class="modal">'
        +'<div class="txt">'
            +'<div>PARABÉNS</div>'
            +'<div>VOCÊ VENCEU</div>'
        +'</div>'
        +'<div onclick="fechar()" class="fechar"></div>'
        +'</div>'
        +'<a class="btnR" href="index.html"><p>voltar</p></a>'
        +'</body>'
        +'</html>');

        let modal = document.querySelector('.modal');
        modal.style.display = 'block';

        clearInterval(loop);

    }
    
},10);

const span = document.querySelector('span')
const btnStart = document.querySelector('#btnStart')
const btnPause = document.querySelector('#btnPause')
const btnClean = document.querySelector('#btnClean')

var interval

btnStart.onclick = () => {

  ash.classList.add('jump');
    setTimeout(() => {
        ash.classList.remove('jump');
    }, 500);

  var value = parseFloat(span.innerHTML)

  interval = setInterval(() => {
    value += 0.1

    

    span.innerHTML = value.toFixed(1)
  }, 100);
}

btnPause.onclick = () => {
  btnStart.disabled = false
  btnPause.disabled = true

  clearInterval(interval)
}

btnClean.onclick = () => {
  btnStart.disabled = false
  btnPause.disabled = true
  
  clearInterval(interval)
  span.innerHTML = "0.0"
}

//VARIÁVEIS DE SOM