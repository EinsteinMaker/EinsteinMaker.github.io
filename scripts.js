var enlargedImage = null

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

function enlargeImage(elem) {
    enlargedImage = elem
    elem.classList.add("enlarged")
    $(".gallery-img:not(.enlarged)")
        .css("transform", "scale(0.75)")
        .css("opacity", "0.75")
}

function showImgPreview(elem) {
    $("#image-preview")
        .css("transform", "scale(1)")
        .css("opacity", "1")
        // .css("display", "block")
    $("#preview-img")[0].src = "art/" + elem.parentElement.dataset.galleryId + ".png"
    $("#sidebar").css("overflow-y", "hidden")
    setTimeout(() => {
        $(document).one("fullscreenchange", () => {
            $(document).one("fullscreenchange", () => {
                // location.reload()
                hideImgPreview(elem)
                shrinkImage(elem)
            })
        })
        document.documentElement.requestFullscreen()
    }, 500)
}

function shrinkImage(elem) {
    enlargedImage = null
    elem.classList.remove("enlarged")
    $(".gallery-img:not(.enlarged)")
    .css("transform", "")
    .css("opacity", "1")
}

function hideImgPreview(elem) {
    $("#image-preview")
        .css("transform", "scale(0)")
        .css("opacity", "0")
        // .css("display", "none")
    setTimeout(() => {
        $("#preview-img")[0].src = ""
    }, 500);
    $("#sidebar").css("overflow-y", "auto")
}

history.scrollRestoration = "manual"

$(window).on("beforeunload", () => {
    $(window).scrollTop(0)
})

$(document).ready(() => {
    $("body").css("transform", "none")
})

$(document).ready(() => {
    $("#btn-gimp-art").on("click", () => {
        openSidePage("sidebar-gimp-art")
    })
    $(document).on("click", (e) => {
        if (e.target.classList.contains("closebtn")) {
            closeSidePage()
        }
    })
})

$(document).ready(() => {
    let imagecount = 28
    for (let i = 1; i <= imagecount; i++) {
        let no = i.toString().padStart(3, "0")
        let clone = $("#img-tem")[0].content.cloneNode(true)
        let a = clone.querySelector("a")
        let src_thumb = "art/thumbnail/" + no + ".png"
        let src_full = "art/" + no + ".png"
        a.href = "javascript:void(0)" // src_full
        let img = clone.querySelector("img")
        a.dataset.galleryId = "" + no
        img.src = src_thumb
        $("#sidebar-gimp-art")[0].content.querySelector(".container").appendChild(clone.querySelector(":first-child"))
    }
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("gallery-img") && enlargedImage === null) {
            enlargeImage(e.target)
            // setTimeout(() => {
            //     location.assign("art/" + e.target.parentElement.dataset.galleryId + ".png")
            // }, 250)
            showImgPreview(e.target)
        }
    })
})