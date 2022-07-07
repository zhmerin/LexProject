function call() {
    let element = document.querySelector("#order");

    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth', block: 'center'});
}
function logo() {
    let element = document.querySelector(".anchor");

    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}
function services() {
    let element = document.querySelector(".howDoesItWorks_2");

    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}
function price() {
    let element = document.querySelector("#block3");

    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}
function partners() {
    let element = document.querySelector("#block4");

    // smooth scroll to element and align it at the bottom
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function sendToBot(){


    let name = document.getElementById("name").value
    let tel = document.getElementById("tel").value
    let email = document.getElementById("email").value

    if (tel == undefined && email == undefined){
        alert('Будь-ласка, введіть номер телефону або Email')
    }
    else{
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        let textMessage = `Нове замовлення!%0AІм'я: ${name}%0AТелефон: ${tel}%0AEmail: ${email}`

        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }
        });

        xhr.open("POST", `https://api.telegram.org/bot5532820427:AAFx59GqAgqkHzyWURUJefzm0YgnNiuyUHI/sendMessage?chat_id=-732253890&text=${textMessage}`);

        xhr.send();
        alert('Дякуємо за замовлення! Очікуйте')
    }
}