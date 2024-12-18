// Backend (Node.js + Express.js)
// Save this as server.js
const express = require('express');
const cors = require('cors');
const path = require('path'); // Added for serving static files
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Sample data: Best AI tools for marketing
const aiMarketingApps = [
  { id: 1, name: 'HubSpot', description: 'CRM and marketing automation platform with AI tools for personalization and analytics.' },
  { id: 2, name: 'Marketo', description: 'Marketing automation software with AI-driven campaign management.' },
  { id: 3, name: 'Phrasee', description: 'AI tool for generating optimized marketing copy for email and social media.' },
  { id: 4, name: 'Pathmatics', description: 'AI-powered platform for competitive ad intelligence and marketing insights.' },
  { id: 5, name: 'Albert.ai', description: 'AI platform for autonomous digital marketing campaigns.' }
];

// API route
app.get('/api/apps', (req, res) => {
  res.json(aiMarketingApps);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});