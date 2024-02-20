import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography, styled } from '@mui/material';

const Questionnaire = () => {

    const navigate = useNavigate();

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [enfant1, setEnfant1] = useState('');
    const [enfant2, setEnfant2] = useState('');
    const [enfant3, setEnfant3] = useState('');
    const [enfant4, setEnfant4] = useState('');
    const [enfant5, setEnfant5] = useState('');
    const [enfant6, setEnfant6] = useState('');
    const [enfant7, setEnfant7] = useState('');
    const [enfant8, setEnfant8] = useState('');
    const [enfant9, setEnfant9] = useState('');
    const [enfant10, setEnfant10] = useState('');
    const [enfant11, setEnfant11] = useState('');
    const [enfant12, setEnfant12] = useState('');
    const [enfant13, setEnfant13] = useState('');
    const [enfant14, setEnfant14] = useState('');
    const [enfant15, setEnfant15] = useState('');
    const [enfant16, setEnfant16] = useState('');
    const [enfant17, setEnfant17] = useState('');
    const [enfant18, setEnfant18] = useState('');
    const [enfant19, setEnfant19] = useState('');
    const [enfant20, setEnfant20] = useState('');
    const [enfant21, setEnfant21] = useState('');
    const [enfant22, setEnfant22] = useState('');
    const [maintenant1, setMaintenant1] = useState('');
    const [maintenant2, setMaintenant2] = useState('');
    const [maintenant3, setMaintenant3] = useState('');
    const [maintenant4, setMaintenant4] = useState('');
    const [maintenant5, setMaintenant5] = useState('');
    const [maintenant6, setMaintenant6] = useState('');
    const [maintenant7, setMaintenant7] = useState('');
    const [maintenant8, setMaintenant8] = useState('');
    const [maintenant9, setMaintenant9] = useState('');
    const [maintenant10, setMaintenant10] = useState('');
    const [maintenant11, setMaintenant11] = useState('');
    const [maintenant12, setMaintenant12] = useState('');
    const [maintenant13, setMaintenant13] = useState('');
    const [maintenant14, setMaintenant14] = useState('');
    const [maintenant15, setMaintenant15] = useState('');
    const [maintenant16, setMaintenant16] = useState('');
    const [maintenant17, setMaintenant17] = useState('');
    const [maintenant18, setMaintenant18] = useState('');
    const [maintenant19, setMaintenant19] = useState('');
    const [maintenant20, setMaintenant20] = useState('');
    const [maintenant21, setMaintenant21] = useState('');
    const [maintenant22, setMaintenant22] = useState('');

    const [isFormValid, setIsFormValid] = useState('');

    const handleFieldChange = () => {
        if ( enfant22 && maintenant22 ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = 'service_fdrcxnu';
        const templateId = 'template_euh23rr';
        const publicKey = 'kmt4PQq7aSKfolanD';

        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_nom: nom,
                from_email: email,
                from_enfant1: enfant1,
                from_enfant2: enfant2,
                from_enfant3: enfant3,
                from_enfant4: enfant4,
                from_enfant5: enfant5,
                from_enfant6: enfant6,
                from_enfant7: enfant7,
                from_enfant8: enfant8,
                from_enfant9: enfant9,
                from_enfant10: enfant10,
                from_enfant11: enfant11,
                from_enfant12: enfant12,
                from_enfant13: enfant13,
                from_enfant14: enfant14,
                from_enfant15: enfant15,
                from_enfant16: enfant16,
                from_enfant17: enfant17,
                from_enfant18: enfant18,
                from_enfant19: enfant19,
                from_enfant20: enfant20,
                from_enfant21: enfant21,
                from_enfant22: enfant22,
                from_maintenant1: maintenant1,
                from_maintenant2: maintenant2,
                from_maintenant3: maintenant3,
                from_maintenant4: maintenant4,
                from_maintenant5: maintenant5,
                from_maintenant6: maintenant6,
                from_maintenant7: maintenant7,
                from_maintenant8: maintenant8,
                from_maintenant9: maintenant9,
                from_maintenant10: maintenant10,
                from_maintenant11: maintenant11,
                from_maintenant12: maintenant12,
                from_maintenant13: maintenant13,
                from_maintenant14: maintenant14,
                from_maintenant15: maintenant15,
                from_maintenant16: maintenant16,
                from_maintenant17: maintenant17,
                from_maintenant18: maintenant18,
                from_maintenant19: maintenant19,
                from_maintenant20: maintenant20,
                from_maintenant21: maintenant21,
                from_maintenant22: maintenant22,
                to_name: 'Raphael',
            }
        }

        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setNom('');
            setEmail('');
            setEnfant1('');
            setEnfant2('');
            setEnfant3('');
            setEnfant4('');
            setEnfant5('');
            setEnfant6('');
            setEnfant7('');
            setEnfant8('');
            setEnfant9('');
            setEnfant10('');
            setEnfant11('');
            setEnfant12('');
            setEnfant13('');
            setEnfant14('');
            setEnfant15('');
            setEnfant16('');
            setEnfant17('');
            setEnfant18('');
            setEnfant19('');
            setEnfant20('');
            setEnfant21('');
            setEnfant22('');
            setMaintenant1('');
            setMaintenant2('');
            setMaintenant3('');
            setMaintenant4('');
            setMaintenant5('');
            setMaintenant6('');
            setMaintenant7('');
            setMaintenant8('');
            setMaintenant9('');
            setMaintenant10('');
            setMaintenant11('');
            setMaintenant12('');
            setMaintenant13('');
            setMaintenant14('');
            setMaintenant15('');
            setMaintenant16('');
            setMaintenant17('');
            setMaintenant18('');
            setMaintenant19('');
            setMaintenant20('');
            setMaintenant21('');
            setMaintenant22('');
            if (isFormValid) {
                navigate("/reponse");
            }
        } catch (error) {
            console.error(error);
        }
    }

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        width: "100%",
        color: "#210440",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("md")]: {
            fontSize: "40px",
        },
    }));

    const TextCopyright = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        width: "100%",
        color: "#FFF",
        marginTop: "5em",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    }));

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#E5958E",
        boxShadow: "none",
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "#210440"
    }));

    return (
        <Box sx={{ backgroundColor: "#210440", minHeight: "100vh" }}>
            <Container sx={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        backgroundColor: "#E5958E",
                        borderRadius: "30px",
                    }}
                >
                    <Title>
                        Questionnaire
                    </Title>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: '#10440' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ display: "none" }}>
                                        <Tab label="1" value="1" />
                                        <Tab label="2" value="2" />
                                        <Tab label="3" value="3" />
                                        <Tab label="4" value="4" />
                                        <Tab label="5" value="5" />
                                        <Tab label="6" value="6" />
                                        <Tab label="7" value="7" />
                                        <Tab label="8" value="8" />
                                        <Tab label="9" value="9" />
                                        <Tab label="10" value="10" />
                                        <Tab label="11" value="11" />
                                        <Tab label="12" value="12" />
                                        <Tab label="13" value="13" />
                                        <Tab label="14" value="14" />
                                        <Tab label="15" value="15" />
                                        <Tab label="16" value="16" />
                                        <Tab label="17" value="17" />
                                        <Tab label="18" value="18" />
                                        <Tab label="19" value="19" />
                                        <Tab label="20" value="20" />
                                        <Tab label="21" value="21" />
                                        <Tab label="22" value="22" />
                                        <Tab label="23" value="23" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Enregistrez-vous, pour avoir le résultat de ce questionnaires à 22 questions.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <TextField
                                                            type="text"
                                                            id="nom"
                                                            label="Prenom et Nom"
                                                            variant="outlined"
                                                            fullWidth
                                                            value={nom}
                                                            onChange={(e) => {
                                                                setNom(e.target.value);
                                                                handleFieldChange();
                                                            }}
                                                        />
                                                        <TextField
                                                            type="text"
                                                            id="email"
                                                            label="Email"
                                                            variant="outlined"
                                                            fullWidth
                                                            value={email}
                                                            onChange={(e) => {
                                                                setEmail(e.target.value);
                                                                handleFieldChange();
                                                            }}
                                                        />

                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (nom && email) {
                                                                handleChange(null, '2');
                                                            } else {
                                                                alert("S'il vous plait, enregistrez-vous.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="2">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je m'accroche à mes proches, car j'ai peur qu'il me quittent.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant1}
                                                                onChange={(e) => {
                                                                    setEnfant1(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant1}
                                                                onChange={(e) => {
                                                                    setMaintenant1(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant1 && maintenant1) {
                                                                handleChange(null, '3');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="3">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        J'ai très peur que les gens que j'aime me quittent pour quelqu'un d'autre, qu'ils aimeront davantage.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant2}
                                                                onChange={(e) => {
                                                                    setEnfant2(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant2}
                                                                onChange={(e) => {
                                                                    setMaintenant2(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant2 && maintenant2) {
                                                                handleChange(null, '4');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="4">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je suis à l'affût de la moindre arrière-pensée, je n'accorde pas facilement ma confiance.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant3}
                                                                onChange={(e) => {
                                                                    setEnfant3(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant3}
                                                                onChange={(e) => {
                                                                    setMaintenant3(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant3 && maintenant3) {
                                                                handleChange(null, '5');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="5">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je dois toujours rester sur mes gardes pour éviter qu'on me blesse.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant4}
                                                                onChange={(e) => {
                                                                    setEnfant4(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant4}
                                                                onChange={(e) => {
                                                                    setMaintenant4(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant4 && maintenant4) {
                                                                handleChange(null, '6');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="6">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        La menace du danger me préoccupe plus que la moyenne des gens; j’ai peur de tomber malade ou qu’il m'arrive malheur.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant5}
                                                                onChange={(e) => {
                                                                    setEnfant5(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant5}
                                                                onChange={(e) => {
                                                                    setMaintenant5(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant5 && maintenant5) {
                                                                handleChange(null, '7');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="7">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        J'ai peur que moi ou ma famille subissons un revers de fortune, que nous devenons indigents et dépendants d'autrui.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant6}
                                                                onChange={(e) => {
                                                                    setEnfant6(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant6}
                                                                onChange={(e) => {
                                                                    setMaintenant6(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant6 && maintenant6) {
                                                                handleChange(null, '8');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="8">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je ne me sens pas capable de me débrouiller seul, j’ai besoin de secours des autres pour vivre.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant7}
                                                                onChange={(e) => {
                                                                    setEnfant7(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant7}
                                                                onChange={(e) => {
                                                                    setMaintenant7(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant7 && maintenant7) {
                                                                handleChange(null, '9');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="9">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Mes parents et moi nous mêlons trop de nos vies et de nos ennuis respectifs.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant8}
                                                                onChange={(e) => {
                                                                    setEnfant8(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant8}
                                                                onChange={(e) => {
                                                                    setMaintenant8(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant8 && maintenant8) {
                                                                handleChange(null, '10');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="10">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Personne n'a jamais été là pour prendre soin de moi, pour partager sa vie avec moi, ou pour se préoccuper vraiment de ce qui peut m'arriver.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant9}
                                                                onChange={(e) => {
                                                                    setEnfant9(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant9}
                                                                onChange={(e) => {
                                                                    setMaintenant9(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant9 && maintenant9) {
                                                                handleChange(null, '11');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="11">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Personne n'a jamais été là pour me comprendre, pour me manifester de l'empathie, pour me guider, me conseiller et m’aider.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant10}
                                                                onChange={(e) => {
                                                                    setEnfant10(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant10}
                                                                onChange={(e) => {
                                                                    setMaintenant10(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant10 && maintenant10) {
                                                                handleChange(null, '12');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="12">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je n'ai pas de sentiment d'appartenance. Je suis différent. Je détonne.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant11}
                                                                onChange={(e) => {
                                                                    setEnfant11(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant11}
                                                                onChange={(e) => {
                                                                    setMaintenant11(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant11 && maintenant11) {
                                                                handleChange(null, '13');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="13">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je suis terne et ennuyeux. Je ne sais pas m'exprimer en présence d'autrui.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant12}
                                                                onChange={(e) => {
                                                                    setEnfant12(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant12}
                                                                onChange={(e) => {
                                                                    setMaintenant12(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant12 && maintenant12) {
                                                                handleChange(null, '14');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="14">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Si les gens qui m'intéressent connaissaient vraiment tous mes défauts, ils ne pourraient pas m'aimer.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant13}
                                                                onChange={(e) => {
                                                                    setEnfant13(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant13}
                                                                onChange={(e) => {
                                                                    setMaintenant13(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant13 && maintenant13) {
                                                                handleChange(null, '15');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="15">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        J'ai honte de moi-même. Je ne suis pas digne de l'affection, de l’attention et du respect des autres.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant14}
                                                                onChange={(e) => {
                                                                    setEnfant14(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant14}
                                                                onChange={(e) => {
                                                                    setMaintenant14(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant14 && maintenant14) {
                                                                handleChange(null, '16');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="16">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je ne suis pas aussi intelligent ou doué pour le travail ( ou pour les études ) que la plupart des gens.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant15}
                                                                onChange={(e) => {
                                                                    setEnfant15(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant15}
                                                                onChange={(e) => {
                                                                    setMaintenant15(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant15 && maintenant15) {
                                                                handleChange(null, '17');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="17">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je me sens souvent inapte, car je ne suis pas à la hauteur des autres en terme de talent, d'intelligence ou d’aptitude au succès.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant16}
                                                                onChange={(e) => {
                                                                    setEnfant16(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant16}
                                                                onChange={(e) => {
                                                                    setMaintenant16(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant16 && maintenant16) {
                                                                handleChange(null, '18');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="18">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        J'ai l'impression d'être obligé d'obéir aux désirs de tout un chacun sans quoi ils se vengeront ou me rejetteront.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant17}
                                                                onChange={(e) => {
                                                                    setEnfant17(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant17}
                                                                onChange={(e) => {
                                                                    setMaintenant17(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant17 && maintenant17) {
                                                                handleChange(null, '19');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="19">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Mon entourage considère que je m'occupe trop des autres, et pas assez de moi-même.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant18}
                                                                onChange={(e) => {
                                                                    setEnfant18(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant18}
                                                                onChange={(e) => {
                                                                    setMaintenant18(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant18 && maintenant18) {
                                                                handleChange(null, '20');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="20">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je m'efforce de faire de mon mieux. Je ne me contente pas de l'à peu près. Je veux être le meilleur en tout.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant19}
                                                                onChange={(e) => {
                                                                    setEnfant19(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant19}
                                                                onChange={(e) => {
                                                                    setMaintenant19(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant19 && maintenant19) {
                                                                handleChange(null, '21');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="21">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        J'ai tant à faire qu'il ne me reste presque plus de temps pour me détendre et me divertir.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant20}
                                                                onChange={(e) => {
                                                                    setEnfant20(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant20}
                                                                onChange={(e) => {
                                                                    setMaintenant20(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant20 && maintenant20) {
                                                                handleChange(null, '22');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="22">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je suis d'avis que les régles et les conventions auxquelles adhèrent les autres devraient m’être épargnées.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant21}
                                                                onChange={(e) => {
                                                                    setEnfant21(e.target.value);
                                                                    handleFieldChange();
                                                                }}

                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant21}
                                                                onChange={(e) => {
                                                                    setMaintenant21(e.target.value);
                                                                    handleFieldChange();
                                                                }}
                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                        onClick={() => {
                                                            if (enfant21 && maintenant21) {
                                                                handleChange(null, '23');
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                    >
                                                        Question suivante
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                                <TabPanel value="23">
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Item>
                                                    <Typography sx={{ display: "flex", fontSize: "20px", fontWeight: "600", justifyContent: "flex-start" }}>
                                                        Je suis d'avis que les régles et les conventions auxquelles adhèrent les autres devraient m’être épargnées.
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, gap: "10px", marginTop: "30px" }}>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="enfant">Enfance</InputLabel>
                                                            <Select
                                                                labelId="enfant1-label"
                                                                id="enfant1"
                                                                label="Enfance"
                                                                value={enfant22}
                                                                onChange={(e) => {
                                                                    setEnfant22(e.target.value);
                                                                    handleFieldChange();
                                                                }}

                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                        <FormControl variant="outlined" sx={{ width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" } }}>
                                                            <InputLabel id="maintenant-label">Maintenant</InputLabel>
                                                            <Select
                                                                labelId="maintenant-label"
                                                                id="Maintenant1"
                                                                label="Maintenant"
                                                                value={maintenant22}
                                                                onChange={(e) => {
                                                                    setMaintenant22(e.target.value);
                                                                    handleFieldChange();
                                                                }}

                                                            >
                                                                <MenuItem value="">Sélectionnez une option</MenuItem>
                                                                <MenuItem value="Absolument faux">1 Absolument faux</MenuItem>
                                                                <MenuItem value="Faux dans l'ensemble"> 2 Faux dans l'ensemble</MenuItem>
                                                                <MenuItem value="Plus faux que vrai"> 3 Plus faux que vrai</MenuItem>
                                                                <MenuItem value="Modérément vrai">4 Modérément vrai</MenuItem>
                                                                <MenuItem value="Vrai dans l'ensemble">5 Vrai dans l'ensemble</MenuItem>
                                                                <MenuItem value="Absolument vrai">6 Absolument vrai</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Box>
                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        onClick={(e) => {
                                                            if (enfant22 && maintenant22) {
                                                                handleChange(null, '/reponse');
                                                                handleSubmit(e);
                                                                navigate("/reponse");
                                                            } else {
                                                                alert("S'il vous plait, répondez à la question.");
                                                            }
                                                        }}
                                                        sx={{ display: "flex", justifyContent: "flex-start", marginTop: "20px", backgroundColor: "#000336", "&:hover": { backgroundColor: "#000336" } }}
                                                    >
                                                        Valide tes réponses
                                                    </Button>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </form>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextCopyright sx={{ marginTop: "1rem" }}>
                        © Raphael De Almeida
                    </TextCopyright>
                    <Button
                        onClick={() => navigate("/charte")}
                        sx={{
                            marginTop: "-1.5rem",
                            display: 'flex',
                            width: "100%",
                            fontSize: "14px",
                            color: "#FFF",
                            fontWeight: "bold",
                            textAlign: "center",
                            textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
                        }}
                    >
                        Charte de confidentialité
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Questionnaire;