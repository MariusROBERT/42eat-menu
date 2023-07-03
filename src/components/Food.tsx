import {Card, Center, Flex, Text} from "@mantine/core";
import FoodCard from "./FoodCard";
import croque from "../images/croque-monsieur.jpg";
import wrap from "../images/wrap.jpg";
import salade from "../images/salade.webp";
import {useMediaQuery} from "@mantine/hooks";

export default function Food(props: any) {
  const isLargeScreen = useMediaQuery('(min-width: 90em)');

  return (
      <Flex mih={"90vh"} maw={"85vw"} mx={"auto"} px={"0"} direction={"column"} align={"center"}>
        <Center>
          <h1>Nourriture</h1>
        </Center>
        <Flex justify={"space-evenly"} direction={isLargeScreen ? "row" : "column"}>
          <FoodCard name={"Wrap"} image={wrap}
                    ingredients={["Emmental", "Poulet ou Mozza", "Tomate",
                      "Concombres", "Cornichons", "Bûche de chèvre",
                      "Oignons", "Oignons frits", "Olives", "Sauce au choix",
                      "Salade"]} price={"3.50"}/>
          <FoodCard name={"Croque-Monsieur"} image={croque}
                    ingredients={["Emmental", "Poulet ou Mozza", "Tomate",
                      "Oignons", "Sauce au choix"]} price={"1.50"}/>
          <FoodCard name={"Salade"} image={salade}
                    ingredients={["Maïs", "Tomate", "Concombres",
                      "Cornichons", "Oignons", "Oignons frits",
                      "Sauce au choix", "Salade"]}
                    supplements={["Poulet", "Mozza", "Bûche de chèvre"]}
                    price={"2.20"}/>
        </Flex>
        <Center>
          <h2>Nos sauces</h2>
        </Center>
        <Flex justify={"space-around"} wrap={"wrap"} mx={"auto"} my={"lg"} maw={"70vw"}>
          {["Ketchup", "Mayonnaise", "Moutarde", "Barbecue", "Curry", "Pommes-Frites",
            "Pitta", "3 Poivres", "Algérienne", "Samouraï", "Bleu", "Miami", "Big Burger",
            "Épices : Herbes de Provence", "Épices : Thym", "Épices : Curry",].map((sauce) => (
              <Card shadow={"xl"} withBorder m={"sm"} radius={"md"}>
                <Text m={"sm"}>{sauce}</Text>
              </Card>
          ))}
        </Flex>
      </Flex>
  );
}