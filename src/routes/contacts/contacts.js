const express = require('express');
const { contacts, addContacto, saveContact, deleteContact, editContact, contactEdit } = require('../../controllers/contacts/contacts');
const { isLoggedIn } = require('../../lib/auth');
const router = express.Router();

//GET
router.get('/', isLoggedIn,contacts);
router.get('/add', isLoggedIn,addContacto);
router.get('/delete/:id', isLoggedIn,deleteContact);
router.get('/edit/:id', isLoggedIn,editContact);

//POST
router.post('/add', saveContact);
router.post('/edit/:id', contactEdit );

module.exports = router;