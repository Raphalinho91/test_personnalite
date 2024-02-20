import React from 'react';
import { Box, Typography, Container, styled, Paper, Grid, Button } from "@mui/material";
import EmailRestAPI from '../Components/EmailRestAPI';
import { useNavigate } from "react-router-dom";

const Reponse = () => {

    const navigate = useNavigate();

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "33px",
        color: "#210440",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("md")]: {
            fontSize: "26px",
        },
    }));

    const Text = styled(Typography)(({ theme }) => ({
        fontSize: "23px",
        color: "#210440",
        fontWeight: "bold",
        textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
        [theme.breakpoints.down("md")]: {
            fontSize: "18px",
        },
    }));

    const TextCopyright = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        width: "100%",
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    }));

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#E5958E",
        padding: theme.spacing(3),
        color: "#210440",
        borderRadius: "30px",
    }));

    return (
        <Box sx={{ backgroundColor: "#210440", minHeight: "100vh", display: "flex", justifyContent: "center", paddingTop: "5rem", paddingBottom: "2rem" }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            <Title>
                                Merci d'avoir répondu à ce questionnaire, vos résultats vous seront envoyés sous 24h par e-mail.
                            </Title>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <Text>
                                Si vous avez besoins de parler à quelqu'un, d'exprimer
                                ce que vous ressentez ou d'écrire ce qui va mal. Vous
                                pouvez toujours me contacter et j'essayerai de vous
                                aider du mieux que je peux.
                            </Text>
                            <EmailRestAPI />
                        </Item>
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextCopyright sx={{ marginTop: "1rem" }}>
                        © Raphael De Almeida
                    </TextCopyright>
                    <Button
                        onClick={() => navigate("/charte")}
                        sx={{
                            marginTop: "1rem",
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

export default Reponse;
