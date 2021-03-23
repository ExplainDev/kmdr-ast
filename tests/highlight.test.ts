import color from "ansi-colors";
import ASTNodePoint from "../src/astNodePoint";
import Highlight from "../src/highlight";
import { NodeDefinition, ThemeDecorators } from "../src/interfaces";
import Tree from "../src/tree";
import BashDecorators from "./BashDecorators";
import CSSDecorators from "./CSSDecorators";
import HTMLDecorators from "./HTMLDecorators";

describe("A program source code is decorated", () => {
  let highlight: Highlight<string>;
  let consoleDecorators: ThemeDecorators<string>;

  describe("Bash Language", () => {
    beforeAll(() => {
      consoleDecorators = new BashDecorators();
      highlight = new Highlight(consoleDecorators);
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
                    text: "kmdr",
                  },
                ],
                endPosition: { row: 0, column: 4 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name",
              },
              {
                children: [],
                endPosition: { row: 0, column: 12 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 5 },
                type: "word",
                text: "explain",
              },
            ],
            endPosition: { row: 0, column: 12 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 12 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 4 },
          metadata: { name: "kmdr", summary: "The ultimate CLI learning tool" },
        },
        {
          type: "subcommand",
          startPosition: { row: 0, column: 5 },
          endPosition: { row: 0, column: 12 },
          metadata: { name: "explain", summary: "Explain a command" },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      expect(decoratedStr.join("")).toMatch(`\u001b[32;1mkmdr\u001b[0m \u001b[36;1mexplain\u001b[0m`);
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
                    text: "ls",
                  },
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name",
              },
              {
                children: [],
                endPosition: { row: 0, column: 8 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 3 },
                type: "word",
                text: "--all",
              },
            ],
            endPosition: { row: 0, column: 8 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 8 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "ls", summary: "List directory contents" },
        },
        {
          type: "option",
          startPosition: { row: 0, column: 3 },
          endPosition: { row: 0, column: 8 },
          metadata: {
            summary: "Do not ignore entries starting with .",
            expectsArg: false,
            long: ["--all"],
            short: ["-a"],
          },
        },
      ];
      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      expect(decoratedStr.join("")).toMatch(`\u001b[32;1mls\u001b[0m \u001b[35m--all\u001b[0m`);
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
                    text: "sudo",
                  },
                ],
                endPosition: { row: 0, column: 4 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name",
              },
              {
                children: [],
                endPosition: { row: 0, column: 7 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 5 },
                type: "word",
                text: "rm",
              },
              {
                children: [],
                endPosition: { row: 0, column: 11 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 8 },
                type: "word",
                text: "-rf",
              },
              {
                children: [],
                endPosition: { row: 0, column: 13 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 12 },
                type: "word",
                text: "/",
              },
            ],
            endPosition: { row: 0, column: 13 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 13 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 4 },
          metadata: {
            name: "sudo",
            summary: "Execute a command with the privileges of a different user without switching environments",
          },
        },
        {
          type: "program",
          startPosition: { row: 0, column: 5 },
          endPosition: { row: 0, column: 7 },
          metadata: { name: "rm", summary: "Remove files or directories" },
        },
        {
          type: "option",
          startPosition: { column: 9, row: 0 },
          endPosition: { column: 10, row: 0 },
          metadata: {
            summary: "Removes directories and their contents recursively",
            expectsArg: false,
            long: ["--recursive"],
            short: ["-r", "-R"],
          },
        },
        {
          type: "option",
          startPosition: { column: 10, row: 0 },
          endPosition: { column: 11, row: 0 },
          metadata: {
            summary: "Ignore nonexistent files and arguments, never prompt",
            expectsArg: false,
            long: ["--force"],
            short: ["-f"],
          },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.createToken("sudo", "program")} ${consoleDecorators.createToken(
        "rm",
        "program"
      )} -${consoleDecorators.createToken("r", "option")}${consoleDecorators.createToken("f", "option")}`;
      console.log(decoratedStr.join(""));

      expect(decoratedStr.join("")).toMatch(expectedStr);
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
                    text: "mysql",
                  },
                ],
                endPosition: { row: 0, column: 5 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name",
              },
              {
                children: [],
                endPosition: { row: 0, column: 17 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 6 },
                type: "word",
                text: "--user=root",
              },
            ],
            endPosition: { row: 0, column: 17 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 17 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 5 },
          metadata: { name: "mysql", summary: "Command-line tool" },
        },
        {
          type: "option",
          startPosition: { row: 0, column: 6 },
          endPosition: { column: 12, row: 0 },
          metadata: {
            summary: "The MySQL user name to use when connecting to the server",
            expectsArg: true,
            long: ["--user"],
            short: ["-u"],
          },
        },
        {
          type: "optionArg",
          startPosition: { column: 13, row: 0 },
          endPosition: { row: 0, column: 17 },
          metadata: {
            summary: "The MySQL user name to use when connecting to the server",
            long: ["--user"],
            short: ["-u"],
            expectsValue: true,
          },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.createToken("mysql", "program")} ${consoleDecorators.createToken(
        "--user",
        "option"
      )}=${consoleDecorators.createToken("root", "optionArg")}`;
      console.log(decoratedStr.join(""));
      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                    text: "rm",
                  },
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name",
              },
              {
                children: [],
                endPosition: { row: 0, column: 9 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 3 },
                type: "word",
                text: "-rZXVf",
              },
            ],
            endPosition: { row: 0, column: 9 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 9 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "rm", summary: "Remove files or directories" },
        },
        {
          type: "option",
          startPosition: { column: 4, row: 0 },
          endPosition: { column: 5, row: 0 },
          metadata: {
            summary: "Removes directories and their contents recursively",
            expectsArg: false,
            long: ["--recursive"],
            short: ["-r", "-R"],
          },
        },
        {
          type: "option",
          startPosition: { column: 8, row: 0 },
          endPosition: { column: 9, row: 0 },
          metadata: {
            summary: "Ignore nonexistent files and arguments, never prompt",
            expectsArg: false,
            long: ["--force"],
            short: ["-f"],
          },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.createToken("rm", "program")} -${consoleDecorators.createToken(
        "r",
        "option"
      )}ZXV${consoleDecorators.createToken("f", "option")}`;

      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                            text: "ls",
                          },
                        ],
                        endPosition: { row: 0, column: 2 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 0 },
                        type: "command_name",
                      },
                    ],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "command",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 5 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 3 },
                    type: "&&",
                    text: "&&",
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
                            text: "rm",
                          },
                        ],
                        endPosition: { row: 0, column: 8 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 6 },
                        type: "command_name",
                      },
                    ],
                    endPosition: { row: 0, column: 8 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 6 },
                    type: "command",
                  },
                ],
                endPosition: { row: 0, column: 8 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "list",
              },
              {
                children: [],
                endPosition: { row: 0, column: 11 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 9 },
                type: "&&",
                text: "&&",
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
                        text: "cd",
                      },
                    ],
                    endPosition: { row: 0, column: 13 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 11 },
                    type: "command_name",
                  },
                ],
                endPosition: { row: 0, column: 13 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 11 },
                type: "command",
              },
            ],
            endPosition: { row: 0, column: 13 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "list",
          },
        ],
        endPosition: { row: 0, column: 13 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "ls", summary: "List directory contents" },
        },
        {
          type: "program",
          startPosition: { row: 0, column: 6 },
          endPosition: { row: 0, column: 8 },
          metadata: { name: "rm", summary: "Remove files or directories" },
        },
        {
          type: "program",
          startPosition: { row: 0, column: 11 },
          endPosition: { row: 0, column: 13 },
          metadata: { name: "cd", summary: "Change working directory" },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);

      const expectedString = `${consoleDecorators.createToken("ls", "program")} ${consoleDecorators.createToken(
        "&&",
        "&&"
      )} ${consoleDecorators.createToken("rm", "program")} ${consoleDecorators.createToken(
        "&&",
        "&&"
      )}${consoleDecorators.createToken("cd", "program")}`;
      console.log(decoratedStr.join(""));
      expect(decoratedStr.join("")).toMatch(expectedString);
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
                        text: "ls",
                      },
                    ],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 0 },
                    type: "command_name",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 7 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 3 },
                    type: "word",
                    text: "-alh",
                  },
                ],
                endPosition: { row: 0, column: 7 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command",
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
                    text: ">",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 19 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 10 },
                    type: "word",
                    text: "/dev/null",
                  },
                ],
                endPosition: { row: 0, column: 19 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 8 },
                type: "file_redirect",
              },
            ],
            endPosition: { row: 0, column: 19 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "redirected_statement",
          },
        ],
        endPosition: { row: 0, column: 19 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "ls", summary: "List directory contents" },
        },
        {
          type: "option",
          startPosition: { column: 4, row: 0 },
          endPosition: { column: 5, row: 0 },
          metadata: {
            summary: "Don't ignore entries starting with .",
            expectsArg: false,
            long: ["--all"],
            short: ["-a"],
          },
        },
        {
          type: "option",
          startPosition: { column: 5, row: 0 },
          endPosition: { column: 6, row: 0 },
          metadata: {
            summary: "Uses a long listing format",
            expectsArg: false,
            long: [],
            short: ["-l"],
          },
        },
        {
          type: "option",
          startPosition: { column: 6, row: 0 },
          endPosition: { column: 7, row: 0 },
          metadata: {
            summary: "Prints human readable sizes (e.g., 1K 234M 2G) with -l and/or -s",
            expectsArg: false,
            long: ["--human-readable"],
            short: ["-h"],
          },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
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
                    text: "ls",
                  },
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "command_name",
              },
            ],
            endPosition: { row: 0, column: 2 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
          {
            children: [],
            endPosition: { row: 1, column: 0 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 3 },
            type: "\n",
            text: "\n",
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
                    text: "rm",
                  },
                ],
                endPosition: { row: 1, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 1, column: 0 },
                type: "command_name",
              },
            ],
            endPosition: { row: 1, column: 2 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 1, column: 0 },
            type: "command",
          },
          {
            children: [],
            endPosition: { row: 2, column: 0 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 1, column: 2 },
            type: "\n",
            text: "\n",
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
                    text: "cd",
                  },
                ],
                endPosition: { row: 2, column: 2 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 2, column: 0 },
                type: "command_name",
              },
            ],
            endPosition: { row: 2, column: 2 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 2, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 2, column: 2 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "ls", summary: "List directory contents" },
        },
        {
          type: "program",
          startPosition: { row: 1, column: 0 },
          endPosition: { row: 1, column: 2 },
          metadata: { name: "rm", summary: "Remove files or directories" },
        },
        {
          type: "program",
          startPosition: { row: 2, column: 0 },
          endPosition: { row: 2, column: 2 },
          metadata: { name: "cd", summary: "Change working directory" },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.createToken("ls", "program")}
${consoleDecorators.createToken("rm", "program")}
${consoleDecorators.createToken("cd", "program")}`;
      console.log(decoratedStr.join(""));
      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                text: "function",
              },
              {
                children: [],
                endPosition: { row: 0, column: 24 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 9 },
                type: "word",
                text: "changeDirectory",
              },
              {
                children: [],
                endPosition: { row: 0, column: 25 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 24 },
                type: "(",
                text: "(",
              },
              {
                children: [],
                endPosition: { row: 0, column: 26 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 25 },
                type: ")",
                text: ")",
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
                    text: "{",
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
                            text: "cd",
                          },
                        ],
                        endPosition: { row: 1, column: 2 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 1, column: 0 },
                        type: "command_name",
                      },
                      {
                        children: [],
                        endPosition: { row: 1, column: 12 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 1, column: 3 },
                        type: "word",
                        text: "directory",
                      },
                    ],
                    endPosition: { row: 1, column: 12 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 1, column: 0 },
                    type: "command",
                  },
                  {
                    children: [],
                    endPosition: { row: 2, column: 0 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 1, column: 12 },
                    type: "\n",
                    text: "\n",
                  },
                  {
                    children: [],
                    endPosition: { row: 2, column: 1 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 2, column: 0 },
                    type: "}",
                    text: "}",
                  },
                ],
                endPosition: { row: 2, column: 1 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 27 },
                type: "compound_statement",
              },
            ],
            endPosition: { row: 2, column: 1 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "function_definition",
          },
        ],
        endPosition: { row: 2, column: 1 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 1, column: 0 },
          endPosition: { row: 1, column: 2 },
          metadata: { name: "cd", summary: "Change working directory" },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.createToken("function", "function")} ${consoleDecorators.createToken(
        "changeDirectory",
        "word"
      )}${consoleDecorators.createToken("(", "(")}${consoleDecorators.createToken(")", ")")} ${consoleDecorators.createToken(
        "{",
        "{"
      )}
