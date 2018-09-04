// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Image
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "prismjs/themes/prism-okaidia.css";
import "./index.css";

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
  axa: require("../assets/images/axa.png"),
  city: require("../assets/images/city.jpg"),
  controllers: require("../assets/images/controllers.png"),
  desert: require("../assets/images/desert.jpg"),
  fwkBack: require("../assets/images/fwk-back.png"),
  go: require("../assets/images/go.gif"),
  happy: require("../assets/images/happy.gif"),
  nest: require("../assets/images/nest.png"),
  production: require("../assets/images/production.gif"),
  production2: require("../assets/images/production2.gif"),
  providers: require("../assets/images/providers.png"),
  unopinionated: require("../assets/images/unopinionated.gif")
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
          <Text
            textColor="quaternary"
            textSize="0.9em"
            margin="60px 0 0 0"
            bold
          >
            Meilleur Dev de France 2018
          </Text>
          <Text textColor="quaternary" textSize="0.7em" margin="24px 0 0 0">
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

        <Slide transition={["slide"]} bgImage={getImage("go")} />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Controllers
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("controllers")} margin="16px auto" />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/controllers.example")}
          ranges={[
            {
              loc: [0, 7],
              title: "Import de décorateurs"
            },
            { loc: [8, 9], title: "Declaration du contrôleur" },
            { loc: [9, 10], title: "Création d'une classe CFPController" },
            { loc: [11, 15], title: "Déclaration d'une route en GET" },
            { loc: [16, 20], title: "Déclaration d'une route en POST" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Controllers ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                @Request() | @Response() | @Next()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                (@Body | @Query | @Headers)(param?: string)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Route wildcards
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Codes de retours HTTP
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Gestion des erreurs
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Providers
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("providers")} margin="16px auto" />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/providers.example1")}
          ranges={[
            {
              loc: [0, 1],
              title: "Import d'Injectable"
            },
            { loc: [4, 5], title: "Création d'une classe CFPService" },
            { loc: [7, 14], title: "Création de méthodes de service" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/providers.example2")}
          ranges={[
            {
              loc: [12, 13],
              title: "Retour au CFPController"
            },
            {
              loc: [14, 15],
              title: "Injection du CFPService"
            },
            { loc: [16, 20], title: "Utilisation du service via GET" },
            { loc: [21, 25], title: "Utilisation du service via POST" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Providers ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Personnalisés & asynchrones
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Valeurs calculées dynamiquement
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                @Inject
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Modules
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Middlewares
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Exception filters
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pipes
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Testing
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgImage={getImage("happy")} />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Si vous avez encore faim...
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem margin="10px 0 0 0">Interceptors</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Guards</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">GraphQL</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">OpenAPI (Swagger)</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Microservices</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Websockets</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Authentication</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">
                Execution context (CLI, scripting...)
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("nest")} margin="16px auto" />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Merci !
          </Heading>
          <Text textColor="quaternary" textSize="1.2em" margin="60px 0 0 0">
            Un zeste de Nest 🚀
          </Text>
          <Text
            textColor="quaternary"
            textSize="0.9em"
            margin="20px 0 0 0"
            bold
          >
            Meilleur Dev de France 2018
          </Text>
          <Text textColor="quaternary" textSize="0.7em" margin="24px 0 0 0">
            @cyril_lakech & @lauthieb
          </Text>
          <Image src={getImage("axa")} width="60" margin="16px auto" />
        </Slide>
      </Deck>
    );
  }
}
