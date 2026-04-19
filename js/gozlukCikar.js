const enableGozluk = () => {
    document.body.classList.add("gozluk")
    localStorage.setItem("gozluk", "active")
}

const disableGozluk = () => {
    document.body.classList.remove("gozluk")
    localStorage.removeItem("gozluk")
}

// Sayfa açılışında eski durum
if (localStorage.getItem("gozluk") === "active") {
    document.body.classList.add("gozluk")
}

// fetch ile gelen buton için güvenli click yakalama
document.addEventListener("click", (e) => {
    if (e.target.closest("#theme-switch")) {
        const aktif = localStorage.getItem("gozluk")

        if (aktif === "active") {
            disableGozluk()
        } else {
            enableGozluk()
        }
    }
})