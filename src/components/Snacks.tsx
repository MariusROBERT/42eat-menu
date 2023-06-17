import {Center, Flex} from "@mantine/core";
import SnackCard from "./SnackCard";

export default function Snacks() {
  return (
      <div style={{height: "90vh"}}>
        <Center>
          <h1>Snacks</h1>
        </Center>
        <Center>
          <h2>Snacks secs 1.00€</h2>
        </Center>
        <Flex justify={"space-around"} wrap={"wrap"} mx={100} my={"lg"}>
          <SnackCard name={"Kinder Bueno"} img={""}/>
          <SnackCard name={"Kinder Bueno White"} img={""}/>
          <SnackCard name={"M&M's"} img={""}/>
          <SnackCard name={"Crunch"} img={""}/>
          <SnackCard name={"Snickers"} img={""}/>
          <SnackCard name={"Maltesers"} img={""}/>
        </Flex>
        <Center>
          <h2>Snacks frais</h2>
        </Center>
        <Flex justify={"space-around"} wrap={"wrap"} mx={100} my={"lg"}>
          <SnackCard name={"Muffin vanille chocolat"} img={""} price={"1.70"}/>
          <SnackCard name={"Muffin tout chocolat"} img={""} price={"1.70"}/>
          <SnackCard name={"Muffin myrtille"} img={""} price={"1.70"}/>
          <SnackCard name={"Cookie tout chocolat"} img={""} price={"1.10"}/>
          <SnackCard name={"Cookie vanille chocolat"} img={""} price={"1.10"}/>
          <SnackCard name={"Cookie chocolat fourré noisettes"} img={""} price={"1.10"}/>
          <SnackCard name={"Glace cornet chocolat"} img={""} price={"1.00"}/>
          <SnackCard name={"Glace corner vanille"} img={""} price={"1.00"}/>
        </Flex>
      </div>
  );
}