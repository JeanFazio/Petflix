document.getElementById('enter_button').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Por favor, preencha ambos os campos de email e senha.');
    } else {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('profile-screen').style.display = 'flex';
    }
});

function showProfile(profile) {
    document.getElementById('profile-screen').style.display = 'none';
    document.getElementById(`${profile}-profile`).style.display = 'flex';
}

function goBack() {
    document.querySelectorAll('.container').forEach(container => container.style.display = 'none');
    document.getElementById('profile-screen').style.display = 'flex';
}

function goBackToLogin() {
    document.querySelectorAll('.container').forEach(container => container.style.display = 'none');
    document.getElementById('login-screen').style.display = 'flex';
}
