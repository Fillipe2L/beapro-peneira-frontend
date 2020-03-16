import React from "react";
import {
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";
// import { Container } from './styles';

export default function Tournament() {
  return (
    <Container>
      <h2>Campeonato</h2>
      <Card>
        <CardContent>
          <h3>Funcionamento do Torneio:</h3>
          <List style={{ width: "100%", maxWidth: "500px" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>1</Avatar>
              </ListItemAvatar>
              Ingresse no seu Time
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>2</Avatar>
              </ListItemAvatar>
              Participe da fase de campeonatos
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>3</Avatar>
              </ListItemAvatar>
              Destaque-se nas partidas e ganhe pontos
            </ListItem>

            <ListItem
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "5px",
                alignItems: "flex-start"
              }}
            >
              <FormControl>
                <InputLabel htmlFor="my-input">Código de Time</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">
                  Nós enviamos o código do seu time no battlefy via e-mail
                </FormHelperText>
              </FormControl>
              <Button
                variant="contained"
                style={{ width: "100%" }}
                color="primary"
              >
                Ingressar
              </Button>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}
