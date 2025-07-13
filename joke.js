const jokeBtn = document.getElementById('jokeBtn');
const setupText = document.getElementById('setup');
const punchlineText = document.getElementById('punchline');

jokeBtn.addEventListener('click', fetchJoke);

function fetchJoke() {
  setupText.textContent = 'Loading...';
  punchlineText.textContent = '';

  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => {
      if (!response.ok) throw new Error('Network response was not OK');
      return response.json();
    })
    .then(data => {
      setupText.textContent = data.setup;
      punchlineText.textContent = data.punchline;
    })
    .catch(error => {
      setupText.textContent = 'Oops! Failed to fetch joke.';
      console.error('Error fetching joke:', error);
    });
}