${consoleDecorators.createToken("cd", "program")} ${consoleDecorators.createToken("directory", "word")}
${consoleDecorators.createToken("}", "}")}`;
      console.log(decoratedStr.join(""));
      expect(decoratedStr.join("")).toEqual(expectedStr);
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
            text: "# a comment",
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
                    text: "git",
                  },
                ],
                endPosition: { row: 1, column: 3 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 1, column: 0 },
                type: "command_name",
              },
              {
                children: [],
                endPosition: { row: 1, column: 10 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 1, column: 4 },
                type: "word",
                text: "commit",
              },
            ],
            endPosition: { row: 1, column: 10 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 1, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 1, column: 10 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 1, column: 0 },
          endPosition: { row: 1, column: 3 },
          metadata: { name: "git", summary: "The stupid content tracker" },
        },
        {
          type: "subcommand",
          startPosition: { row: 1, column: 4 },
          endPosition: { row: 1, column: 10 },
          metadata: {
            name: "commit",
            summary: "Record changes to the repository",
          },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.createToken("# a comment", "comment")}
${consoleDecorators.createToken("git", "program")} ${consoleDecorators.createToken("commit", "subcommand")}`;
      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                    text: "(",
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
                            text: "ls",
                          },
                        ],
                        endPosition: { row: 0, column: 3 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 1 },
                        type: "command_name",
                      },
                      {
                        children: [],
                        endPosition: { row: 0, column: 8 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 5 },
                        type: "word",
                        text: "-ah",
                      },
                    ],
                    endPosition: { row: 0, column: 8 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 1 },
                    type: "command",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 10 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 9 },
                    type: ";",
                    text: ";",
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
                            text: "rm",
                          },
                        ],
                        endPosition: { row: 0, column: 13 },
                        hasError: false,
                        isMissing: false,
                        startPosition: { row: 0, column: 11 },
                        type: "command_name",
                      },
                    ],
                    endPosition: { row: 0, column: 13 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 11 },
                    type: "command",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 15 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 14 },
                    type: ")",
                    text: ")",
                  },
                ],
                endPosition: { row: 0, column: 15 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 0 },
                type: "subshell",
              },
              {
                children: [],
                endPosition: { row: 0, column: 17 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 16 },
                type: "|",
                text: "|",
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
                        text: "sort",
                      },
                    ],
                    endPosition: { row: 0, column: 22 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 18 },
                    type: "command_name",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 25 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 23 },
                    type: "word",
                    text: "-n",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 28 },
                    hasError: false,
                    isMissing: false,
                    startPosition: { row: 0, column: 26 },
                    type: "word",
                    text: "-u",
                  },
                ],
                endPosition: { row: 0, column: 28 },
                hasError: false,
                isMissing: false,
                startPosition: { row: 0, column: 18 },
                type: "command",
              },
            ],
            endPosition: { row: 0, column: 28 },
            hasError: false,
            isMissing: false,
            startPosition: { row: 0, column: 0 },
            type: "pipeline",
          },
        ],
        endPosition: { row: 0, column: 29 },
        hasError: false,
        isMissing: false,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 1 },
          endPosition: { row: 0, column: 3 },
          metadata: { name: "ls", summary: "List directory contents" },
        },
        {
          type: "option",
          startPosition: { column: 6, row: 0 },
          endPosition: { column: 7, row: 0 },
          metadata: {
            summary: "Don't ignore entries starting with .",
            expectsArg: false,
            long: ["--all"],
            short: ["-a"],
          },
        },
        {
          type: "option",
          startPosition: { column: 7, row: 0 },
          endPosition: { column: 8, row: 0 },
          metadata: {
            summary: "Prints human readable sizes (e.g., 1K 234M 2G) with -l and/or -s",
            expectsArg: false,
            long: ["--human-readable"],
            short: ["-h"],
          },
        },
        {
          type: "program",
          startPosition: { row: 0, column: 11 },
          endPosition: { row: 0, column: 13 },
          metadata: { name: "rm", summary: "Remove files or directories" },
        },
        {
          type: "program",
          startPosition: { row: 0, column: 18 },
          endPosition: { row: 0, column: 22 },
          metadata: { name: "sort", summary: "Sort lines of text files" },
        },
        {
          type: "option",
          startPosition: { row: 0, column: 23 },
          endPosition: { row: 0, column: 25 },
          metadata: {
            summary: "Compare according to string numerical value",
            expectsArg: false,
            long: ["--numeric-sort"],
            short: ["-n"],
          },
        },
        {
          type: "option",
          startPosition: { row: 0, column: 26 },
          endPosition: { row: 0, column: 28 },
          metadata: {
            summary: "Check for strict ordering",
            expectsArg: false,
            long: ["--unique"],
            short: ["-u"],
          },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // (ls  -ah ; rm ) | sort -n -u
      console.log(decoratedStr.join(""));

      const expectedStr = `${consoleDecorators.createToken("(", "(")}${consoleDecorators.createToken(
        "ls",
        "program"
      )}  -${consoleDecorators.createToken("a", "option")}${consoleDecorators.createToken(
        "h",
        "option"
      )} ${consoleDecorators.createToken(";", ";")} ${consoleDecorators.createToken(
        "rm",
        "program"
      )} ${consoleDecorators.createToken(")", ")")} ${consoleDecorators.createToken(
        "|",
        "|"
      )} ${consoleDecorators.createToken("sort", "program")} ${consoleDecorators.createToken(
        "-n",
        "option"
      )} ${consoleDecorators.createToken("-u", "option")}`;

      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                text: "for",
              },
              {
                children: [],
                endPosition: { row: 0, column: 5 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 4 },
                type: "variable_name",
                text: "i",
              },
              {
                children: [],
                endPosition: { row: 0, column: 8 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 6 },
                type: "in",
                text: "in",
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
                    text: "`",
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
                            text: "seq",
                          },
                        ],
                        endPosition: { row: 0, column: 13 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 10 },
                        type: "command_name",
                      },
                      {
                        children: [],
                        endPosition: { row: 0, column: 15 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 14 },
                        type: "word",
                        text: "1",
                      },
                      {
                        children: [],
                        endPosition: { row: 0, column: 18 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 16 },
                        type: "word",
                        text: "10",
                      },
                    ],
                    endPosition: { row: 0, column: 18 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 10 },
                    type: "command",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 19 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 18 },
                    type: "`",
                    text: "`",
                  },
                ],
                endPosition: { row: 0, column: 19 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 9 },
                type: "command_substitution",
              },
              {
                children: [],
                endPosition: { row: 0, column: 20 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 19 },
                type: ";",
                text: ";",
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
                    text: "do",
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
                            text: "echo",
                          },
                        ],
                        endPosition: { row: 0, column: 28 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 24 },
                        type: "command_name",
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
                            text: "$",
                          },
                          {
                            children: [],
                            endPosition: { row: 0, column: 31 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 30 },
                            type: "variable_name",
                            text: "i",
                          },
                        ],
                        endPosition: { row: 0, column: 31 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 29 },
                        type: "simple_expansion",
                      },
                    ],
                    endPosition: { row: 0, column: 31 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 24 },
                    type: "command",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 32 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 31 },
                    type: ";",
                    text: ";",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 37 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 33 },
                    type: "done",
                    text: "done",
                  },
                ],
                endPosition: { row: 0, column: 37 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 21 },
                type: "do_group",
              },
            ],
            endPosition: { row: 0, column: 37 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "for_statement",
          },
        ],
        endPosition: { row: 0, column: 37 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 10 },
          endPosition: { row: 0, column: 13 },
          metadata: { name: "seq", summary: "Print sequences of numbers" },
        },
        {
          type: "program",
          startPosition: { row: 0, column: 24 },
          endPosition: { row: 0, column: 28 },
          metadata: { name: "echo", summary: "Display a line of text" },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      // for i in `seq 1 10`; do echo $i; done
      const expectedStr = `${consoleDecorators.createToken("for", "for")} ${consoleDecorators.createToken(
        "i",
        "variable_name"
      )} ${consoleDecorators.createToken("in", "in")} ${consoleDecorators.createToken(
        "`",
        "`"
      )}${consoleDecorators.createToken("seq", "program")} 1 10${consoleDecorators.createToken(
        "`",
        "`"
      )}${consoleDecorators.createToken(";", ";")} ${consoleDecorators.createToken(
        "do",
        "do"
      )} ${consoleDecorators.createToken("echo", "program")} $${consoleDecorators.createToken(
        "i",
        "variable_name"
      )}${consoleDecorators.createToken(";", ";")} ${consoleDecorators.createToken("done", "done")}`;

      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                        text: "rm",
                      },
                    ],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 0 },
                    type: "command_name",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 7 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 3 },
                    type: "word",
                    text: "file",
                  },
                ],
                endPosition: { row: 0, column: 7 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "command",
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
                    text: "2",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 10 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 9 },
                    type: ">",
                    text: ">",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 20 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 11 },
                    type: "word",
                    text: "error.log",
                  },
                ],
                endPosition: { row: 0, column: 20 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 8 },
                type: "file_redirect",
              },
            ],
            endPosition: { row: 0, column: 20 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "redirected_statement",
          },
        ],
        endPosition: { row: 0, column: 20 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "rm", summary: "Remove files or directories" },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // rm file 2> error.log
      console.log(decoratedStr.join(""));
      const expectedStr = `${consoleDecorators.createToken("rm", "program")} ${consoleDecorators.createToken(
        "file",
        "word"
      )} ${consoleDecorators.createToken("2", "file_descriptor")}${consoleDecorators.createToken(
        ">",
        ">"
      )} ${consoleDecorators.createToken("error.log", "word")}`;
      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                    text: "NODE_ENV",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 9 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 8 },
                    type: "=",
                    text: "=",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 19 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 9 },
                    type: "word",
                    text: "production",
                  },
                ],
                endPosition: { row: 0, column: 19 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "variable_assignment",
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
                    text: "npm",
                  },
                ],
                endPosition: { row: 0, column: 23 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 20 },
                type: "command_name",
              },
              {
                children: [],
                endPosition: { row: 0, column: 27 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 24 },
                type: "word",
                text: "run",
              },
              {
                children: [],
                endPosition: { row: 0, column: 33 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 28 },
                type: "word",
                text: "start",
              },
            ],
            endPosition: { row: 0, column: 33 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 33 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 20 },
          endPosition: { row: 0, column: 23 },
          metadata: { name: "npm", summary: "javascript package manager" },
        },
        {
          type: "subcommand",
          startPosition: { row: 0, column: 24 },
          endPosition: { row: 0, column: 27 },
          metadata: {
            name: "run-script",
            summary: "Run arbitrary package scripts",
          },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      // NODE_ENV=production npm run start
      const expectedStr = `${consoleDecorators.createToken("NODE_ENV", "variable_name")}${consoleDecorators.createToken(
        "=",
        "="
      )}${consoleDecorators.createToken("production", "word")} ${consoleDecorators.createToken(
        "npm",
        "program"
      )} ${consoleDecorators.createToken("run", "subcommand")} ${consoleDecorators.createToken("start", "word")}`;
      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                    text: "rm",
                  },
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "command_name",
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
                    text: "$(",
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
                            text: "ls",
                          },
                        ],
                        endPosition: { row: 0, column: 7 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 5 },
                        type: "command_name",
                      },
                    ],
                    endPosition: { row: 0, column: 7 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 5 },
                    type: "command",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 8 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 7 },
                    type: ")",
                    text: ")",
                  },
                ],
                endPosition: { row: 0, column: 8 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 3 },
                type: "command_substitution",
              },
            ],
            endPosition: { row: 0, column: 8 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 8 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "rm", summary: "Remove files or directories" },
        },
        {
          type: "program",
          startPosition: { row: 0, column: 5 },
          endPosition: { row: 0, column: 7 },
          metadata: { name: "ls", summary: "List directory contents" },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      const expectedStr = `${consoleDecorators.createToken("rm", "program")} ${consoleDecorators.createToken(
        "$(",
        "$("
      )}${consoleDecorators.createToken("ls", "program")}${consoleDecorators.createToken(")", ")")}`;

      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                text: "while",
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
                        text: "true",
                      },
                    ],
                    endPosition: { row: 0, column: 10 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 6 },
                    type: "command_name",
                  },
                ],
                endPosition: { row: 0, column: 10 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 6 },
                type: "command",
              },
              {
                children: [],
                endPosition: { row: 0, column: 11 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 10 },
                type: ";",
                text: ";",
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
                    text: "do",
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
                            text: "rm",
                          },
                        ],
                        endPosition: { row: 0, column: 17 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 15 },
                        type: "command_name",
                      },
                    ],
                    endPosition: { row: 0, column: 17 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 15 },
                    type: "command",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 18 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 17 },
                    type: ";",
                    text: ";",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 23 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 19 },
                    type: "done",
                    text: "done",
                  },
                ],
                endPosition: { row: 0, column: 23 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 12 },
                type: "do_group",
              },
            ],
            endPosition: { row: 0, column: 23 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "while_statement",
          },
        ],
        endPosition: { row: 0, column: 23 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 6 },
          endPosition: { row: 0, column: 10 },
          metadata: { name: "true", summary: "Return true value" },
        },
        {
          type: "program",
          startPosition: { row: 0, column: 15 },
          endPosition: { row: 0, column: 17 },
          metadata: { name: "rm", summary: "Remove files or directories" },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // while true; do rm; done
      console.log(decoratedStr.join(""));
      const expectedStr = `${consoleDecorators.createToken("while", "while")} ${consoleDecorators.createToken(
        "true",
        "program"
      )}${consoleDecorators.createToken(";", ";")} ${consoleDecorators.createToken(
        "do",
        "do"
      )} ${consoleDecorators.createToken("rm", "program")}${consoleDecorators.createToken(
        ";",
        ";"
      )} ${consoleDecorators.createToken("done", "done")}`;
      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                    text: "cd",
                  },
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "command_name",
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
                    text: '"',
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 21 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 20 },
                    type: '"',
                    text: '"',
                  },
                ],
                endPosition: { row: 0, column: 21 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 3 },
                type: "string",
              },
            ],
            endPosition: { row: 0, column: 21 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 21 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "cd", summary: "Change working directory" },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // cd "dir with spaces/"
      console.log(decoratedStr.join(""));
      const expectedStr = `${consoleDecorators.createToken("cd", "program")} ${consoleDecorators.createToken(
        `"`,
        `"`
      )}${consoleDecorators.createToken(`dir with spaces/`, "word")}${consoleDecorators.createToken(`"`, `"`)}`;
      expect(decoratedStr.join("")).toEqual(expectedStr);
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
                    text: "echo",
                  },
                ],
                endPosition: { row: 0, column: 4 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                type: "command_name",
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
                    text: '"',
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
                        text: "$(",
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
                                text: "date",
                              },
                            ],
                            endPosition: { row: 0, column: 17 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 13 },
                            type: "command_name",
                          },
                        ],
                        endPosition: { row: 0, column: 17 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 13 },
                        type: "command",
                      },
                      {
                        children: [],
                        endPosition: { row: 0, column: 18 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 0, column: 17 },
                        type: ")",
                        text: ")",
                      },
                    ],
                    endPosition: { row: 0, column: 18 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 11 },
                    type: "command_substitution",
                  },
                  {
                    children: [],
                    endPosition: { row: 0, column: 19 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 18 },
                    type: '"',
                    text: '"',
                  },
                ],
                endPosition: { row: 0, column: 19 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 5 },
                type: "string",
              },
            ],
            endPosition: { row: 0, column: 19 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 19 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 4 },
          metadata: { name: "echo", summary: "Display a line of text" },
        },
        {
          type: "program",
          startPosition: { row: 0, column: 13 },
          endPosition: { row: 0, column: 17 },
          metadata: {
            name: "date",
            summary: "Print or set the system date and time",
          },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      // echo "Text $(date)"
      console.log(decoratedStr.join(""));
      const expectedStr = `${consoleDecorators.createToken("echo", "program")} ${consoleDecorators.createToken(
        `"`,
        `"`
      )}Text ${consoleDecorators.createToken("$(", "$(")}${consoleDecorators.createToken(
        "date",
        "program"
      )}${consoleDecorators.createToken(")", ")")}${consoleDecorators.createToken(`"`, `"`)}`;
      expect(decoratedStr.join("")).toEqual(expectedStr);
    });

    // Tests a new line at the end
    test(`# Simple hello world example:

