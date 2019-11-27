import { createElement } from "react";
import {
  ArgumentNode,
  AssignmentNode,
  OperandNode,
  OperatorNode,
  OptionNode,
  OptionWithArgNode,
  PipeNode,
  ProgramNode,
  RedirectNode,
  WordNode,
  SubcommandNode
} from "../src";
import renderer from "react-test-renderer";
import HighlightReact from "../src/highlightReact";

describe("Highlight in React mode", () => {
  let highlight: HighlightReact;
  beforeAll(() => {
    const decorators = {
      argument: (node: ArgumentNode) => {
        const { kind, word } = node;
        return createElement("span", { kind }, word);
      },
      operand: (node: OperandNode) => {
        const { kind, word } = node;
        return createElement("span", { kind }, word);
      },
      option: (node: OptionNode) => {
        const {
          kind,
          opt,
          optionSchema: { summary, long, short, expectsArg }
        } = node;
        return createElement("span", { kind, summary }, opt);
      },
      optionWithArg: (node: OptionWithArgNode) => {
        const { arg, kind, option } = node;
        const optionElement = decorators.option(option);

        const argumentElement = decorators.argument(arg);

        return createElement("span", { kind }, [
          optionElement,
          "=",
          argumentElement
        ]);
      },
      program: (node: ProgramNode) => {
        const {
          kind,
          word,
          schema: { summary }
        } = node;

        return createElement("span", { kind, summary }, word);
      },
      subcommand: (node: SubcommandNode) => {
        const {
          kind,
          schema: { summary, name },
          word
        } = node;
        return createElement("span", { kind, summary }, word);
      }
    };

    highlight = new HighlightReact(decorators);
  });

  test("decorates query 'rm -r dir/' with colors", () => {
    const query = "rm -r dir/";
    const ast = {
      kind: "command",
      pos: [0, 10],
      parts: [
        {
          kind: "program",
          pos: [0, 2],
          word: "rm",
          isDotSlash: false,
          hasPath: false,
          schema: {
            description:
              "This manual page documents the GNU version of rm. rm removes each specified file. By default, it does not remove directories.",
            name: "rm",
            stickyOptions: true,
            summary: "remove files or directories"
          }
        },
        {
          kind: "option",
          pos: [3, 5],
          word: "-r",
          startsWithDash: 1,
          optionSchema: {
            summary: "Remove directories and their contents recursively",
            long: ["--recursive"],
            short: ["-r", "-R"],
            expectsArg: false,
            description: ""
          },
          opt: "-r"
        },
        { kind: "operand", pos: [6, 10], word: "dir/" }
      ]
    };

    const decoratedQuery = highlight.highlight(query, ast);
    const tree = renderer.create(decoratedQuery).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xtest("decorates query 'ls -alh > contents.txt' with colors", () => {
    const query = "ls -alh > contents.txt";
    const ast = {
      kind: "command",
      pos: [0, 22],
      parts: [
        {
          kind: "program",
          pos: [0, 2],
          word: "ls",
          isDotSlash: false,
          hasPath: false,
          schema: {
            description:
              "List information about the FILEs (the current directory by default). Sort entries alphabetically if none of -cftuvSUX nor --sort.",
            examples: [
              {
                command: "ls -a",
                summary: "List all files, including hidden files"
              },
              {
                command: "ls -lh",
                summary:
                  "Long format list with size displayed using human readable units (KB, MB, GB)"
              },
              {
                command: "ls -lS",
                summary: "Long format list sorted by size (descending)"
              }
            ],
            name: "ls",
            stickyOptions: true,
            summary: "List directory contents"
          }
        },
        {
          kind: "stickyOption",
          pos: [3, 7],
          word: "-alh",
          parts: [
            {
              word: "a",
              pos: [4, 5],
              opt: "-a",
              kind: "option",
              startsWithDash: -1,
              optionSchema: {
                summary: "Do not ignore entries starting with .",
                long: ["--all"],
                short: ["-a"],
                expectsArg: false,
                description: ""
              }
            },
            {
              word: "l",
              pos: [5, 6],
              opt: "-l",
              kind: "option",
              startsWithDash: -1,
              optionSchema: {
                summary: "Use a long listing format",
                long: [],
                short: ["-l"],
                expectsArg: false,
                description: ""
              }
            },
            {
              word: "h",
              pos: [6, 7],
              opt: "-h",
              kind: "option",
              startsWithDash: -1,
              optionSchema: {
                summary:
                  "With -l and/or -s, print human readable sizes (e.g., 1K 234M 2G)",
                long: ["--human-readable"],
                short: ["-h"],
                expectsArg: false,
                description: ""
              }
            }
          ]
        },
        {
          kind: "redirect",
          type: ">",
          // tslint:disable-next-line: object-literal-sort-keys
          output: { kind: "word", pos: [10, 22], word: "contents.txt" },
          input: null,
          pos: [8, 22]
        }
      ]
    };

    const decoratedQuery = highlight.highlight(query, ast);
    console.log(decoratedQuery);
    expect(decoratedQuery).toStrictEqual("[32;1mls[0m -[35ma[0m[35ml[0m[35mh[0m [33;1m>[0m [35mcontents.txt[0m");
  });

  xtest("decorates query 'rm&&ls ;cd' with colors", () => {
    const query = "rm&&ls ;cd";
    const ast = {
      kind: "list",
      pos: [0, 10],
      parts: [
        {
          kind: "command",
          pos: [0, 2],
          parts: [
            {
              kind: "program",
              pos: [0, 2],
              word: "rm",
              isDotSlash: false,
              hasPath: false,
              schema: {
                description:
                  "This manual page documents the GNU version of rm. rm removes each specified file. By default, it does not remove directories.",
                examples: [
                  {
                    command: "rm -rf directory/",
                    summary:
                      'Forcibly remove "directory", without prompting for confirmation or showing error messages'
                  },
                  {
                    command: "rm -i test/*",
                    summary:
                      'Interactively remove all files inside directory "test"'
                  },
                  {
                    command: "rm file1 file2 file3",
                    summary: "Remove files file1, file2 and file3"
                  }
                ],
                name: "rm",
                stickyOptions: true,
                summary: "remove files or directories"
              }
            }
          ]
        },
        { kind: "operator", op: "&&", pos: [2, 4] },
        {
          kind: "command",
          pos: [4, 6],
          parts: [
            {
              kind: "program",
              pos: [4, 6],
              word: "ls",
              isDotSlash: false,
              hasPath: false,
              schema: {
                description:
                  "List information about the FILEs (the current directory by default). Sort entries alphabetically if none of -cftuvSUX nor --sort.",
                examples: [
                  {
                    command: "ls -a",
                    summary: "List all files, including hidden files"
                  },
                  {
                    command: "ls -lh",
                    summary:
                      "Long format list with size displayed using human readable units (KB, MB, GB)"
                  },
                  {
                    command: "ls -lS",
                    summary: "Long format list sorted by size (descending)"
                  }
                ],
                name: "ls",
                stickyOptions: true,
                summary: "List directory contents"
              }
            }
          ]
        },
        { kind: "operator", op: ";", pos: [7, 8] },
        {
          kind: "command",
          pos: [8, 10],
          parts: [
            {
              kind: "program",
              pos: [8, 10],
              word: "cd",
              isDotSlash: false,
              hasPath: false,
              schema: {
                description:
                  "It changes your working directory. Use it to move around in the hierarchy of your file system.",
                examples: [],
                name: "cd",
                stickyOptions: false,
                summary: "Change working directory"
              }
            }
          ]
        }
      ]
    };

    const decoratedQuery = highlight.highlight(query, ast);
    console.log(decoratedQuery);
    expect(decoratedQuery).toStrictEqual([
      {
        type: "span",
        props: { kind: "program", summary: "remove files or directories" },
        children: ["rm"]
      },
      " ",
      {
        type: "span",
        props: {
          kind: "option",
          summary: "Remove directories and their contents recursively"
        },
        children: ["-r"]
      },
      " ",
      { type: "span", props: { kind: "operand" }, children: ["dir/"] }
    ]);
  });

  xtest("decorates query 'zxcv qwerty' with colors", () => {
    const query = "zxcv qwerty";
    const ast = {
      kind: "command",
      pos: [0, 11],
      parts: [
        { kind: "word", pos: [0, 4], word: "zxcv" },
        { kind: "word", pos: [5, 11], word: "qwerty" }
      ]
    };

    const decoratedQuery = highlight.highlight(query, ast);
    console.log(decoratedQuery);
    expect(decoratedQuery).toStrictEqual("[35mzxcv[0m [35mqwerty[0m");
  });

  xtest("decorates query 'ls | grep' with colors", () => {
    const query = "ls | grep";
    const ast = {
      kind: "pipeline",
      pos: [0, 9],
      parts: [
        {
          kind: "command",
          pos: [0, 2],
          parts: [
            {
              kind: "program",
              pos: [0, 2],
              word: "ls",
              isDotSlash: false,
              hasPath: false,
              schema: {
                description:
                  "List information about the FILEs (the current directory by default). Sort entries alphabetically if none of -cftuvSUX nor --sort.",
                examples: [
                  {
                    command: "ls -a",
                    summary: "List all files, including hidden files"
                  },
                  {
                    command: "ls -lh",
                    summary:
                      "Long format list with size displayed using human readable units (KB, MB, GB)"
                  },
                  {
                    command: "ls -lS",
                    summary: "Long format list sorted by size (descending)"
                  }
                ],
                name: "ls",
                stickyOptions: true,
                summary: "List directory contents"
              }
            }
          ]
        },
        { kind: "pipe", pipe: "|", pos: [3, 4] },
        {
          kind: "command",
          pos: [5, 9],
          parts: [
            {
              kind: "program",
              pos: [5, 9],
              word: "grep",
              isDotSlash: false,
              hasPath: false,
              schema: {
                description:
                  "Searches the named input FILEs (or standard input if no files are named, or if a single hyphen-minus (-) is given as file name) for lines containing a match to the given PATTERN. By default, grep prints the matching lines.",
                examples: [
                  {
                    command: "grep -i error http-server.log",
                    summary:
                      "Search 'error' (case insensitive) in file http-server.log"
                  },
                  {
                    command: 'grep "John Doe" users.txt',
                    summary: "Search for 'John Doe' in file users.txt"
                  },
                  {
                    command: 'grep  -R --include="*.log" "warning" /var/log',
                    summary:
                      "Search for 'warning' recursively, in all files with extension '.log' inside directory /var/log and print the line number for each match"
                  }
                ],
                name: "grep",
                stickyOptions: true,
                summary: "Print lines matching a pattern"
              }
            }
          ]
        }
      ]
    };

    const decoratedQuery = highlight.highlight(query, ast);
    console.log(decoratedQuery);
    expect(decoratedQuery).toStrictEqual("[32;1mls[0m [31;1m|[0m [32;1mgrep[0m");
  });
});
