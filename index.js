const blue = document.getElementsByClassName("blue")[0]
const red = document.getElementsByClassName("red")[0]
const green = document.getElementsByClassName("green")[0]
const yellow = document.getElementsByClassName("yellow")[0]
const botao = document.getElementsByClassName("botao")[0]
let order = []
let clickedColor = []
var nivel = 0

botao.addEventListener("click", selectColor)
red.addEventListener("click", click)
green.addEventListener("click", click)
yellow.addEventListener("click", click)
blue.addEventListener("click", click)



/* inicia a seleção de cores e inicia o jogo*/
function selectColor (){
        
        let number_color  = Math.floor(Math.random() * 4)
        order[order.length] = number_color
        for(i in order){
        let elementColor = color(order[i])
        lightColor(elementColor, Number(i) + 1)
        clickedColor =[]
        
        }
        
}
/* posssiveis cores a ser chamada a partir de numeros aleatório */
const color = (element) =>{
    switch (element) {
        case 0:
        return green; 
            
    
        case 1 :
        return red;
        
        case 2:
        return yellow
            
        case 3 :
        return blue;
    
    }

}
/* sinaliza as cores selecionadas aleatoriamente */
let lightColor= (elementColor, number) =>{
    number= number*1000
    
    setTimeout(() =>{elementColor.classList.add("select");}, number - 250)
    setTimeout(() =>{elementColor.classList.remove("select");},number )
    
}
/* guarda as cores selecionadas durante o jogo */
function click(){

 switch(this.className){
    case "green":
        clickedColor.push(0)
        break; 
    case "red" :
        clickedColor.push(1)
        break;
    case "yellow":
        clickedColor.push(2)
        break;
    case "blue" :
        clickedColor.push(3)
        break;
}
if (clickedColor.length===order.length) {
    clickCheck()
    next()
}

}
/* checa se as cores selecionadas são iguais as randomizadas */
let clickCheck = () => {

for (i in order){
    if(clickedColor[i] != order[i]){
        gameOver()
        
    
    } 
}

}
/* sinaliza o fim do jogo */
let gameOver = () =>{
    alert(`Fim do Jogo !!! \n Você parou no nível ${nivel}`)
    order = []
    clickedColor = []
    nivel = 0
}
/* avança a proxima fase do jogo*/
let next = () =>{

    
    if(clickedColor.length>0){
        nivel ++
        alert(`Parábens você venceu o nivel ${nivel} \n`)
        selectColor()
    }
}
