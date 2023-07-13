const form = document.getElementById('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
const defaultEmail = '123';
const defaultPassword = '123';


form.addEventListener('submit', (e) => {
	e.preventDefault()
	checkInputs()
})

function checkInputs() {
	// Ambil nilai dari inputan form
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
	
	// Validasi username

	
	// Tampilkan pesan kesuksesan atau kesalahan
	if (usernameValue === defaultEmail && passwordValue === defaultPassword) {
	  alert('Anda berhasil login');
	} else {
	  alert('Email atau password salah');
	}
  }
  
  

function setErrorFor(input, message){
	const formControl = input.parentElement // .form-controll
	const small = formControl.querySelector('small')
	small.innerText = message
	// add err class
	formControl.className = 'form-control error'
}

function setSuccessFor(input) {
	const formControl = input.parentElement // .form-controll
	formControl.className = 'form-control success'
}
