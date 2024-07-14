document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
});
