// index.mjs
import express from 'express';

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
