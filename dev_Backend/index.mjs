// index.mjs
import express from 'express';

const app = express();
const PORT = 3001;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'HELLO FROM BACKEND' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
