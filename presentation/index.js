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
  S,
  Layout,
  Fill,
  Notes
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "prismjs/themes/prism-okaidia.css";
import "./index.css";
import Footer from "../footer";

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
  qima: require("../assets/images/qima.png"),
  qima2: require("../assets/images/qima2.png"),
  city: require("../assets/images/city.jpg"),
  controllers: require("../assets/images/controllers.png"),
  desert: require("../assets/images/desert.jpg"),
  exceptionFilters: require("../assets/images/exception-filters.png"),
  fwkBack: require("../assets/images/fwk-back.png"),
  fwkBack2: require("../assets/images/fwk-back2.png"),
  go: require("../assets/images/go.gif"),
  openapi: require("../assets/images/openapi.gif"),
  happy: require("../assets/images/happy.gif"),
  middlewares: require("../assets/images/middlewares.png"),
  modules: require("../assets/images/modules.png"),
  nest: require("../assets/images/nest.png"),
  graphqlQuery: require("../assets/images/query.png"),
  graphqlMutation: require("../assets/images/mutation.png"),
  graphqlSub: require("../assets/images/sub.png"),
  pipes: require("../assets/images/pipes.png"),
  production: require("../assets/images/production.gif"),
  production2: require("../assets/images/production2.gif"),
  providers: require("../assets/images/providers.png"),
  unopinionated: require("../assets/images/unopinionated.gif"),
  industrial: require("../assets/images/industrial.jpg"),
  questions: require("../assets/images/q.gif")
};

// eslint-disable-next-line func-style
function getImage(img) {
  return images[img].replace("/", "");
}

