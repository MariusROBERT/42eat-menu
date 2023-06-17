import {Center, Paper, Text} from "@mantine/core";

export default function Display() {
  return (
      <Center style={{height: "90vh"}}>
        <Paper>
          <Center>
            <h1>Bienvenue</h1>
          </Center>
          <Text>
            Bienvenue chez 42 Eat aussi connu sous le nom de Foyer.
            <br/>
            Vous pouvez voir les plats, les boissons et les snacks.
            <br/>
            Cliquer sur les boutons dans le header pour accéder aux différentes catégories.
            <br/><br/>
            Hosted by <a href={"https://vercel.com"}>Vercel</a>.
          </Text>
          <div style={{height:"10vh"}}></div>
        </Paper>
      </Center>
  );
}