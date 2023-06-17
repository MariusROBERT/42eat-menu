import {Burger, Button, createStyles, Flex, Header, rem, Transition} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {IconBottle, IconCookie, IconMeat} from "@tabler/icons-react";

const HEADER_HEIGHT = rem(100);

const useStyle = createStyles((theme) => ({
  mobile: {
    [theme.fn.largerThan("md")]: {
      display: "none"
    }
  },

  computer: {
    [theme.fn.smallerThan("md")]: {
      display: "none"
    }
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    left: 0,
    right: 0,
    overflow: "hidden",
    zIndex: 0,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
    [theme.fn.largerThan("md")]: {
      display: "none"
    }
  }
}));

export default function MainHeader(props: any) {
  const menus = [
    {title: "Nourriture", scroll: "#food", icon: <IconMeat size={25}/>},
    {title: "Boissons", scroll: "#drink", icon: <IconBottle size={25}/>},
    {title: "Snacks", scroll: "#snacks", icon: <IconCookie size={25}/>},
  ]
  const [opened, {toggle, close}] = useDisclosure(false);
  const {classes} = useStyle();

  const computerButtons = menus.map((menu) => (
      <Button
          leftIcon={menu.icon}
          component={"a"}
          href={menu.scroll}
          size={"md"}
          key={menu.title}
          variant={"filled"}
      >
        {menu.title}
      </Button>
  ));

  const mobileButtons = menus.map((menu) => (
      <Button
          leftIcon={menu.icon}
          component={"a"}
          href={menu.scroll}
          size={"md"}
          key={menu.title}
          variant={"filled"}
          onClick={close}
      >
        {menu.title}
      </Button>
  ));

  return (
      <Header height={HEADER_HEIGHT} mb={"xl"} style={{position: "sticky"}}>
        <Flex
            mih={HEADER_HEIGHT}
            justify={"space-between"}
            align={"center"}
            gap={"xl"}
            mx={"xl"}
            className={classes.mobile}
        >
          <Button size={"md"}>42 Eat</Button>
          <Burger opened={opened} onClick={toggle}/>
        </Flex>
        <Flex
            mih={HEADER_HEIGHT}
            justify={"center"}
            align={"center"}
            gap={"xl"}
            className={classes.computer}
        >
          {computerButtons}
        </Flex>
        <Transition mounted={opened} duration={200} transition="pop-top-right">
          {(styles) => (
              <Flex
                  justify={"center"}
                  gap={"xl"}
                  px={"xl"}
                  direction={"column"}
                  className={classes.dropdown}
                  style={styles}
              >
                {mobileButtons}
              </Flex>
          )}
        </Transition>
      </Header>
  );
}