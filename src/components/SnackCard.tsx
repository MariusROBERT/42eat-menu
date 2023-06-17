import {Card, Image} from "@mantine/core";

export default function SnackCard(props: any) {
  return (
      <Card shadow={"xl"} withBorder m={"sm"} radius={"md"}>
        <Image src={props.img} withPlaceholder
               caption={props.name + (props.price ? (" " + props.price + "€") : "")}
               h={100} w={100}/>
      </Card>
  )
}