`, () => {
      const source = `# Simple hello world example:
`;
      const tree = new Tree({
        children: [
          {
            children: [],
            endPosition: { row: 0, column: 29 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            type: "comment",
            text: "# Simple hello world example:",
          },
        ],
        endPosition: { row: 1, column: 0 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        type: "program",
      });
      const definitions: NodeDefinition[] = [];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.createToken("# Simple hello world example:", "comment")}
`;
      expect(decoratedStr.join("")).toBe(expectedStr);
    });

    xtest(`ls -rlt\t`, () => {
      const source = `ls -rlt\t`;
      const tree = new Tree({
        childCount: 1,
        children: [
          {
            childCount: 2,
            children: [
              {
                childCount: 1,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 2 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 0 },
                    text: "ls",
                    type: "word",
                  },
                ],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                text: "ls",
                type: "command_name",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 7 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 3 },
                text: "-rtl",
                type: "word",
              },
            ],
            endPosition: { row: 0, column: 7 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            text: "ls -rtl",
            type: "command",
          },
        ],
        endPosition: { row: 0, column: 8 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        text: "ls -rtl\t",
        type: "program",
      });

      const definitions = [
        {
          type: "program",
          startPosition: { row: 0, column: 0 },
          endPosition: { row: 0, column: 2 },
          metadata: { name: "ls", summary: "List directory contents" },
        },
        {
          type: "option",
          startPosition: { column: 4, row: 0 },
          endPosition: { column: 5, row: 0 },
          metadata: {
            summary: "Reverse order while sorting",
            expectsArg: false,
            long: ["--reverse"],
            short: ["-r"],
          },
        },
        {
          type: "option",
          startPosition: { column: 5, row: 0 },
          endPosition: { column: 6, row: 0 },
          metadata: {
            summary: "Sorts by modification time, newest first",
            expectsArg: false,
            long: [],
            short: ["-t"],
          },
        },
        {
          type: "option",
          startPosition: { column: 6, row: 0 },
          endPosition: { column: 7, row: 0 },
          metadata: {
            summary: "Uses a long listing format",
            expectsArg: false,
            long: [],
            short: ["-l"],
          },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      const expectedStr = `${consoleDecorators.createToken("# Simple hello world example:", "comment")}
`;
      console.log(decoratedStr.join(""));
      expect(decoratedStr.join("")).toBe(expectedStr);
    });
  });

  describe("CSS Language", () => {
    beforeAll(() => {
      consoleDecorators = new CSSDecorators();
      highlight = new Highlight(consoleDecorators);
    });

    test("color: white;\ntext-decoration: underline;\nbackground-color: blue;\nposition:relative;", () => {
      const source = `color: white;
text-decoration: underline;
background-color: blue;
position: relative;`;

      const tree = new Tree({
        childCount: 4,
        children: [
          {
            childCount: 4,
            children: [
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 5 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                text: "color",
                type: "property_name",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 6 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 5 },
                text: ":",
                type: ":",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 12 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 7 },
                text: "white",
                type: "plain_value",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 13 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 12 },
                text: ";",
                type: ";",
              },
            ],
            endPosition: { row: 0, column: 13 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            text: "color: white;",
            type: "declaration",
          },
          {
            childCount: 4,
            children: [
              {
                childCount: 0,
                children: [],
                endPosition: { row: 1, column: 15 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 1, column: 0 },
                text: "text-decoration",
                type: "property_name",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 1, column: 16 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 1, column: 15 },
                text: ":",
                type: ":",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 1, column: 26 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 1, column: 17 },
                text: "underline",
                type: "plain_value",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 1, column: 27 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 1, column: 26 },
                text: ";",
                type: ";",
              },
            ],
            endPosition: { row: 1, column: 27 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 1, column: 0 },
            text: "text-decoration: underline;",
            type: "declaration",
          },
          {
            childCount: 4,
            children: [
              {
                childCount: 0,
                children: [],
                endPosition: { row: 2, column: 16 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 2, column: 0 },
                text: "background-color",
                type: "property_name",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 2, column: 17 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 2, column: 16 },
                text: ":",
                type: ":",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 2, column: 22 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 2, column: 18 },
                text: "blue",
                type: "plain_value",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 2, column: 23 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 2, column: 22 },
                text: ";",
                type: ";",
              },
            ],
            endPosition: { row: 2, column: 23 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 2, column: 0 },
            text: "background-color: blue;",
            type: "declaration",
          },
          {
            childCount: 4,
            children: [
              {
                childCount: 0,
                children: [],
                endPosition: { row: 3, column: 8 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 3, column: 0 },
                text: "position",
                type: "property_name",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 3, column: 9 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 3, column: 8 },
                text: ":",
                type: ":",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 3, column: 18 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 3, column: 10 },
                text: "relative",
                type: "plain_value",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 3, column: 19 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 3, column: 18 },
                text: ";",
                type: ";",
              },
            ],
            endPosition: { row: 3, column: 19 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 3, column: 0 },
            text: "position: relative;",
            type: "declaration",
          },
        ],
        endPosition: { row: 3, column: 19 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        text: "color: white;\ntext-decoration: underline;\nbackground-color: blue;\nposition: relative;",
        type: "stylesheet",
      });

      const definitions = [
        {
          type: "property",
          metadata: { name: "color", summary: "Sets the color of text" },
          endPosition: { row: 0, column: 5 },
          startPosition: { row: 0, column: 0 },
        },
        {
          type: "property",
          metadata: { name: "text-decoration", summary: "Specifies the decoration added to text" },
          endPosition: { row: 1, column: 15 },
          startPosition: { row: 1, column: 0 },
        },
        {
          type: "property",
          metadata: { name: "background-color", summary: "Specifies the background color of an element" },
          endPosition: { row: 2, column: 16 },
          startPosition: { row: 2, column: 0 },
        },
        {
          type: "property",
          metadata: {
            name: "position",
            summary: "Specifies the type of positioning method used for an element (static, relative, absolute or fixed)",
          },
          endPosition: { row: 3, column: 8 },
          startPosition: { row: 3, column: 0 },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      const expectedStr = `${color.blue("color")}${color.white(":")} ${color.white("white")}${color.white(";")}
${color.blue("text-decoration")}${color.white(":")} ${color.white("underline")}${color.white(";")}
${color.blue("background-color")}${color.white(":")} ${color.white("blue")}${color.white(";")}
${color.blue("position")}${color.white(":")} ${color.white("relative")}${color.white(";")}`;
      expect(decoratedStr.join("")).toMatch(expectedStr);
    });

    test("/*\n Shared styles\n*/\n\nfooter p {\n\tfont: 100% Rockwell, Arvo, serif;\n}", () => {
      const source = `/*
 Shared styles
*/

footer p {
\tfont: 100% Rockwell, Arvo, serif;
}`;

      const tree = new Tree({
        childCount: 2,
        children: [
          {
            childCount: 0,
            children: [],
            endPosition: { row: 2, column: 2 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            text: "/*\n Shared styles\n*/",
            type: "comment",
          },
          {
            childCount: 2,
            children: [
              {
                childCount: 1,
                children: [
                  {
                    childCount: 2,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 4, column: 6 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 4, column: 0 },
                        text: "footer",
                        type: "tag_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 4, column: 8 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 4, column: 7 },
                        text: "p",
                        type: "tag_name",
                      },
                    ],
                    endPosition: { row: 4, column: 8 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 4, column: 0 },
                    text: "footer p",
                    type: "descendant_selector",
                  },
                ],
                endPosition: { row: 4, column: 8 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 4, column: 0 },
                text: "footer p",
                type: "selectors",
              },
              {
                childCount: 3,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 4, column: 10 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 4, column: 9 },
                    text: "{",
                    type: "{",
                  },
                  {
                    childCount: 9,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 5, column: 5 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 5, column: 1 },
                        text: "font",
                        type: "property_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 5, column: 6 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 5, column: 5 },
                        text: ":",
                        type: ":",
                      },
                      {
                        childCount: 1,
                        children: [
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 5, column: 11 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 5, column: 10 },
                            text: "%",
                            type: "unit",
                          },
                        ],
                        endPosition: { row: 5, column: 11 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 5, column: 7 },
                        text: "100%",
                        type: "integer_value",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 5, column: 20 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 5, column: 12 },
                        text: "Rockwell",
                        type: "plain_value",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 5, column: 21 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 5, column: 20 },
                        text: ",",
                        type: ",",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 5, column: 26 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 5, column: 22 },
                        text: "Arvo",
                        type: "plain_value",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 5, column: 27 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 5, column: 26 },
                        text: ",",
                        type: ",",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 5, column: 33 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 5, column: 28 },
                        text: "serif",
                        type: "plain_value",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 5, column: 34 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 5, column: 33 },
                        text: ";",
                        type: ";",
                      },
                    ],
                    endPosition: { row: 5, column: 34 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 5, column: 1 },
                    text: "font: 100% Rockwell, Arvo, serif;",
                    type: "declaration",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 6, column: 1 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 6, column: 0 },
                    text: "}",
                    type: "}",
                  },
                ],
                endPosition: { row: 6, column: 1 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 4, column: 9 },
                text: "{\n\tfont: 100% Rockwell, Arvo, serif;\n}",
                type: "block",
              },
            ],
            endPosition: { row: 6, column: 1 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 4, column: 0 },
            text: "footer p {\n\tfont: 100% Rockwell, Arvo, serif;\n}",
            type: "rule_set",
          },
        ],
        endPosition: { row: 6, column: 1 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        text: "/*\n Shared styles\n*/\n\nfooter p {\n\tfont: 100% Rockwell, Arvo, serif;\n}",
        type: "stylesheet",
      });

      const definitions = [
        {
          type: "property",
          metadata: {
            name: "font",
            summary:
              "A shorthand property for the font-style, font-variant, font-weight, \n    font-size/line-height, and the font-family properties",
          },
          endPosition: { row: 5, column: 5 },
          startPosition: { row: 5, column: 1 },
        },
      ];

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      const expectedStr = `${color.gray("/*")}
${color.gray(" Shared styles")}
${color.gray("*/")}

${color.red("footer")} ${color.red("p")} ${color.red("{")}
\t${color.blue("font")}${color.white(":")} 100${color.white("%")} ${color.white("Rockwell")}${color.white(
        ","
      )} ${color.white("Arvo")}${color.white(",")} ${color.white("serif")}${color.white(";")}
${color.red("}")}`;
      expect(decoratedStr.join("")).toMatch(expectedStr);
    });
  });

  describe("HTML Language", () => {
    beforeAll(() => {
      consoleDecorators = new HTMLDecorators();
      highlight = new Highlight(consoleDecorators);
    });

    test("<div>text</div>", () => {
      const tree = new Tree({
        childCount: 1,
        children: [
          {
            childCount: 3,
            children: [
              {
                childCount: 3,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 1 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 0 },
                    text: "<",
                    type: "<",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 4 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 1 },
                    text: "div",
                    type: "tag_name",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 5 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 4 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 0, column: 5 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                text: "<div>",
                type: "start_tag",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 9 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 5 },
                text: "text",
                type: "text",
              },
              {
                childCount: 3,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 11 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 9 },
                    text: "</",
                    type: "</",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 14 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 11 },
                    text: "div",
                    type: "tag_name",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 15 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 14 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 0, column: 15 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 9 },
                text: "</div>",
                type: "end_tag",
              },
            ],
            endPosition: { row: 0, column: 15 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            text: "<div>text</div>",
            type: "element",
          },
        ],
        endPosition: { row: 0, column: 15 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        text: "<div>text</div>",
        type: "fragment",
      });

      const definitions = [
        {
          type: "element",
          metadata: {
            name: "<div>",
            summary:
              "Generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element)",
          },
          endPosition: { row: 0, column: 4 },
          startPosition: { row: 0, column: 1 },
        },
      ];

      const source = "<div>text</div>";
      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      const expectedStr = `${color.red("<")}${color.red("div")}${color.red(">")}text${color.red("</")}${color.red(
        "div"
      )}${color.red(">")}`;

      expect(decoratedStr.join("")).toMatch(expectedStr);
    });

    test("<!-- comment --><ul>  <li>item</li>  <li>item</li>  <li>item</li></ul>", () => {
      const tree = new Tree({
        childCount: 3,
        children: [
          {
            childCount: 0,
            children: [],
            endPosition: { row: 0, column: 16 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            text: "<!-- comment -->",
            type: "comment",
          },
          {
            childCount: 0,
            children: [],
            endPosition: { row: 1, column: 0 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 16 },
            text: "\n",
            type: "text",
          },
          {
            childCount: 9,
            children: [
              {
                childCount: 3,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 1 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 1, column: 0 },
                    text: "<",
                    type: "<",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 3 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 1, column: 1 },
                    text: "ul",
                    type: "tag_name",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 4 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 1, column: 3 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 1, column: 4 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 1, column: 0 },
                text: "<ul>",
                type: "start_tag",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 2, column: 2 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 1, column: 4 },
                text: "\n  ",
                type: "text",
              },
              {
                childCount: 3,
                children: [
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 2, column: 3 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 2, column: 2 },
                        text: "<",
                        type: "<",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 2, column: 5 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 2, column: 3 },
                        text: "li",
                        type: "tag_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 2, column: 6 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 2, column: 5 },
                        text: ">",
                        type: ">",
                      },
                    ],
                    endPosition: { row: 2, column: 6 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 2, column: 2 },
                    text: "<li>",
                    type: "start_tag",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 2, column: 10 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 2, column: 6 },
                    text: "item",
                    type: "text",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 2, column: 12 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 2, column: 10 },
                        text: "</",
                        type: "</",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 2, column: 14 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 2, column: 12 },
                        text: "li",
                        type: "tag_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 2, column: 15 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 2, column: 14 },
                        text: ">",
                        type: ">",
                      },
                    ],
                    endPosition: { row: 2, column: 15 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 2, column: 10 },
                    text: "</li>",
                    type: "end_tag",
                  },
                ],
                endPosition: { row: 2, column: 15 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 2, column: 2 },
                text: "<li>item</li>",
                type: "element",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 3, column: 2 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 2, column: 15 },
                text: "\n  ",
                type: "text",
              },
              {
                childCount: 3,
                children: [
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 3, column: 3 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 3, column: 2 },
                        text: "<",
                        type: "<",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 3, column: 5 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 3, column: 3 },
                        text: "li",
                        type: "tag_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 3, column: 6 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 3, column: 5 },
                        text: ">",
                        type: ">",
                      },
                    ],
                    endPosition: { row: 3, column: 6 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 3, column: 2 },
                    text: "<li>",
                    type: "start_tag",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 3, column: 10 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 3, column: 6 },
                    text: "item",
                    type: "text",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 3, column: 12 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 3, column: 10 },
                        text: "</",
                        type: "</",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 3, column: 14 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 3, column: 12 },
                        text: "li",
                        type: "tag_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 3, column: 15 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 3, column: 14 },
                        text: ">",
                        type: ">",
                      },
                    ],
                    endPosition: { row: 3, column: 15 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 3, column: 10 },
                    text: "</li>",
                    type: "end_tag",
                  },
                ],
                endPosition: { row: 3, column: 15 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 3, column: 2 },
                text: "<li>item</li>",
                type: "element",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 4, column: 2 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 3, column: 15 },
                text: "\n  ",
                type: "text",
              },
              {
                childCount: 3,
                children: [
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 4, column: 3 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 4, column: 2 },
                        text: "<",
                        type: "<",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 4, column: 5 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 4, column: 3 },
                        text: "li",
                        type: "tag_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 4, column: 6 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 4, column: 5 },
                        text: ">",
                        type: ">",
                      },
                    ],
                    endPosition: { row: 4, column: 6 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 4, column: 2 },
                    text: "<li>",
                    type: "start_tag",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 4, column: 10 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 4, column: 6 },
                    text: "item",
                    type: "text",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 4, column: 12 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 4, column: 10 },
                        text: "</",
                        type: "</",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 4, column: 14 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 4, column: 12 },
                        text: "li",
                        type: "tag_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 4, column: 15 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 4, column: 14 },
                        text: ">",
                        type: ">",
                      },
                    ],
                    endPosition: { row: 4, column: 15 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 4, column: 10 },
                    text: "</li>",
                    type: "end_tag",
                  },
                ],
                endPosition: { row: 4, column: 15 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 4, column: 2 },
                text: "<li>item</li>",
                type: "element",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 5, column: 0 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 4, column: 15 },
                text: "\n",
                type: "text",
              },
              {
                childCount: 3,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 5, column: 2 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 5, column: 0 },
                    text: "</",
                    type: "</",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 5, column: 4 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 5, column: 2 },
                    text: "ul",
                    type: "tag_name",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 5, column: 5 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 5, column: 4 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 5, column: 5 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 5, column: 0 },
                text: "</ul>",
                type: "end_tag",
              },
            ],
            endPosition: { row: 5, column: 5 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 1, column: 0 },
            text: "<ul>\n  <li>item</li>\n  <li>item</li>\n  <li>item</li>\n</ul>",
            type: "element",
          },
        ],
        endPosition: { row: 5, column: 5 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        text: "<!-- comment -->\n<ul>\n  <li>item</li>\n  <li>item</li>\n  <li>item</li>\n</ul>",
        type: "fragment",
      });

      const definitions = [
        {
          startPosition: { row: 1, column: 1 },
          endPosition: { row: 1, column: 3 },
          metadata: {
            name: "<ul>",
            summary: "Represents an unordered list of items, typically rendered as a bulleted list",
          },
          type: "element",
        },
        {
          startPosition: { row: 2, column: 3 },
          endPosition: { row: 2, column: 5 },
          metadata: { name: "<li>", summary: "Represent an item in a list" },
          type: "element",
        },
        {
          startPosition: { row: 3, column: 3 },
          endPosition: { row: 3, column: 5 },
          metadata: { name: "<li>", summary: "Represent an item in a list" },
          type: "element",
        },
        {
          startPosition: { row: 4, column: 3 },
          endPosition: { row: 4, column: 5 },
          metadata: { name: "<li>", summary: "Represent an item in a list" },
          type: "element",
        },
      ];

      const source = `<!-- comment -->
<ul>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ul>`;
      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      const expectedStr = `${color.gray("<!-- comment -->")}
${color.red("<")}${color.red("ul")}${color.red(">")}
  ${color.red("<")}${color.red("li")}${color.red(">")}item${color.red("</")}${color.red("li")}${color.red(">")}
  ${color.red("<")}${color.red("li")}${color.red(">")}item${color.red("</")}${color.red("li")}${color.red(">")}
  ${color.red("<")}${color.red("li")}${color.red(">")}item${color.red("</")}${color.red("li")}${color.red(">")}
${color.red("</")}${color.red("ul")}${color.red(">")}`;

      expect(decoratedStr.join("")).toMatch(expectedStr);
    });
    test("Fragment of multiple lines", () => {
      const tree = new Tree({
        childCount: 4,
        children: [
          {
            childCount: 3,
            children: [
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 2 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 0 },
                text: "<!",
                type: "<!",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 9 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 2 },
                text: "doctype",
                type: "doctype",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 15 },
                hasError: false,
                isMissing: false,
                isNamed: false,
                startPosition: { row: 0, column: 14 },
                text: ">",
                type: ">",
              },
            ],
            endPosition: { row: 0, column: 15 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            text: "<!doctype html>",
            type: "doctype",
          },
          {
            childCount: 0,
            children: [],
            endPosition: { row: 1, column: 0 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 15 },
            text: "\n",
            type: "text",
          },
          {
            childCount: 3,
            children: [
              {
                childCount: 4,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 1 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 1, column: 0 },
                    text: "<",
                    type: "<",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 5 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 1, column: 1 },
                    text: "html",
                    type: "tag_name",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 1, column: 10 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 1, column: 6 },
                        text: "lang",
                        type: "attribute_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 1, column: 11 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 1, column: 10 },
                        text: "=",
                        type: "=",
                      },
                      {
                        childCount: 3,
                        children: [
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 12 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 1, column: 11 },
                            text: '"',
                            type: '"',
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 14 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 1, column: 12 },
                            text: "en",
                            type: "attribute_value",
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 15 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 1, column: 14 },
                            text: '"',
                            type: '"',
                          },
                        ],
                        endPosition: { row: 1, column: 15 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 1, column: 11 },
                        text: '"en"',
                        type: "quoted_attribute_value",
                      },
                    ],
                    endPosition: { row: 1, column: 15 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 1, column: 6 },
                    text: 'lang="en"',
                    type: "attribute",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 16 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 1, column: 15 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 1, column: 16 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 1, column: 0 },
                text: '<html lang="en">',
                type: "start_tag",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 3, column: 0 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 1, column: 16 },
                text: "\n  ...\n",
                type: "text",
              },
              {
                childCount: 3,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 3, column: 2 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 3, column: 0 },
                    text: "</",
                    type: "</",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 3, column: 6 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 3, column: 2 },
                    text: "html",
                    type: "tag_name",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 3, column: 7 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 3, column: 6 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 3, column: 7 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 3, column: 0 },
                text: "</html>",
                type: "end_tag",
              },
            ],
            endPosition: { row: 3, column: 7 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 1, column: 0 },
            text: '<html lang="en">\n  ...\n</html>',
            type: "element",
          },
          {
            childCount: 0,
            children: [],
            endPosition: { row: 4, column: 0 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 3, column: 7 },
            text: "\n",
            type: "text",
          },
        ],
        endPosition: { row: 4, column: 0 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        text: '<!doctype html>\n<html lang="en">\n  ...\n</html>\n',
        type: "fragment",
      });

      const definitions = [
        {
          type: "element",
          metadata: {
            name: "<html>",
            summary:
              "Represent the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element",
          },
          endPosition: { row: 1, column: 5 },
          startPosition: { row: 1, column: 1 },
        },
      ];

      const source = `<!doctype html>
<html lang="en">
...
</html>`;
      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      const expectedStr = `${color.red("<!")}${color.red("doctype")} html${color.red(">")}
${color.red("<")}${color.red("html")} ${color.green("lang")}${color.white("=")}${color.white('"')}${color.magenta(
        "en"
      )}${color.white('"')}${color.red(">")}
...
${color.red("</")}${color.red("html")}${color.red(">")}`;

      expect(decoratedStr.join("")).toMatch(expectedStr);
    });

    test("Nodes with empty raw_string", () => {
      const tree = new Tree({
        childCount: 4,
        children: [
          {
            childCount: 3,
            children: [
              {
                childCount: 6,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 1 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 0 },
                    text: "<",
                    type: "<",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 7 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 1 },
                    text: "script",
                    type: "tag_name",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 0, column: 11 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 8 },
                        text: "src",
                        type: "attribute_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 0, column: 12 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 0, column: 11 },
                        text: "=",
                        type: "=",
                      },
                      {
                        childCount: 3,
                        children: [
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 0, column: 13 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 0, column: 12 },
                            text: '"',
                            type: '"',
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 0, column: 85 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 13 },
                            text: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js",
                            type: "attribute_value",
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 0, column: 86 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 0, column: 85 },
                            text: '"',
                            type: '"',
                          },
                        ],
                        endPosition: { row: 0, column: 86 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 12 },
                        text: '"https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"',
                        type: "quoted_attribute_value",
                      },
                    ],
                    endPosition: { row: 0, column: 86 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 8 },
                    text: 'src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"',
                    type: "attribute",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 0, column: 96 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 87 },
                        text: "integrity",
                        type: "attribute_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 0, column: 97 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 0, column: 96 },
                        text: "=",
                        type: "=",
                      },
                      {
                        childCount: 3,
                        children: [
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 0, column: 98 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 0, column: 97 },
                            text: '"',
                            type: '"',
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 0, column: 169 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 98 },
                            text: "sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi",
                            type: "attribute_value",
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 0, column: 170 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 0, column: 169 },
                            text: '"',
                            type: '"',
                          },
                        ],
                        endPosition: { row: 0, column: 170 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 97 },
                        text: '"sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"',
                        type: "quoted_attribute_value",
                      },
                    ],
                    endPosition: { row: 0, column: 170 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 87 },
                    text: 'integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"',
                    type: "attribute",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 0, column: 182 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 171 },
                        text: "crossorigin",
                        type: "attribute_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 0, column: 183 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 0, column: 182 },
                        text: "=",
                        type: "=",
                      },
                      {
                        childCount: 3,
                        children: [
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 0, column: 184 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 0, column: 183 },
                            text: '"',
                            type: '"',
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 0, column: 193 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 0, column: 184 },
                            text: "anonymous",
                            type: "attribute_value",
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 0, column: 194 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 0, column: 193 },
                            text: '"',
                            type: '"',
                          },
                        ],
                        endPosition: { row: 0, column: 194 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 0, column: 183 },
                        text: '"anonymous"',
                        type: "quoted_attribute_value",
                      },
                    ],
                    endPosition: { row: 0, column: 194 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 171 },
                    text: 'crossorigin="anonymous"',
                    type: "attribute",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 195 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 194 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 0, column: 195 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 0 },
                text:
                  '<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous">',
                type: "start_tag",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 0, column: 195 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 195 },
                text: "",
                type: "raw_text",
              },
              {
                childCount: 3,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 197 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 195 },
                    text: "</",
                    type: "</",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 203 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 0, column: 197 },
                    text: "script",
                    type: "tag_name",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 0, column: 204 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 0, column: 203 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 0, column: 204 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 0, column: 195 },
                text: "</script>",
                type: "end_tag",
              },
            ],
            endPosition: { row: 0, column: 204 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 0 },
            text:
              '<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>',
            type: "script_element",
          },
          {
            childCount: 0,
            children: [],
            endPosition: { row: 1, column: 0 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 0, column: 204 },
            text: "\n",
            type: "text",
          },
          {
            childCount: 3,
            children: [
              {
                childCount: 6,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 1 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 1, column: 0 },
                    text: "<",
                    type: "<",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 7 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 1, column: 1 },
                    text: "script",
                    type: "tag_name",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 1, column: 11 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 1, column: 8 },
                        text: "src",
                        type: "attribute_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 1, column: 12 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 1, column: 11 },
                        text: "=",
                        type: "=",
                      },
                      {
                        childCount: 3,
                        children: [
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 13 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 1, column: 12 },
                            text: '"',
                            type: '"',
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 88 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 1, column: 13 },
                            text: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js",
                            type: "attribute_value",
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 89 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 1, column: 88 },
                            text: '"',
                            type: '"',
                          },
                        ],
                        endPosition: { row: 1, column: 89 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 1, column: 12 },
                        text: '"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"',
                        type: "quoted_attribute_value",
                      },
                    ],
                    endPosition: { row: 1, column: 89 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 1, column: 8 },
                    text: 'src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"',
                    type: "attribute",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 1, column: 99 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 1, column: 90 },
                        text: "integrity",
                        type: "attribute_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 1, column: 100 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 1, column: 99 },
                        text: "=",
                        type: "=",
                      },
                      {
                        childCount: 3,
                        children: [
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 101 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 1, column: 100 },
                            text: '"',
                            type: '"',
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 172 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 1, column: 101 },
                            text: "sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG",
                            type: "attribute_value",
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 173 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 1, column: 172 },
                            text: '"',
                            type: '"',
                          },
                        ],
                        endPosition: { row: 1, column: 173 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 1, column: 100 },
                        text: '"sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"',
                        type: "quoted_attribute_value",
                      },
                    ],
                    endPosition: { row: 1, column: 173 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 1, column: 90 },
                    text: 'integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"',
                    type: "attribute",
                  },
                  {
                    childCount: 3,
                    children: [
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 1, column: 185 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 1, column: 174 },
                        text: "crossorigin",
                        type: "attribute_name",
                      },
                      {
                        childCount: 0,
                        children: [],
                        endPosition: { row: 1, column: 186 },
                        hasError: false,
                        isMissing: false,
                        isNamed: false,
                        startPosition: { row: 1, column: 185 },
                        text: "=",
                        type: "=",
                      },
                      {
                        childCount: 3,
                        children: [
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 187 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 1, column: 186 },
                            text: '"',
                            type: '"',
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 196 },
                            hasError: false,
                            isMissing: false,
                            isNamed: true,
                            startPosition: { row: 1, column: 187 },
                            text: "anonymous",
                            type: "attribute_value",
                          },
                          {
                            childCount: 0,
                            children: [],
                            endPosition: { row: 1, column: 197 },
                            hasError: false,
                            isMissing: false,
                            isNamed: false,
                            startPosition: { row: 1, column: 196 },
                            text: '"',
                            type: '"',
                          },
                        ],
                        endPosition: { row: 1, column: 197 },
                        hasError: false,
                        isMissing: false,
                        isNamed: true,
                        startPosition: { row: 1, column: 186 },
                        text: '"anonymous"',
                        type: "quoted_attribute_value",
                      },
                    ],
                    endPosition: { row: 1, column: 197 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 1, column: 174 },
                    text: 'crossorigin="anonymous"',
                    type: "attribute",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 198 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 1, column: 197 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 1, column: 198 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 1, column: 0 },
                text:
                  '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous">',
                type: "start_tag",
              },
              {
                childCount: 0,
                children: [],
                endPosition: { row: 1, column: 198 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 1, column: 198 },
                text: "",
                type: "raw_text",
              },
              {
                childCount: 3,
                children: [
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 200 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 1, column: 198 },
                    text: "</",
                    type: "</",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 206 },
                    hasError: false,
                    isMissing: false,
                    isNamed: true,
                    startPosition: { row: 1, column: 200 },
                    text: "script",
                    type: "tag_name",
                  },
                  {
                    childCount: 0,
                    children: [],
                    endPosition: { row: 1, column: 207 },
                    hasError: false,
                    isMissing: false,
                    isNamed: false,
                    startPosition: { row: 1, column: 206 },
                    text: ">",
                    type: ">",
                  },
                ],
                endPosition: { row: 1, column: 207 },
                hasError: false,
                isMissing: false,
                isNamed: true,
                startPosition: { row: 1, column: 198 },
                text: "</script>",
                type: "end_tag",
              },
            ],
            endPosition: { row: 1, column: 207 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 1, column: 0 },
            text:
              '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>',
            type: "script_element",
          },
          {
            childCount: 0,
            children: [],
            endPosition: { row: 2, column: 0 },
            hasError: false,
            isMissing: false,
            isNamed: true,
            startPosition: { row: 1, column: 207 },
            text: "\n",
            type: "text",
          },
        ],
        endPosition: { row: 2, column: 0 },
        hasError: false,
        isMissing: false,
        isNamed: true,
        startPosition: { row: 0, column: 0 },
        text:
          '<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>\n',
        type: "fragment",
      });

      const definitions: NodeDefinition[] = [];

      const source = `<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>`;

      const decoratedStr = highlight.source(source, tree, definitions);
      console.log(decoratedStr.join(""));
      const expectedStr = `${color.red("<")}${color.red("script")} ${color.green("src")}${color.white("=")}${color.white(
        '"'
      )}${color.magenta("https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js")}${color.white(
        '"'
      )} ${color.green("integrity")}${color.white("=")}${color.white('"')}${color.magenta(
        "sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
      )}${color.white('"')} ${color.green("crossorigin")}${color.white("=")}${color.white('"')}${color.magenta(
        "anonymous"
      )}${color.white('"')}${color.red(">")}${color.red("</")}${color.red("script")}${color.red(">")}
${color.red("<")}${color.red("script")} ${color.green("src")}${color.white("=")}${color.white('"')}${color.magenta(
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
      )}${color.white('"')} ${color.green("integrity")}${color.white("=")}${color.white('"')}${color.magenta(
        "sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
      )}${color.white('"')} ${color.green("crossorigin")}${color.white("=")}${color.white('"')}${color.magenta(
        "anonymous"
      )}${color.white('"')}${color.red(">")}${color.red("</")}${color.red("script")}${color.red(">")}`;

      expect(decoratedStr.join("")).toMatch(expectedStr);
    });
  });
});
