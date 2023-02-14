function openSidePage(id) {
    $("#sidebar").html($("template#" + id)[0].content.cloneNode(true))
    $("#sidebar").css("width", "100%")
    $("#sidebar").css("opacity", "1")
    $("#main").css("transform", "scaleX(0)")
    switch (id) {
        case "sidebar-gimp-art":
            let imagecount = 28
            for (let i = 1; i < imagecount; i++) {
                let no = i.toString().padStart(3, "0")
                
            }
            break
    
        default:
            break
    }
}

function closeSidePage() {
    $("#sidebar").css("width", "0%")
    $("#sidebar").css("opacity", "0")
    $("#main").css("transform", "scaleX(1)")
}

document.addEventListener("DOMContentLoaded", () => {
    $("#btn-gimp-art").on("click", () => {
        openSidePage("sidebar-gimp-art")
    })
})