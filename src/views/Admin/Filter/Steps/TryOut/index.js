import React from "react";
import {
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
// import { Container } from './styles';

export default function TryOut() {
  return (
    <Container>
      <h2>Try Out</h2>
      <Card>
        <CardContent>
          <h3>Funcionamento do Try Out:</h3>
          <List style={{ width: "100%", maxWidth: "500px" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>1</Avatar>
              </ListItemAvatar>
              Se você chegou aqui, você já é um jogador de alto nível
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>2</Avatar>
              </ListItemAvatar>
              Agende seu teste técnico
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>3</Avatar>
              </ListItemAvatar>
              Seja analisado por especialistas do jogo
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>OK</Avatar>
              </ListItemAvatar>
              Seu teste está agendado para 22/03/2020 - 19:30
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}
