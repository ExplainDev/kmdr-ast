import {
  ArgumentNode,
  CommandNode,
  OperandNode,
  OperatorNode,
  OptionNode,
  WordNode,
  RedirectNode,
  SudoNode,
  ProgramNode,
  ListNode,
  AssignmentNode,
  PipeNode,
  CompoundNode,
  PipelineNode,
  ReservedWordNode
} from "../src";
import AST from "../src/ast";

describe("AST", () => {
  test("a node is of type CommandNode", () => {
    const node: CommandNode = {
      kind: "command",
      parts: [],
      pos: [1, 2],
      word: "test"
    };
    expect(AST.isCommand(node)).toBeTruthy();
  });

  test("a node is of type WordNode", () => {
    const node: WordNode = {
      kind: "word",
      pos: [0, 2],
      word: "test"
    };

    expect(AST.isWord(node)).toBeTruthy();
  });

  test("a node is of type OptionNode", () => {
    const node: OptionNode = {
      kind: "option",
      opt: "--option",
      optPos: [10, 20],
      optionSchema: {
        summary: "An option"
      },
      pos: [10, 20],
      word: "--option"
    };

    expect(AST.isOption(node)).toBeTruthy();
  });

  test("a node is of type OperandNode", () => {
    const node: OperandNode = {
      kind: "operand",
      pos: [0, 2],
      word: "operand"
    };

    expect(AST.isOperand(node)).toBeTruthy();
  });

  test("a node is of type OperatorNode", () => {
    const node: OperatorNode = {
      kind: "operator",
      op: "&&",
      pos: [4, 6]
    };

    expect(AST.isOperator(node)).toBeTruthy();
  });

  test("a node is of type ArgumentNode", () => {
    const node: ArgumentNode = {
      kind: "argument",
      pos: [3, 5],
      word: "value"
    };

    expect(AST.isArgument(node)).toBeTruthy();
  });

  test("a node is of type RedirectNode", () => {
    const node: RedirectNode = {
      input: 2,
      kind: "redirect",
      output: 3,
      output_fd: 1,
      pos: [3, 4],
      type: "test"
    };

    expect(AST.isRedirect(node)).toBeTruthy();
  });

  test("a node is of type SudoNode", () => {
    const node: SudoNode = {
      kind: "sudo",
      pos: [40, 50],
      schema: {
        name: "sudo",
        summary: "a sudo"
      },
      word: "sudo"
    };

    expect(AST.isSudo(node)).toBeTruthy();
  });

  test("a node is of type ProgramNode", () => {
    const node: ProgramNode = {
      kind: "program",
      pos: [0, 5],
      programName: "kmdr",
      schema: {
        name: "kmdr",
        summary: "The ultimate CLI learning tool"
      },
      word: "kmdr"
    };

    expect(AST.isProgram(node)).toBeTruthy();
  });

  test("a node is of type ListNode", () => {
    const node: ListNode = {
      kind: "list",
      parts: [],
      pos: [0, 10]
    };

    expect(AST.isList(node)).toBeTruthy();
  });

  test("a node is of type AssignmentNode", () => {
    const node: AssignmentNode = {
      kind: "assignment",
      name: "foo",
      name_pos: [0, 4],
      pos: [0, 7],
      value: "bar",
      value_pos: [4, 7],
      word: "foo=bar"
    };

    expect(AST.isAssignment(node)).toBeTruthy();
  });

  test("a node is of type PipeNode", () => {
    const node: PipeNode = {
      kind: "pipe",
      pipe: "|",
      pos: [10, 11]
    };

    expect(AST.isPipe(node)).toBeTruthy();
  });

  test("a node is of type CompoundNode", () => {
    const node: CompoundNode = {
      kind: "compound",
      list: [],
      pos: [0, 100],
      word: "test"
    };

    expect(AST.isCompound(node)).toBeTruthy();
  });

  test("a node is of type PipelineNode", () => {
    const node: PipelineNode = {
      kind: "pipeline",
      parts: [],
      pos: [4, 6]
    };

    expect(AST.isPipeline(node)).toBeTruthy();
  });

  test("a node is of type ReservedWordNode", () => {
    const node: ReservedWordNode = {
      kind: "reservedword",
      pos: [0, 10],
      word: "while"
    };

    expect(AST.isReservedWord(node)).toBeTruthy();
  });

  test("a CommandNode is flatten", () => {
    const ast = {
      kind: "command",
      pos: [0, 18],
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
        { kind: "operand", pos: [8, 18], word: "directory/" }
      ]
    };
    const expectedFlatAST = [
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
      },
      { kind: "operand", pos: [8, 18], word: "directory/" }
    ];

    const flatAST = AST.flatten(ast);
    expect(flatAST).toMatchObject(expectedFlatAST);
  });

  test("a flat ListNode has three items", () => {
    const ast = {
      kind: "list",
      pos: [0, 8],
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
        {
          kind: "operator",
          op: "&&",
          pos: [3, 5]
        },
        {
          kind: "command",
          pos: [6, 8],
          parts: [
            {
              kind: "program",
              pos: [6, 8],
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
        }
      ]
    };

    const flatAST = AST.flatten(ast);
    expect(flatAST.length).toEqual(3);
  });
});
