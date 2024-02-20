import { Box, Button, Container, Typography, styled } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Charte = () => {

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
        fontSize: "17px",
        color: "#E5958E",
        fontWeight: "500",
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
                        Charte de confidentialité
                    </Title>
                    <Text sx={{ marginTop: "-14px" }}>
                        Questionnaire issu du livre "Je réinvente ma vie" de Jeffrey E. Young - Janet S. Klosko.
                    </Text>
                    <Text sx={{ marginTop: "-14px" }}>
                        Introduction
                        <br />
                        <br />
                        La confidentialité des visiteurs de notre site web est très importante à nos yeux, et nous
                        nous engageons à la protéger. Cette politique détaille ce que nous faisons de vos informations
                        personnelles.
                    </Text>
                    <Text sx={{ marginTop: "-14px" }}>
                        Collecte d’informations personnelles
                        <br />
                        <br />
                        Les types d’informations personnelles suivants qui sont collecter, stocker et utiliser :
                        <br />
                        Votre Nom et Prénom ;
                        <br />
                        Votre Adresse Mail ;
                        <br />
                        Vos réponse aux questionnaire ;
                        <br />
                        Toute autre information personnelle que vous nous communiquez ;
                        <br />
                        Toutes ces données sont stockés dans nos bases de données.
                    </Text>
                    <Text sx={{ marginTop: "-14px" }}>
                        Utilisation de vos informations personnelles
                        <br />
                        <br />
                        Les informations personnelles qui nous sont fournies par le biais de notre site web seront utilisées
                        dans les objectifs décrits dans cette politique ou dans les pages du site pertinentes. Nous pouvons
                        utiliser vos informations personnelles pour :
                        <br />
                        Vous apportez une aide et des réponses rapidement et concrètement grâce aux données collectés.
                        <br />
                        Vous fournir les services proposés sur notre site ;
                        <br />
                        Vous envoyer des notifications par e-mail que vous avez expressément demandées ;
                        <br />
                        Si vous soumettez des informations personnelles sur notre site web dans le but de les publier, nous
                        les publierons et pourrons utiliser ces informations conformément aux autorisations que vous nous accordez.
                        <br />
                        Sans votre consentement explicite, nous ne fournirons pas vos informations personnelles à des tierces
                        parties pour leur marketing direct, ni celui d’autres tierces parties.
                    </Text>
                    <Text sx={{ marginTop: "-14px" }}>
                        Divulgation de vos informations personnelles
                        <br />
                        <br />
                        Nous pouvons divulguer vos informations personnelles à n’importe lequel de nos employés, dirigeants,
                        assureurs, conseillers professionnels, agents, fournisseurs, ou sous-traitants dans la mesure
                        où cela est raisonnablement nécessaire aux fins énoncées dans cette politique.
                        <br />
                        Nous pouvons divulguer vos informations personnelles à n’importe quel membre de notre
                        groupe d’entreprises (cela signifie nos filiales, notre société holding ultime
                        et toutes ses filiales) dans la mesure où cela est raisonnablement nécessaire aux fins
                        énoncées dans cette politique.
                        <br />
                        Nous pouvons divulguer vos informations personnelles :
                        <br />
                        Dans la mesure où nous sommes tenus de le faire par la loi ;
                        <br />
                        Dans le cadre de toute procédure judiciaire en cours ou à venir ;
                        <br />
                        Pour établir, exercer ou défendre nos droits légaux (y compris fournir des informations à d’autres
                        à des fins de prévention des fraudes et de réduction des risques de crédit) ;
                        <br />
                        À toute personne que nous estimons raisonnablement faire partie intégrante d’un tribunal ou autre
                        autorité compétente pour la divulgation de ces informations personnelles si, selon notre opinion,
                        un tel tribunal ou une telle autorité serait susceptible de demander la divulgation de ces informations
                        personnelles.
                        <br />
                        Sauf disposition contraire de la présente politique, nous ne transmettrons pas vos informations
                        personnelles à de tierces parties.
                    </Text>
                    <Text sx={{ marginTop: "-14px" }}>
                        Conservation de vos informations personnelles
                        <br />
                        <br />
                        Notre politiques de conservation des données et notre procédures, conçues pour nous aider à nous conformer
                        à nos obligations légales concernant la conservation et la suppression d’informations personnelles.
                        <br />
                        Les informations personnelles que nous traitons à quelque fin que ce soit ne sont pas conservées plus
                        longtemps que nécessaire à cette fin ou à ces fins.
                        <br />
                        Si nous pensons que les documents peuvent être pertinents pour toute procédure judiciaire en cours ou potentielle ;
                    </Text>
                    <Text sx={{ marginTop: "-14px" }}>
                        Sécurité de vos informations personnelles
                        <br />
                        <br />
                        Nous prendrons des précautions techniques et organisationnelles raisonnables pour empêcher la perte, 
                        l’abus ou l’altération de vos informations personnelles.
                        <br />
                        Nous stockerons toutes les informations personnelles que vous nous fournissez sur des serveurs sécurisés
                        (protégés par mot de passe et pare-feu).
                        <br />
                        Toutes les transactions financières électroniques effectuées par le biais de notre site web seront 
                        protégées par des technologies de cryptage.
                        <br />
                        Vous reconnaissez que la transmission d’informations par internet est intrinsèquement non sécurisée, et 
                        que nous ne pouvons pas garantir la sécurité de vos données envoyées par internet.
                    </Text>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextCopyright sx={{ marginTop: "1rem" }}>
                        © Raphael De Almeida
                    </TextCopyright>
                    <Button
                        onClick={() => navigate("/")}
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
                        Retour à l'accueil
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Charte;