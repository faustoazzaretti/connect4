function validateName() {
    if (userName.value.length < 3 && userName.value.length > 0) {
        userName.innerHTML = 'Nombre demasiado corto.'
        console.log('Nombre demasiado corto')
        completeUsername = false
    } else if (userName.value.length === 0) {
        userNameError.innerHTML = 'Campo Incompleto.'
        console.log('Nombre demasiado corto')
        completeUsername = false
    } else {
        userNameError.innerHTML = ''
        completeUsername = true
    }
}

function validateSurname() {
    if (lastName.value.length < 3 && lastName.value.length > 0) {
        lastName.innerHTML = 'Apellido demasiado corto.'
        console.log('Apellido demasiado corto')
        completeLastName = false
    } else if (lastName.value.length === 0) {
        lastNameError.innerHTML = 'Campo Incompleto'
        console.log('Apellido demasiado corto')
        completeLastName = false
    } else {
        lastNameError.innerHTML = ''
        completeLastName = true
    }
}

function validateEmail() {
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (pattern.test(email.value)) {
        emailError.innerHTML = ''
        completeEmail = true
    } else {
        emailError.innerHTML = 'Formato de email incorrecto'
        console.log('Formato de email incorrecto')
        completeEmail = false
    }
}

function validateAge() {
    if (isNaN(age.value) || age.value < 1 || age.value > 99) {
        ageError.innerHTML = 'Edad Invalida'
        console.log('Edad Invalida')
        completeAge = false
    } else {
        ageError.innerHTML = ''
        completeAge = true
    }
}

function validateSex() {
    if (men.checked === false && women.checked === false && other.checked === false) {
        sexError.innerHTML = 'Debe seleccionar un sexo'
        console.log('Debe seleccionar un sexo')
        completeSex = false
    } else {
        sexError.innerHTML = ''
        completeSex = true
    }
}

function validateInterest() {
    if (music.checked === false && deports.checked === false && game.checked === false && technology.checked === false) {
        textInterestError.innerHTML = 'Debe seleccionar un interes'
        console.log('Debe seleccionar un interes')
        completeInterest = false
    } else {
        textInterestError.innerHTML = ''
        completeInterest = true
    }
}

function validateCountry() {
    if (select.selected) {
        chooseError.innerHTML = 'Seleccione un pais'
        console.log('Seleccione un pais')
        completeCountry = false
    } else {
        chooseError.innerHTML = ''
        completeCountry = true
    }
}

function validateComment() {
    if (comments.value.length < 15) {
        commentsError.innerHTML = 'El comentario debe tener al menos 15 caracteres'
        console.log('El comentario debe tener al menos 15 caracteres')
        completeComments = false
    } else {
        commentsError.innerHTML = ''
        completeComments = true
    }
}

function cleanInputs() {
    if (completeUsername && completeLastName && completeEmail && completeAge && completeSex && completeCountry && completeComments) {
        userName.value = ''
        lastName.value = ''
        email.value = ''
        age.value = ''
        comments.value = ''
        men.checked = false
        women.checked = false
        other.checked = false
        music.checked = false
        deports.checked = false
        game.checked = false
        technology.selected = false
        comments.value = ''
        sendedForm()
    } else {
        console.log('Para poder ver los datos, debes ingresar todos los campos obligatorios')
    }
}

var sendedForm = function () {
    document.getElementById("form").style.display = "none";
    h1.innerHTML = 'Comentarios enviados, Muchas gracias!!!!!';
    document.getElementById("home").style.display = "flex";
}

var sendForm = function () {
    console.clear()
    validateName()
    validateSurname()
    validateEmail()
    validateAge()
    validateSex()
    validateInterest()
    validateCountry()
    validateComment()
    cleanInputs()
    return false
}


window.onload = function () {
    userName = document.getElementById('name')
    lastName = document.getElementById('lastName')
    age = document.getElementById('age')
    email = document.getElementById('email')
    men = document.getElementById('men')
    women = document.getElementById('women')
    other = document.getElementById('other')
    music = document.getElementById('music')
    deports = document.getElementById('deports')
    game = document.getElementById('game')
    technology = document.getElementById('technology')
    choose = document.getElementById('choose').value
    argentina = document.getElementById('argentina')
    brasil = document.getElementById('brasil')
    chile = document.getElementById('chile')
    uruguay = document.getElementById('uruguay')
    select = document.getElementById('select')
    comments = document.getElementById('comentarios')
    sendButton = document.getElementById('send')
    userNameError = document.getElementById('nameError')
    lastNameError = document.getElementById('lastNameError')
    ageError = document.getElementById('ageError')
    emailError = document.getElementById('emailError')
    sexError = document.getElementById('sexError')
    textInterestError = document.getElementById('interestError')
    chooseError = document.getElementById('chooseError')
    commentsError = document.getElementById('commentsError')
    h1 = document.getElementById('sended')
    btnHome = document.getElementById('home')
    sendButton.onclick = sendForm
}