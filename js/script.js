document.getElementById('issue-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());
  
    fetch('https://script.google.com/macros/s/AKfycbwqLK4wvRa0_B0NGvLaDLBnLDzu6-X2Z3efRc9rWjOMfCdy-8MoMMMCsp5Kl9JlVs7P/exec', {
      method: 'POST',
    //   mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(value)
    })
    .then(response => {
      document.getElementById('result').innerText = 'Issue submitted successfully!';
    })
    .catch(error => {
      document.getElementById('result').innerText = 'Error submitting issue.';
      console.error('Error:', error);
    });
  
    form.reset();
  });
  