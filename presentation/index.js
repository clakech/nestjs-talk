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
  city: require("../assets/city.jpg"),
  desert: require("../assets/desert.jpg"),
  fwkBack: require("../assets/fwk-back.png"),
  nest: require("../assets/nest.png"),
  production: require("../assets/production.gif"),
  production2: require("../assets/production2.gif"),
  unopinionated: require("../assets/unopinionated.gif")
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

        <Slide
          transition={["fade"]}
          bgImage={getImage("production")}
          bgDarken={0.7}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Dev Front-end
          </Heading>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Productivité
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Performance
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Scalabilité
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Architecture
            </Text>
          </Appear>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={getImage("production2")}
          bgDarken={0.8}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Dev Back-end
          </Heading>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Productivité
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Performance
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Scalabilité
            </Text>
          </Appear>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={getImage("desert")}
          bgDarken={0.5}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Architecture ?
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={getImage("fwkBack")}>
          <Heading
            size={1}
            caps
            lineHeight={1}
            textColor="secondary"
            margin="0 0 480px 0"
          >
            L'existant
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={getImage("unopinionated")}
          bgDarken={0.6}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            UNOPINIONATED...
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Problèmes
          </Heading>
          <List textColor="quaternary" margin="40px 0 0 0">
            <Appear>
              <ListItem margin="10px 0 0 0">
                Arborescence de fichiers non normée
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Difficilement testable</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">All in middlewares</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]}>
          <Image src={getImage("nest")} margin="16px auto" />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Sous le capot...
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem margin="10px 0 0 0">Opinionated (#angular)</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Basé sur Express</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Ecrit en TypeScript</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">
                Propose une réelle architecture
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">
                Respecte les principes SOLID
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Facilite le DDD</ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
