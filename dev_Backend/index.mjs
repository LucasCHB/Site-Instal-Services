// index.mjs
import express from 'express';
import { validationResult } from 'express-validator';
import { contactValidation } from './middleware/contactValidation.mjs';

const app = express();
const PORT = 3001;

//Middleware JSON
app.use(express.json());

//Route contact avec validation externe 
app.post('/contact', contactValidation, (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    res.status(200).json({ message: 'Formulaire soumis avec succès!' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
