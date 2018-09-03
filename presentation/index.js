// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  CodePane,
  Code,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "black",
    secondary: "#E0234E",
    tertiary: "white",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  axa: require("../assets/axa.png"),
  city: require("../assets/city.jpg")
};

function getImage(img) {
  return images[img].replace("/", "");
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Un zeste de Nest 🚀
          </Heading>
          <Text textColor="lightgrey" textSize="0.9em" margin="60px 0 0 0" bold>
            Meilleur Dev de France 2018
          </Text>
          <Text textColor="lightgrey" textSize="0.7em" margin="24px 0 0 0">
            @cyril_lakech & @lauthieb
          </Text>
          <Image src={getImage("axa")} width="60" margin="16px auto" />
        </Slide>

        <Slide transition={["fade"]} bgImage={getImage("city")} bgDarken={0.7}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Cyril Lakech
          </Heading>
          <Text textColor="quaternary" textSize="1em" margin="30px 0 0 0">
            TODO
          </Text>
          <Text textColor="quaternary" textSize="1em" margin="10px 0 0 0">
            TODO
          </Text>
          <Text textColor="quaternary" textSize="1em" margin="10px 0 0 0">
            TODO
          </Text>
          <Text textColor="quaternary" textSize="1em" margin="10px 0 0 0">
            TODO
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgImage={getImage("city")} bgDarken={0.7}>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Laurent Thiebault
          </Heading>
          <Text textColor="quaternary" textSize="1em" margin="30px 0 0 0">
            TODO
          </Text>
          <Text textColor="quaternary" textSize="1em" margin="10px 0 0 0">
            TODO
          </Text>
          <Text textColor="quaternary" textSize="1em" margin="10px 0 0 0">
            TODO
          </Text>
          <Text textColor="quaternary" textSize="1em" margin="10px 0 0 0">
            TODO
          </Text>
        </Slide>
      </Deck>
    );
  }
}
