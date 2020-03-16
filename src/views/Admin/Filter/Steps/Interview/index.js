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

export default function Interview() {
  return (
    <Container>
      <h2>Entrevista</h2>
      <Card>
        <CardContent>
          <h3>Como funcionará :</h3>
          <List style={{ width: "100%", maxWidth: "500px" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>1</Avatar>
              </ListItemAvatar>
              Seja entrevistado por um psicológo
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>2</Avatar>
              </ListItemAvatar>
              Seja entrevistado pela equipe técnica do time
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>3</Avatar>
              </ListItemAvatar>
              Seja entrevistado por analistas do jogo
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>OK</Avatar>
              </ListItemAvatar>
              Sua entrevista está agendada para 22/03/2020 - 19:30
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}
