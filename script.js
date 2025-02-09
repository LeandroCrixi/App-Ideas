fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('tbody');

    data.map(project => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <th>${project.id}</th>
        <td><a target="_blank" href="${project.githubLink}">${project.title}</a></td>
        <td>${project.description}</td>
        <td><a target="_blank" href="${project.pageLink}">View Project</a></td>
      `;
      
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error fetching the JSON file:', error));

  function toggleTable(tableId) {
    const table = document.getElementById(tableId);
    const button = document.querySelector(`[onclick="toggleTable('${tableId}')"]`);

    if (table.style.display === "table") {
        table.style.display = "none";
        button.textContent = button.textContent.replace("▼", "►");
    } else {
        table.style.display = "table";
        button.textContent = button.textContent.replace("►", "▼");
    }
}

