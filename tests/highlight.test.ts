import ASTNodePoint from "../src/astNodePoint";
import Highlight from "../src/highlight";
import Tree from "../src/tree";
import { consoleDecorators } from "./decorators.sample";

describe("A program source code is decorated", () => {
  let highlight: Highlight;

  describe("In console mode", () => {
    beforeAll(() => {
      highlight = new Highlight(consoleDecorators, "console");
    });

    test("kmdr explain", () => {
      const source = "kmdr explain";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 4 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "word",
                    text: "kmdr"
                  }
                ],
                endPosition: { row: 0, column: 4 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name"
              },
              {
                children: [],
                endPosition: { row: 0, column: 12 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 5 },
                type: "word",
                text: "explain"
              }
            ],
            endPosition: { row: 0, column: 12 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 0, column: 12 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 4 },
          metadata: { name: "kmdr", summary: "The ultimate CLI learning tool" }
        },
        {
          type: "subcommand",
          startPosition: { row: 0, column: 5 },
          endPosition: { row: 0, column: 12 },
          metadata: { name: "explain", summary: "Explain a command" }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr);
      expect(decoratedStr).toMatch(
        `\u001b[32;1mkmdr\u001b[0m \u001b[36;1mexplain\u001b[0m`
      );
    });

    test("ls --all", () => {
      const source = "ls --all";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "word",
                    text: "ls"
                  }
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name"
              },
              {
                children: [],
                endPosition: { row: 0, column: 8 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 3 },
                type: "word",
                text: "--all"
              }
            ],
            endPosition: { row: 0, column: 8 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 0, column: 8 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "ls", summary: "List directory contents" }
        },
        {
          type: "option",
          startPosition: { row: 0, column: 3 },
          endPosition: { row: 0, column: 8 },
          metadata: {
            summary: "Do not ignore entries starting with .",
            expectsArg: false,
            long: ["--all"],
            short: ["-a"]
          }
        }
      ];
      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr);
      expect(decoratedStr).toMatch(
        `\u001b[32;1mls\u001b[0m \u001b[35m--all\u001b[0m`
      );
    });

    test("sudo rm -rf", () => {
      const source = "sudo rm -rf";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 4 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "word",
                    text: "sudo"
                  }
                ],
                endPosition: { row: 0, column: 4 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name"
              },
              {
                children: [],
                endPosition: { row: 0, column: 7 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 5 },
                type: "word",
                text: "rm"
              },
              {
                children: [],
                endPosition: { row: 0, column: 11 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 8 },
                type: "word",
                text: "-rf"
              },
              {
                children: [],
                endPosition: { row: 0, column: 13 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 12 },
                type: "word",
                text: "/"
              }
            ],
            endPosition: { row: 0, column: 13 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 0, column: 13 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 4 },
          metadata: {
            name: "sudo",
            summary:
              "Execute a command with the privileges of a different user without switching environments"
          }
        },
        {
          type: "program",
          startPosition: { row: 0, column: 5 },
          endPosition: { row: 0, column: 7 },
          metadata: { name: "rm", summary: "Remove files or directories" }
        },
        {
          type: "option",
          startPosition: { column: 9, row: 0 },
          endPosition: { column: 10, row: 0 },
          metadata: {
            summary: "Removes directories and their contents recursively",
            expectsArg: false,
            long: ["--recursive"],
            short: ["-r", "-R"]
          }
        },
        {
          type: "option",
          startPosition: { column: 10, row: 0 },
          endPosition: { column: 11, row: 0 },
          metadata: {
            summary: "Ignore nonexistent files and arguments, never prompt",
            expectsArg: false,
            long: ["--force"],
            short: ["-f"]
          }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.program(
        "sudo"
      )} ${consoleDecorators.program("rm")} -${consoleDecorators.option(
        "r"
      )}${consoleDecorators.option("f")}`;
      console.log(decoratedStr);

      expect(decoratedStr).toMatch(expectedStr);
    });

    test("mysql --user=root", () => {
      const source = "mysql --user=root";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 5 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "word",
                    text: "mysql"
                  }
                ],
                endPosition: { row: 0, column: 5 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name"
              },
              {
                children: [],
                endPosition: { row: 0, column: 17 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 6 },
                type: "word",
                text: "--user=root"
              }
            ],
            endPosition: { row: 0, column: 17 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 0, column: 17 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 5 },
          metadata: { name: "mysql", summary: "Command-line tool" }
        },
        {
          type: "option",
          startPosition: { row: 0, column: 6 },
          endPosition: { column: 12, row: 0 },
          metadata: {
            summary: "The MySQL user name to use when connecting to the server",
            expectsArg: true,
            long: ["--user"],
            short: ["-u"]
          }
        },
        {
          type: "optionArg",
          startPosition: { column: 13, row: 0 },
          endPosition: { row: 0, column: 17 },
          metadata: {
            summary: "The MySQL user name to use when connecting to the server",
            long: ["--user"],
            short: ["-u"],
            expectsValue: true
          }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.program(
        "mysql"
      )} ${consoleDecorators.option("--user")}=${consoleDecorators.optionArg(
        "root"
      )}`;
      console.log(decoratedStr);
      expect(decoratedStr).toEqual(expectedStr);
    });

    test("rm -rZXVf", () => {
      const source = "rm -rZXVf";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "word",
                    text: "rm"
                  }
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name"
              },
              {
                children: [],
                endPosition: { row: 0, column: 9 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 3 },
                type: "word",
                text: "-rZXVf"
              }
            ],
            endPosition: { row: 0, column: 9 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 0, column: 9 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "rm", summary: "Remove files or directories" }
        },
        {
          type: "option",
          startPosition: { column: 4, row: 0 },
          endPosition: { column: 5, row: 0 },
          metadata: {
            summary: "Removes directories and their contents recursively",
            expectsArg: false,
            long: ["--recursive"],
            short: ["-r", "-R"]
          }
        },
        {
          type: "option",
          startPosition: { column: 8, row: 0 },
          endPosition: { column: 9, row: 0 },
          metadata: {
            summary: "Ignore nonexistent files and arguments, never prompt",
            expectsArg: false,
            long: ["--force"],
            short: ["-f"]
          }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.program(
        "rm"
      )} -${consoleDecorators.option("r")}ZXV${consoleDecorators.option("f")}`;

      expect(decoratedStr).toEqual(expectedStr);
    });

    test("ls && rm &&cd", () => {
      const source = "ls && rm &&cd";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 0, column: 2 },
                            hasError: false,
                            isMissing: false,
                            startPosition: { row: 0, column: 0 },
                            type: "word",
                            text: "ls"
                          }
                        ],
                        endPosition: { row: 0, column: 2 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 0 },
                        type: "command_name"
                      }
                    ],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "command"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 5 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 3 },
                    type: "&&",
                    text: "&&"
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 0, column: 8 },
                            hasError: false,
                            isMissing: false,
                            startPosition: { row: 0, column: 6 },
                            type: "word",
                            text: "rm"
                          }
                        ],
                        endPosition: { row: 0, column: 8 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 6 },
                        type: "command_name"
                      }
                    ],
                    endPosition: { row: 0, column: 8 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 6 },
                    type: "command"
                  }
                ],
                endPosition: { row: 0, column: 8 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "list"
              },
              {
                children: [],
                endPosition: { row: 0, column: 11 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 9 },
                type: "&&",
                text: "&&"
              },
              {
                children: [
                  {
                    children: [
                      {
                        children: [],
                        endPosition: { row: 0, column: 13 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 11 },
                        type: "word",
                        text: "cd"
                      }
                    ],
                    endPosition: { row: 0, column: 13 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 11 },
                    type: "command_name"
                  }
                ],
                endPosition: { row: 0, column: 13 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 11 },
                type: "command"
              }
            ],
            endPosition: { row: 0, column: 13 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "list"
          }
        ],
        endPosition: { row: 0, column: 13 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "ls", summary: "List directory contents" }
        },
        {
          type: "program",
          startPosition: { row: 0, column: 6 },
          endPosition: { row: 0, column: 8 },
          metadata: { name: "rm", summary: "Remove files or directories" }
        },
        {
          type: "program",
          startPosition: { row: 0, column: 11 },
          endPosition: { row: 0, column: 13 },
          metadata: { name: "cd", summary: "Change working directory" }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);

      const expectedString = `${consoleDecorators.program(
        "ls"
      )} ${consoleDecorators.operator("&&")} ${consoleDecorators.program(
        "rm"
      )} ${consoleDecorators.operator("&&")}${consoleDecorators.program("cd")}`;
      console.log(decoratedStr);
      console.log(expectedString);
      expect(decoratedStr).toMatch(expectedString);
    });

    test("ls -alh > /dev/null", () => {
      const source = "ls -alh > /dev/null";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        children: [],
                        endPosition: { row: 0, column: 2 },
                        hasError: false,
                        isMissing: false,

                        startPosition: { row: 0, column: 0 },
                        type: "word",
                        text: "ls"
                      }
                    ],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "command_name"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 7 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 3 },
                    type: "word",
                    text: "-alh"
                  }
                ],
                endPosition: { row: 0, column: 7 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 9 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 8 },
                    type: ">",
                    text: ">"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 19 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 10 },
                    type: "word",
                    text: "/dev/null"
                  }
                ],
                endPosition: { row: 0, column: 19 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 8 },
                type: "file_redirect"
              }
            ],
            endPosition: { row: 0, column: 19 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "redirected_statement"
          }
        ],
        endPosition: { row: 0, column: 19 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "ls", summary: "List directory contents" }
        },
        {
          type: "option",
          startPosition: { column: 4, row: 0 },
          endPosition: { column: 5, row: 0 },
          metadata: {
            summary: "Don't ignore entries starting with .",
            expectsArg: false,
            long: ["--all"],
            short: ["-a"]
          }
        },
        {
          type: "option",
          startPosition: { column: 5, row: 0 },
          endPosition: { column: 6, row: 0 },
          metadata: {
            summary: "Uses a long listing format",
            expectsArg: false,
            long: [],
            short: ["-l"]
          }
        },
        {
          type: "option",
          startPosition: { column: 6, row: 0 },
          endPosition: { column: 7, row: 0 },
          metadata: {
            summary:
              "Prints human readable sizes (e.g., 1K 234M 2G) with -l and/or -s",
            expectsArg: false,
            long: ["--human-readable"],
            short: ["-h"]
          }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr);
    });

    test("ls\nrm\ncd", () => {
      const source = `ls
