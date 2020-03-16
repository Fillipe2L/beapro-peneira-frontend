import React, { useEffect } from "react";
import {
  Container,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Button
} from "@material-ui/core";

import KnowledgeTest from "../../Tests/KnowledgeTest";
// import { Container } from './styles';

export default function Knowledge() {
  const [openTest, setOpenTest] = React.useState(false);

  return (
    <Container>
      <h2>Etapa de Conhecimento</h2>
      <Card>
        <CardContent>
          <h3>As regras do teste:</h3>
          <List style={{ width: "100%", maxWidth: "500px" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>1</Avatar>
              </ListItemAvatar>
              Será aberto um questionário multípla escolha.
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>2</Avatar>
              </ListItemAvatar>
              Cada pergunta tem apenas uma resposta correta.
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>3</Avatar>
              </ListItemAvatar>
              Você terá 25 minutos para responder o questionário.
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>4</Avatar>
              </ListItemAvatar>
              Não será possível refazer o teste!
            </ListItem>
            <ListItem>
              <Button
                onClick={() => setOpenTest(true)}
                variant="contained"
                style={{ width: "100%" }}
                color="primary"
              >
                Fazer o Teste
              </Button>
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <KnowledgeTest open={openTest} handleClose={() => setOpenTest(false)} />
    </Container>
  );
}
