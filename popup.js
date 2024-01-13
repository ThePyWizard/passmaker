document.addEventListener('DOMContentLoaded', function() {
    var generateButton = document.getElementById('generatePassword');
    var passwordOutput = document.getElementById('password-output');
    var copyButton = document.getElementById('copyPassword');

    generateButton.addEventListener('click', function() {
        var password = generateRandomPassword();
        console.log(password);
        passwordOutput.innerText = password;
    });

    copyButton.addEventListener('click', function() {
        var password = passwordOutput.innerText;
        copyToClipboard(password);
    });
});

function generateRandomPassword() {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < 12; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}

function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
