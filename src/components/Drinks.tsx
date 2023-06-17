import {Card, Center, Flex, Text} from "@mantine/core";

export default function Drinks(props: any) {
  const drinks = ["Coca-cola", "Coca-cola zero", "Orangina", "Lipton Ice tea pêche",
  "Lipton Ice tea pastèque menthe", "Dada fraise", "Dada goyave", "7up", "Oasis tropical",
      "Oasis pomme cassis framboise", "Pepsi", "San Pellegrino citron", "San Pellegrino menthe citron",
      "San Pellegrino passion"];
  const specialDrinks = ["Monster 1.80€", "Monster Ultra Paradise 1.80€", "Monster Pipeline Punch 1.80€",
    "Monster Mango Loco 1.80€", "Eau plate 0.30€", "Eau gazeuse 0.30€", "Pago Fraise 2.00€", "Pago Orange 2.00€",
    "Smoothie orange, 2.00€"];

  return (
      <div style={{height: "90vh"}}>
        <Center>
          <h1>Boissons</h1>
        </Center>
        <Center>
          <h2>Cannettes 0.80€</h2>
        </Center>
        <Flex justify={"space-around"} wrap={"wrap"} mx={100} my={"lg"}>
          {drinks.map((drink) => (
              <Card shadow={"xl"} withBorder m={"sm"} radius={"md"}>
                <Text m={"sm"}>{drink}</Text>
              </Card>
          ))}
        </Flex>
        <Center>
          <h2>Autres</h2>
        </Center>
        <Flex justify={"space-around"} wrap={"wrap"} mx={100} my={"lg"}>
          {specialDrinks.map((special) => (
              <Card shadow={"xl"} withBorder m={"sm"} radius={"md"}>
                <Text m={"sm"}>{special}</Text>
              </Card>
          ))}
        </Flex>
      </div>
  );
}