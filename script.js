const express = require('express');
const bodyParser = require('body-parser');
const ytdl = require('ytdl-core');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle video download
app.post('/download', async (req, res) => {
  const videoURL = req.body.url;

  if (!ytdl.validateURL(videoURL)) {
    return res.status(400).send('Invalid YouTube URL');
  }

  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(videoURL, { format: 'mp4' }).pipe(res);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
