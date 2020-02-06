import { NodeDefinition } from "../src/interfaces";

export const consoleDecorators = {
  backtick: (text: string) => {
    return `\u001b[97m${text}\u001b[0m`;
  },
  closingBraces: (text: string) => {
    return `\u001b[92m${text}\u001b[0m`;
  },
  closingParens: (text: string) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  comment: (text: string, definition?: NodeDefinition) => {
    return `\u001b[90m${text}\u001b[0m`;
  },
  do: (text: string, definition?: NodeDefinition) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  done: (text: string, definition?: NodeDefinition) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  equal: (text: string, definition?: NodeDefinition) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  fileDescriptor: (text: string, definition?: NodeDefinition) => {
    return `\u001b[96m${text}\u001b[0m`;
  },
  fn: (text: string, definition?: NodeDefinition) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  for: (text: string, definition?: NodeDefinition) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  in: (text: string, definition?: NodeDefinition) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  openingBraces: (text: string) => {
    return `\u001b[92m${text}\u001b[0m`;
  },
  openingParens: (text: string) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  operator: (text: string, definition?: NodeDefinition) => {
    return `\u001b[34m${text}\u001b[0m`;
  },
  option: (text: string, definition?: NodeDefinition) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  optionArg: (text: string, definition?: NodeDefinition) => {
    return `\u001b[31m${text}\u001b[0m`;
  },
  pipeline: (text: string, definition?: NodeDefinition) => {
    return `\u001b[91m${text}\u001b[0m`;
  },
  program: (text: string, definition?: NodeDefinition) => {
    return `\u001b[32;1m${text}\u001b[0m`;
  },
  redirect: (text: string, definition?: NodeDefinition) => {
    return `\u001b[34m${text}\u001b[0m`;
  },
  semicolon: (text: string, definition?: NodeDefinition) => {
    return `\u001b[94m${text}\u001b[0m`;
  },
  subcommand: (text: string, definition?: NodeDefinition) => {
    return `\u001b[36;1m${text}\u001b[0m`;
  },
  variableName: (text: string, definition?: NodeDefinition) => {
    return `\u001b[36;1m${text}\u001b[0m`;
  },
  while: (text: string) => {
    return `\u001b[35m${text}\u001b[0m`;
  },
  word: (text: string, definition?: NodeDefinition) => {
    return text;
  }
};
