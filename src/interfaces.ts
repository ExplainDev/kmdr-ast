import { ProgramSchema, OptionSchema } from "kmdr-parser/src/interfaces";

/**
 * Interface to construct a Node
 */

export interface NodeAST {
  kind: string;
  parts?: any;
  pos: number[];
  word?: string;
}

/**
 * Interface to construct a ProgramNode
 */
export interface ProgramNode extends NodeAST {
  word: string;
  programName: string;
  isDotSlash?: boolean | null;
  hasPath?: boolean | null;
  schema: ProgramSchema;
}

/**
 * Interface to construct an AssignmentNode
 */
export interface AssignmentNode extends NodeAST {
  word: string;
  name: string;
  name_pos: number[];
  value: string | null;
  value_pos: number[];
}

/**
 * Interface to construct a CommandNode
 */
export interface CommandNode extends NodeAST {
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

export interface CompoundNode extends NodeAST {
  word: string;
  list: Array<ReservedWordNode | ListNode>;
  redirects?: RedirectNode;
}
/**
 * Interface to construct a PipelineNode
 */
export interface PipelineNode extends NodeAST {
  parts: Array<CommandNode | PipeNode>;
}

/**
 * Interface to construct a ListNode
 */
export interface ListNode extends NodeAST {
  parts: Array<CommandNode | OperatorNode>;
}

/**
 * Interface to construct a PipeNode
 */
export interface PipeNode extends NodeAST {
  pipe: string;
}

/**
 * Interface to construct a RedirectNode
 */
export interface RedirectNode extends NodeAST {
  input: number | null;
  output: number | WordNode;
  output_fd: number;
  type: string;
}

/**
 * Interface to construct an OperatorNode
 */
export interface OperatorNode extends NodeAST {
  op: string;
}

/**
 * Interface to construct a ReservedNode
 */
export interface ReservedWordNode extends WordNode {}

/**
 * Interface to construct an ArgumentNode
 */
export interface ArgumentNode extends WordNode {
  arg?: string;
  startsWithDash?: number;
  word: string;
}

/**
 * Interface to construct a WordNode
 */
export interface WordNode extends NodeAST {
  word: string;
}

/**
 * Interface to construct an OptionNode
 */
export interface OptionNode extends WordNode {
  followedByArg?: boolean;
  opt: string;
  optionSchema: OptionSchema;
  optPos: number[];
  startsWithDash?: number;
}

/**
 * Interface to construct an OptionWithNode
 */
export interface OptionWithArgNode extends WordNode {
  word: string;
  option: OptionNode;
  arg: ArgumentNode;
}

/**
 * Interface to construct StickyOptionNode
 */
export interface StickyOptionNode extends WordNode {
  word: string;
  parts?: OptionNode[];
}

/**
 * Interface to construct a SubcommandNode
 */
export interface SubcommandNode extends WordNode {
  schema: ProgramSchema;
}

/**
 * Interface to construct a SudoNode
 */
export interface SudoNode extends WordNode {
  word: string;
  schema: ProgramSchema;
}

export interface FlatAST
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

export interface CommandLeafNodes
  extends Array<
    ProgramNode | SubcommandNode | AssignmentNode | OptionNode | ArgumentNode
  > {}

export interface ListLeafNodes
  extends Array<
    ProgramNode | AssignmentNode | OptionNode | ArgumentNode | OperatorNode
  > {}

export interface ASTInstance {
  assignmentHasValue(
    node: AssignmentNode,
    name: string,
    value: string
  ): boolean;
  te(): void;
  isAssignment(): boolean;
}
