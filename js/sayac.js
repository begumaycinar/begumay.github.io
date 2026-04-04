let sayi = 0

document.getElementById("sayi").textContent = sayi

document.getElementById("azalt").onclick = function(){
    sayi -= 1
    document.getElementById("sayi").textContent = sayi
}

document.getElementById("reset").onclick = function(){
    sayi = 0
    document.getElementById("sayi").textContent = sayi

}

document.getElementById("artir").onclick = function(){
    sayi += 1
    document.getElementById("sayi").textContent = sayi

}