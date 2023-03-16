const btn = document.querySelector('button');

function handleClick() {
  const p = document.querySelector('.error');
  const input = document.getElementById('email').value;
  console.log(input);
  if (input == '') {
    p.style.display = 'block';
  } else {
    p.style.display = 'none';
    window.alert('Cadastrado com Sucesso');
  }
}

btn.addEventListener('click', handleClick);

console.log(btn);
