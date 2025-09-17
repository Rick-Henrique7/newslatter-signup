const express = require('express');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const app = express();

app.use(express.urlencoded({ extended: true }));

mailchimp.setConfig({
    apiKey: '1a6208dd2a0dd8949cb33b685fb47aba-us18',
    server: 'us18',
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const nome = req.body.primeiroNome;
    const segundoNome = req.body.segundoNome;
    const email = req.body.email;
    
    const addMember = async () => {
        try {
            const data = await mailchimp.lists.addListMember('ce622bf668', {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: nome,
                    LNAME: segundoNome
                }
            });
            console.log(data);
            res.sendFile(__dirname + '/success.html');
        } catch (error) {
            console.error(error);
            res.sendFile(__dirname + '/failure.html');
        }
    };

    addMember();
});

app.listen(3000, () => {
    console.log('servidor em funcionamento');
});