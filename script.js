function growContent() {
    var content = document.getElementById("content")
    if (content.clientHeight) {
        content.style.height = 0;
    } else {
        var menu_items = document.getElementById("menu_items")
        content.style.height = menu_items.clientHeight + "px";
    }
}
