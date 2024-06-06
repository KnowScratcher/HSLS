function get_video() {
    const queryString = window.location.search;
    const para = new URLSearchParams(queryString);
    const player = document.getElementById("video");
    if (para.has("vid")){
        const vid = para.get("vid");
        player.src = "https://www.youtube.com/embed/"+vid;
    }else {
        player.remove();
        
    }

}