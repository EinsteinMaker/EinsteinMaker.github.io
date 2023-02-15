function openSidePage(id) {
    $("#sidebar").html($("template#" + id)[0].content.cloneNode(true))
    $("#sidebar").css("width", "100%")
    $("#sidebar").css("opacity", "1")
    $("#main").css("transform", "scaleX(0)")
    $("body").css("overflow", "hidden")
    switch (id) {
        case "sidebar-gimp-art":
            fadeinGalleryImage(0, $(".gallery-img"))
            break
    
        default:
            break
    }
}

function fadeinGalleryImage(count, list) {
    list[count].style.opacity = "1"
    if (count < list.length - 1) {
        setTimeout(() => {
            fadeinGalleryImage(count + 1, list)
        }, 100)
    }
}

function closeSidePage() {
    $("#sidebar").css("width", "0%")
    $("#sidebar").css("opacity", "0")
    $("#main").css("transform", "scaleX(1)")
    $("body").css("overflow", "auto")
}

document.addEventListener("DOMContentLoaded", () => {
    $("#btn-gimp-art").on("click", () => {
        openSidePage("sidebar-gimp-art")
    })
})

document.addEventListener("DOMContentLoaded", () => {
    let imagecount = 28
    for (let i = 1; i <= imagecount; i++) {
        let no = i.toString().padStart(3, "0")
        let clone = $("#img-tem")[0].content.cloneNode(true)
        let a = clone.querySelector("a")
        a.href = "art/" + no + ".png"
        let img = clone.querySelector("img")
        a.dataset.galleryId = "" + no
        img.src = "art/" + no + ".png"
        a.addEventListener("click", (e) => {
            e.preventDefault()
            console.log("Test")
        })
        $("#sidebar-gimp-art")[0].content.querySelector(".container").appendChild(clone.querySelector(":first-child"))
    }
})