rm
cd`;
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "word",
                    text: "ls"
                  }
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name"
              }
            ],
            endPosition: { row: 0, column: 2 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command"
          },
          {
            children: [],
            endPosition: { row: 1, column: 0 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 3 },
            type: "\n",
            text: "\n"
          },
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 1, column: 2 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 1, column: 0 },
                    type: "word",
                    text: "rm"
                  }
                ],
                endPosition: { row: 1, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 1, column: 0 },
                type: "command_name"
              }
            ],
            endPosition: { row: 1, column: 2 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 1, column: 0 },
            type: "command"
          },
          {
            children: [],
            endPosition: { row: 2, column: 0 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 1, column: 2 },
            type: "\n",
            text: "\n"
          },
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 2, column: 2 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 2, column: 0 },
                    type: "word",
                    text: "cd"
                  }
                ],
                endPosition: { row: 2, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 2, column: 0 },
                type: "command_name"
              }
            ],
            endPosition: { row: 2, column: 2 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 2, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 2, column: 2 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "ls", summary: "List directory contents" }
        },
        {
          type: "program",
          startPosition: { row: 1, column: 0 },
          endPosition: { row: 1, column: 2 },
          metadata: { name: "rm", summary: "Remove files or directories" }
        },
        {
          type: "program",
          startPosition: { row: 2, column: 0 },
          endPosition: { row: 2, column: 2 },
          metadata: { name: "cd", summary: "Change working directory" }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.program("ls")}
${consoleDecorators.program("rm")}
${consoleDecorators.program("cd")}`;
      console.log(decoratedStr);
      expect(decoratedStr).toEqual(expectedStr);
    });

    test("function changeDirectory() { \ncd directory\n}", () => {
      const source = `function changeDirectory() {
cd directory
}`;
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [],
                endPosition: { row: 0, column: 8 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "function",
                text: "function"
              },
              {
                children: [],
                endPosition: { row: 0, column: 24 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 9 },
                type: "word",
                text: "changeDirectory"
              },
              {
                children: [],
                endPosition: { row: 0, column: 25 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 24 },
                type: "(",
                text: "("
              },
              {
                children: [],
                endPosition: { row: 0, column: 26 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 25 },
                type: ")",
                text: ")"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 28 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 27 },
                    type: "{",
                    text: "{"
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 1, column: 2 },
                            hasError: false,
                            isMissing: false,
                            startPosition: { row: 1, column: 0 },
                            type: "word",
                            text: "cd"
                          }
                        ],
                        endPosition: { row: 1, column: 2 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 1, column: 0 },
                        type: "command_name"
                      },
                      {
                        children: [],
                        endPosition: { row: 1, column: 12 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 1, column: 3 },
                        type: "word",
                        text: "directory"
                      }
                    ],
                    endPosition: { row: 1, column: 12 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 1, column: 0 },
                    type: "command"
                  },
                  {
                    children: [],
                    endPosition: { row: 2, column: 0 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 1, column: 12 },
                    type: "\n",
                    text: "\n"
                  },
                  {
                    children: [],
                    endPosition: { row: 2, column: 1 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 2, column: 0 },
                    type: "}",
                    text: "}"
                  }
                ],
                endPosition: { row: 2, column: 1 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 27 },
                type: "compound_statement"
              }
            ],
            endPosition: { row: 2, column: 1 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "function_definition"
          }
        ],
        endPosition: { row: 2, column: 1 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 1, column: 0 },
          endPosition: { row: 1, column: 2 },
          metadata: { name: "cd", summary: "Change working directory" }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.fn(
        "function"
      )} ${consoleDecorators.word(
        "changeDirectory"
      )}${consoleDecorators.openingParens(
        "("
      )}${consoleDecorators.closingParens(
        ")"
      )} ${consoleDecorators.openingBraces("{")}
