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
            NestJS 🚀
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
            Front-end development
          </Heading>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Productivity
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Performance
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Scalability
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
            Back-end development
          </Heading>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Productivity
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Performance
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="1em" margin="20px 0 0 0">
              Scalability
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
            Today, we have...
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
            Problems
          </Heading>
          <List textColor="quaternary" margin="40px 0 0 0">
            <Appear>
              <ListItem margin="10px 0 0 0">
                Not standardized file tree
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Difficult to test</ListItem>
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
            Under the hood...
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem margin="10px 0 0 0">Opinionated (#angular)</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">
                Based on Express (but flexible w/ adapters)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Written in TypeScript</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">
                Proposes a real architecture
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Respects SOLID principles</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">DDD ready</ListItem>
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
              title: "Import of some decorators"
            },
            { loc: [8, 9], title: "Controller's declaration" },
            { loc: [9, 10], title: "CFPController class" },
            { loc: [11, 15], title: "GET route" },
            { loc: [16, 20], title: "POST route" }
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
                HTTP status code
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Error handling
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
              title: "Import of Injectable decorator"
            },
            { loc: [4, 5], title: "CFPService class" },
            { loc: [7, 14], title: "Some methods of service" }
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
              title: "Back to CFPController"
            },
            {
              loc: [14, 15],
              title: "CFPService injection"
            },
            { loc: [16, 20], title: "Using the service via a GET call" },
            { loc: [21, 25], title: "Using the service via a POST call" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Providers ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Custom
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Asynchronous
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Dynamic
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Optional
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
              title: "Import of some components"
            },
            {
              loc: [2, 3],
              title: "Import Module decorator"
            },
            { loc: [4, 11], title: "CFPModule" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Modules ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Shared
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Global
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Dynamic
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
              title: "Import of some decorators"
            },
            { loc: [2, 4], title: "Injectable implementing NestMiddleware" },
            { loc: [4, 10], title: "Resolve function" }
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
            { loc: [4, 7], title: "Module declaration" },
            { loc: [7, 8], title: "Module implementing NestModule" },
            { loc: [8, 13], title: "Configure function" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Middlewares ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                apply(...) enhanced via wildcards, exclude & forRoutes
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Asynchronous
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Dependency injection
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Multiples
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Global
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
              title: "Back in our controller"
            },
            { loc: [5, 6], title: "Built-in exception launched" }
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
              title: "404 Not Found filter"
            },
            { loc: [0, 1], title: "Use of @Catch" },
            { loc: [1, 2], title: "Class implementing ExceptionFilter" },
            { loc: [2, 3], title: "Logger service injection" },
            { loc: [4, 20], title: "Catch function" },
            { loc: [5, 9], title: "Get some values" },
            { loc: [10, 11], title: "Warning in logs" },
            { loc: [12, 19], title: "Change the response" }
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
              title: "Back in our controller #oneMoreTime"
            },
            { loc: [0, 1], title: "Use of @UseFilters" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Exception filters ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Catch all exceptions via @Catch()
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                @UseFilters in class
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Global use of filters via app.useGlobalFilters
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
              title: "CFP Validation before creation"
            },
            { loc: [1, 2], title: "Use of ValidationPipe" }
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
            { loc: [1, 4], title: "Use of decorators" },
            { loc: [5, 9], title: "Use of decorators" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pipes ++
          </Heading>
          <List textColor="quaternary">
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Other built-in: ParseIntPipe
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Cutostmization (implements PipeTransform)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="1em" margin="10px 0 0 0">
                Global use via app.useGlobalPipes()
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
              title: "Import of Test & TestingModule"
            },
            { loc: [1, 3], title: "Import of our components" },
            { loc: [4, 8], title: "CFPService mock" },
            {
              loc: [9, 10],
              title: "Test suite for CFPController"
            },
            {
              loc: [10, 22],
              title: "Get controller and service before each test"
            },
            { loc: [23, 33], title: "Create test" },
            { loc: [34, 41], title: "Find test" }
          ]}
        />

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
              <ListItem margin="10px 0 0 0">
                OpenAPI (Swagger) => examples
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">CORS</ListItem>
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
                ORM (TypeORM, Sequelize, Mongoose)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">CQRS</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0 0 0">Caching</ListItem>
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
            Thanks !
          </Heading>
          <Text textColor="quaternary" textSize="1.2em" margin="60px 0 0 0">
            NestJS 🚀
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
