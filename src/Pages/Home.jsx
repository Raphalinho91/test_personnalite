import React from 'react';
import { Box, Typography, Container, styled, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#E5958E",
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
        fontWeight: "bold",
        textAlign: "center",
        textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    }));

    const Text = styled(Typography)(({ theme }) => ({
        fontSize: "20px",
        color: "#E5958E",
        fontWeight: "500",
        textAlign: "center",
        textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("md")]: {
            fontSize: "15px",
        },
    }));

    const Text2 = styled(Typography)(({ theme }) => ({
        fontSize: "20px",
        color: "#E5958E",
        fontWeight: "500",
        textAlign: "center",
        zIndex: "100",
        textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("md")]: {
            fontSize: "15px",
        },
    }));

    const Text3 = styled(Typography)(({ theme }) => ({
        fontSize: "20px",
        color: "#E5958E",
        fontWeight: "500",
        zIndex: "100",
        textShadow: "0px 0px 8px rgba(170, 111, 105, 1)",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("md")]: {
            fontSize: "15px",
        },
    }));

    return (
        <Box sx={{ backgroundColor: "#210440", minHeight: "100vh" }}>
            <Container>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: 2 }}>
                    <Title style={{ paddingTop: "0.5rem" }}>
                        Déceler les schémas qui influencent le plus votre vie.
                    </Title>
                    <Text sx={{ marginTop: "-14px" }}>
                        En premier lieu, évaluez la véracité de l'énoncé par rapport à votre enfance.
                        Si votre réponse peut varier selon les époques, choisissez la côte qui correspond
                        le mieux à votre état général jusqu'à l'âge de 12 ans. Ensuite, évaluez la véracité
                        de chaque énoncé par rapport à vous maintenant, comme adulte. Si votre réponse peut
                        varier selon les différentes époques de votre vie adulte, choisissez la côte qui
                        correspond le mieux à votre état général des six derniers mois.
                    </Text>
                </Box>
                <Box>
                    <Text2 sx={{ marginTop: "-8px" }}>
                        Echelle de cotation
                    </Text2>
                    <Text2 sx={{ marginTop: "-8px" }}>
                        Dans mon cas l'énoncé est :
                    </Text2>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center", gap: 5, marginTop: "-40px" }}>
                        <Text3>
                            1. Absolument faux.
                            <br />
                            2. Faux dans l'ensemble.
                            <br />
                            3. Plus faux que vrai.
                        </Text3>
                        <Text3>
                            4. Modérément vrai.
                            <br />
                            5. Vrai dans l'ensemble.
                            <br />
                            6. Absolument vrai.
                        </Text3>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/questionnaire")}
                        sx={{
                            marginTop: "1rem",
                            backgroundColor: "#000336",
                            "&:hover": {
                                backgroundColor: "#000336",
                            }
                        }}
                    >
                        Je veux déceler mon schéma
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextCopyright sx={{ marginTop: "1rem" }}>
                        © Raphael De Almeida
                    </TextCopyright>
                    <Button
                        onClick={() => navigate("/charte")}
                        sx={{
                            marginTop: "0.5rem",
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

export default Home;