${consoleDecorators.program("cd")} ${consoleDecorators.word("directory")}
${consoleDecorators.closingBraces("}")}`;
      console.log(decoratedStr);
      expect(decoratedStr).toEqual(expectedStr);
    });

    test("# a comment\ngit commit", () => {
      const source = `# a comment
git commit`;
      const tree = new Tree({
        children: [
          {
            children: [],
            endPosition: { row: 0, column: 11 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "comment",
            text: "# a comment"
          },
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 1, column: 3 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 1, column: 0 },
                    type: "word",
                    text: "git"
                  }
                ],
                endPosition: { row: 1, column: 3 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 1, column: 0 },
                type: "command_name"
              },
              {
                children: [],
                endPosition: { row: 1, column: 10 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 1, column: 4 },
                type: "word",
                text: "commit"
              }
            ],
            endPosition: { row: 1, column: 10 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 1, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 1, column: 10 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 1, column: 0 },
          endPosition: { row: 1, column: 3 },
          metadata: { name: "git", summary: "The stupid content tracker" }
        },
        {
          type: "subcommand",
          startPosition: { row: 1, column: 4 },
          endPosition: { row: 1, column: 10 },
          metadata: {
            name: "commit",
            summary: "Record changes to the repository"
          }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.comment("# a comment")}
${consoleDecorators.program("git")} ${consoleDecorators.subcommand("commit")}`;
      expect(decoratedStr).toEqual(expectedStr);
    });

    test(`(ls  -ah ; rm ) | sort -n -u`, () => {
      const source = `(ls  -ah ; rm ) | sort -n -u`;
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 1 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "(",
                    text: "("
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 0, column: 3 },
                            hasError: false,
                            isMissing: false,
                            startPosition: { row: 0, column: 1 },
                            type: "word",
                            text: "ls"
                          }
                        ],
                        endPosition: { row: 0, column: 3 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 1 },
                        type: "command_name"
                      },
                      {
                        children: [],
                        endPosition: { row: 0, column: 8 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 5 },
                        type: "word",
                        text: "-ah"
                      }
                    ],
                    endPosition: { row: 0, column: 8 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 1 },
                    type: "command"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 10 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 9 },
                    type: ";",
                    text: ";"
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 0, column: 13 },
                            hasError: false,
                            isMissing: false,
                            startPosition: { row: 0, column: 11 },
                            type: "word",
                            text: "rm"
                          }
                        ],
                        endPosition: { row: 0, column: 13 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 11 },
                        type: "command_name"
                      }
                    ],
                    endPosition: { row: 0, column: 13 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 11 },
                    type: "command"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 15 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 14 },
                    type: ")",
                    text: ")"
                  }
                ],
                endPosition: { row: 0, column: 15 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "subshell"
              },
              {
                children: [],
                endPosition: { row: 0, column: 17 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 16 },
                type: "|",
                text: "|"
              },
              {
                children: [
                  {
                    children: [
                      {
                        children: [],
                        endPosition: { row: 0, column: 22 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 18 },
                        type: "word",
                        text: "sort"
                      }
                    ],
                    endPosition: { row: 0, column: 22 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 18 },
                    type: "command_name"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 25 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 23 },
                    type: "word",
                    text: "-n"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 28 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 26 },
                    type: "word",
                    text: "-u"
                  }
                ],
                endPosition: { row: 0, column: 28 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 18 },
                type: "command"
              }
            ],
            endPosition: { row: 0, column: 28 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "pipeline"
          }
        ],
        endPosition: { row: 0, column: 29 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 1 },
          endPosition: { row: 0, column: 3 },
          metadata: { name: "ls", summary: "List directory contents" }
        },
        {
          type: "option",
          startPosition: { column: 6, row: 0 },
          endPosition: { column: 7, row: 0 },
          metadata: {
            summary: "Don't ignore entries starting with .",
            expectsArg: false,
            long: ["--all"],
            short: ["-a"]
          }
        },
        {
          type: "option",
          startPosition: { column: 7, row: 0 },
          endPosition: { column: 8, row: 0 },
          metadata: {
            summary:
              "Prints human readable sizes (e.g., 1K 234M 2G) with -l and/or -s",
            expectsArg: false,
            long: ["--human-readable"],
            short: ["-h"]
          }
        },
        {
          type: "program",
          startPosition: { row: 0, column: 11 },
          endPosition: { row: 0, column: 13 },
          metadata: { name: "rm", summary: "Remove files or directories" }
        },
        {
          type: "program",
          startPosition: { row: 0, column: 18 },
          endPosition: { row: 0, column: 22 },
          metadata: { name: "sort", summary: "Sort lines of text files" }
        },
        {
          type: "option",
          startPosition: { row: 0, column: 23 },
          endPosition: { row: 0, column: 25 },
          metadata: {
            summary: "Compare according to string numerical value",
            expectsArg: false,
            long: ["--numeric-sort"],
            short: ["-n"]
          }
        },
        {
          type: "option",
          startPosition: { row: 0, column: 26 },
          endPosition: { row: 0, column: 28 },
          metadata: {
            summary: "Check for strict ordering",
            expectsArg: false,
            long: ["--unique"],
            short: ["-u"]
          }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // (ls  -ah ; rm ) | sort -n -u
      console.log(decoratedStr);

      const expectedStr = `${consoleDecorators.openingParens(
        "("
      )}${consoleDecorators.program("ls")}  -${consoleDecorators.option(
        "a"
      )}${consoleDecorators.option("h")} ${consoleDecorators.semicolon(
        ";"
      )} ${consoleDecorators.program("rm")} ${consoleDecorators.closingParens(
        ")"
      )} ${consoleDecorators.pipeline("|")} ${consoleDecorators.program(
        "sort"
      )} ${consoleDecorators.option("-n")} ${consoleDecorators.option("-u")}`;

      expect(decoratedStr).toEqual(expectedStr);
    });

    test("for i in `seq 1 10`; do echo $i; done", () => {
      const source = "for i in `seq 1 10`; do echo $i; done";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [],
                endPosition: { row: 0, column: 3 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 0 },
                type: "for",
                text: "for"
              },
              {
                children: [],
                endPosition: { row: 0, column: 5 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 4 },
                type: "variable_name",
                text: "i"
              },
              {
                children: [],
                endPosition: { row: 0, column: 8 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 6 },
                type: "in",
                text: "in"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 10 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 9 },
                    type: "`",
                    text: "`"
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 0, column: 13 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 10 },
                            type: "word",
                            text: "seq"
                          }
                        ],
                        endPosition: { row: 0, column: 13 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 10 },
                        type: "command_name"
                      },
                      {
                        children: [],
                        endPosition: { row: 0, column: 15 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 14 },
                        type: "word",
                        text: "1"
                      },
                      {
                        children: [],
                        endPosition: { row: 0, column: 18 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 16 },
                        type: "word",
                        text: "10"
                      }
                    ],
                    endPosition: { row: 0, column: 18 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 10 },
                    type: "command"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 19 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 18 },
                    type: "`",
                    text: "`"
                  }
                ],
                endPosition: { row: 0, column: 19 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 9 },
                type: "command_substitution"
              },
              {
                children: [],
                endPosition: { row: 0, column: 20 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 19 },
                type: ";",
                text: ";"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 23 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 21 },
                    type: "do",
                    text: "do"
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 0, column: 28 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 24 },
                            type: "word",
                            text: "echo"
                          }
                        ],
                        endPosition: { row: 0, column: 28 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 24 },
                        type: "command_name"
                      },
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 0, column: 30 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 0, column: 29 },
                            type: "$",
                            text: "$"
                          },
                          {
                            children: [],
                            endPosition: { row: 0, column: 31 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 30 },
                            type: "variable_name",
                            text: "i"
                          }
                        ],
                        endPosition: { row: 0, column: 31 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 29 },
                        type: "simple_expansion"
                      }
                    ],
                    endPosition: { row: 0, column: 31 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 24 },
                    type: "command"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 32 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 31 },
                    type: ";",
                    text: ";"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 37 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 33 },
                    type: "done",
                    text: "done"
                  }
                ],
                endPosition: { row: 0, column: 37 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 21 },
                type: "do_group"
              }
            ],
            endPosition: { row: 0, column: 37 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "for_statement"
          }
        ],
        endPosition: { row: 0, column: 37 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 10 },
          endPosition: { row: 0, column: 13 },
          metadata: { name: "seq", summary: "Print sequences of numbers" }
        },
        {
          type: "program",
          startPosition: { row: 0, column: 24 },
          endPosition: { row: 0, column: 28 },
          metadata: { name: "echo", summary: "Display a line of text" }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr);
      // for i in `seq 1 10`; do echo $i; done
      const expectedStr = `${consoleDecorators.for(
        "for"
      )} ${consoleDecorators.variableName("i")} ${consoleDecorators.in(
        "in"
      )} ${consoleDecorators.backtick("`")}${consoleDecorators.program(
        "seq"
      )} 1 10${consoleDecorators.backtick("`")}${consoleDecorators.semicolon(
        ";"
      )} ${consoleDecorators.do("do")} ${consoleDecorators.program(
        "echo"
      )} $${consoleDecorators.variableName("i")}${consoleDecorators.semicolon(
        ";"
      )} ${consoleDecorators.done("done")}`;

      expect(decoratedStr).toEqual(expectedStr);
    });

    test("rm file 2> error.log", () => {
      const source = "rm file 2> error.log";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [
                      {
                        children: [],
                        endPosition: { row: 0, column: 2 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 0 },
                        type: "word",
                        text: "rm"
                      }
                    ],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 0 },
                    type: "command_name"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 7 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 3 },
                    type: "word",
                    text: "file"
                  }
                ],
                endPosition: { row: 0, column: 7 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "command"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 9 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 8 },
                    type: "file_descriptor",
                    text: "2"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 10 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 9 },
                    type: ">",
                    text: ">"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 20 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 11 },
                    type: "word",
                    text: "error.log"
                  }
                ],
                endPosition: { row: 0, column: 20 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 8 },
                type: "file_redirect"
              }
            ],
            endPosition: { row: 0, column: 20 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "redirected_statement"
          }
        ],
        endPosition: { row: 0, column: 20 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "rm", summary: "Remove files or directories" }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // rm file 2> error.log
      console.log(decoratedStr);
      const expectedStr = `${consoleDecorators.program(
        "rm"
      )} ${consoleDecorators.word("file")} ${consoleDecorators.fileDescriptor(
        "2"
      )}${consoleDecorators.redirect(">")} ${consoleDecorators.word(
        "error.log"
      )}`;
      expect(decoratedStr).toEqual(expectedStr);
    });

    test("NODE_ENV=production npm run start", () => {
      const source = "NODE_ENV=production npm run start";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 8 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 0 },
                    type: "variable_name",
                    text: "NODE_ENV"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 9 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 8 },
                    type: "=",
                    text: "="
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 19 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 9 },
                    type: "word",
                    text: "production"
                  }
                ],
                endPosition: { row: 0, column: 19 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "variable_assignment"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 23 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 20 },
                    type: "word",
                    text: "npm"
                  }
                ],
                endPosition: { row: 0, column: 23 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 20 },
                type: "command_name"
              },
              {
                children: [],
                endPosition: { row: 0, column: 27 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 24 },
                type: "word",
                text: "run"
              },
              {
                children: [],
                endPosition: { row: 0, column: 33 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 28 },
                type: "word",
                text: "start"
              }
            ],
            endPosition: { row: 0, column: 33 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 0, column: 33 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 20 },
          endPosition: { row: 0, column: 23 },
          metadata: { name: "npm", summary: "javascript package manager" }
        },
        {
          type: "subcommand",
          startPosition: { row: 0, column: 24 },
          endPosition: { row: 0, column: 27 },
          metadata: {
            name: "run-script",
            summary: "Run arbitrary package scripts"
          }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr);
      // NODE_ENV=production npm run start
      const expectedStr = `${consoleDecorators.variableName(
        "NODE_ENV"
      )}${consoleDecorators.equal("=")}${consoleDecorators.word(
        "production"
      )} ${consoleDecorators.program("npm")} ${consoleDecorators.subcommand(
        "run"
      )} ${consoleDecorators.word("start")}`;
      expect(decoratedStr).toEqual(expectedStr);
    });

    test("rm $(ls)", () => {
      const source = "rm $(ls)";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 0 },
                    type: "word",
                    text: "rm"
                  }
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "command_name"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 5 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 3 },
                    type: "$(",
                    text: "$("
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 0, column: 7 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 5 },
                            type: "word",
                            text: "ls"
                          }
                        ],
                        endPosition: { row: 0, column: 7 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 5 },
                        type: "command_name"
                      }
                    ],
                    endPosition: { row: 0, column: 7 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 5 },
                    type: "command"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 8 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 7 },
                    type: ")",
                    text: ")"
                  }
                ],
                endPosition: { row: 0, column: 8 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 3 },
                type: "command_substitution"
              }
            ],
            endPosition: { row: 0, column: 8 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 0, column: 8 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "rm", summary: "Remove files or directories" }
        },
        {
          type: "program",
          startPosition: { row: 0, column: 5 },
          endPosition: { row: 0, column: 7 },
          metadata: { name: "ls", summary: "List directory contents" }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr);
      const expectedStr = `${consoleDecorators.program(
        "rm"
      )} ${consoleDecorators.openingParens("$(")}${consoleDecorators.program(
        "ls"
      )}${consoleDecorators.closingParens(")")}`;

      expect(decoratedStr).toEqual(expectedStr);
    });

    test("while true; do rm; done", () => {
      const source = "while true; do rm; done";
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [],
                endPosition: { row: 0, column: 5 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 0 },
                type: "while",
                text: "while"
              },
              {
                children: [
                  {
                    children: [
                      {
                        children: [],
                        endPosition: { row: 0, column: 10 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 6 },
                        type: "word",
                        text: "true"
                      }
                    ],
                    endPosition: { row: 0, column: 10 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 6 },
                    type: "command_name"
                  }
                ],
                endPosition: { row: 0, column: 10 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 6 },
                type: "command"
              },
              {
                children: [],
                endPosition: { row: 0, column: 11 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 10 },
                type: ";",
                text: ";"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 14 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 12 },
                    type: "do",
                    text: "do"
                  },
                  {
                    children: [
                      {
                        children: [
                          {
                            children: [],
                            endPosition: { row: 0, column: 17 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 15 },
                            type: "word",
                            text: "rm"
                          }
                        ],
                        endPosition: { row: 0, column: 17 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 15 },
                        type: "command_name"
                      }
                    ],
                    endPosition: { row: 0, column: 17 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 15 },
                    type: "command"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 18 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 17 },
                    type: ";",
                    text: ";"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 23 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 19 },
                    type: "done",
                    text: "done"
                  }
                ],
                endPosition: { row: 0, column: 23 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 12 },
                type: "do_group"
              }
            ],
            endPosition: { row: 0, column: 23 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "while_statement"
          }
        ],
        endPosition: { row: 0, column: 23 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 6 },
          endPosition: { row: 0, column: 10 },
          metadata: { name: "true", summary: "Return true value" }
        },
        {
          type: "program",
          startPosition: { row: 0, column: 15 },
          endPosition: { row: 0, column: 17 },
          metadata: { name: "rm", summary: "Remove files or directories" }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // while true; do rm; done
      console.log(decoratedStr);
      const expectedStr = `${consoleDecorators.while(
        "while"
      )} ${consoleDecorators.program("true")}${consoleDecorators.semicolon(
        ";"
      )} ${consoleDecorators.do("do")} ${consoleDecorators.program(
        "rm"
      )}${consoleDecorators.semicolon(";")} ${consoleDecorators.done("done")}`;
      expect(decoratedStr).toEqual(expectedStr);
    });

    test(`cd "dir with spaces/"`, () => {
      const source = `cd "dir with spaces/"`;
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 0 },
                    type: "word",
                    text: "cd"
                  }
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "command_name"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 4 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 3 },
                    type: '"',
                    text: '"'
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 21 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 20 },
                    type: '"',
                    text: '"'
                  }
                ],
                endPosition: { row: 0, column: 21 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 3 },
                type: "string"
              }
            ],
            endPosition: { row: 0, column: 21 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 0, column: 21 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "cd", summary: "Change working directory" }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // cd "dir with spaces/"
      console.log(decoratedStr);
      const expectedStr = `${consoleDecorators.program(
        "cd"
      )} ${consoleDecorators.word(`"dir with spaces/"`)}`;
      expect(decoratedStr).toEqual(expectedStr);
    });

    test(`echo "Text $(date)"`, () => {
      const source = `echo "Text $(date)"`;
      const tree = new Tree({
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 4 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 0 },
                    type: "word",
                    text: "echo"
                  }
                ],
                endPosition: { row: 0, column: 4 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "command_name"
              },
              {
                children: [
                  {
                    children: [],
                    endPosition: { row: 0, column: 6 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 5 },
                    type: '"',
                    text: '"'
                  },
                  {
                    children: [
                      {
                        children: [],
                        endPosition: { row: 0, column: 13 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 0, column: 11 },
                        type: "$(",
                        text: "$("
                      },
                      {
                        children: [
                          {
                            children: [
                              {
                                children: [],
                                endPosition: { row: 0, column: 17 },
                                hasError: false,
                                isMissing: false,
                                isNamed: true,
                                startPosition: { row: 0, column: 13 },
                                type: "word",
                                text: "date"
                              }
                            ],
                            endPosition: { row: 0, column: 17 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 13 },
                            type: "command_name"
                          }
                        ],
                        endPosition: { row: 0, column: 17 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 13 },
                        type: "command"
                      },
                      {
                        children: [],
                        endPosition: { row: 0, column: 18 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 0, column: 17 },
                        type: ")",
                        text: ")"
                      }
                    ],
                    endPosition: { row: 0, column: 18 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 11 },
                    type: "command_substitution"
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 19 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 18 },
                    type: '"',
                    text: '"'
                  }
                ],
                endPosition: { row: 0, column: 19 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 5 },
                type: "string"
              }
            ],
            endPosition: { row: 0, column: 19 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "command"
          }
        ],
        endPosition: { row: 0, column: 19 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program"
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 4 },
          metadata: { name: "echo", summary: "Display a line of text" }
        },
        {
          type: "program",
          startPosition: { row: 0, column: 13 },
          endPosition: { row: 0, column: 17 },
          metadata: {
            name: "date",
            summary: "Print or set the system date and time"
          }
        }
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // echo "Text $(date)"
      console.log(decoratedStr);
      const expectedStr = `${consoleDecorators.program(
        "echo"
      )} "Text ${consoleDecorators.openingParens(
        "$("
      )}${consoleDecorators.program("date")}${consoleDecorators.closingParens(
        ")"
      )}"`;
      expect(decoratedStr).toEqual(expectedStr);
    });
  });
});
