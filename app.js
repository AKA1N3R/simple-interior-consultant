let convertInvisible = (el, property)=>{
    el.style.display = property
}
document.body.addEventListener('click',(e)=>{
    let navbar = document.querySelector(".navbar-mobile")

    e.target.classList.contains("open-menu") ? convertInvisible(navbar,"block"): e.target.classList.contains("close-menu") ? convertInvisible(navbar,"none"): console.log("Not Found")
})