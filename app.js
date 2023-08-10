const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const passwordMessage = document.getElementById('password-message');
const submitButton = document.getElementById('submit-button');

function validatePassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password !== confirmPassword) {
    passwordMessage.textContent = 'As senhas não coincidem.';
    confirmPasswordInput.setCustomValidity('As senhas não coincidem.');
    confirmPasswordInput.classList.add('error');
  } else if (!/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(password)) {
    passwordMessage.textContent = 'A senha deve conter pelo menos 8 caracteres, incluindo letras e números.';
    confirmPasswordInput.setCustomValidity('A senha deve conter pelo menos 8 caracteres, incluindo letras e números.');
    confirmPasswordInput.classList.add('error');
  } else {
    passwordMessage.textContent = '';
    confirmPasswordInput.setCustomValidity('');
    confirmPasswordInput.classList.remove('error');
  }
}

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Evita o envio automático do formulário
  
  validatePassword();
  if (confirmPasswordInput.validity.valid) {
    window.location.href = 'https://www.sxgrupo.com.br/';
  }
});
