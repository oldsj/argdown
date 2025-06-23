export * from "./lexer";
export * from "./parser";
export * from "./TokenNames";
export * from "./RuleNames";
export * from "./model/model";
export * from "./utils";
export * from "./ArgdownTreeWalker";
export * from "./Logger";
export * from "./IArgdownLogger";

// Re-export tokenMatcher from chevrotain for convenience
export { tokenMatcher } from "chevrotain";

// Export simplified API
import { tokenize } from "./lexer";
import { parser } from "./parser";

/**
 * Simple API for parsing Argdown text
 * @param input The Argdown text to parse
 * @returns The parsed AST
 */
export function parse(input: string) {
  const lexingResult = tokenize(input);
  parser.input = lexingResult.tokens;
  return parser.argdown();
}

/**
 * Tokenize Argdown text
 * @param input The Argdown text to tokenize
 * @returns Array of tokens
 */
export { tokenize };

/**
 * The parser instance with all parsing methods
 */
export { parser };