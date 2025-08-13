window.addEventListener('load', function () {
    let fullNameInput = document.getElementById('full-name');

    fullNameInput.addEventListener('keydown', function (e) {
        if (!isNaN(parseInt(e.key))) {
            e.preventDefault();
        }

    });
    let userName = document.getElementById('your-username');

    userName.addEventListener('keydown', function (e) {
        if (e.key === ',' || e.key === '.') {
            e.preventDefault();
        }
    });
    let checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', function (e) {
        if (e.target.checked === true) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let repeatPassword = document.getElementById('repeat-password');
    let signUp = document.getElementById('sign-up');
    let modal = document.getElementById('modal');
    let modalOk = document.getElementById('modal-ok');

    signUp.addEventListener('click', function (e) {
        if (fullNameInput.value === '') {
            alert('Заполните поле Full name.');
            e.preventDefault();
            return;
        }
        if (userName.value === '') {
            alert('Заполните поле Your username.');
            e.preventDefault();
            return;
        }
        if (email.value === '') {
            alert('Заполните поле E-mail.');
            e.preventDefault();
            return;
        }
        if (password.value === '') {
            alert('Заполните поле Password.');
            e.preventDefault();
            return;
        }
        if (repeatPassword.value === '') {
            alert('Заполните поле Repeat Password.');
            e.preventDefault();
            return;
        }
        if (password.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            e.preventDefault();
            return;
        }
        if (password.value !== repeatPassword.value) {
            alert('Пароли не совпадают');
            e.preventDefault();
            return;
        }
        if (!checkbox.checked) {
            alert('Необходимо согласиться с условиями')
            e.preventDefault();
            return;
        }
        modal.classList.remove('hidden');
    });

    modalOk.addEventListener('click', function(e) {
        modal.classList.add('hidden');

        fullNameInput.value = '';
        userName.value = '';
        email.value = '';
        password.value = '';
        repeatPassword.value = '';
        checkbox.checked = false;

        loginPage();
    });
    let loginLink = document.getElementById('login-link');

    loginLink.addEventListener('click', function (e) {
        loginPage();
    });
    let formTitle = document.getElementById('form-title');
    let fullNameInputText = document.getElementById('full-name-text');
    let emailText = document.getElementById('email-text');
    let repeatPasswordText = document.getElementById('repeat-password-text');
    let checkboxText = document.getElementById('checkboxText');
    let signIn = document.getElementById('sign-in');

    function loginPage() {
        formTitle.textContent = 'Log in to the system';

        fullNameInput.remove();
        fullNameInputText.remove();
        email.remove();
        emailText.remove();
        repeatPassword.remove();
        repeatPasswordText.remove();
        checkbox.remove();
        checkboxText.remove();
        signUp.remove();
        signIn.classList.remove('hidden');
        loginLink.remove();
    }

    signIn.addEventListener('click', function(e) {
        if (userName.value === '') {
            alert('Заполните поле "Your username"');
            e.preventDefault();
            return;
        }
        if (password.value === '') {
            alert('Заполните поле "Password"');
            e.preventDefault();
            return;
        }
        alert('Добро пожаловать, ' + userName.value + '!');
    })
    let a = 4;
    let b = 6;
    console.log(a+b);
    console.log('Жареные гвозди');
    console.log('Ну и гадость!');
});