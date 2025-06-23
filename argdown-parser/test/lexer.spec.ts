import { expect } from "chai";
import * as fs from "fs";
import * as lexer from "../src/lexer";
import * as chevrotain from "chevrotain";
import { tokensToString } from "../src";
// import { tokensToString } from "../src";

let i = 0;
let currentTokens: chevrotain.IToken[] = [];
function expectToken(tokenType: chevrotain.TokenType) {
  //expect(currentTokens[i]).to.be.an.instanceof(tokenType);
  expect(chevrotain.tokenMatcher(currentTokens[i], tokenType)).to.be.true;
  i++;
}
function expectTokenLocation(
  startOffset: number,
  endOffset: number,
  startLine: number,
  endLine: number,
  startColumn: number,
  endColumn: number
) {
  var token = currentTokens[i];
  expect(token.startOffset).to.equal(startOffset);
  expect(token.endOffset).to.equal(endOffset);
  expect(token.startLine).to.equal(startLine);
  expect(token.endLine).to.equal(endLine);
  expect(token.startColumn).to.equal(startColumn);
  expect(token.endColumn).to.equal(endColumn);
  i++;
}
function startTest(tokens: chevrotain.IToken[]) {
  currentTokens = tokens;
  i = 0;
}

describe("Lexer", function() {
  it("recognizes incoming and outgoing relations", function() {
    let source = fs.readFileSync("./test/lexer-relations.argdown", "utf8");
    const result = lexer.tokenize(source);
    //console.log(lexer.tokensToString(result.tokens));
    startTest(result.tokens);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Newline);
    expectToken(lexer.OutgoingAttack);
    expectToken(lexer.Newline);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Newline);
    expectToken(lexer.OutgoingAttack);
    expectToken(lexer.Newline);
    expectToken(lexer.IncomingSupport);
    expectToken(lexer.Newline);
    expectToken(lexer.IncomingAttack);
    expectToken(lexer.Newline);
    expectToken(lexer.Contradiction);
    expectToken(lexer.Newline);
    expectToken(lexer.IncomingUndercut);
    expectToken(lexer.Newline);
    expectToken(lexer.OutgoingUndercut);
    expectToken(lexer.Newline);
    expectToken(lexer.OutgoingUndercut);
  });
  it("can distinguish between Emptyline and Newline", function() {
    let source = fs.readFileSync("./test/lexer-emptyline.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Dedent);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
  });
  it("can lex mentions", function() {
    let source = fs.readFileSync("./test/lexer-mentions.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.HeadingStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.ArgumentMention);
    expectToken(lexer.StatementMention);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.ArgumentMention);
    expectToken(lexer.StatementMention);
  });
  it("can lex headings", function() {
    let source = fs.readFileSync("./test/lexer-heading.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.HeadingStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);
    expectToken(lexer.HeadingStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
  });
  it("can lex ordered and unordered lists", function() {
    let source = fs.readFileSync("./test/lexer-lists.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.Indent);
    expectToken(lexer.UnorderedListItem);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.UnorderedListItem);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OrderedListItem);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.OrderedListItem);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Dedent);
    expectToken(lexer.Dedent);
    expectToken(lexer.Dedent);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Indent);
    expectToken(lexer.OrderedListItem);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OrderedListItem);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.OrderedListItem);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Dedent);
    expectToken(lexer.OrderedListItem);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.UnorderedListItem);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Dedent);
    expectToken(lexer.Dedent);
  });
  it("can lex an argument reconstruction", function() {
    let source = fs.readFileSync("./test/lexer-argument.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.StatementNumber);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.StatementNumber);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.InferenceStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.ListDelimiter);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Data);
    expectToken(lexer.InferenceEnd);
    expectToken(lexer.Newline);
    expectToken(lexer.StatementNumber);
    expectToken(lexer.Freestyle);
  });
  it("can dedent on Emptyline", function() {
    let source = fs.readFileSync(
      "./test/lexer-emptyline-dedent.argdown",
      "utf8"
    );
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Dedent);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingAttack);
    expectToken(lexer.Freestyle);
  });
  it("can lex Newlines in relations", function() {
    let source = fs.readFileSync("./test/lexer-linebreak.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.OutgoingAttack);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Dedent);
  });
  it("can lex bold and italic text", function() {
    let source = fs.readFileSync("./test/lexer-italic-bold.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.UnderscoreBoldStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnderscoreBoldEnd);
    expectToken(lexer.Newline);
    expectToken(lexer.UnderscoreItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnderscoreItalicEnd);
    expectToken(lexer.Newline);
    expectToken(lexer.AsteriskBoldStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskBoldEnd);
    expectToken(lexer.Newline);
    expectToken(lexer.AsteriskItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskItalicEnd);
    expectToken(lexer.Newline);
    expectToken(lexer.AsteriskBoldStart);
    expectToken(lexer.AsteriskItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskItalicEnd);
    expectToken(lexer.AsteriskBoldEnd);
    expectToken(lexer.Newline);

    expectToken(lexer.UnderscoreBoldStart);
    expectToken(lexer.UnderscoreItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnderscoreItalicEnd);
    expectToken(lexer.UnderscoreBoldEnd);
    expectToken(lexer.Newline);

    expectToken(lexer.UnderscoreBoldStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskItalicEnd);
    expectToken(lexer.UnderscoreBoldEnd);
    expectToken(lexer.Newline);

    expectToken(lexer.AsteriskItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnderscoreBoldStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnderscoreBoldEnd);
    expectToken(lexer.AsteriskItalicEnd);
    expectToken(lexer.Newline);

    expectToken(lexer.AsteriskBoldStart);
    expectToken(lexer.AsteriskBoldStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskBoldEnd);
    expectToken(lexer.AsteriskBoldEnd);
    expectToken(lexer.Newline);

    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.AsteriskItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskItalicEnd);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Newline);

    expectToken(lexer.AsteriskItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskItalicEnd);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Newline);

    expectToken(lexer.AsteriskItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskItalicEnd);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Newline);

    expectToken(lexer.UnderscoreItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnderscoreItalicEnd);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Newline);

    expectToken(lexer.AsteriskBoldStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskBoldEnd);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Newline);

    expectToken(lexer.UnderscoreBoldStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnderscoreBoldEnd);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Newline);

    expectToken(lexer.AsteriskItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskItalicEnd);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Newline);

    expectToken(lexer.UnderscoreItalicStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnderscoreItalicEnd);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Newline);

    expectToken(lexer.AsteriskBoldStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.AsteriskBoldEnd);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Newline);

    expectToken(lexer.UnderscoreBoldStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnderscoreBoldEnd);
    expectToken(lexer.UnusedControlChar);
  });
  // it("can lex asterisks with surrounding whitespace", function() {
  //     let source = `Argdown doesn't like ** stars.`;
  //     const result = lexer.tokenize(source);
  //     startTest(result.tokens);
  //     expectToken(lexer.Freestyle);
  //     expectToken(lexer.UnusedControlChar);
  //     expectToken(lexer.UnusedControlChar);
  //     expectToken(lexer.Freestyle);
  //     expect(result.tokens.length).to.equal(4);
  // });
  // it("can lex underscores with surrounding whitespace", function() {
  //     let source = `Argdown doesn't like ___ underscores.`;
  //     const result = lexer.tokenize(source);
  //     startTest(result.tokens);
  //     console.log(tokensToString(result.tokens));
  //     expectToken(lexer.Freestyle);
  //     expectToken(lexer.UnusedControlChar);
  //     expectToken(lexer.UnusedControlChar);
  //     expectToken(lexer.UnusedControlChar);
  //     expectToken(lexer.Freestyle);
  //     expect(result.tokens.length).to.equal(5);
  // });
  it("can lex complex indentation", function() {
    let source = fs.readFileSync("./test/lexer-indentation.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.OutgoingAttack);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingAttack);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.IncomingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Dedent);
    expectToken(lexer.Dedent);
    expectToken(lexer.Dedent);
    expectToken(lexer.IncomingAttack);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Dedent);
  });
  it("can recognize argument and statement references and definitions", function() {
    let source = fs.readFileSync(
      "./test/lexer-definitions-references.argdown",
      "utf8"
    );
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.StatementReference);
    expectToken(lexer.Newline);
    expectToken(lexer.StatementDefinition);
    expectToken(lexer.Newline);
    expectToken(lexer.ArgumentReference);
    expectToken(lexer.Newline);
    expectToken(lexer.ArgumentDefinition);
    expectToken(lexer.Newline);
    expectToken(lexer.Freestyle);
  });
  it("can ignore comments", function() {
    let source = fs.readFileSync("./test/lexer-comment.argdown", "utf8");
    const result = lexer.tokenize(source);
    console.log(tokensToString(result.tokens));
    startTest(result.tokens);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.ArgumentReference);
    expectToken(lexer.Newline);
    expectToken(lexer.Dedent);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Freestyle);
  });
  it("can recognize links and tags", function() {
    let source = fs.readFileSync("./test/lexer-links-and-tags.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expectToken(lexer.StatementDefinition);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Link);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Tag);
    expectToken(lexer.Tag);
    expectToken(lexer.Tag);
  });
  it("can ignore trailing Emptyline before comment", function() {
    let source = fs.readFileSync(
      "./test/lexer-trailing-emptyline.argdown",
      "utf8"
    );
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    expect(result.tokens.length).to.equal(4);
    expectToken(lexer.Emptyline);
    expectToken(lexer.StatementDefinition);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnusedControlChar);
  });
  it("can lex Windows line endings", function() {
    let source = `Another statement\r\n  + An argument\r\n\r\n(1) A\r\n----\r\n(2) B`;
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    //console.log(lexer.tokensToString(result.tokens));
    //expect(result.tokens.length).to.equal(5);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Dedent);
    expectToken(lexer.Emptyline);
    expectToken(lexer.StatementNumber);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.InferenceStart);
    expectToken(lexer.InferenceEnd);
    expectToken(lexer.Newline);
    expectToken(lexer.StatementNumber);
    expectToken(lexer.Freestyle);
  });
  it("can lex escaped chars", function() {
    let source = fs.readFileSync("./test/lexer-escaped-chars.argdown", "utf8");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    //console.log(lexer.tokensToString(result.tokens));
    //expect(result.tokens.length).to.equal(5);
    expectToken(lexer.Freestyle);
    expectToken(lexer.EscapedChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.EscapedChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.EscapedChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.EscapedChar);
    expectToken(lexer.Newline);
    expectToken(lexer.EscapedChar);
    expectToken(lexer.Freestyle);
  });
  it("can lex special chars", function() {
    let source = `p.v.q

.O.p

test :smiley: test

p.->.q

p:->:q

(p.^.q).v.r

:E:x :A:y

.E.x.A.y  

.~.Fx.<>.Gy
`;
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    console.log(tokensToString(result.tokens));
    //expect(result.tokens.length).to.equal(5);
    expectToken(lexer.Freestyle);
    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);

    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);

    expectToken(lexer.Freestyle);
    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);

    expectToken(lexer.Freestyle);
    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);

    expectToken(lexer.Freestyle);
    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);

    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.UnusedControlChar);
    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);

    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);

    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);

    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
    expectToken(lexer.SpecialChar);
    expectToken(lexer.Freestyle);
  });
  it("can save correct token location data", function() {
    let source = fs.readFileSync(
      "./test/lexer-token-locations.argdown",
      "utf8"
    );
    // ensure LF instead of CLRF on windows
    source = source.replace(/\r\n/g, "\n");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    //console.log(lexer.tokenLocationsToString(result.tokens));
    expectTokenLocation(0, 0, 1, 1, 1, 1); // a
    expectTokenLocation(1, 1, 1, 1, 2, 2); // linebreak
    expectTokenLocation(2, 2, 2, 2, 1, 1); // b
    expectTokenLocation(3, 3, 2, 2, 2, 2); // linebreak
    expectTokenLocation(4, 5, 3, 3, 1, 2); // cd
    expectTokenLocation(6, 7, 3, 3, 3, 4); // :
    expectTokenLocation(8, 12, 3, 3, 5, 9); //@[A]
    expectTokenLocation(13, 13, 3, 3, 10, 10); //ItalicStart
    expectTokenLocation(14, 14, 3, 3, 11, 11); // e
    expectTokenLocation(15, 15, 3, 3, 12, 12); //ItalicEnd
    expectTokenLocation(16, 17, 3, 4, 13, 1); //Emptyline
    expectTokenLocation(18, 21, 5, 5, 1, 4); //<B>:
    expectTokenLocation(23, 23, 5, 5, 6, 6); //skipped whitespace at offset 21
    expectTokenLocation(24, 24, 5, 5, 7, 7); // Newline
    expectTokenLocation(25, 28, 6, 6, 1, 4); // Indent (4 spaces)
    expectTokenLocation(25, 29, 6, 6, 1, 5); // + (including 4 spaces for indentation)
    expectTokenLocation(31, 31, 6, 6, 7, 7); // g
    expectTokenLocation(32, 32, 6, 6, 8, 8); // Newline
    expectTokenLocation(33, 40, 7, 7, 1, 8); // Indent (8 spaces)
    expectTokenLocation(33, 42, 7, 7, 1, 10); // -> including spaces
    expectTokenLocation(44, 44, 7, 7, 12, 12); // skipped whitespace at offset 42
    expectTokenLocation(44, 44, 7, 7, 12, 12); // Dedent is always at last column of current line
    expectTokenLocation(44, 44, 7, 7, 12, 12); // Dedent is always at last column of current line
  });
  it("can save correct token location data if first line is empty", function() {
    let source = fs.readFileSync(
      "./test/lexer-token-locations-first-line-empty.argdown",
      "utf8"
    );
    source = source.replace(/\r\n/g, "\n");
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    //console.log(lexer.tokenLocationsToString(result.tokens));
    //expect(result.tokens.length).to.equal(5);
    expectTokenLocation(0, 0, 1, 1, 1, 1); //Newline
    expectTokenLocation(1, 1, 2, 2, 1, 1); //a
    expectTokenLocation(2, 2, 2, 2, 2, 2); //Newline
    expectTokenLocation(3, 3, 3, 3, 1, 1); //b
  });
  it("can lex relation after empty line", function() {
    let source = fs.readFileSync(
      "./test/lexer-relation-after-emptyline.argdown",
      "utf8"
    );
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    //console.log(lexer.tokensToString(result.tokens));
    //expect(result.tokens.length).to.equal(5);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Emptyline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Dedent);
  });
  it("can lex frontmatter", function() {
    let source = `
    ===
    some: front matter
    ===
    
    [title]: text
    `;
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    //expect(result.tokens.length).to.equal(5);
    expectToken(lexer.Newline);
    expectToken(lexer.FrontMatter);
    expectToken(lexer.Emptyline);
    expectToken(lexer.StatementDefinition);
    expectToken(lexer.Freestyle);
  });
  it("can lex frontmatter with equal sign", function() {
    let source = `
    ===
    some: "front=matter"
    ===
    
    [title]: text
    `;
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    //expect(result.tokens.length).to.equal(5);
    expectToken(lexer.Newline);
    expectToken(lexer.FrontMatter);
    expectToken(lexer.Emptyline);
    expectToken(lexer.StatementDefinition);
    expectToken(lexer.Freestyle);
  });
  it("can lex meta data", function() {
    let source = `
    # heading {some: meta data}

    [title]: text {some: meta data}

    [title] {some: meta data}

    <argument>: text {some: meta data}

    <argument> {some: meta data}
    `;
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    // console.log(tokensToString(result.tokens));
    //expect(result.tokens.length).to.equal(5);
    expectToken(lexer.Newline);
    expectToken(lexer.HeadingStart);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Data);
    expectToken(lexer.Emptyline);
    expectToken(lexer.StatementDefinition);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Data);
    expectToken(lexer.Emptyline);
    expectToken(lexer.StatementReference);
    expectToken(lexer.Data);
    expectToken(lexer.Emptyline);
    expectToken(lexer.ArgumentDefinition);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Data);
    expectToken(lexer.Emptyline);
    expectToken(lexer.ArgumentReference);
    expectToken(lexer.Data);
  });
  it("can lex multiline statements", function() {
    let source = `
    I 
    am 
    a 
    multiline 
    statement.
    `;
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    // console.log(lexer.tokensToString(result.tokens));
    //expect(result.tokens.length).to.equal(5);
    expect(result.tokens[1].image).to.equal("I ");
    expect(result.tokens[3].image).to.equal("am ");
    expect(result.tokens[5].image).to.equal("a ");
    expect(result.tokens[7].image).to.equal("multiline ");
    expect(result.tokens[9].image).to.equal("statement");
    expect(result.tokens[10].image).to.equal(".");
    // expectToken(lexer.StatementDefinitionByNumber);
    // expectToken(lexer.Freestyle);
    // expectToken(lexer.StatementReferenceByNumber);
    // expectToken(lexer.StatementMentionByNumber);
    // expectToken(lexer.Dedent);
  });
  it("can lex Windows line endings", function() {
    let source = `Another statement\r\n  + An argument\r\n\r\n(1) A\r\n----\r\n(2) B`;
    const result = lexer.tokenize(source);
    startTest(result.tokens);
    //console.log(lexer.tokensToString(result.tokens));
    //expect(result.tokens.length).to.equal(5);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.Indent);
    expectToken(lexer.OutgoingSupport);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Dedent);
    expectToken(lexer.Emptyline);
    expectToken(lexer.StatementNumber);
    expectToken(lexer.Freestyle);
    expectToken(lexer.Newline);
    expectToken(lexer.InferenceStart);
    expectToken(lexer.InferenceEnd);
    expectToken(lexer.Newline);
    expectToken(lexer.StatementNumber);
    expectToken(lexer.Freestyle);
  });
  it("can lex argument after frontmatter", function() {
    let source = `
    ===
    selection:
        statementSelectionMode: not-used-in-argument
    ===
    <a>
`;
    const result = lexer.tokenize(source);
    // console.log(tokensToString(result.tokens));
    startTest(result.tokens);
    //console.log(lexer.tokensToString(result.tokens));
    //expect(result.tokens.length).to.equal(5);
    expectToken(lexer.Newline);
    expectToken(lexer.FrontMatter);
    expectToken(lexer.Newline);
    expectToken(lexer.ArgumentReference);
  });
  it("can ignore trailing Emptyline", function() {
    let source = `<A>


`;
    const result = lexer.tokenize(source);
    // console.log(tokensToString(result.tokens));
    startTest(result.tokens);
    //console.log(lexer.tokensToString(result.tokens));
    expect(result.tokens.length).to.equal(1);
    expectToken(lexer.ArgumentReference);
  });
  //   it("can ignore Newline in Newline Comment Emptyline", function() {
  //     let source = `
  // /* Comment */

  // A
  // `;
  //     const result = lexer.tokenize(source);
  //     console.log(tokensToString(result.tokens));
  //     startTest(result.tokens);
  //     expect(result.tokens.length).to.equal(2);
  //     expectToken(lexer.Emptyline);
  //     expectToken(lexer.Freestyle);
  //   });
});
