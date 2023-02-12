const email = "contact@kheapps.com"

var body = document.getElementById('body')
var infoSections = document.getElementsByClassName('info-section')
var emailTextInfo = document.getElementById('email-copied')
var background = document.getElementById('background')

for (var i = 0; i < infoSections.length; i++) {
    var item = infoSections[i]
    if (item.classList.contains("show"))
        item.classList.remove("show")
}

for (var i = 0; i < infoSections.length; i++) {
    infoSections[i].classList.add((i % 2) == 0 ? 'pair' : 'impair')
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}

window.addEventListener(
    'scroll',
    function (e) {
        var scroll = window.scrollY
        var h = window.innerHeight
        h = h > 700 ? 700 : (h < 610 ? 610 : h)
        // console.log(scroll, h)
        for (var i = 0; i < infoSections.length; i++) {
            var item = infoSections[i]
            var j = i + 1
            if (scroll < h / 4) {
                document.body.className = "section0"
            }
            else if (scroll >= h * (j - 3 / 4) && scroll <= j * h) {
                if (!item.classList.contains("show"))
                    item.classList.add("show")
                document.body.className = "section" + j
            }
        }
        var angle = (scroll/30)%360
        background.style.backgroundImage = "linear-gradient("+angle+"deg, #e0f2f1, #a7ffeb)"
    }
)

function copyEmail() {
    //copy email to clipboard
    var tempInput = document.createElement("input")
    tempInput.value = email
    body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("copy")
    document.body.removeChild(tempInput)
    // console.log('email copied !')
    emailTextInfo.classList.add('show')
    setTimeout(
        function () {
            emailTextInfo.classList.remove('show')
        },
        3000
    )
}

function setAvisStyle(){

}

function updateDisplayedAvis(){

}