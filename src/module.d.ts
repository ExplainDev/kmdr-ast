import { ProgramSchema, OptionSchema } from "kmdr-parser/src/interfaces";
/**
 * Interface to construct a Node
 */
declare global {
  interface NodeAST {
    kind: string;
    parts?: any;
    pos: number[];
    word?: string;
  }

  /**
   * Interface to construct a ProgramNode
   */
  interface ProgramNode extends NodeAST {
    word: string;
    programName: string;
    isDotSlash?: boolean | null;
    hasPath?: boolean | null;
    schema: ProgramSchema;
  }

  /**
   * Interface to construct an AssignmentNode
   */
  interface AssignmentNode extends NodeAST {
    word: string;
    name: string;
    name_pos: number[];
    value: string | null;
    value_pos: number[];
  }

  /**
   * Interface to construct a CommandNode
   */
  interface CommandNode extends NodeAST {
    word: string;
    parts: Array<
      | AssignmentNode
      | WordNode
      | ProgramNode
      | SubcommandNode
      | OptionNode
      | ArgumentNode
    >;
    inSudoContext?: boolean;
  }

  interface CompoundNode extends NodeAST {
    word: string;
    list: Array<ReservedWordNode | ListNode>;
    redirects?: RedirectNode;
  }
  /**
   * Interface to construct a PipelineNode
   */
  interface PipelineNode extends NodeAST {
    parts: Array<CommandNode | PipeNode>;
  }

  /**
   * Interface to construct a ListNode
   */
  interface ListNode extends NodeAST {
    parts: Array<CommandNode | OperatorNode>;
  }

  /**
   * Interface to construct a PipeNode
   */
  interface PipeNode extends NodeAST {
    pipe: string;
  }

  /**
   * Interface to construct a RedirectNode
   */
  interface RedirectNode extends NodeAST {
    input: number | null;
    output: number | WordNode;
    output_fd: number;
    type: string;
  }

  /**
   * Interface to construct an OperatorNode
   */
  interface OperatorNode extends NodeAST {
    op: string;
  }

  /**
   * Interface to construct a ReservedNode
   */
  interface ReservedWordNode extends WordNode {}

  /**
   * Interface to construct an ArgumentNode
   */
  interface ArgumentNode extends WordNode {
    arg?: string;
    startsWithDash?: number;
    word: string;
  }

  /**
   * Interface to construct a WordNode
   */
  interface WordNode extends NodeAST {
    word: string;
  }

  /**
   * Interface to construct an OptionNode
   */
  interface OptionNode extends WordNode {
    followedByArg?: boolean;
    opt: string;
    optionSchema: OptionSchema;
    optPos: number[];
    startsWithDash?: number;
  }

  /**
   * Interface to construct an OptionWithNode
   */
  interface OptionWithArgNode extends WordNode {
    word: string;
    option: OptionNode;
    arg: ArgumentNode;
  }

  /**
   * Interface to construct StickyOptionNode
   */
  interface StickyOptionNode extends WordNode {
    word: string;
    parts?: OptionNode[];
  }

  /**
   * Interface to construct a SubcommandNode
   */
  interface SubcommandNode extends WordNode {
    schema: ProgramSchema;
  }

  /**
   * Interface to construct a SudoNode
   */
  interface SudoNode extends WordNode {
    word: string;
    schema: ProgramSchema;
  }

  interface FlatAST
    extends Array<
      | OptionNode
      | ProgramNode
      | AssignmentNode
      | OperatorNode
      | PipeNode
      | RedirectNode
      | ArgumentNode
      | OptionWithArgNode
      | ReservedWordNode
    > {}

  interface CommandLeafNodes
    extends Array<
      ProgramNode | SubcommandNode | AssignmentNode | OptionNode | ArgumentNode
    > {}

  interface ListLeafNodes
    extends Array<
      ProgramNode | AssignmentNode | OptionNode | ArgumentNode | OperatorNode
    > {}
}
