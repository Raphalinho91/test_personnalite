import { TextField, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from "react";

const EmailRestAPI = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [message, setMessage] = useState("Je vous écoute...");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = 'service_fdrcxnu';
        const templateId = 'template_64evyay';
        const publicKey = 'kmt4PQq7aSKfolanD';

        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_nom: nom,
                from_prenom: prenom,
                from_email: email,
                to_name: 'Raphael',
                message: message,
            }
        };

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setNom('');
            setPrenom('');
            setEmail('');
            setNumero('');
            setMessage('');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
                <TextField
                    type="text"
                    id="nom"
                    label="Nom"
                    variant="outlined"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                />
                <TextField
                    type="text"
                    id="prenom"
                    label="Prénom"
                    variant="outlined"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    required
                />
                <TextField
                    type="email"
                    id="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    type="text" 
                    id="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={10}
                    defaultValue="Dites-moi vos besoins..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: "#000336",
                        marginTop: "1rem",
                        "&:hover": {
                            backgroundColor: "#000336",
                        }
                    }}
                >
                    Envoyez moi Email
                </Button>
            </form>
        </div>
    );
};

export default EmailRestAPI;
