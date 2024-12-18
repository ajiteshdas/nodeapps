
    // Fetch and display the apps
    const fetchApps = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/apps');
        const apps = await response.json();
        
        const appsList = document.getElementById('apps-list');
        appsList.innerHTML = '';

        apps.forEach(app => {
          const appDiv = document.createElement('div');
          appDiv.className = 'app';
          appDiv.innerHTML = `
            <h2>${app.name}</h2>
            <p>${app.description}</p>
          `;
          appsList.appendChild(appDiv);
        });
      } catch (error) {
        console.error('Error fetching apps:', error);
        document.getElementById('apps-list').innerText = 'Failed to load apps.';
      }
    };

    fetchApps();