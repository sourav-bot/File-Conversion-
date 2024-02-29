const form = document.getElementById('file-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const file = document.getElementById('file').files[0];
  const format = document.getElementById('format').value;

  // Use FormData to send file and format data to your Python script
  const formData = new FormData();
  formData.append('file', file);
  formData.append('format', format);

  fetch('/convert', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    message.textContent = data.message;
  })
  .catch(error => {
    console.error(error);
    message.textContent = "Error occurred during conversion.";
  });
});