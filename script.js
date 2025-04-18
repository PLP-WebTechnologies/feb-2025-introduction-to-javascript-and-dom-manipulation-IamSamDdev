

const reveal = document.getElementById("reveal")
const revealBtn = document.getElementById("reveal-btn")
const colorChanger = document.getElementById("color-changer")
const footerText = document.getElementById("footer-text")
const footerBtn = document.getElementById("footer-btn")
const colorContText = document.getElementById("h2-text")


function revealAction(){
      return  revealBtn.addEventListener("click", function(){
        reveal.innerHTML = `
         <p>Javascript interact with the webpage to either add, remove or change content of the page, which gives it a powerful interactiviy with the webpage</p>`
    })
}

revealAction()


function revealcolor(){
    colorChanger.addEventListener("mouseenter", function(e){
        colorChanger.style.backgroundColor = "red"
        colorContText.style.color = "white"
    })
}

revealcolor()  



function toggleFooter() {
    footerBtn.addEventListener("click", function () {
        if (footerText.style.display === "none") {
            footerText.style.display = "block";
            footerBtn.textContent = "Hide Footer";
        } else {
            footerText.style.display = "none";
            footerBtn.textContent = "Show Footer";
        }
    });
}

toggleFooter();







