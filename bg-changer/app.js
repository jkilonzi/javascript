const body  = document.body
const range = document.getElementById("_range")
const number = document.getElementById("rangeValue")

function updateStyle(){

    const value = Number(number.innerText)

    if (value >= 90){
        applyStyle('#000',"#f5d300")
    }else if (value >= 70){
        applyStyle('#333',"#fe53bb")
    }else if (value >=50){
            applyStyle('#555',"#09fbd3")
    }else if(value >= 25){
        applyStyle('#fff',"08f7fe")
    }else if(value == 0){
        applyStyle('red',"#333")
    }
}
function applyStyle(color,backgroundColor){
    number.style.color = color
    body.style.backgroundColor = backgroundColor


}

range.addEventListener("input", function () 
{

    const sliderValue  = Math.min(this.value,100)
    number.innerHTML = sliderValue;

    updateStyle()
})