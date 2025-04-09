fetch('http://localhost:5000/users')
  .then(response => response.json())
  .then(data => {
    const ul = document.getElementById('users');
    data.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      ul.appendChild(li);
    });
  })
  .catch(error => console.error('Error:', error));
