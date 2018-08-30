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
  Code
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
          <Text
            textColor="lightgrey"
            textSize="0.9em"
            margin="70px 0px 0px"
            bold
          >
            Meilleur Dev de France 2018
          </Text>
          <Text textColor="lightgrey" textSize="0.7em" margin="14px 0px 0px">
            @cyril_lakech & @lauthieb
          </Text>
        </Slide>
      </Deck>
    );
  }
}
