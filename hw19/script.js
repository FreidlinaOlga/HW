const form = document.getElementById('nameForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;   

  const url = `https://api.genderize.io/?name=${name}`;

  fetch(url)
    .then(response => response.json())
    .then(data   => {
      resultDiv.textContent = `Имя: ${data.name}, Пол: ${data.gender}, Вероятность: ${data.probability}`;
    })
    .catch(error => {
      console.error('Ошибка:', error);
      resultDiv.textContent = 'Произошла ошибка при получении данных.';

    });
});
