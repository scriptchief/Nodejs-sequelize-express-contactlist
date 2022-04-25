const {contact} = require('../../../models');
const {user} = require('../../../models');
const { param } = require('../../routes/auth/auth');

const contacts = async (req, res) => {

        let arraycontact = [];

        await contact.findAll({
            where: {
                iduser: req.user.id
            }
        })
        .then(contact => {
            contact.forEach(contacto => {
                arraycontact.push(contacto.dataValues);
            });
            
        })
        .catch(error => {
            console.log(error);
        })


    res.render('contacts/contacts', {arraycontact})
}

const addContacto = (req, res) => {
    res.render('contacts/add');
}

const saveContact = async(req, res) => {

    const {contactName, telephone, company } = req.body;
    
    await contact.create({ iduser: req.user.id, number: contactName, telephone: telephone, company: company})
            .then( repuesta => {
                res.redirect('/contacts');
            })
            .catch(error => {
                console.log(error)
            })


}

const deleteContact = async(req, res) => {

    const {id} = req.params;

    await contact.destroy({
        where: {
            id: id
        }
    })
    .then(res => {
    })
    .catch( error => {
        console.log(error);
    })

    res.redirect('/contacts');
}

const contactEdit = async(req, res) => {
    const {id} = req.params;
    const {contactName, telephone, company } = req.body;

    const contactoUpdate = await contact.update({number: contactName, telephone: telephone, company: company},{
        where: {
            id: id
        }
    })

    console.log(contactoUpdate);

    res.redirect('/contacts');
}

const editContact = async(req, res) => {
    const {id} = req.params;

    const contacto = await contact.findAll({
        where: {
            id: id
        }
    })

    res.render('contacts/update', {Contacto: contacto[0].dataValues});


}

module.exports = {
    contacts,
    addContacto,
    saveContact,
    deleteContact,
    editContact,
    contactEdit
};