import {Center, Paper, Text} from "@mantine/core";

export default function Display() {
  return (
      <Center mih={"90vh"} mx={"auto"}>
        <Paper mx={"md"}>
          <Center>
            <h1>Bienvenue</h1>
          </Center>
          <Text>
            Bienvenue chez 42 Eat aussi connu sous le nom de Foyer.
            <br/>
            Vous pouvez voir les <a href={"#food"}>plats</a>, les <a href={"#drink"}>boissons</a> et les <a
              href={"#snacks"}>snacks</a>.
            <br/>
            Cliquer sur les boutons dans le header pour accéder aux différentes catégories.
            <br/><br/>
            Hosted by <a href={"https://vercel.com"}>Vercel</a>.
          </Text>
          <div style={{height: "10vh"}}></div>
        </Paper>
      </Center>
  );
}