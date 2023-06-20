import {Card, Center, Container, Flex, Text} from "@mantine/core";

export default function Drinks(props: any) {
  const drinks = ["Coca-cola", "Coca-cola zero", "Orangina", "Lipton Ice tea pêche",
    "Lipton Ice tea pastèque menthe", "Dada fraise", "Dada goyave", "7up", "Oasis tropical",
    "Oasis pomme cassis framboise", "Pepsi", "San Pellegrino citron", "San Pellegrino menthe citron",
    "San Pellegrino passion"];
  const specialDrinks = ["Monster 1.80€", "Monster Ultra Paradise 1.80€", "Monster Pipeline Punch 1.80€",
    "Monster Mango Loco 1.80€", "Eau plate 0.50€", "Eau gazeuse 0.50€", "Pago Fraise 1.70€", "Pago Ananas 1.70€",
    "Smoothie orange mangue passion 2.30€"];

  return (
      <Container mih={"90vh"} maw={"80vw"} mx={"auto"}>
        <Center>
          <h1>Boissons</h1>
        </Center>
        <Center>
          <h2>Cannettes 0.85€</h2>
        </Center>
        <Flex justify={"space-around"} wrap={"wrap"} mx={"auto"} my={"lg"}>
          {drinks.map((drink) => (
              <Card shadow={"xl"} withBorder m={"sm"} radius={"md"}>
                <Text m={"sm"}>{drink}</Text>
              </Card>
          ))}
        </Flex>
        <Center>
          <h2>Autres</h2>
        </Center>
        <Flex justify={"space-around"} wrap={"wrap"} mx={"auto"} my={"lg"}>
          {specialDrinks.map((special) => (
              <Card shadow={"xl"} withBorder m={"sm"} radius={"md"}>
                <Text m={"sm"}>{special}</Text>
              </Card>
          ))}
        </Flex>
      </Container>
  );
}