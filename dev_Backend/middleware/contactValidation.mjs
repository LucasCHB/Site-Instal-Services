import { body, validationResult } from 'express-validator';

export const contactValidation = [
    // Nom : que des lettres avec exactement un espace
    body('name')
        .matches(/^[A-Za-z]+ [A-Za-z]+$/)
        .withMessage('Le nom doit contenir exactement un espace entre prénom et nom'),

    // Téléphone : exactement 10 chiffres
    body('phone')
        .matches(/^[0-9]{10}$/)
        .withMessage('Le téléphone doit contenir exactement 10 chiffres'),

    // Email valide
    body('email')
        .isEmail()
        .withMessage("L'email doit être valide"),   

    //Message : au moins 50 caractères
    body('message')
        .isLength({ min: 50 })
        .withMessage('Le message doit contenir au moins 50 caractères'),
];
  