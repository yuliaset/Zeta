i = 0
zeta = 0
function zetaSum(){
    document.getElementById("start").style.display = "none"
    if (i === 0){
        document.getElementById("zeta").innerHTML = ""
    }
    s = document.getElementById("pow").value
    velocity = document.getElementById("velocity").value
    iterations = document.getElementById("iterations").value
    i++
    zetaElement = document.getElementById("zeta")
    zeta += 1/(i**s) 
    zetaElement.innerHTML = "&zeta;(" + s + "): " + zeta
    document.getElementById("counter").innerHTML = "n: " + i
    document.getElementById("progressrect").width.baseVal.value = zeta*100
    if (i < iterations){
        setTimeout(zetaSum, velocity)
    } 
    else {
        i = 0; 
        zeta = 0; 
        document.getElementById("start").style.display = "inline"; return}
}