export default class Presentation extends React.Component {
  render() {
    return (
      <div>
      <Footer/>
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        contentWidth="1280px"
        contentHeight="1024px"
        progress="bar"
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            NestJS 🚀
          </Heading>
          <Text textColor="quaternary" textSize="2em" margin="60px 0 0 0" bold>
            Confoo Montreal 2019
          </Text>
          <Text textColor="quaternary" textSize="2em" margin="24px 0 0 0">
            @cyril_lakech (& @lauthieb)
          </Text>
          <Text textColor="quaternary" bold textSize="2em" margin="24px 0 0 0">
            https://clakech.github.io/nestjs-talk
          </Text>
          <Image src={getImage("qima")} width="200" margin="16px auto" />
        </Slide>

        <Slide transition={["fade"]} bgImage={getImage("city")} bgDarken={0.7}>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Cyril Lakech
          </Heading>
          <Text textColor="quaternary" textSize="3em" margin="30px 0 0 0">
            💼 Software Engineer / Director
          </Text>
          <Text textColor="quaternary" textSize="3em" margin="10px 0 0 0">
            🏢 QIMA
          </Text>
          <Text textColor="quaternary" textSize="3em" margin="10px 0 0 0">
            ♥️ dev community & 🍺
          </Text>
          <Text textColor="quaternary" textSize="3em" margin="10px 0 0 0">
            🐦 @cyril_lakech
          </Text>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={getImage("qima2")}
        >
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            You ?
          </Heading>
          <Notes>
            <ol>
              <li>
                Si vous êtes dev, levez-vous svp (levez la main si vous ne
                pouvez pas vous lever)
              </li>
              <li>
                Si vous développez en JS, restez debout. Les autres
                asseyez-vous.
              </li>
              <li>
                Si vous développez en NodeJS, restez debout. Les autres
                asseyez-vous.
              </li>
              <li>
                Si vous développez avec ExpressJS, restez debout. Les autres
                asseyez-vous.
              </li>
              <li>
                Si vous développez avec TypeScript, restez debout. Les autres
                asseyez-vous.
              </li>
              <li>
                Si vous développez avec NestJS, restez debout. Les autres
                asseyez-vous.
              </li>
            </ol>
          </Notes>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={getImage("questions")}
          bgDarken={0.6}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Sli.do
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            NestJS
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={getImage("production")}
          bgDarken={0.7}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JS Front-end development
          </Heading>
          <Appear>
            <Text textColor="quaternary" textSize="3em" margin="20px 0 0 0">
              Productivity
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="3em" margin="20px 0 0 0">
              Performance
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="3em" margin="20px 0 0 0">
              Scalability
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="3em" margin="20px 0 0 0">
              Architecture
            </Text>
          </Appear>
          <Notes>Cyril</Notes>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={getImage("production2")}
          bgDarken={0.8}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JS Back-end development
          </Heading>
          <Appear>
            <Text textColor="quaternary" textSize="3em" margin="20px 0 0 0">
              Productivity
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="3em" margin="20px 0 0 0">
              Performance
            </Text>
          </Appear>
          <Appear>
            <Text textColor="quaternary" textSize="3em" margin="20px 0 0 0">
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
          bgImage={getImage("desert")}
          bgDarken={0.5}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Software <br /> Architecture ?
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
              <ListItem textSize="2em" margin="10px 0 0 0">
                "Software architecture"-less
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2em" margin="10px 0 0 0">
                Lacks of helpers for daily job
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2em" margin="10px 0 0 0">
                Middlewares all the things !
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgImage={getImage("fwkBack2")}>
          <Heading
            size={1}
            caps
            lineHeight={1}
            textColor="secondary"
            margin="0 0 480px 0"
          >
            ...but also
          </Heading>
        </Slide>

        <Slide
          transition={["fade"]}
          bgImage={getImage("industrial")}
          bgDarken={0.6}
        >
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            WAY TOO MUCH POUAH!!!
          </Heading>
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
              <ListItem textSize="2em" margin="10px 0 0 0">
                Opinionated, the Angular way
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2em" margin="10px 0 0 0">
                Express based & Fastify compatible 🚀
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2em" margin="10px 0 0 0">
                <S type="bold">Written in TypeScript</S>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2em" margin="10px 0 0 0">
                Respects SOLID principles
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize="2em" margin="10px 0 0 0">
                DDD ready !
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgImage={getImage("go")} />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            REST API
          </Heading>
          <Appear>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Controllers
            </Heading>
          </Appear>
          <Notes>Laurent</Notes>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("controllers")} margin="16px auto" />
        </Slide>

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/controllers.express")}
          ranges={[
            {
              loc: [0, 0],
              title: "Express Only"
            },
            {
              loc: [0, 4],
              title: "Route declaration"
            },
            {
              loc: [5, 13],
              title: "Sample Implementation"
            }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/controllers.basics")}
          ranges={[
            {
              loc: [0, 7],
              title: "@Decorators FTW"
            },
            {
              loc: [8, 10],
              title: "Controller's class declaration",
              note: "https://app/call-for-papers/*"
            },
            {
              loc: [11, 15],
              title: "HTTP GET route",
              note: "GET https://app/call-for-papers/{id}"
            },
            {
              loc: [16, 20],
              title: "HTTP POST route with a @Body",
              note: "Request's body is extracted in createCFP"
            }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/controllers.enhanced")}
          ranges={[
            {
              loc: [3, 8],
              title: "Express flavors @Req & @Res"
            },
            {
              loc: [9, 14],
              title: "@Query",
              note:
                "POST https://app/call-for-papers/search?conference_name=Confoo"
            },
            { loc: [15, 19], title: "Route wildcards" },
            { loc: [20, 25], title: "Custom Status code" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Providers
          </Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("providers")} margin="16px auto" />
        </Slide>

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/providers.service")}
          ranges={[
            { loc: [3, 5], title: "CFPService class declaration" },
            { loc: [7, 14], title: "Some methods of service" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/providers.injection")}
          ranges={[
            {
              loc: [12, 13],
              title: "Back to CFPController"
            },
            {
              loc: [14, 15],
              title: "CFPService injection"
            },
            { loc: [16, 20], title: "Using the service via a GET call" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="js"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/providers.optional")}
          ranges={[
            {
              loc: [5, 6],
              title: "Optional"
            }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Modules
          </Heading>
          <Notes>Cyril</Notes>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("modules")} margin="16px auto" />
        </Slide>

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/modules.feature")}
          ranges={[
            { loc: [4, 11], title: "CFPModule", note: "Hello feature module !" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/modules.application")}
          ranges={[{ loc: [3, 7], title: "ApplicationModule" }]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/modules.shared")}
          ranges={[
            {
              loc: [0, 0],
              title: "Shared modules"
            },
            {
              loc: [4, 11],
              title: "Remember CFPModule ?"
            },
            {
              loc: [8, 9],
              title: "Use exports"
            }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/modules.export")}
          ranges={[
            {
              loc: [0, 0],
              title: "Re-Export a whole module ?"
            },
            {
              loc: [0, 6],
              title: "Use exports"
            }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/modules.global")}
          ranges={[
            {
              loc: [0, 0],
              title: "Need global module ?"
            },
            {
              loc: [4, 11],
              title: "Use @Global()"
            }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/modules.dynamic")}
          ranges={[
            {
              loc: [0, 0],
              title: "Need more flexibility ?"
            },
            {
              loc: [7, 17],
              title: "Use DynamicModule 🤯"
            },
            {
              loc: [18, 24],
              title: "Import dynamically !"
            }
          ]}
        />

        {/* <CodeSlide           className="codeslide--cyril"
          transition={["fade"]}
          lang="js"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/providers.usevalue")}
          ranges={[
            {
              loc: [0, 0],
              title: "Custom Providers"
            },
            {
              loc: [2, 6],
              title: "Use value"
            },
            {
              loc: [2, 10],
              title: "Use value"
            },
            {
              loc: [12, 16],
              title: "Use value"
            }
          ]}
        />

        <CodeSlide           className="codeslide--cyril"
          transition={["fade"]}
          lang="js"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/providers.useclass")}
          ranges={[
            {
              loc: [0, 6],
              title: "Use class"
            }
          ]}
        />

        <CodeSlide           className="codeslide--cyril"
          transition={["fade"]}
          lang="js"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/providers.usefactory")}
          ranges={[
            {
              loc: [0, 8],
              title: "Use factory"
            }
          ]}
        /> */}

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Middlewares
          </Heading>
          <Notes>Laurent</Notes>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("middlewares")} margin="16px auto" />
        </Slide>

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/middlewares.logger")}
          ranges={[
            { loc: [0, 2], title: "Injectable implementing NestMiddleware" },
            { loc: [2, 8], title: "Resolve function" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/middlewares.module")}
          ranges={[
            { loc: [0, 4], title: "Module implementing NestModule" },
            { loc: [4, 8], title: "Configure function" },
            { loc: [8, 13], title: "Or just use a function" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/middlewares.wildcards")}
          ranges={[
            { loc: [6, 7], title: "Multiple Middlewares" },
            { loc: [7, 8], title: "Apply middleware" },
            { loc: [8, 10], title: "Route wildcards" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/middlewares.exclude")}
          ranges={[{ loc: [7, 11], title: "Exclude" }]}
        />

        {/* <CodeSlide           className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/middlewares.async")}
          ranges={[
            { loc: [2, 11], title: "Deferred middleware" },
            { loc: [3, 4], title: "Some async job" },
            { loc: [5, 10], title: "Return async function" }
          ]}
        /> */}

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/middlewares.global")}
          ranges={[{ loc: [0, 3], title: "Global" }]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Exception filters
          </Heading>
          <Notes>Cyril</Notes>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("exceptionFilters")} margin="16px auto" />
        </Slide>

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/exception-filters.throw")}
          ranges={[
            {
              loc: [0, 10],
              title: "Back in our controller"
            },
            { loc: [5, 6], title: "Built-in exception launched" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/exception-filters.custom")}
          ranges={[
            {
              loc: [0, 21],
              title: "Error filter"
            },
            { loc: [0, 1], title: "Use @Catch" },
            { loc: [1, 2], title: "Class implementing ExceptionFilter" },
            { loc: [2, 3], title: "Logger service injection" },
            { loc: [4, 20], title: "Catch function" },
            { loc: [5, 8], title: "Get some values" },
            { loc: [9, 10], title: "Warning in logs" },
            { loc: [11, 17], title: "Change the response" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/exception-filters.use-filters")}
          ranges={[
            {
              loc: [0, 11],
              title: "Back in our controller #oneMoreTime"
            },
            { loc: [0, 1], title: "Use @UseFilters" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/exception-filters.use-filters-class")}
          ranges={[
            {
              loc: [0, 2],
              title: "@UseFilters on class"
            }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/exception-filters.catch-all")}
          ranges={[
            {
              loc: [0, 0],
              title: "Catch all Exception filters"
            },
            { loc: [2, 3], title: "Use @Catch()" },
            { loc: [2, 18], title: "All Exceptions Filter" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/exception-filters.global")}
          ranges={[
            { loc: [2, 3], title: "Global Exceptions Filter" },
            { loc: [0, 6], title: "Global Exceptions Filter" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Pipes
          </Heading>
          <Notes>Laurent</Notes>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={getImage("pipes")} margin="16px auto" />
        </Slide>

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/pipes.use-pipes")}
          ranges={[
            {
              loc: [0, 11],
              title: "CFP Validation before creation"
            },
            { loc: [1, 2], title: "Use ValidationPipe" }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/pipes.dto")}
          ranges={[
            {
              loc: [0, 13],
              title: "Zoom sur CreateCFP"
            },
            { loc: [1, 4], title: "Use decorators" },
            { loc: [5, 9], title: "Use decorators" },
            {
              loc: [10, 12],
              title: "Use  decorators",
              note: "see https://github.com/typestack/class-validator"
            }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/pipes.parse-int")}
          ranges={[
            {
              loc: [2, 4],
              title: "Custom Pipe"
            },
            {
              loc: [4, 11],
              title: "with transform function"
            }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/pipes.parse-int2")}
          ranges={[
            {
              loc: [1, 2],
              title: "Apply ParseIntPipe"
            }
          ]}
        />

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/pipes.global")}
          ranges={[
            { loc: [2, 3], title: "Global Pipe" },
            { loc: [0, 6], title: "Global Pipe" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Testing
          </Heading>
          <Notes>Cyril</Notes>
        </Slide>

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/testing.example")}
          ranges={[
            { loc: [4, 8], title: "CFPService mock" },
            {
              loc: [9, 10],
              title: "Test suite for CFPController"
            },
            {
              loc: [10, 22],
              title: "Init module & get controller before each test"
            },
            { loc: [24, 32], title: "Create test" }
          ]}
        />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            API Doc
          </Heading>
          <Notes>Cyril</Notes>
        </Slide>

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/openapi")}
          ranges={[
            {
              loc: [5, 17],
              title: "OpenAPI auto-generated",
              note: "go to http://localhost:3001/api"
            }
          ]}
        />

        <Slide transition={["slide"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Tada ! 🎉
          </Heading>
          <Image src={getImage("openapi")} margin="16px auto" />
        </Slide>

        <CodeSlide
          className="codeslide--cyril"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={require("raw-loader!../assets/codes/openapi.sample")}
          ranges={[
            {
              loc: [2, 12],
              title: "API Model description"
            }
          ]}
        />

        <Slide transition={["zoom"]} bgImage={getImage("happy")} />

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            REX
          </Heading>
          <Notes>Cyril</Notes>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={0.5} textColor="secondary">
            Want more ?
          </Heading>
          <Layout>
            <Fill>
              <Heading caps>
                <List textColor="quaternary">
                  <Appear order={1}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      Interceptors
                    </ListItem>
                  </Appear>
                  <Appear order={2}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      Guards
                    </ListItem>
                  </Appear>
                  <Appear order={3}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      GraphQL ❤
                    </ListItem>
                  </Appear>
                  <Appear order={4}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      CORS
                    </ListItem>
                  </Appear>
                  <Appear order={5}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      Microservices
                    </ListItem>
                  </Appear>
                  <Appear order={6}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      Websockets
                    </ListItem>
                  </Appear>
                  <Appear order={7}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      CLI
                    </ListItem>
                  </Appear>
                </List>
              </Heading>
            </Fill>
            <Fill>
              <Heading caps>
                <List textColor="quaternary">
                  <Appear order={8}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      Authentication
                    </ListItem>
                  </Appear>
                  <Appear order={9}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      ORM (TypeORM, Sequelize, Mongoose)
                    </ListItem>
                  </Appear>
                  <Appear order={10}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      CQRS
                    </ListItem>
                  </Appear>
                  <Appear order={11}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      Caching
                    </ListItem>
                  </Appear>
                  <Appear order={12}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      Execution context
                    </ListItem>
                  </Appear>
                  <Appear order={13}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      Prisma
                    </ListItem>
                  </Appear>
                  <Appear order={14}>
                    <ListItem margin="10px 0 0 0" textSize="0.5em">
                      ...
                    </ListItem>
                  </Appear>
                </List>
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            GraphQL
          </Heading>
          <Appear>
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Demo
            </Heading>
          </Appear>
          <Notes>Cyril</Notes>
        </Slide>

        <Slide transition={["slide"]} bgImage={getImage("graphqlQuery")} />

        <Slide transition={["slide"]} bgImage={getImage("graphqlMutation")} />

        <Slide transition={["slide"]} bgImage={getImage("graphqlSub")} />

        <Slide transition={["slide"]}>
          <Image src={getImage("nest")} margin="16px auto" />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Merci !
          </Heading>
          <Text textColor="quaternary" textSize="2em" margin="60px 0 0 0">
            NestJS 🚀 @nestframework by @kammysliwiec
          </Text>
          <Text textColor="quaternary" textSize="2em" margin="20px 0 0 0" bold>
            Confoo Montreal 2019
          </Text>
          <Text textColor="quaternary" textSize="2em" margin="24px 0 0 0">
            @cyril_lakech (& @lauthieb)
          </Text>
          <Text textColor="quaternary" bold textSize="2em" margin="24px 0 0 0">
            https://clakech.github.io/nestjs-talk
          </Text>
          <Image src={getImage("qima")} width="200" margin="16px auto" />
        </Slide>
      </Deck>
      </div>);
  }
}
