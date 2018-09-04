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
  Image,
  CodePane
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
  exceptionFilters: require("../assets/images/exception-filters.png"),
  fwkBack: require("../assets/images/fwk-back.png"),
  go: require("../assets/images/go.gif"),
  happy: require("../assets/images/happy.gif"),
  middlewares: require("../assets/images/middlewares.png"),
  modules: require("../assets/images/modules.png"),
  nest: require("../assets/images/nest.png"),
  pipes: require("../assets/images/pipes.png"),
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
              title: "Import du décorateur Injectable"
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

        <Slide transition={["slide"]}>
          <Image src={getImage("modules")} margin="16px auto" />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/modules.example")}
          ranges={[
            {
              loc: [0, 2],
              title: "Import des différents composants"
            },
            {
              loc: [2, 3],
              title: "Import du décorateur Module"
            },
            { loc: [4, 11], title: "Déclaration du CFPModule" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Modules ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Partagés, globaux, dynamiques
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Réexportation
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Injection de dépendances
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Middlewares
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("middlewares")} margin="16px auto" />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/middlewares.example1")}
          ranges={[
            {
              loc: [0, 1],
              title: "Import de décorateurs"
            },
            { loc: [2, 4], title: "Injectable implémentant NestMiddleware" },
            { loc: [4, 10], title: "Fonction resolve" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/middlewares.example2")}
          ranges={[
            {
              loc: [0, 3],
              title: "Imports"
            },
            { loc: [4, 7], title: "Déclaration d'un module" },
            { loc: [7, 8], title: "Module implémentant NestModule" },
            { loc: [8, 13], title: "Fonction configure" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Middlewares ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                apply(...) renforcé via wildcards, exclude & forRoutes
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Asynchrones
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Injection de dépendances
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Multiples
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Globaux
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Exception filters
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("exceptionFilters")} margin="16px auto" />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/exception-filters.example1")}
          ranges={[
            {
              loc: [0, 10],
              title: "Retour dans notre contrôleur"
            },
            { loc: [5, 6], title: "Lancement d'une built-in exception" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/exception-filters.example2")}
          ranges={[
            {
              loc: [0, 21],
              title: "Création d'un filtre pour les 404"
            },
            { loc: [0, 1], title: "Utilisation de @Catch" },
            { loc: [1, 2], title: "Classe implémentant ExceptionFilter" },
            { loc: [2, 3], title: "Injection d'un service Logger" },
            { loc: [4, 20], title: "Fonction catch" },
            { loc: [5, 9], title: "Récupération de valeurs utiles" },
            { loc: [10, 11], title: "Warning dans les logs" },
            { loc: [12, 19], title: "Modification de la réponse" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/exception-filters.example3")}
          ranges={[
            {
              loc: [0, 11],
              title: "Retour dans notre contrôleur #oneMoreTime"
            },
            { loc: [0, 1], title: "Utilisation de @UseFilters" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Exception filters ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Catch global via @Catch()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                @UseFilters au niveau d'une classe
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Utilisation globale via app.useGlobalFilters
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pipes
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("pipes")} margin="16px auto" />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/pipes.example1")}
          ranges={[
            {
              loc: [0, 11],
              title: "Validation d'un CFP avant création"
            },
            { loc: [1, 2], title: "Utilisation de ValidationPipe" }
          ]}
        />

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/pipes.example2")}
          ranges={[
            {
              loc: [0, 11],
              title: "Zoom sur CreateCFPDto"
            },
            { loc: [1, 4], title: "Utilisation de décorateurs" },
            { loc: [5, 9], title: "Utilisation de décorateurs" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pipes ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Autre built-in: ParseIntPipe
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Personnalisation (implements PipeTransform)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Utilisation globale via app.useGlobalPipes()
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Testing
          </Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <CodePane
            textSize="1.4em"
            source="npm i --save-dev @nestjs/testing"
          />
        </Slide>

        <CodeSlide
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/testing.example")}
          ranges={[
            {
              loc: [0, 1],
              title: "Import de Test & TestingModule"
            },
            { loc: [1, 3], title: "Import de nos composants" },
            { loc: [4, 8], title: "Mock du CFPService" },
            {
              loc: [9, 10],
              title: "Définition d'une suite de tests pour CFPController"
            },
            {
              loc: [10, 22],
              title: "Récupération du contrôleur et service avant chaque test"
            },
            { loc: [23, 33], title: "Test du create" },
            { loc: [34, 41], title: "Test du find" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Testing ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Utilisation avancée de jest (mockImplementation, spyOn...)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Tests End-to-End
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgImage={getImage("happy")} />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pour les curieu(x|ses)...
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
