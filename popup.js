document.addEventListener('DOMContentLoaded', function() {
    var generateButton = document.getElementById('generatePassword');
    var passwordContainer = document.getElementById('passwordContainer');
  
    generateButton.addEventListener('click', function() {
      var password = generateRandomPassword();
      passwordContainer.innerText = password;
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
  