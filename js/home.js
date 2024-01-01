let btn = document.getElementById('btn')
let span = document.getElementById('changeName')
let user = JSON.parse( localStorage.getItem("items") )

if (!user) {
    window.open('index.html', "_self")
}

span.innerHTML = user

btn.addEventListener('click', () => {
    localStorage.removeItem("items")
    window.open('index.html', "_self")
})