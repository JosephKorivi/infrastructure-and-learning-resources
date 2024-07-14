document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 500); // 5000 milliseconds = 5 seconds
});
