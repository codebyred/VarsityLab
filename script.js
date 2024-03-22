
function showDetails(category) {
  // Simulated data for demonstration
  const data = {
    users: [
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' }
    ],
    workers: [
      { id: 1, name: 'Worker 1', position: 'Position 1' },
      { id: 2, name: 'Worker 2', position: 'Position 2' }
    ],
    brokers: [
      { id: 1, name: 'Broker 1', company: 'Company 1' },
      { id: 2, name: 'Broker 2', company: 'Company 2' }
    ]
  };

  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = ''; // Clear previous content

  const details = data[category];
  if (details) {
    details.forEach(detail => {
      const detailDiv = document.createElement('div');
      detailDiv.innerHTML = `
        <h2>${detail.name}</h2>
        <p>ID: ${detail.id}</p>
      `;
      if (category === 'users') {
        detailDiv.innerHTML += <p>Email: ${detail.email}</p>;
      } else if (category === 'workers') {
        detailDiv.innerHTML += <p>Position: ${detail.position}</p>;
      } else if (category === 'brokers') {
        detailDiv.innerHTML += <p>Company: ${detail.company}</p>;
      }
      contentDiv.appendChild(detailDiv);
    });
  }
}
