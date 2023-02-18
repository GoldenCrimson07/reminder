function Loading() {
    myVar = setTimeout(showPage, 3000);
  }
  
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("loader-item").style.display="none"
    document.getElementById("main-content").style.display = "block";
  }