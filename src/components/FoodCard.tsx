import {Card, Center, Flex, Image} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

export default function FoodCard(props: any) {
  const isLargeScreen = useMediaQuery('(min-width: 60em)');

  return (
      <Card shadow={"md"} padding={"md"} style={{margin: "2rem"}} radius={"md"} mx={"xs"}>
        <Flex direction={isLargeScreen ? "row" : "column"} align={"center"}>
          <Flex direction={"column"}>
            <h2>{props.name}</h2>
            <Image src={props.image} alt={props.name} height={200} width={200} radius={"md"}
                   caption={props.price + "€"} withPlaceholder/>
          </Flex>
          <Flex>
            <Flex direction={"column"}>
              <Center>
                <h4>Ingrédients</h4>
              </Center>
              <ul>
                {props.ingredients.map((ingredient: string) => (
                    <li>{ingredient}</li>
                ))}
              </ul>
            </Flex>
            <Flex direction={"column"}>
              <Center>
                <h4 hidden={!props.supplements}>Suppléments +0.20€</h4>
              </Center>
              <ul>
                {props.supplements?.map((supplement: string) => (
                    <li>{supplement}</li>
                ))}
              </ul>
            </Flex>
          </Flex>
        </Flex>
      </Card>
  )
}