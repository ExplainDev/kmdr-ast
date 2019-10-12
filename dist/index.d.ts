/**
 * Copyright 2019 Eddie Ramirez
 */
declare class AST {
    /**
     * Checks if an AssignmentNodeAST matches an identifier with a value
     * @param node
     * @param identifier the identifier name
     * @param value the value we try to validate against
     * @returns true if there's a match, false if not
     */
    static assignmentHasValue(node: AssignmentNode, name: string, value: string): boolean;
    /**
     * Checks if a CommandNodeAST contains at least 1 AssignmentNodeAST that
     * matches an identifier and a value
     * @param node
     * @param identifier
     * @param value
     * @returns true if a first assignment matches the criteria
     */
    static commandHasAssignment(node: CommandNode, name: string, value?: string): boolean;
    /**
     * Checks if a CommandNodeAST contains at least 1 ComposedOptionNodeAST that matches the criteria
     * @param node
     * @param stickyOptions
     * @returns true if at least 1 node is of kind stickyOptions and
     *  its word matches stickyOptions string
     */
    static commandHasStickyOptions(node: CommandNode, stickyOptions: string): boolean;
    /**
     * Checks if a CommandNodeAST has an OptionNodeAST with an optionName
     * @param node
     * @param optionName
     * @param argValue
     * @param pos
     */
    static commandHasOption(node: CommandNode | StickyOptionNode, optionName: string, argValue?: string): boolean;
    static commandHasProgram(node: CommandNode, programName: string): boolean;
    static commandHasSubcommand(node: CommandNode, subcommandName: string, pos?: number): boolean;
    static getAllArguments(node: CommandNode): ArgumentNode[] | undefined;
    static getAllAssignments(node: CommandNode): AssignmentNode[];
    static getAllRedirects(node: CommandNode): RedirectNode[];
    static getAllSubcommands(node: CommandNode): SubcommandNode[] | undefined;
    /**
     * Returns all OptionNodeAST in a command
     * @param node
     */
    static getCommandOptions(node: CommandNode | StickyOptionNode): OptionNode[] | undefined;
    /**
     * Gets the first option in a command
     * @param node
     * @param optionName
     */
    static getCommandOption(node: CommandNode | StickyOptionNode, optionName: string): OptionNode | undefined;
    /**
     * Get the Program of a command
     * @param node
     */
    static getCommandProgram(node: CommandNode): ProgramNode | undefined;
    /**
     * Returns the last node in a list of nodes.
     * @param node
     * @returns the last node in a list of nodes
     */
    static getLastNode(node: CommandNode | ListNode): CommandNode | ListNode | WordNode | OperatorNode | undefined;
    static getProgramNodePosition(node: CommandNode): number;
    static getSudoOptions(node: CommandNode | StickyOptionNode): OptionNode[] | undefined;
    static getSudoOption(node: CommandNode | StickyOptionNode, optionName: string): OptionNode | undefined;
    /**
     * Checks if a node is of kind command
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'command' else false
     */
    static isCommand(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind composedOption
     * @param node
     * @returns {boolean} true if kind is 'composedOption'
     */
    static isStickyOption(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind list
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'list' else false
     */
    static isList(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind pipeline
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'pipeline' else false
     */
    static isPipeline(node: NodeAST): boolean;
    /**
     * Checks if node is of kind assignment
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'assignment'
     */
    static isAssignment(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind word
     * @param node {NodeASt}
     * @returns {boolean} true if kind is 'word'
     */
    static isWord(node: NodeAST): boolean;
    static isOptionWithArg(node: NodeAST): boolean;
    /**
     * Checks if node is of kind operator
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'operator
     */
    static isOperator(node: NodeAST): boolean;
    /**
     * Checks if node is of kind pipe
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'operator'
     */
    static isPipe(node: NodeAST): boolean;
    /**
     * Checks if node is of kind reservedWord
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'reservedWord'
     */
    static isReservedWord(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind redirect
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'redirect'
     */
    static isRedirect(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind option
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'option'
     */
    static isOption(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind argument
     * @param node {NodeAST}
     * @returns {boolean} true if kind is 'argument'
     */
    static isArgument(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind compound
     * @param node
     */
    static isCompound(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind subcommand
     * @param node {NodeAST}
     * @returns true if kind is 'subcommand'
     */
    static isSubcommand(node: NodeAST): boolean;
    /**
     * Checks if a node is of kind program
     * @param node {NodeAST}
     * @returns true if kind is 'program'
     */
    static isProgram(node: NodeAST): boolean;
    /**
     * Checks if a node word is "sudo".
     */
    static isSudo(node: NodeAST): boolean;
    /**
     * Checks if an option expects an argument, based on a OptionSchema
     * definition
     * @param node
     */
    static optionExpectsArg(node: OptionNode): boolean;
    /**
     * Checks if an OptionNodeAST is followed immediately by an argument
     * @param node the OptionNodeAST to validate
     * @returns true if it's followed by an argument
     */
    static optionFollowedByArg(node: OptionNode): boolean;
    static withSudo(node: CommandNode): boolean;
    static serialize(str: string): NodeAST;
    static flatten(node: NodeAST): Array<ProgramNode | OptionNode | OperatorNode | ArgumentNode | AssignmentNode | OptionWithArgNode | PipeNode | RedirectNode | ReservedWordNode | SubcommandNode>;
    private static flattenCommandNode;
    private static flattenListNode;
}
export default AST;
//# sourceMappingURL=index.d.ts.map