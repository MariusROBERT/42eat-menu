import {Center, Container, Flex} from "@mantine/core";
import SnackCard from "./SnackCard";

export default function Snacks() {
  return (
      <Container mih={"90vh"} maw={"80vw"} mx={"auto"}>
        <Center>
          <h1>Snacks</h1>
        </Center>
        <Center>
          <h2>Snacks secs 1.00€</h2>
        </Center>
        <Flex justify={"space-around"} wrap={"wrap"} mx={"auto"} my={"lg"} maw={"70vw"}>
          <SnackCard name={"Kinder Bueno"} img={"https://www.kinder.com/fr/sites/kinder_fr/files/2020-07/320x320_kbl_kinder.png?t=1686735509"}/>
          <SnackCard name={"Kinder Bueno White"} img={"https://www.valgourmand.com/31694-superlarge_default/kinder-bueno-white.jpg"}/>
          <SnackCard name={"M&M's"} img={"https://boutique.sofratel.fr/plaisir/wp-content/uploads/sites/18/2022/01/mms.jpg"}/>
          <SnackCard name={"Crunch"} img={"https://www.bonbonsetdouceurs.fr//img_s1/145644/boutique/crunch-snack-33g-la-barre.jpg"}/>
          <SnackCard name={"Snickers"} img={"https://prod.isg.bruneau.media/external/1fa3f040435832ff4441a2a890a9e705be1c48e3/?source=https%3A%2F%2Fbruneau.simpleworkspace.net%2Fphp%2Fscripts%2FgetFile.php%3Ftype%3DpubAssetBase%26s%26key%3DY0GwxgMOtQJdqOtoWcFrU8U4Cgj8yABQqPnPSel-8ps8q0X4lkQ%26t%3D16347427820000%26name%3D701656.jpg&dpi=2.00&format=webp&height=477&quality=85&width=477"}/>
          <SnackCard name={"Maltesers"} img={"https://saintcome.hospicado.com/493-large_default/bonbons-au-chocolat-maltesers.jpg"}/>
          <SnackCard name={"KitKat"} img={"https://etsdupleix.com/wp-content/uploads/2020/08/36-kit-kat-nestle-1.jpg"}/>
        </Flex>
        <Center>
          <h2>Snacks frais</h2>
        </Center>
        <Flex justify={"space-around"} wrap={"wrap"} mx={"auto"} my={"lg"}>
          <SnackCard name={"Muffin vanille chocolat"} img={"https://cdn.metro-group.com/fr/fr_pim_881031001001_05.png?w=400&h=400&mode=pad"} price={"2.00"}/>
          <SnackCard name={"Muffin myrtille"} img={"https://cdn.metro-group.com/fr/fr_pim_881028001001_05.png?w=400&h=400&mode=pad"} price={"2.00"}/>
          <SnackCard name={"Muffin tout chocolat"} img={"https://cdn.metro-group.com/fr/fr_pim_881026001001_05.png?w=400&h=400&mode=pad"} price={"2.00"}/>
          <SnackCard name={"Cookie tout chocolat"} img={"https://cdn.metro-group.com/fr/fr_pim_860044001001_01.png?w=400&h=400&mode=pad"} price={"1.25"}/>
          <SnackCard name={"Cookie chocolat fourré noisettes"} img={"https://cdn.metro-group.com/fr/fr_pim_860042001001_01.png?w=400&h=400&mode=pad"} price={"1.25"}/>
          <SnackCard name={"Cookie pépites de chocolat"} img={"https://cdn.metro-group.com/fr/fr_pim_399949001001_02.png?w=400&h=400&mode=pad"} price={"1.25"}/>
          <SnackCard name={"Glace cornet chocolat"} img={"https://media.carrefour.fr/medias/e0c50a4aace33bbf8e84c62512de0773/p_1500x1500/07613034975416-a2n1-s82.jpg"} price={"1.00"}/>
          <SnackCard name={"Glace corner vanille"} img={"https://media.carrefour.fr/medias/9ba4b4dc6b603003ae9ca981d7e15c19/p_1500x1500/07613034975386-a2n1-s18.jpg"} price={"1.00"}/>
        </Flex>
      </Container>
  );
}