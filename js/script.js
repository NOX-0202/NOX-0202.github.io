const scroll_btn = document.getElementById("scroll-btn");
scroll_btn.style.display = "none";


scroll_btn.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scroll_btn.style.display = "block";
    } else {
        scroll_btn.style.display = "none";
    }
}