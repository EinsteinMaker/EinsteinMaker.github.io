function openSidePage(id) {
    $("#sidebar").html($("template#" + id)[0].content.cloneNode(true))
    $("#sidebar").css("width", "100%")
    $("#main").css("transform", "scaleX(0)")
}

function closeSidePage() {
    $("#sidebar").css("width", "0%")
    $("#main").css("transform", "scaleX(1)")
}