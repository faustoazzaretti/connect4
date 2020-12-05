/*Funcion para validar nombre, si el lenght del input es 1 o 2, te indica Nombre corto, si esta vacio te dice campo incompleto
y si el nombre es correcto no muestra ningun error*/
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

/*Funcion para validar apellido, si el lenght del input es 1 o 2, te indica Nombre corto, si esta vacio te dice campo incompleto
y si el nombre es correcto no muestra ningun error*/
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

/*Funcion para validad email, hace un test, el test hace la comparacion entre mi expresion regular llamada pattern,
y con el value del email que ingrese, si es correcto devuelve true de lo contrario muestra el error.*/
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

/*Funcion para validad edad, si no es un numero, o la edad es menor que 0 y mayor que 99 te indica el error*/
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

/*Funcion para sexo, comprueba si todos los radiobuttons estan sin checkear muestra error para que puedas seleccionar uno*/
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

/*Funcion para validad interes, lo mismo que el de arriba, pero en esta ocasion son checkboxs*/
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

/*Funcion para validar el pais seleccionado, si la opcion seleccionar esta seleccionado muestra el error*/
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

/*Funcion para comentario, en este caso si el lenght es menor que 15 te indica el error para que lo completes*/
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

/*Funcion para mostrar los datos en la consola*/
function showDate() {
    console.log('Nombre: ' + userName.value)
    console.log('Apellido: ' + lastName.value)
    console.log('Email:' + email.value)
    console.log('Edad: ' + age.value)
    if (men.checked) {
        console.log('Sexo: Masculino')
    } else if (women.checked) {
        console.log('Sexo: Femenino')
    } else if (other.checked) {
        console.log('Sexo: Otro')
    }
    console.log('Temas de interes:')
    if (music.checked) {
        console.log('Musica')
    }
    if (deports.checked) {
        console.log('Deportes')
    }
    if (game.checked) {
        console.log('Juegos')
    }
    if (technology.checked) {
        console.log('Tecnologia')
    }
    if (select.selected) {
        console.log('Pais:')
    }
    if (argentina.selected) {
        console.log('Pais: Argentina')
    }
    if (chile.selected) {
        console.log('Pais: Chile')
    }
    if (brasil.selected) {
        console.log('Pais: Brasil')
    }
    if (uruguay.selected) {
        console.log('Pais: Uruguay')
    }
    console.log('Comentarios: ' + comments.value)

}

/*Function para limpiar inputs, cree un bool en cada validacion para saber su estado.
 Si es true, y todas son true, limpia los inputs, y muestra en consola a la funcion showdata*/
function cleanInputs() {
    if (completeUsername && completeLastName && completeEmail && completeAge && completeSex && completeCountry && completeComments) {
        showDate()
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

/*Function para mensaje enviado*/

var sendedForm = function () {
    document.getElementById("form").style.display = "none";
    h1.innerHTML = 'Comentarios enviados, Muchas gracias!!!!!';
    document.getElementById("home").style.display = "flex";
}

/*Funcion para enviar formulario, se va a ejecutar cuando el usuario hace click en el boton*/
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
    //Selecciono todos los elementos, por ID, para poder utilizarlos en mi codigo javascript.
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
    //Selecciono todos los id del parrafo error para poder mostrar el mensaje de ingrese el valor.
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
    //Evento boton enviar.
    sendButton.onclick = sendForm
}