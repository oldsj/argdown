"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  ArgdownTreeWalker: () => ArgdownTreeWalker,
  ArgdownTypes: () => ArgdownTypes,
  ArgumentDefinition: () => ArgumentDefinition,
  ArgumentMention: () => ArgumentMention,
  ArgumentReference: () => ArgumentReference,
  AsteriskBoldEnd: () => AsteriskBoldEnd,
  AsteriskBoldStart: () => AsteriskBoldStart,
  AsteriskItalicEnd: () => AsteriskItalicEnd,
  AsteriskItalicStart: () => AsteriskItalicStart,
  Comment: () => Comment,
  Contradiction: () => Contradiction,
  Data: () => Data,
  Dedent: () => Dedent,
  EOF: () => EOF2,
  Emptyline: () => Emptyline,
  EscapedChar: () => EscapedChar,
  Freestyle: () => Freestyle,
  FrontMatter: () => FrontMatter,
  HeadingStart: () => HeadingStart,
  IArgument: () => IArgument,
  IEquivalenceClass: () => IEquivalenceClass,
  IMapEdge: () => IMapEdge,
  IRelation: () => IRelation,
  IRuleNode: () => IRuleNode,
  IncomingAttack: () => IncomingAttack,
  IncomingSupport: () => IncomingSupport,
  IncomingUndercut: () => IncomingUndercut,
  Indent: () => Indent,
  InferenceEnd: () => InferenceEnd,
  InferenceStart: () => InferenceStart,
  Link: () => Link,
  ListDelimiter: () => ListDelimiter,
  Logger: () => Logger,
  Newline: () => Newline,
  OrderedListItem: () => OrderedListItem,
  OutgoingAttack: () => OutgoingAttack,
  OutgoingSupport: () => OutgoingSupport,
  OutgoingUndercut: () => OutgoingUndercut,
  RangeType: () => RangeType,
  RelationType: () => RelationType,
  RuleNames: () => RuleNames,
  Spaces: () => Spaces,
  SpecialChar: () => SpecialChar,
  StatementDefinition: () => StatementDefinition,
  StatementMention: () => StatementMention,
  StatementNumber: () => StatementNumber,
  StatementReference: () => StatementReference,
  StatementRole: () => StatementRole,
  Tag: () => Tag,
  TokenNames: () => TokenNames,
  UnderscoreBoldEnd: () => UnderscoreBoldEnd,
  UnderscoreBoldStart: () => UnderscoreBoldStart,
  UnderscoreItalicEnd: () => UnderscoreItalicEnd,
  UnderscoreItalicStart: () => UnderscoreItalicStart,
  UnorderedListItem: () => UnorderedListItem,
  UnusedControlChar: () => UnusedControlChar,
  addLineBreaks: () => addLineBreaks,
  arrayIsEmpty: () => arrayIsEmpty,
  astToJsonString: () => astToJsonString,
  astToString: () => astToString,
  ensure: () => ensure,
  escapeAsHtmlEntities: () => escapeAsHtmlEntities,
  escapeCSSWidthOrHeight: () => escapeCSSWidthOrHeight,
  escapeHtml: () => escapeHtml,
  getHtmlId: () => getHtmlId,
  isConclusion: () => isConclusion,
  isFunction: () => isFunction,
  isGroupMapNode: () => isGroupMapNode,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isPCSStatement: () => isPCSStatement,
  isReconstructed: () => isReconstructed,
  isRuleNode: () => isRuleNode,
  isString: () => isString,
  isTokenNode: () => isTokenNode,
  mergeDefaults: () => mergeDefaults,
  normalizeLink: () => normalizeLink,
  normalizeLinkText: () => normalizeLinkText,
  objectIsEmpty: () => objectIsEmpty,
  other: () => other,
  parse: () => parse2,
  parser: () => parser,
  reduceToMap: () => reduceToMap,
  splitByCharactersInLine: () => splitByCharactersInLine,
  splitByLineWidth: () => splitByLineWidth,
  stringIsEmpty: () => stringIsEmpty,
  stringToClassName: () => stringToClassName,
  stringToHtmlId: () => stringToHtmlId,
  tokenList: () => tokenList,
  tokenLocationsToString: () => tokenLocationsToString,
  tokenMatcher: () => import_chevrotain2.tokenMatcher,
  tokenize: () => tokenize,
  tokensToString: () => tokensToString,
  validateColorString: () => validateColorString,
  validateLink: () => validateLink
});
module.exports = __toCommonJS(src_exports);

// src/lexer.ts
var chevrotain = __toESM(require("chevrotain"));
var import_lodash2 = __toESM(require("lodash.last"));
var import_lodash3 = __toESM(require("lodash.partialright"));

// src/TokenNames.ts
var TokenNames = /* @__PURE__ */ ((TokenNames2) => {
  TokenNames2["INCOMING_SUPPORT"] = "IncomingSupport";
  TokenNames2["INCOMING_ATTACK"] = "IncomingAttack";
  TokenNames2["INCOMING_UNDERCUT"] = "IncomingUndercut";
  TokenNames2["CONTRADICTION"] = "Contradiction";
  TokenNames2["OUTGOING_SUPPORT"] = "OutgoingSupport";
  TokenNames2["OUTGOING_ATTACK"] = "OutgoingAttack";
  TokenNames2["OUTGOING_UNDERCUT"] = "OutgoingUndercut";
  TokenNames2["FREESTYLE"] = "Freestyle";
  TokenNames2["UNUSED_CONTROL_CHAR"] = "UnusedControlChar";
  TokenNames2["EMPTYLINE"] = "Emptyline";
  TokenNames2["NEWLINE"] = "Newline";
  TokenNames2["INFERENCE_START"] = "InferenceStart";
  TokenNames2["INFERENCE_END"] = "InferenceEnd";
  TokenNames2["STATEMENT_DEFINITION"] = "StatementDefinition";
  TokenNames2["STATEMENT_REFERENCE"] = "StatementReference";
  TokenNames2["STATEMENT_MENTION"] = "StatementMention";
  TokenNames2["ARGUMENT_DEFINITION"] = "ArgumentDefinition";
  TokenNames2["ARGUMENT_REFERENCE"] = "ArgumentReference";
  TokenNames2["ARGUMENT_MENTION"] = "ArgumentMention";
  TokenNames2["INDENT"] = "Indent";
  TokenNames2["DEDENT"] = "Dedent";
  TokenNames2["FRONT_MATTER"] = "FrontMatter";
  TokenNames2["DATA"] = "Data";
  TokenNames2["ORDERED_LIST_ITEM"] = "OrderedListItem";
  TokenNames2["UNORDERED_LIST_ITEM"] = "UnorderedListItem";
  TokenNames2["HEADING_START"] = "HeadingStart";
  TokenNames2["LIST_DELIMITER"] = "ListDelimiter";
  TokenNames2["STATEMENT_NUMBER"] = "StatementNumber";
  TokenNames2["ASTERISK_BOLD_START"] = "AsteriskBoldStart";
  TokenNames2["ASTERISK_BOLD_END"] = "AsteriskBoldEnd";
  TokenNames2["ASTERISK_ITALIC_START"] = "AsteriskItalicStart";
  TokenNames2["ASTERISK_ITALIC_END"] = "AsteriskItalicEnd";
  TokenNames2["UNDERSCORE_BOLD_START"] = "UnderscoreBoldStart";
  TokenNames2["UNDERSCORE_BOLD_END"] = "UnderscoreBoldEnd";
  TokenNames2["UNDERSCORE_ITALIC_START"] = "UnderscoreItalicStart";
  TokenNames2["UNDERSCORE_ITALIC_END"] = "UnderscoreItalicEnd";
  TokenNames2["COMMENT"] = "Comment";
  TokenNames2["TAG"] = "Tag";
  TokenNames2["LINK"] = "Link";
  TokenNames2["ESCAPED_CHAR"] = "EscapedChar";
  TokenNames2["SPECIAL_CHAR"] = "SpecialChar";
  TokenNames2["SPACES"] = "Spaces";
  TokenNames2["EOF"] = "EOF";
  return TokenNames2;
})(TokenNames || {});

// src/model/model.ts
var ArgdownTypes = /* @__PURE__ */ ((ArgdownTypes2) => {
  ArgdownTypes2["EQUIVALENCE_CLASS"] = "equivalence-class";
  ArgdownTypes2["STATEMENT"] = "statement";
  ArgdownTypes2["STATEMENT_REFERENCE"] = "statement-reference";
  ArgdownTypes2["ARGUMENT"] = "argument";
  ArgdownTypes2["RELATION"] = "relation";
  ArgdownTypes2["INFERENCE"] = "inference";
  ArgdownTypes2["STATEMENT_MAP_NODE"] = "statement-map-node";
  ArgdownTypes2["ARGUMENT_MAP_NODE"] = "argument-map-node";
  ArgdownTypes2["GROUP_MAP_NODE"] = "group-map-node";
  ArgdownTypes2["MAP_EDGE"] = "map-edge";
  ArgdownTypes2["SECTION"] = "section";
  ArgdownTypes2["RULE_NODE"] = "rule-node";
  ArgdownTypes2["TOKEN_NODE"] = "token-node";
  return ArgdownTypes2;
})(ArgdownTypes || {});
var RelationType = /* @__PURE__ */ ((RelationType2) => {
  RelationType2["ATTACK"] = "attack";
  RelationType2["SUPPORT"] = "support";
  RelationType2["ENTAILS"] = "entails";
  RelationType2["CONTRARY"] = "contrary";
  RelationType2["CONTRADICTORY"] = "contradictory";
  RelationType2["UNDERCUT"] = "undercut";
  return RelationType2;
})(RelationType || {});
var RangeType = /* @__PURE__ */ ((RangeType2) => {
  RangeType2["BOLD"] = "bold";
  RangeType2["ITALIC"] = "italic";
  RangeType2["LINK"] = "link";
  RangeType2["TAG"] = "tag";
  RangeType2["STATEMENT_MENTION"] = "statement-mention";
  RangeType2["ARGUMENT_MENTION"] = "argument-mention";
  RangeType2["SPECIAL_CHAR"] = "special-char";
  return RangeType2;
})(RangeType || {});
var IRuleNode;
((IRuleNode3) => {
  IRuleNode3.create = (name, children) => {
    const firstChild = children[0];
    const lastChild = children[children.length - 1];
    if (!firstChild || !lastChild) {
      return {
        type: "rule-node" /* RULE_NODE */,
        name,
        children: []
      };
    }
    return {
      type: "rule-node" /* RULE_NODE */,
      name,
      startLine: firstChild.startLine,
      startColumn: firstChild.startColumn,
      endLine: lastChild.endLine,
      endColumn: lastChild.endColumn,
      children
    };
  };
})(IRuleNode || (IRuleNode = {}));
var IArgument;
((IArgument2) => {
  IArgument2.getCanonicalMember = (a) => {
    if (!a.members || a.members.length <= 0) {
      return void 0;
    }
    let defaultCanonical = void 0;
    for (let i = a.members.length - 1; i >= 0; i--) {
      const current = a.members[i];
      if (!current.isReference) {
        if (current.data && current.data.isCanonical) {
          return current;
        }
        if (!defaultCanonical) {
          defaultCanonical = current;
        }
      }
    }
    return defaultCanonical;
  };
  IArgument2.getCanonicalMemberText = (a) => {
    const s = (0, IArgument2.getCanonicalMember)(a);
    if (s) {
      return s.text;
    }
    return;
  };
})(IArgument || (IArgument = {}));
var StatementRole = /* @__PURE__ */ ((StatementRole2) => {
  StatementRole2["PREMISE"] = "premise";
  StatementRole2["INTERMEDIARY_CONCLUSION"] = "intermediary-conclusion";
  StatementRole2["MAIN_CONCLUSION"] = "main-conclusion";
  StatementRole2["ARGUMENT_DESCRIPTION"] = "argument-description";
  StatementRole2["TOP_LEVEL_STATEMENT"] = "top-level-statement";
  StatementRole2["RELATION_STATEMENT"] = "relation-statement";
  return StatementRole2;
})(StatementRole || {});
var IEquivalenceClass;
((IEquivalenceClass2) => {
  IEquivalenceClass2.create = (title) => {
    return {
      type: "equivalence-class" /* EQUIVALENCE_CLASS */,
      title,
      relations: [],
      members: []
    };
  };
  IEquivalenceClass2.getCanonicalMember = (ec) => {
    if (!ec.members || ec.members.length <= 0) {
      return void 0;
    }
    let defaultCanonical = void 0;
    for (let i = ec.members.length - 1; i >= 0; i--) {
      const current = ec.members[i];
      if (!current.isReference) {
        if (current.data && current.data.isCanonical) {
          return current;
        }
        if (!defaultCanonical) {
          defaultCanonical = current;
        }
      }
    }
    return defaultCanonical;
  };
  IEquivalenceClass2.getCanonicalMemberText = (ec) => {
    let statement = (0, IEquivalenceClass2.getCanonicalMember)(ec);
    if (statement) {
      return statement.text;
    }
    return;
  };
})(IEquivalenceClass || (IEquivalenceClass = {}));
var IRelation;
((IRelation3) => {
  IRelation3.toString = (r) => {
    return `Relation(from: ${r.from.title}, to: ${r.to.title}, relationType: ${r.relationType})`;
  };
  IRelation3.isSymmetric = (r) => {
    return r.relationType === "contrary" /* CONTRARY */ || r.relationType === "contradictory" /* CONTRADICTORY */;
  };
})(IRelation || (IRelation = {}));
var IMapEdge;
((IMapEdge2) => {
  IMapEdge2.toString = (e) => {
    return `Edge(type: ${e.type} from: ${e.from.title} to: ${e.to.title})`;
  };
})(IMapEdge || (IMapEdge = {}));
var isGroupMapNode = (n) => {
  return n.type === "group-map-node" /* GROUP_MAP_NODE */;
};
var isRuleNode = (n) => {
  return n.type === "rule-node" /* RULE_NODE */;
};
var isTokenNode = (n) => {
  return !n.type && n.tokenType != null;
};
var isReconstructed = (a) => {
  return a.pcs !== void 0 && a.pcs.length > 0;
};
var isConclusion = (s) => {
  return (s.role === "intermediary-conclusion" /* INTERMEDIARY_CONCLUSION */ || s.role === "main-conclusion" /* MAIN_CONCLUSION */) && s.inference != void 0;
};
var isPCSStatement = (s) => {
  return s.role === "premise" /* PREMISE */ || s.role === "intermediary-conclusion" /* INTERMEDIARY_CONCLUSION */ || s.role == "main-conclusion" /* MAIN_CONCLUSION */;
};

// src/utils.ts
var import_string_pixel_width = __toESM(require("string-pixel-width"));
var import_lodash = __toESM(require("lodash.clonedeep"));
var mdurl = __toESM(require("mdurl"));
var punycode = __toESM(require("punycode"));
var HTML_ESCAPE_TEST_RE = /[&<>"]/;
var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
var HTML_REPLACEMENTS = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
var replaceUnsafeChar = (ch) => {
  return HTML_REPLACEMENTS[ch];
};
var escapeHtml = (str) => {
  if (str && !stringIsEmpty(str) && HTML_ESCAPE_TEST_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
  }
  return str;
};
var CSS_WIDTH_OR_HEIGHT_RE = /^(?:\d+(?:,\d+)?[a-z%]+|auto)$/;
var escapeCSSWidthOrHeight = (str) => {
  if (CSS_WIDTH_OR_HEIGHT_RE.test(str || "")) {
    return str;
  }
  return void 0;
};
var COLOR = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
var validateColorString = (str) => {
  return COLOR.test(str);
};
var BAD_PROTO_WITHOUT_FILE_RE = /^(vbscript|javascript|data):/;
var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
var validateLink = (url, allowFile) => {
  var str = url.trim().toLowerCase();
  var proto_re = allowFile ? BAD_PROTO_WITHOUT_FILE_RE : BAD_PROTO_RE;
  return proto_re.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
};
var RECODE_HOSTNAME_FOR = ["http:", "https:", "mailto:"];
var normalizeLink = (url) => {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toASCII(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.encode(mdurl.format(parsed));
};
var normalizeLinkText = (url) => {
  var parsed = mdurl.parse(url, true);
  if (parsed.hostname) {
    if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
      try {
        parsed.hostname = punycode.toUnicode(parsed.hostname);
      } catch (er) {
      }
    }
  }
  return mdurl.decode(mdurl.format(parsed));
};
var stringToHtmlId = (str) => {
  let id = str;
  id = id.toLowerCase();
  id = id.replace(/ä/g, "ae");
  id = id.replace(/ö/g, "oe");
  id = id.replace(/ü/g, "ue");
  id = id.replace(/ß/g, "ss");
  id = id.replace(/\s/g, "-");
  id = id.replace(/[^a-z0-9\-]/g, "");
  return id;
};
var stringToClassName = (str) => stringToHtmlId(str);
var getHtmlId = (type, title, htmlIdsSet) => {
  let id = type + "-" + title;
  id = stringToHtmlId(id);
  if (htmlIdsSet) {
    let originalId = id;
    let i = 1;
    while (htmlIdsSet[id]) {
      i++;
      id = originalId + "-occurrence-" + i;
    }
  }
  return id;
};
var reduceToMap = (a, idProvider) => {
  return a.reduce((acc, curr) => {
    acc.set(idProvider(curr), curr);
    return acc;
  }, /* @__PURE__ */ new Map());
};
var tokensToString = (tokens) => {
  let str = "";
  for (let token of tokens) {
    if (token.tokenType) {
      str += token.tokenType.name + " " + token.image + "\n";
    }
  }
  return str;
};
var tokenLocationsToString = (tokens) => {
  let str = "";
  for (let token of tokens) {
    if (!token.tokenType) {
      continue;
    }
    str += token.tokenType.name + " " + token.image + "\n";
    str += "startOffset: " + token.startOffset + " endOffset: " + token.endOffset + " startLine: " + token.startLine + " endLine: " + token.endLine + " startColumn: " + token.startColumn + " endColumn: " + token.endColumn + "\n\n";
  }
  return str;
};
var astToString = (ast) => {
  return logAstRecursively(ast, "", "");
};
var astToJsonString = (ast) => {
  return JSON.stringify(ast, null, 2);
};
var logAstRecursively = (value, pre, str) => {
  if (value === void 0) {
    str += "undefined";
    return str;
  } else if (isTokenNode(value)) {
    str += value.tokenType.name;
    return str;
  } else if (isRuleNode(value)) {
    str += value.name;
    if (value.children && value.children.length > 0) {
      let nextPre = pre + " |";
      for (let child of value.children) {
        str += "\n" + nextPre + "__";
        str = logAstRecursively(child, nextPre, str);
      }
      str += "\n" + pre;
    }
  }
  return str;
};
var isNumber = (x) => {
  return x !== null && typeof x === "number";
};
var isString = (x) => {
  return x !== null && typeof x === "string";
};
var isObject = (x) => {
  return !!x && typeof x === "object" && !Array.isArray(x);
};
var isFunction = (x) => {
  return x !== null && typeof x === "function";
};
var stringIsEmpty = (x) => {
  return !isString(x) || x == "";
};
var arrayIsEmpty = (x) => {
  return !Array.isArray(x) || x.length == 0;
};
var objectIsEmpty = (x) => {
  return !isObject(x) || Object.keys(x).length == 0;
};
function splitByCharactersInLine(s, n, useSpaces, a) {
  if (!s || n <= 0)
    return [];
  a = a || [];
  if (s.length <= n) {
    a.push(s);
    return a;
  }
  var line = s.substring(0, n);
  if (!useSpaces) {
    a.push(line);
    return splitByCharactersInLine(s.substring(n), n, useSpaces, a);
  } else {
    var lastSpaceRgx = /\s(?!.*\s)/;
    var idx = line.search(lastSpaceRgx);
    var nextIdx = n;
    if (idx > 0) {
      line = line.substring(0, idx);
      nextIdx = idx;
    }
    a.push(line);
    return splitByCharactersInLine(s.substring(nextIdx), n, useSpaces, a);
  }
}
var splitByLineWidth = (str, options) => {
  if (!str) {
    return [];
  }
  const arr = [];
  const words = str.split(" ");
  let currentLineWidth = 0;
  let currentLine = "";
  let { font = "arial", fontSize = 10, bold = false, maxWidth = 0 } = options;
  const spaceWidth = (0, import_string_pixel_width.default)(" ", {
    font,
    size: fontSize,
    bold
  });
  for (let word of words) {
    const wordWidth = (0, import_string_pixel_width.default)(word, {
      font,
      size: fontSize,
      bold
    });
    if (currentLineWidth + wordWidth > maxWidth) {
      currentLineWidth = wordWidth + spaceWidth;
      arr.push(currentLine);
      currentLine = word + " ";
    } else {
      currentLineWidth += wordWidth + spaceWidth;
      currentLine += word + " ";
    }
  }
  arr.push(currentLine);
  return arr;
};
var addLineBreaks = (str, measurePixelWidth, options) => {
  if (!str) {
    return { text: "", lines: 0 };
  }
  const lineArray = measurePixelWidth ? splitByLineWidth(str, options) : splitByCharactersInLine(str, options.charactersInLine || 0, true);
  const lineBreak = options.lineBreak || "\n";
  if (options.applyRanges) {
    let start = 0;
    for (let i = 0; i < lineArray.length; i++) {
      const line = lineArray[i];
      const originalLength = line.length;
      const end = start + originalLength - 1;
      const nodes = [
        { start, end }
      ];
      for (let range of options.applyRanges) {
        if (range.start >= start && range.start <= end) {
          const nodeIndex = nodes.findIndex(
            (n) => "text" in n ? false : n.start <= range.start && n.end >= range.start
          );
          const oldTextNode = nodes[nodeIndex];
          const rangeNode = {
            text: generateOpeningTag(range)
          };
          const splitOldNode = oldTextNode.start < range.start ? true : false;
          if (splitOldNode) {
            const newTextNode = {
              start: range.start,
              end: oldTextNode.end
            };
            oldTextNode.end = range.start - 1;
            nodes.splice(nodeIndex + 1, 0, rangeNode, newTextNode);
          } else {
            nodes.splice(nodeIndex, 0, rangeNode);
          }
        }
        if (range.stop >= start && range.stop <= end) {
          const nodeIndex = nodes.findIndex(
            (n) => "text" in n ? false : n.start <= range.stop && n.end >= range.stop
          );
          const oldNode = nodes[nodeIndex];
          const rangeNode = {
            text: generateClosingTag(range)
          };
          if (oldNode.end === range.stop) {
            nodes.splice(nodeIndex + 1, 0, rangeNode);
          } else {
            const newTextNode = {
              start: range.stop + 1,
              end: oldNode.end
            };
            oldNode.end = range.stop;
            nodes.splice(nodeIndex + 1, 0, rangeNode, newTextNode);
          }
        }
      }
      lineArray[i] = nodes.map(
        (n) => "text" in n ? n.text : escapeAsHtmlEntities(
          line.substring(n.start - start, n.end + 1 - start)
        )
      ).join("");
      start += originalLength;
    }
  } else {
    if (options.escapeAsHtmlEntities) {
      for (let i = 0; i < lineArray.length; i++) {
        lineArray[i] = escapeAsHtmlEntities(lineArray[i]);
      }
    }
  }
  return { lines: lineArray.length, text: lineArray.join(lineBreak) };
};
var generateOpeningTag = (range) => {
  switch (range.type) {
    case "bold" /* BOLD */:
      return "<b>";
    case "italic" /* ITALIC */:
      return "<i>";
    default:
      return "";
  }
};
var generateClosingTag = (range) => {
  switch (range.type) {
    case "bold" /* BOLD */:
      return "</b> ";
    case "italic" /* ITALIC */:
      return "</i> ";
    default:
      return "";
  }
};
var escapeOverrides = {
  0: "\uFFFD",
  128: "\u20AC",
  130: "\u201A",
  131: "\u0192",
  132: "\u201E",
  133: "\u2026",
  134: "\u2020",
  135: "\u2021",
  136: "\u02C6",
  137: "\u2030",
  138: "\u0160",
  139: "\u2039",
  140: "\u0152",
  142: "\u017D",
  145: "\u2018",
  146: "\u2019",
  147: "\u201C",
  148: "\u201D",
  149: "\u2022",
  150: "\u2013",
  151: "\u2014",
  152: "\u02DC",
  153: "\u2122",
  154: "\u0161",
  155: "\u203A",
  156: "\u0153",
  158: "\u017E",
  159: "\u0178"
};
var escapeAsHtmlEntities = (s) => {
  return s.replace(/([\u0000-\uD799]|[\uD800-\uDBFF][\uDC00-\uFFFF])/g, (c) => {
    const c1 = c.charCodeAt(0);
    let c1s = escapeOverrides[c1];
    if (c1 <= 255)
      return c1s ? c1s : escape(c).replace(/%(..)/g, "&#x$1;");
    else if (c.length == 1)
      return "&#" + c1 + ";";
    else if (c.length == 2 && c1 >= 55296 && c1 <= 56319)
      return "&#" + ((c1 - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536) + ";";
    else
      return "";
  });
};
var mergeDefaults = (settings, defaults) => {
  for (let key of Object.keys(defaults)) {
    const incomingValue = settings[key];
    const defaultValue = defaults[key];
    const defaultValueIsObject = isObject(defaultValue);
    if (defaultValueIsObject && isFunction(defaultValue.merge)) {
      settings[key] = defaultValue.merge(incomingValue);
    } else if (incomingValue == null) {
      if (isFunction(defaultValue)) {
        settings[key] = defaultValue;
      } else if (defaultValueIsObject) {
        settings[key] = mergeDefaults({}, defaultValue);
      } else {
        settings[key] = (0, import_lodash.default)(defaultValue);
      }
    } else if (isObject(incomingValue) && defaultValueIsObject) {
      settings[key] = mergeDefaults(incomingValue, defaultValue);
    }
  }
  return settings;
};
var ensure = {
  object: (defaultValue) => {
    return {
      merge: (incoming) => {
        if (!incoming || !isObject(incoming)) {
          return mergeDefaults({}, defaultValue);
        } else {
          return mergeDefaults(incoming, defaultValue);
        }
      }
    };
  },
  string: (defaultValue) => {
    return {
      merge: (incoming) => {
        if (typeof incoming !== "string") {
          return defaultValue;
        } else {
          return incoming;
        }
      }
    };
  },
  number: (defaultValue) => {
    return {
      merge: (incoming) => {
        if (typeof incoming !== "number") {
          return defaultValue;
        } else {
          return incoming;
        }
      }
    };
  },
  boolean: (defaultValue) => {
    return {
      merge: (incoming) => {
        if (typeof incoming !== "boolean") {
          return defaultValue;
        } else {
          return incoming;
        }
      }
    };
  },
  array: (defaultValue) => {
    return {
      merge: (incoming) => {
        if (!incoming || !Array.isArray(incoming)) {
          return defaultValue;
        } else {
          return incoming;
        }
      }
    };
  }
};
var other = (r, e) => {
  return r.from === e ? r.to : r.from;
};

// src/lexer.ts
var createToken2 = chevrotain.createToken;
var createTokenInstance2 = chevrotain.createTokenInstance;
var tokenMatcher2 = chevrotain.tokenMatcher;
var indentStack = [];
var rangesStack = [];
var tokenList = [];
var init = () => {
  indentStack = [0];
  rangesStack = [];
};
var getCurrentLine = (tokens) => {
  if (arrayIsEmpty(tokens))
    return 1;
  const lastToken = (0, import_lodash2.default)(tokens);
  let currentLine = lastToken ? lastToken.endLine : 1;
  if (lastToken && (chevrotain.tokenMatcher(lastToken, Emptyline) || chevrotain.tokenMatcher(lastToken, Newline))) {
    currentLine++;
  }
  return currentLine;
};
var getCurrentEndOffset = (tokens) => {
  if (arrayIsEmpty(tokens))
    return 0;
  const lastToken = (0, import_lodash2.default)(tokens);
  return lastToken ? lastToken.endOffset : 0;
};
var lastTokenIsNewline = (lastToken) => {
  if (lastToken == void 0)
    return false;
  return tokenMatcher2(lastToken, Newline);
};
var emitRemainingDedentTokens = (matchedTokens) => {
  if (indentStack.length <= 1) {
    return;
  }
  const lastToken = (0, import_lodash2.default)(matchedTokens);
  const startOffset = getCurrentEndOffset(matchedTokens);
  const endOffset = startOffset;
  const startLine = getCurrentLine(matchedTokens);
  const endLine = startLine;
  const startColumn = lastToken && lastToken.endColumn ? lastToken.endColumn : 0;
  const endColumn = startColumn;
  while (indentStack.length > 1) {
    matchedTokens.push(
      createTokenInstance2(
        Dedent,
        "",
        startOffset,
        endOffset,
        startLine,
        endLine,
        startColumn,
        endColumn
      )
    );
    indentStack.pop();
  }
};
var emitIndentOrDedent = (matchedTokens, indentStr) => {
  const currIndentLevel = indentStr.length;
  let lastIndentLevel = (0, import_lodash2.default)(indentStack) || 0;
  const image = "";
  const startOffset = getCurrentEndOffset(matchedTokens) + 1;
  const endOffset = startOffset + indentStr.length - 1;
  const startLine = getCurrentLine(matchedTokens);
  const endLine = startLine;
  const startColumn = 1;
  const endColumn = startColumn + indentStr.length - 1;
  if (currIndentLevel > lastIndentLevel) {
    indentStack.push(currIndentLevel);
    let indentToken = createTokenInstance2(
      Indent,
      image,
      startOffset,
      endOffset,
      startLine,
      endLine,
      startColumn,
      endColumn
    );
    matchedTokens.push(indentToken);
  } else if (currIndentLevel < lastIndentLevel) {
    while (indentStack.length > 1 && currIndentLevel < lastIndentLevel) {
      indentStack.pop();
      lastIndentLevel = (0, import_lodash2.default)(indentStack) || 0;
      let dedentToken = createTokenInstance2(
        Dedent,
        image,
        startOffset,
        endOffset,
        startLine,
        endLine,
        startColumn,
        endColumn
      );
      matchedTokens.push(dedentToken);
    }
  }
};
var matchRelation = (text, offset, tokens, _groups, pattern) => {
  const remainingText = text.substr(offset || 0);
  const lastToken = (0, import_lodash2.default)(tokens);
  const afterNewline = lastTokenIsNewline(lastToken);
  const afterEmptyline = lastToken && tokenMatcher2(lastToken, Emptyline);
  if (arrayIsEmpty(tokens) || afterEmptyline || afterNewline) {
    let match = pattern.exec(remainingText);
    if (match !== null && match.length == 3) {
      const indentStr = match[1];
      emitIndentOrDedent(tokens, indentStr);
      return match;
    }
  }
  return null;
};
var matchIncomingSupport = (0, import_lodash3.default)(matchRelation, /^([' '\t]*)(\+>)/);
var matchIncomingAttack = (0, import_lodash3.default)(matchRelation, /^([' '\t]*)(->)/);
var matchOutgoingSupport = (0, import_lodash3.default)(matchRelation, /^([' '\t]*)(<?\+)/);
var matchOutgoingAttack = (0, import_lodash3.default)(matchRelation, /^([' '\t]*)(<?-)/);
var matchContradiction = (0, import_lodash3.default)(matchRelation, /^([' '\t]*)(><)/);
var matchIncomingUndercut = (0, import_lodash3.default)(matchRelation, /^([' '\t]*)(_>)/);
var matchOutgoingUndercut = (0, import_lodash3.default)(
  matchRelation,
  /^([' '\t]*)(<_|(?:_(?=\s)))/
);
var IncomingSupport = createToken2({
  name: "IncomingSupport" /* INCOMING_SUPPORT */,
  pattern: matchIncomingSupport,
  line_breaks: true,
  label: "+> (Incoming Support)",
  start_chars_hint: [" ", "	", "+"]
});
tokenList.push(IncomingSupport);
var IncomingAttack = createToken2({
  name: "IncomingAttack" /* INCOMING_ATTACK */,
  pattern: matchIncomingAttack,
  line_breaks: true,
  label: "-> (Incoming Attack)",
  start_chars_hint: [" ", "	", "-"]
});
tokenList.push(IncomingAttack);
var OutgoingSupport = createToken2({
  name: "OutgoingSupport" /* OUTGOING_SUPPORT */,
  pattern: matchOutgoingSupport,
  line_breaks: true,
  label: "<+ (Outgoing Support)",
  start_chars_hint: [" ", "	", "<"]
});
tokenList.push(OutgoingSupport);
var OutgoingAttack = createToken2({
  name: "OutgoingAttack" /* OUTGOING_ATTACK */,
  pattern: matchOutgoingAttack,
  line_breaks: true,
  label: "<- (Outgoing Attack)",
  start_chars_hint: [" ", "	", "<"]
});
tokenList.push(OutgoingAttack);
var Contradiction = createToken2({
  name: "Contradiction" /* CONTRADICTION */,
  pattern: matchContradiction,
  line_breaks: true,
  label: ">< (Contradiction)",
  start_chars_hint: [" ", "	", ">"]
});
tokenList.push(Contradiction);
var IncomingUndercut = createToken2({
  name: "IncomingUndercut" /* INCOMING_UNDERCUT */,
  pattern: matchIncomingUndercut,
  line_breaks: true,
  label: "_> (Incoming Undercut)",
  start_chars_hint: [" ", "	", "_"]
});
tokenList.push(IncomingUndercut);
var OutgoingUndercut = createToken2({
  name: "OutgoingUndercut" /* OUTGOING_UNDERCUT */,
  pattern: matchOutgoingUndercut,
  line_breaks: true,
  label: "<_ (Outgoing Undercut)",
  start_chars_hint: [" ", "	", "<"]
});
tokenList.push(OutgoingUndercut);
var inferenceStartPattern = /^[' '\t]*-{2}/;
var matchInferenceStart = (text, offset, tokens) => {
  let remainingText = text.substr(offset || 0);
  const lastToken = (0, import_lodash2.default)(tokens);
  let afterNewline = lastTokenIsNewline(lastToken);
  if (arrayIsEmpty(tokens) || afterNewline) {
    const match = inferenceStartPattern.exec(remainingText);
    if (match != null) {
      emitRemainingDedentTokens(tokens);
      return match;
    }
  }
  return null;
};
var InferenceStart = createToken2({
  name: "InferenceStart" /* INFERENCE_START */,
  pattern: matchInferenceStart,
  push_mode: "inference_mode",
  line_breaks: true,
  label: "-- (Inference Start)",
  start_chars_hint: [" ", "	", "-"]
});
tokenList.push(InferenceStart);
var FrontMatter = createToken2({
  name: "FrontMatter" /* FRONT_MATTER */,
  pattern: /===+[\s\S]*?===+/,
  label: "Front Matter (YAML)"
});
tokenList.push(FrontMatter);
var Data = createToken2({
  name: "Data" /* DATA */,
  pattern: /{((?!}\s[^\,}])(.|\n))*}(?!\s*(\,|}))/,
  label: "Meta Data (YAML)"
});
tokenList.push(Data);
var ListDelimiter = createToken2({
  name: "ListDelimiter" /* LIST_DELIMITER */,
  pattern: /,/,
  label: ","
});
tokenList.push(ListDelimiter);
var InferenceEnd = createToken2({
  name: "InferenceEnd" /* INFERENCE_END */,
  pattern: /-{2,}/,
  pop_mode: true,
  label: "-- (Inference End)"
});
tokenList.push(InferenceEnd);
var matchListItem = (text, offset, tokens, _groups, pattern) => {
  let remainingText = text.substr(offset || 0);
  let lastToken = (0, import_lodash2.default)(tokens);
  let afterNewline = lastTokenIsNewline(lastToken);
  let afterEmptyline = lastToken && tokenMatcher2(lastToken, Emptyline);
  if (arrayIsEmpty(tokens) || afterEmptyline || afterNewline) {
    let match = pattern.exec(remainingText);
    if (match !== null) {
      const indentStr = match[1] + " ";
      emitIndentOrDedent(tokens, indentStr);
      return match;
    }
  }
  return null;
};
var orderedListItemPattern = /^([' '\t]*)\d+\.(?=\s)/;
var matchOrderedListItem = (0, import_lodash3.default)(
  matchListItem,
  orderedListItemPattern
);
var OrderedListItem = createToken2({
  name: "OrderedListItem" /* ORDERED_LIST_ITEM */,
  pattern: matchOrderedListItem,
  line_breaks: true,
  label: "{Indentation}{number}. (Ordered List Item)",
  start_chars_hint: [" ", "	"]
});
tokenList.push(OrderedListItem);
var unorderedListItemPattern = /^([' '\t]*)\*(?=\s)/;
var matchUnorderedListItem = (0, import_lodash3.default)(
  matchListItem,
  unorderedListItemPattern
);
var UnorderedListItem = createToken2({
  name: "UnorderedListItem" /* UNORDERED_LIST_ITEM */,
  pattern: matchUnorderedListItem,
  line_breaks: true,
  label: "{Indentation}* (Unordered List Item)",
  start_chars_hint: [" ", "	"]
});
tokenList.push(UnorderedListItem);
var emptylinePattern = /^(?:[ \t]*(?:\r\n|\n)){2,}/;
var matchEmptyline = (text, offset, tokens) => {
  let remainingText = text.substr(offset || 0);
  let lastToken = (0, import_lodash2.default)(tokens);
  if (lastToken && tokenMatcher2(lastToken, Emptyline))
    return null;
  let match = emptylinePattern.exec(remainingText);
  if (match !== null) {
    if (match[0].length < remainingText.length) {
      emitRemainingDedentTokens(tokens);
    }
    return match;
  }
  return null;
};
var Emptyline = createToken2({
  name: "Emptyline" /* EMPTYLINE */,
  pattern: matchEmptyline,
  line_breaks: true,
  label: "{linebreak}{linebreak} (Empty Line)",
  start_chars_hint: ["\r", "\n"]
});
tokenList.push(Emptyline);
var Indent = createToken2({
  name: "Indent" /* INDENT */,
  pattern: chevrotain.Lexer.NA
});
tokenList.push(Indent);
var Dedent = createToken2({
  name: "Dedent" /* DEDENT */,
  pattern: chevrotain.Lexer.NA
});
tokenList.push(Dedent);
var StatementDefinition = createToken2({
  name: "StatementDefinition" /* STATEMENT_DEFINITION */,
  pattern: /\[.+?\]\:/,
  label: "[Statement Title]: (Statement Definition)"
});
tokenList.push(StatementDefinition);
var StatementReference = createToken2({
  name: "StatementReference" /* STATEMENT_REFERENCE */,
  pattern: /\[[^-].*?\]/,
  label: "[Statement Title] (Statement Reference)"
});
tokenList.push(StatementReference);
var StatementMention = createToken2({
  name: "StatementMention" /* STATEMENT_MENTION */,
  pattern: /\@\[.+?\][ \t]?/,
  label: "@[Statement Title] (Statement Mention)"
});
tokenList.push(StatementMention);
var statementNumberPattern = /^[' '\t]*\(\d+\)/;
var matchStatementNumber = (text, offset, tokens) => {
  let remainingText = text.substr(offset || 0);
  var lastToken = (0, import_lodash2.default)(tokens);
  let afterNewline = lastTokenIsNewline(lastToken);
  let afterEmptyline = lastToken && tokenMatcher2(lastToken, Emptyline);
  if (arrayIsEmpty(tokens) || afterEmptyline || afterNewline) {
    let match = statementNumberPattern.exec(remainingText);
    if (match !== null) {
      emitRemainingDedentTokens(tokens);
      return match;
    }
  }
  return null;
};
var StatementNumber = createToken2({
  name: "StatementNumber" /* STATEMENT_NUMBER */,
  pattern: matchStatementNumber,
  line_breaks: true,
  label: "(Number) (Statement Number)",
  start_chars_hint: [" ", "	", "("]
});
tokenList.push(StatementNumber);
var ArgumentDefinition = createToken2({
  name: "ArgumentDefinition" /* ARGUMENT_DEFINITION */,
  pattern: /\<.+?\>\:/,
  label: "<Argument Title>: (Argument Definition)"
});
tokenList.push(ArgumentDefinition);
var ArgumentReference = createToken2({
  name: "ArgumentReference" /* ARGUMENT_REFERENCE */,
  pattern: /\<[^-].*?\>/,
  label: "<Argument Title> (Argument Reference)"
});
tokenList.push(ArgumentReference);
var ArgumentMention = createToken2({
  name: "ArgumentMention" /* ARGUMENT_MENTION */,
  pattern: /\@\<.+?\>[ \t]?/,
  label: "@<Argument Title> (Argument Mention)"
});
tokenList.push(ArgumentMention);
var headingPattern = /^(#+)(?: )/;
var matchHeadingStart = (text, offset, tokens) => {
  let remainingText = text.substr(offset || 0);
  let lastToken = (0, import_lodash2.default)(tokens);
  let afterEmptyline = lastToken && (tokenMatcher2(lastToken, Emptyline) || tokenMatcher2(lastToken, Newline));
  if (!lastToken || afterEmptyline) {
    const match = headingPattern.exec(remainingText);
    if (match) {
      return match;
    }
  }
  return null;
};
var HeadingStart = createToken2({
  name: "HeadingStart" /* HEADING_START */,
  pattern: matchHeadingStart,
  label: "# (Heading Start)",
  line_breaks: false,
  start_chars_hint: ["#"]
});
tokenList.push(HeadingStart);
var matchBoldOrItalicStart = (text, offset, _tokens, _groups, pattern, rangeType) => {
  let remainingText = text.substr(offset || 0);
  let match = pattern.exec(remainingText);
  if (match != null) {
    rangesStack.push(rangeType);
    return match;
  }
  return null;
};
var matchBoldOrItalicEnd = (text, offset, tokens, groups, pattern, rangeType) => {
  let lastRange = (0, import_lodash2.default)(rangesStack);
  if (lastRange != rangeType)
    return null;
  let skipped = groups ? groups[chevrotain.Lexer.SKIPPED] : null;
  let lastSkipped = (0, import_lodash2.default)(skipped);
  let lastMatched = (0, import_lodash2.default)(tokens);
  if (!lastMatched || lastSkipped && lastSkipped.endOffset > lastMatched.endOffset) {
    return null;
  }
  let remainingText = text.substr(offset || 0);
  let match = pattern.exec(remainingText);
  if (match != null) {
    rangesStack.pop();
    return match;
  }
  return null;
};
var matchAsteriskBoldStart = (0, import_lodash3.default)(
  matchBoldOrItalicStart,
  /^\*\*(?!\s)/,
  "AsteriskBold"
);
var matchAsteriskBoldEnd = (0, import_lodash3.default)(
  matchBoldOrItalicEnd,
  /^\*\*(?:[ \t]|(?=\n|\r|\)|\}|\_|\.|,|!|\?|;|:|-|\*|$))/,
  "AsteriskBold"
);
var matchUnderscoreBoldStart = (0, import_lodash3.default)(
  matchBoldOrItalicStart,
  /^__(?!\s)/,
  "UnderscoreBold"
);
var matchUnderscoreBoldEnd = (0, import_lodash3.default)(
  matchBoldOrItalicEnd,
  /^__(?:[ \t]|(?=\n|\r|\)|\}|\_|\.|,|!|\?|;|:|-|\*|$))/,
  "UnderscoreBold"
);
var matchAsteriskItalicStart = (0, import_lodash3.default)(
  matchBoldOrItalicStart,
  /^\*(?!\s)/,
  "AsteriskItalic"
);
var matchAsteriskItalicEnd = (0, import_lodash3.default)(
  matchBoldOrItalicEnd,
  /^\*(?:[ \t]|(?=\n|\r|\)|\}|\_|\.|,|!|\?|;|:|-|\*|$))/,
  "AsteriskItalic"
);
var matchUnderscoreItalicStart = (0, import_lodash3.default)(
  matchBoldOrItalicStart,
  /^\_(?!\s)/,
  "UnderscoreItalic"
);
var matchUnderscoreItalicEnd = (0, import_lodash3.default)(
  matchBoldOrItalicEnd,
  /^\_(?:[ \t]|(?=\n|\r|\)|\}|\_|\.|,|!|\?|;|:|-|\*|$))/,
  "UnderscoreItalic"
);
var AsteriskBoldStart = createToken2({
  name: "AsteriskBoldStart" /* ASTERISK_BOLD_START */,
  pattern: matchAsteriskBoldStart,
  label: "** (Bold Start)",
  line_breaks: false,
  start_chars_hint: ["*"]
});
tokenList.push(AsteriskBoldStart);
var AsteriskBoldEnd = createToken2({
  name: "AsteriskBoldEnd" /* ASTERISK_BOLD_END */,
  pattern: matchAsteriskBoldEnd,
  label: "** (Bold End)",
  line_breaks: false,
  start_chars_hint: ["*"]
});
tokenList.push(AsteriskBoldEnd);
var UnderscoreBoldStart = createToken2({
  name: "UnderscoreBoldStart" /* UNDERSCORE_BOLD_START */,
  pattern: matchUnderscoreBoldStart,
  label: "__ (Bold Start)",
  line_breaks: false,
  start_chars_hint: ["_"]
});
tokenList.push(UnderscoreBoldStart);
var UnderscoreBoldEnd = createToken2({
  name: "UnderscoreBoldEnd" /* UNDERSCORE_BOLD_END */,
  pattern: matchUnderscoreBoldEnd,
  label: "__ (Bold End)",
  line_breaks: false,
  start_chars_hint: ["_"]
});
tokenList.push(UnderscoreBoldEnd);
var AsteriskItalicStart = createToken2({
  name: "AsteriskItalicStart" /* ASTERISK_ITALIC_START */,
  pattern: matchAsteriskItalicStart,
  label: "* (Italic Start)",
  line_breaks: false,
  start_chars_hint: ["*"]
});
tokenList.push(AsteriskItalicStart);
var AsteriskItalicEnd = createToken2({
  name: "AsteriskItalicEnd" /* ASTERISK_ITALIC_END */,
  pattern: matchAsteriskItalicEnd,
  label: "* (Italic End)",
  line_breaks: false,
  start_chars_hint: ["*"]
});
tokenList.push(AsteriskItalicEnd);
var UnderscoreItalicStart = createToken2({
  name: "UnderscoreItalicStart" /* UNDERSCORE_ITALIC_START */,
  pattern: matchUnderscoreItalicStart,
  label: "_ (Italic Start)",
  line_breaks: false,
  start_chars_hint: ["_"]
});
tokenList.push(UnderscoreItalicStart);
var UnderscoreItalicEnd = createToken2({
  name: "UnderscoreItalicEnd" /* UNDERSCORE_ITALIC_END */,
  pattern: matchUnderscoreItalicEnd,
  label: "_ (Italic End)",
  line_breaks: false,
  start_chars_hint: ["_"]
});
tokenList.push(UnderscoreItalicEnd);
var commentPattern = /(?:<!--(?:.|\n|\r)*?-->)|(?:\/\*(?:.|\n|\r)*?\*\/)|(?:\/\/.*?(?=\r\n|\n|\r))/y;
var commentWithTrailingLinebreaksPattern = /(?:(?:<!--(?:.|\n|\r)*?-->)|(?:\/\*(?:.|\n|\r)*?\*\/)|(?:\/\/.*?(?=\r\n|\n|\r)))(?:[ \t]*\r\n|\n|\r)*/y;
var commentWithOneTrailingLinebreakPattern = /(?:(?:<!--(?:.|\n|\r)*?-->)|(?:\/\*(?:.|\n|\r)*?\*\/)|(?:\/\/.*?(?=\r\n|\n|\r)))(?:[ \t]*(?:\r\n|\n|\r)(?!([ \t]*(\r\n|\n|\r))))?/y;
var matchComment = (text, offset, tokens) => {
  let lastToken = (0, import_lodash2.default)(tokens);
  if (lastToken && tokenMatcher2(lastToken, Emptyline)) {
    commentWithTrailingLinebreaksPattern.lastIndex = offset || 0;
    return commentWithTrailingLinebreaksPattern.exec(text);
  } else if (lastToken && tokenMatcher2(lastToken, Newline)) {
    commentWithOneTrailingLinebreakPattern.lastIndex = offset || 0;
    return commentWithOneTrailingLinebreakPattern.exec(text);
  } else {
    commentPattern.lastIndex = offset || 0;
    return commentPattern.exec(text);
  }
};
var Comment = createToken2({
  name: "Comment" /* COMMENT */,
  pattern: matchComment,
  group: chevrotain.Lexer.SKIPPED,
  start_chars_hint: ["/", "<"],
  label: "// or /**/ or <!-- --> (Comment)",
  line_breaks: true
});
tokenList.push(Comment);
var Link = createToken2({
  name: "Link" /* LINK */,
  pattern: /\[[^\]]+?\]\([^\)]+?\)[ \t]?/,
  label: "[Title](Url) (Link)"
});
tokenList.push(Link);
var Tag = createToken2({
  name: "Tag" /* TAG */,
  pattern: /#(?:\([^\)]+\)|[a-zA-z0-9-\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)[ \t]?/,
  label: "#tag-text or #(tag text) (Tag)"
});
tokenList.push(Tag);
var Newline = createToken2({
  name: "Newline" /* NEWLINE */,
  pattern: /[ \t]*(?:\r\n|\n|\r)/,
  line_breaks: true,
  label: "{linebreak} (New Line)"
});
tokenList.push(Newline);
var Spaces = createToken2({
  name: "Spaces" /* SPACES */,
  pattern: /( |\t)+/,
  group: chevrotain.Lexer.SKIPPED
});
tokenList.push(Spaces);
var EscapedChar = createToken2({
  name: "EscapedChar" /* ESCAPED_CHAR */,
  pattern: /\\.(?: )*/,
  label: "\\{character} (Escaped Character)"
});
tokenList.push(EscapedChar);
var SpecialChar = createToken2({
  name: "SpecialChar" /* SPECIAL_CHAR */,
  pattern: /(?:\.[^\s]+?\.[ \t]?)|(?:\:[^\s]+?\:[ \t]?)/,
  label: ".{name}. or :{name}: (Special Character)"
});
tokenList.push(SpecialChar);
var Freestyle = createToken2({
  name: "Freestyle" /* FREESTYLE */,
  pattern: /[^\\\@\#\*\_\[\]\,\.\:\;\<\/\>\-\r\n\(\)\{\}]+/,
  line_breaks: true,
  label: "Text Content"
});
tokenList.push(Freestyle);
var UnusedControlChar = createToken2({
  name: "UnusedControlChar" /* UNUSED_CONTROL_CHAR */,
  pattern: /[\@\#\*\_\[\]\,\.\:\;\<\/\>\-\(\)\{\}][ \t]?/,
  label: "Text Content (Control Characters)"
});
tokenList.push(UnusedControlChar);
var EOF2 = chevrotain.EOF;
var lexerConfig = {
  modes: {
    default_mode: [
      Comment,
      // must come first
      FrontMatter,
      Data,
      EscapedChar,
      //must come first after $.Comment
      SpecialChar,
      Emptyline,
      Newline,
      // Relation tokens must appear before Spaces, otherwise all indentation will always be consumed as spaces.
      // Dedent must appear before Indent for handling zero spaces dedents.
      Dedent,
      Indent,
      InferenceStart,
      //needs to be lexed before OutgoingAttack (- vs --)
      IncomingSupport,
      IncomingAttack,
      OutgoingSupport,
      OutgoingAttack,
      Contradiction,
      IncomingUndercut,
      OutgoingUndercut,
      HeadingStart,
      //$.ArgumentStatementStart,
      StatementNumber,
      OrderedListItem,
      UnorderedListItem,
      //The ends of Bold and italic ranges need to be lexed before the starts
      AsteriskBoldEnd,
      //BoldEnd needs to be lexed before ItalicEnd (** vs *)
      UnderscoreBoldEnd,
      //BoldEnd needs to be lexed before ItalicEnd (__ vs _)
      AsteriskItalicEnd,
      UnderscoreItalicEnd,
      //The starts of Bold and italic ranges need to be lexed after the ends
      AsteriskBoldStart,
      //BoldStart needs to be lexed before ItalicStart (** vs *)
      UnderscoreBoldStart,
      //BoldStart needs to be lexed before ItalicStart (__ vs _)
      AsteriskItalicStart,
      UnderscoreItalicStart,
      Link,
      //needs to be lexed before StatementReference
      Tag,
      // $.StatementDefinitionByNumber, // needs to be lexed before ArgumentReference
      // $.StatementReferenceByNumber, // needs to be lexed before ArgumentReference
      // $.StatementMentionByNumber, // needs to be lexed before ArgumentReference
      StatementDefinition,
      StatementReference,
      StatementMention,
      ArgumentDefinition,
      ArgumentReference,
      ArgumentMention,
      Spaces,
      Freestyle,
      UnusedControlChar
    ],
    inference_mode: [
      Comment,
      Newline,
      EscapedChar,
      SpecialChar,
      InferenceEnd,
      Data,
      ListDelimiter,
      Spaces,
      Freestyle,
      UnusedControlChar
    ]
  },
  defaultMode: "default_mode"
};
var lexer = new chevrotain.Lexer(lexerConfig);
var tokenize = (text) => {
  init();
  let lexResult = lexer.tokenize(text);
  if (lexResult.errors && lexResult.errors.length > 0) {
    throw new Error("sad sad panda lexing errors detected");
  }
  const lastToken = (0, import_lodash2.default)(lexResult.tokens);
  if (lastToken && tokenMatcher2(lastToken, Emptyline)) {
    lexResult.tokens.pop();
  }
  emitRemainingDedentTokens(lexResult.tokens);
  return lexResult;
};

// src/parser.ts
var import_chevrotain = require("chevrotain");

// src/ArgdownErrorMessageProvider.ts
var chevrotain2 = __toESM(require("chevrotain"));
var defaultParserErrorProvider2 = chevrotain2.defaultParserErrorProvider;
var tokenMatcher4 = chevrotain2.tokenMatcher;
var MISSING_TEXT_CONTENT_ERROR = `Missing text content. Please add a line of text or refer to an existing statement or argument instead by replacing the content in this line with [Statement Title] or <Argument Title> (without a colon). If you want to define a statement ([Statement Title]:) or argument (<Argument Title>:), the defining text content has to follow the defined element title without any empty lines in between.`;
var INVALID_INFERENCE_ERROR = `Invalid inference. Inferences can either be marked by four hyphens (----) or have the following format: 
--Inference Rule 1, Inference Rule 2 (my meta data property 1: 1, 2, 3; my meta data property 2: value) --`;
var INVALID_RELATION_ERROR = `Invalid relation syntax. This may either be caused by a) an invalid relation parent or b) invalid indentation. a) Invalid relation parent: Only statements and arguments can have relations as child elements. b) Invalid Indentation tree: Please check that if there are preceding relations in this paragraph, there is at least one with equal or less indentation.`;
var INVALID_INDENTATION_ERROR = `Invalid indentation.`;
var MISSING_RELATION_CONTENT_ERROR = `Missing relation content. Please define or refer to a statement or argument (you can define a statement by simply adding a line of text).`;
var MISSING_INFERENCE_END_ERROR = `Invalid inference syntax. Please end your inference with two hyphens (--)`;
var INVALID_INFERENCE_POSITION_ERROR = `Invalid inference position. An inference may only occur within a premise-conclusion-structure, in which it is preceded by a premise and followed by a conclusion (both of which have to be numbered statements: '(1) Statement').`;
var MISSING_INFERENCE_ERROR = `Missing inference. Use four hyphens (----) between two numbered statements to insert an inference in your premise-conclusion-structure and mark the latter statement as a conclusion.`;
var MISSING_CONCLUSION_ERROR = `Missing conclusion. Please add a numbered statement after the inference.`;
var INVALID_PCS_POSITION_ERROR = `Invalid position of premise conclusion structure (pcs). Make sure the pcs is preceded by an empty line.`;
var INVALID_PCS_STATEMENT_CONTENT_ERROR = `Invalid statement content. An argument reference (<Argument Title>) or definition (<Argument Title>:) can not be used as premise or conclusion within a premise-conclusion-structure. Use statement references ([Statement Title]) or definitions ([Statement Title]:) instead.`;
var INCOMPLETE_PCS_ERROR = `Incomplete premise-conclusion-structure (pcs). A pcs has to consist of at least one premise (a numbered statement: '(1) Statement Text'), one inference (marked by four hyphens ----) and one conclusion (a numbered statement after an inference). There may no be any empty lines between these elements.`;
var INVALID_TEXT_POSITION_ERROR = `Invalid position of text content. Make sure it is not preceded by a statement reference ([Statement Title]) or argument reference (<Argument Title>).`;
var buildMissingEndError = (tokenType) => {
  let tokenDesc = "TOKEN DESCRIPTION MISSING";
  let ruleDesc = "RULE DESCRIPTION MISSING";
  let escapedChar = "ESCAPED CHAR MISSING";
  switch (tokenType.tokenTypeIdx) {
    case UnderscoreBoldEnd.tokenTypeIdx:
      tokenDesc = "two underscores (__)";
      ruleDesc = "bold text range";
      escapedChar = "_";
      break;
    case AsteriskBoldEnd.tokenTypeIdx:
      tokenDesc = "two asterisks (**)";
      ruleDesc = "bold text range";
      escapedChar = "*";
      break;
    case UnderscoreItalicEnd.tokenTypeIdx:
      tokenDesc = "an underscore (_)";
      ruleDesc = "italic text range";
      escapedChar = "_";
      break;
    case AsteriskItalicEnd.tokenTypeIdx:
      tokenDesc = "an asterisk (*)";
      ruleDesc = "italic text range";
      escapedChar = "*";
      break;
  }
  return `Incomplete ${ruleDesc}. Append ${tokenDesc} to complete the range. If you want to use this character for other purposes, use ${escapedChar} (you can use  to escape any character in Argdown).`;
};
var buildInvalidElementPositionError = (token) => {
  const tokenDescription = getTokenDescription(token, true);
  return `Invalid element position. ${tokenDescription} may only occur at the beginning of a line or after a relation symbol.`;
};
var buildInvalidParagraphStartError = (token) => {
  const tokenDescription = getTokenDescription(token);
  return `Invalid paragraph start. Argdown paragraphs may not start with ${tokenDescription}. If you do not want to start a new paragraph, remove any empty lines above this one. If you do want to start a new paragraph, try starting with normal text, a statement title, argument title or a list item (using * for unordered or 1. for ordered lists).`;
};
var buildInvalidRelationTextContentError = (token) => {
  if (tokenMatcher4(token, ArgumentReference)) {
    return "Invalid relation text content. An argument reference (<Argument Title>) may not be preceded or followed by other content. If you want to start a new paragraph, insert an empty line before the reference. If you want to mention a statement or argument, without directly using it, use @[Statement Title] or @<Argument Title>.";
  } else if (tokenMatcher4(token, ArgumentDefinition)) {
    return "Invalid relation text content. An argument definition (<Argument Title>:) may not be preceded by other content. If you want to start a new paragraph, insert an empty line before the definition. If you want to mention a statement or argument, without directly using it, use @[Statement Title] or @<Argument Title>.";
  } else if (tokenMatcher4(token, StatementReference)) {
    return "Invalid relation text content. A statement reference ([Statement Title]) may not be preceded or followed by other content.  If you want to start a new paragraph, insert an empty line before the reference. If you want to mention a statement or argument, without directly using it, use @[Statement Title] or @<Argument Title>.";
  } else if (tokenMatcher4(token, StatementDefinition)) {
    return "Invalid relation text content. A statement definition ([Statement Title]:) may not be preceded by other content.  If you want to start a new paragraph, insert an empty line before the definition. If you want to mention a statement or argument, without directly using it, use @[Statement Title] or @<Argument Title>.";
  } else {
    return "Invalid relation text content. Check that the content is not preceded by a statement reference ([Statement Title]) or argument reference (<Argument Title>). If you want to mention a statement or argument, without directly using it, use @[Statement Title] or @<Argument Title>.";
  }
};
var capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var getTokenDescription = (token, capitalize = false) => {
  let description = "MISSING DESCRIPTION";
  if (tokenMatcher4(token, OutgoingSupport)) {
    description = "an outgoing support relation (+ or <+)";
  } else if (tokenMatcher4(token, IncomingSupport)) {
    description = "an incoming support relation (+>)";
  } else if (tokenMatcher4(token, OutgoingAttack)) {
    description = "an outgoing attack relation (- or <-)";
  } else if (tokenMatcher4(token, IncomingAttack)) {
    description = "an incoming attack relation (->)";
  } else if (tokenMatcher4(token, Contradiction)) {
    description = "a contradictory relation (><)";
  } else if (tokenMatcher4(token, IncomingUndercut)) {
    description = "an incoming undercut relation (_>)";
  } else if (tokenMatcher4(token, OutgoingUndercut)) {
    description = "an incoming undercut relation (<_)";
  } else if (tokenMatcher4(token, ArgumentDefinition)) {
    description = "an argument definition (<Argument Title>:)";
  } else if (tokenMatcher4(token, ArgumentReference)) {
    description = "an argument reference (<Argument Title>)";
  } else if (tokenMatcher4(token, StatementDefinition)) {
    description = "a statement definition ([Statement Title]:)";
  } else if (tokenMatcher4(token, StatementReference)) {
    description = "a statement reference ([Statement Title])";
  }
  if (capitalize) {
    description = capitalizeFirstLetter(description);
  }
  return description;
};
var isRelationToken = (token) => {
  return tokenMatcher4(token, IncomingSupport) || tokenMatcher4(token, OutgoingSupport) || tokenMatcher4(token, IncomingAttack) || tokenMatcher4(token, OutgoingAttack) || tokenMatcher4(token, IncomingUndercut) || tokenMatcher4(token, OutgoingUndercut) || tokenMatcher4(token, Contradiction);
};
var isRelationRule = (ruleName) => {
  return ruleName.endsWith("Support") || ruleName.endsWith("Attack") || ruleName.endsWith("Undercut") || ruleName == "Contradiction";
};
var errorMessageProvider = {
  isRelationToken,
  isRelationRule,
  getTokenDescription,
  buildInvalidElementPositionError,
  buildInvalidParagraphStartError,
  buildInvalidRelationTextContentError,
  buildMismatchTokenMessage: (options) => {
    if (options.ruleName == "inference") {
      if (options.expected == InferenceStart) {
        return MISSING_INFERENCE_ERROR;
      } else if (options.expected == InferenceEnd) {
        return MISSING_INFERENCE_END_ERROR;
      }
    } else if (options.expected == Dedent && (options.ruleName == "statementRelations" || options.ruleName == "argumentRelations")) {
      return buildInvalidRelationTextContentError(options.actual);
    } else if (options.ruleName == "argumentStatement") {
      if (options.expected == StatementNumber) {
        return MISSING_CONCLUSION_ERROR;
      }
    } else if (options.ruleName == "bold" || options.ruleName == "italic") {
      return buildMissingEndError(options.expected);
    }
    return defaultParserErrorProvider2.buildMismatchTokenMessage(options);
  },
  buildNotAllInputParsedMessage: (options) => {
    if (tokenMatcher4(options.firstRedundant, Indent) || isRelationToken(options.firstRedundant)) {
      return INVALID_RELATION_ERROR;
    } else if (tokenMatcher4(options.firstRedundant, InferenceStart)) {
      return INVALID_INFERENCE_POSITION_ERROR;
    } else if (tokenMatcher4(options.firstRedundant, StatementNumber)) {
      return INVALID_PCS_POSITION_ERROR;
    } else if (tokenMatcher4(options.firstRedundant, ArgumentReference)) {
      return buildInvalidElementPositionError(options.firstRedundant);
    } else if (tokenMatcher4(
      options.firstRedundant,
      ArgumentDefinition
    )) {
      return buildInvalidElementPositionError(options.firstRedundant);
    } else if (tokenMatcher4(
      options.firstRedundant,
      StatementReference
    )) {
      return buildInvalidElementPositionError(options.firstRedundant);
    } else if (tokenMatcher4(
      options.firstRedundant,
      StatementDefinition
    )) {
      return buildInvalidElementPositionError(options.firstRedundant);
    } else if (tokenMatcher4(options.firstRedundant, Freestyle)) {
      return INVALID_TEXT_POSITION_ERROR;
    } else {
      return defaultParserErrorProvider2.buildNotAllInputParsedMessage(
        options
      );
    }
  },
  buildNoViableAltMessage: (options) => {
    const tokens = options.actual;
    if (options.ruleName == "argdown" && tokens.length > 0) {
      if (tokens.length >= 2 && tokenMatcher4(tokens[0], Indent)) {
        let secondToken = tokens[1];
        return buildInvalidParagraphStartError(secondToken);
      } else if (tokens.length > 0) {
        return buildInvalidParagraphStartError(tokens[0]);
      }
    } else if (isRelationRule(options.ruleName)) {
      return MISSING_RELATION_CONTENT_ERROR;
    } else if (options.ruleName == "statement") {
      if (tokens.length > 0 && (tokenMatcher4(tokens[0], ArgumentReference) || tokenMatcher4(tokens[0], ArgumentDefinition))) {
        return INVALID_PCS_STATEMENT_CONTENT_ERROR;
      }
      return MISSING_TEXT_CONTENT_ERROR;
    }
    return defaultParserErrorProvider2.buildNoViableAltMessage(options);
  },
  buildEarlyExitMessage: (options) => {
    var firstToken = options.actual.length > 0 ? options.actual[0] : null;
    if (options.ruleName == "argdown") {
      if (firstToken && isRelationToken(firstToken)) {
        return INVALID_RELATION_ERROR;
      } else if (firstToken && tokenMatcher4(firstToken, InferenceStart)) {
        return INVALID_INFERENCE_POSITION_ERROR;
      }
    } else if (options.ruleName == "statementContent") {
      return MISSING_TEXT_CONTENT_ERROR;
    } else if (options.ruleName == "pcs") {
      if (firstToken && isRelationToken(firstToken)) {
        return INVALID_INDENTATION_ERROR;
      }
      return INCOMPLETE_PCS_ERROR;
    } else if (options.ruleName == "data") {
      return INVALID_INFERENCE_ERROR;
    } else if (firstToken && tokenMatcher4(firstToken, InferenceEnd)) {
      return INVALID_INFERENCE_ERROR;
    }
    return defaultParserErrorProvider2.buildEarlyExitMessage(options);
  }
};

// src/RuleNames.ts
var RuleNames = /* @__PURE__ */ ((RuleNames2) => {
  RuleNames2["ARGDOWN"] = "argdown";
  RuleNames2["HEADING"] = "heading";
  RuleNames2["PCS"] = "pcs";
  RuleNames2["PCS_TAIL"] = "pcsTail";
  RuleNames2["PCS_STATEMENT"] = "pcsStatement";
  RuleNames2["INFERENCE"] = "inference";
  RuleNames2["INFERENCE_RULES"] = "inferenceRules";
  RuleNames2["ORDERED_LIST"] = "orderedList";
  RuleNames2["UNORDERED_LIST"] = "unorderedList";
  RuleNames2["ORDERED_LIST_ITEM"] = "orderedListItem";
  RuleNames2["UNORDERED_LIST_ITEM"] = "unorderedListItem";
  RuleNames2["ARGUMENT"] = "argument";
  RuleNames2["STATEMENT_REFERENCE"] = "statementReference";
  RuleNames2["STATEMENT"] = "statement";
  RuleNames2["STATEMENT_CONTENT"] = "statementContent";
  RuleNames2["STATEMENT_DEFINITION"] = "statementDefinition";
  RuleNames2["RELATIONS"] = "relations";
  RuleNames2["INCOMING_ATTACK"] = "incomingAttack";
  RuleNames2["INCOMING_SUPPORT"] = "incomingSupport";
  RuleNames2["INCOMING_UNDERCUT"] = "incomingUndercut";
  RuleNames2["CONTRADICTION"] = "contradiction";
  RuleNames2["OUTGOING_ATTACK"] = "outgoingAttack";
  RuleNames2["OUTGOING_SUPPORT"] = "outgoingSupport";
  RuleNames2["OUTGOING_UNDERCUT"] = "outgoingUndercut";
  RuleNames2["BOLD"] = "bold";
  RuleNames2["ITALIC"] = "italic";
  RuleNames2["FREESTYLE_TEXT"] = "freestyleText";
  return RuleNames2;
})(RuleNames || {});

// src/parser.ts
var ArgdownParser = class extends import_chevrotain.EmbeddedActionsParser {
  constructor() {
    super(tokenList, {
      errorMessageProvider,
      recoveryEnabled: true
    });
    this.argdown = this.RULE("argdown" /* ARGDOWN */, () => {
      const children = [];
      this.OPTION1(() => {
        this.CONSUME1(Newline);
      });
      this.OPTION2(() => {
        this.CONSUME1(Emptyline);
      });
      this.OPTION3(() => {
        children.push(this.CONSUME2(FrontMatter));
        this.OPTION4(() => {
          this.CONSUME2(Newline);
        });
        children.push(this.CONSUME2(Emptyline));
      });
      const atLeastOne = [];
      this.AT_LEAST_ONE_SEP({
        SEP: Emptyline,
        DEF: () => {
          atLeastOne.push(
            this.OR2(
              this.c1 || (this.c1 = [
                {
                  ALT: () => this.SUBRULE(this.heading)
                },
                {
                  ALT: () => this.SUBRULE(this.statement)
                },
                {
                  ALT: () => this.SUBRULE(this.pcs)
                },
                {
                  ALT: () => this.SUBRULE(this.argument)
                },
                {
                  ALT: () => this.SUBRULE(this.orderedList)
                },
                {
                  ALT: () => this.SUBRULE(this.unorderedList)
                }
              ])
            )
          );
        }
      });
      children.push(...atLeastOne);
      return IRuleNode.create("argdown" /* ARGDOWN */, children);
    });
    this.heading = this.RULE("heading" /* HEADING */, () => {
      let children = [];
      children.push(this.CONSUME1(HeadingStart));
      this.AT_LEAST_ONE({
        DEF: () => children.push(this.SUBRULE(this.statementContent))
      });
      this.OPTION1(() => {
        this.OPTION2(() => {
          children.push(this.CONSUME2(Newline));
        });
        children.push(this.CONSUME3(Data));
        this.OPTION3(() => {
          children.push(this.CONSUME4(Newline));
        });
      });
      return IRuleNode.create("heading" /* HEADING */, children);
    });
    this.pcs = this.RULE("pcs" /* PCS */, () => {
      let children = [];
      children.push(this.SUBRULE1(this.pcsStatement));
      this.AT_LEAST_ONE({
        DEF: () => {
          children.push(this.SUBRULE2(this.pcsTail));
        }
      });
      return IRuleNode.create("pcs" /* PCS */, children);
    });
    this.pcsTail = this.RULE("pcsTail" /* PCS_TAIL */, () => {
      let children = [];
      this.MANY({
        DEF: () => {
          children.push(this.SUBRULE1(this.pcsStatement));
        }
      });
      children.push(this.SUBRULE2(this.inference));
      children.push(this.SUBRULE3(this.pcsStatement));
      return IRuleNode.create("pcsTail" /* PCS_TAIL */, children);
    });
    this.pcsStatement = this.RULE("pcsStatement" /* PCS_STATEMENT */, () => {
      let children = [];
      children.push(this.CONSUME(StatementNumber));
      children.push(this.SUBRULE(this.statement));
      return IRuleNode.create("pcsStatement" /* PCS_STATEMENT */, children);
    });
    this.inference = this.RULE("inference" /* INFERENCE */, () => {
      let children = [];
      children.push(this.CONSUME1(InferenceStart));
      this.OPTION1(() => {
        this.OPTION2(() => {
          children.push(this.CONSUME1(Newline));
        });
        children.push(this.SUBRULE1(this.inferenceRules));
      });
      this.OPTION3(() => {
        children.push(this.CONSUME2(Newline));
      });
      this.OPTION4(() => {
        children.push(this.CONSUME3(Data));
        this.OPTION5(() => {
          children.push(this.CONSUME3(Newline));
        });
      });
      children.push(this.CONSUME3(InferenceEnd));
      children.push(this.CONSUME4(Newline));
      this.OPTION6(() => {
        children.push(this.SUBRULE4(this.inferenceRelations));
      });
      return IRuleNode.create("inference" /* INFERENCE */, children);
    });
    this.inferenceRules = this.RULE(
      "inferenceRules" /* INFERENCE_RULES */,
      () => {
        let children = [];
        this.AT_LEAST_ONE_SEP1({
          SEP: ListDelimiter,
          DEF: () => children.push(this.SUBRULE(this.freestyleText))
        });
        return IRuleNode.create("inferenceRules" /* INFERENCE_RULES */, children);
      }
    );
    this.orderedList = this.RULE("orderedList" /* ORDERED_LIST */, () => {
      let children = [];
      children.push(this.CONSUME(Indent));
      this.AT_LEAST_ONE(() => children.push(this.SUBRULE(this.orderedListItem)));
      this.CONSUME(Dedent);
      return IRuleNode.create("orderedList" /* ORDERED_LIST */, children);
    });
    this.unorderedList = this.RULE("unorderedList" /* UNORDERED_LIST */, () => {
      let children = [];
      children.push(this.CONSUME(Indent));
      this.AT_LEAST_ONE(
        () => children.push(this.SUBRULE(this.unorderedListItem))
      );
      this.CONSUME(Dedent);
      return IRuleNode.create("unorderedList" /* UNORDERED_LIST */, children);
    });
    this.unorderedListItem = this.RULE("unorderedListItem" /* UNORDERED_LIST_ITEM */, () => {
      let children = [];
      children.push(this.CONSUME(UnorderedListItem));
      this.OR({
        DEF: [
          { ALT: () => children.push(this.SUBRULE(this.statement)) },
          { ALT: () => children.push(this.SUBRULE(this.argument)) }
        ]
      });
      return IRuleNode.create("unorderedListItem" /* UNORDERED_LIST_ITEM */, children);
    });
    this.orderedListItem = this.RULE("orderedListItem" /* ORDERED_LIST_ITEM */, () => {
      let children = [];
      children.push(this.CONSUME(OrderedListItem));
      this.OR({
        DEF: [
          { ALT: () => children.push(this.SUBRULE(this.statement)) },
          { ALT: () => children.push(this.SUBRULE(this.argument)) }
        ]
      });
      return IRuleNode.create("orderedListItem" /* ORDERED_LIST_ITEM */, children);
    });
    this.argument = this.RULE("argument" /* ARGUMENT */, () => {
      let children = [];
      this.OR([
        {
          ALT: () => {
            children.push(this.CONSUME1(ArgumentDefinition));
            children.push(this.SUBRULE2(this.statementContent));
          }
        },
        {
          ALT: () => {
            children.push(this.CONSUME1(ArgumentReference));
            this.MANY(() => {
              children.push(this.CONSUME2(Tag));
            });
            this.OPTION1(() => {
              children.push(this.CONSUME1(Newline));
            });
          }
        }
      ]);
      this.OPTION2(() => {
        children.push(this.CONSUME4(Data));
        this.OPTION3(() => {
          children.push(this.CONSUME2(Newline));
        });
      });
      this.OPTION4(() => {
        children.push(this.SUBRULE(this.relations));
      });
      return IRuleNode.create("argument" /* ARGUMENT */, children);
    });
    this.statement = this.RULE("statement" /* STATEMENT */, () => {
      let children = [];
      this.OR([
        {
          ALT: () => {
            children.push(this.SUBRULE1(this.statementContent));
          }
        },
        {
          ALT: () => {
            children.push(this.CONSUME1(StatementReference));
            this.MANY(() => {
              children.push(this.CONSUME2(Tag));
            });
            this.OPTION1(() => {
              children.push(this.CONSUME1(Newline));
            });
          }
        },
        {
          ALT: () => {
            let defChildren = [];
            defChildren.push(this.CONSUME3(StatementDefinition));
            defChildren.push(this.SUBRULE4(this.statementContent));
            children.push(
              IRuleNode.create("statementDefinition" /* STATEMENT_DEFINITION */, defChildren)
            );
          }
        }
      ]);
      this.OPTION2(() => {
        children.push(this.CONSUME4(Data));
        this.OPTION3(() => {
          children.push(this.CONSUME2(Newline));
        });
      });
      this.OPTION4(() => {
        children.push(this.SUBRULE(this.relations));
      });
      return IRuleNode.create("statement" /* STATEMENT */, children);
    });
    this.inferenceRelations = this.RULE("inferenceRelations", () => {
      let children = [];
      children.push(this.CONSUME(Indent));
      this.AT_LEAST_ONE(() => {
        children.push(this.SUBRULE(this.outgoingUndercut));
      });
      this.CONSUME(Dedent);
      return IRuleNode.create("relations" /* RELATIONS */, children);
    });
    this.relations = this.RULE("relations" /* RELATIONS */, () => {
      let children = [];
      children.push(this.CONSUME(Indent));
      this.AT_LEAST_ONE(() => {
        children.push(
          this.OR(
            this.c2 || (this.c2 = [
              {
                ALT: () => this.SUBRULE(this.incomingSupport)
              },
              {
                ALT: () => this.SUBRULE(this.incomingAttack)
              },
              {
                ALT: () => this.SUBRULE(this.outgoingSupport)
              },
              {
                ALT: () => this.SUBRULE(this.outgoingAttack)
              },
              {
                ALT: () => this.SUBRULE(this.contradiction)
              },
              {
                ALT: () => this.SUBRULE(this.incomingUndercut)
              },
              {
                ALT: () => this.SUBRULE(this.outgoingUndercut)
              }
            ])
          )
        );
      });
      this.CONSUME(Dedent);
      return IRuleNode.create("relations" /* RELATIONS */, children);
    });
    this.incomingSupport = this.RULE("incomingSupport" /* INCOMING_SUPPORT */, () => {
      let children = [];
      children.push(this.CONSUME(IncomingSupport));
      this.OR({
        DEF: [
          { ALT: () => children.push(this.SUBRULE(this.statement)) },
          { ALT: () => children.push(this.SUBRULE(this.argument)) }
        ]
      });
      return IRuleNode.create("incomingSupport" /* INCOMING_SUPPORT */, children);
    });
    this.incomingAttack = this.RULE("incomingAttack" /* INCOMING_ATTACK */, () => {
      let children = [];
      children.push(this.CONSUME(IncomingAttack));
      this.OR({
        DEF: [
          { ALT: () => children.push(this.SUBRULE(this.statement)) },
          { ALT: () => children.push(this.SUBRULE(this.argument)) }
        ]
      });
      return IRuleNode.create("incomingAttack" /* INCOMING_ATTACK */, children);
    });
    this.incomingUndercut = this.RULE("incomingUndercut" /* INCOMING_UNDERCUT */, () => {
      let children = [];
      children.push(this.CONSUME(IncomingUndercut));
      this.OR({
        DEF: [
          { ALT: () => children.push(this.SUBRULE(this.statement)) },
          { ALT: () => children.push(this.SUBRULE(this.argument)) }
        ]
      });
      return IRuleNode.create("incomingUndercut" /* INCOMING_UNDERCUT */, children);
    });
    this.outgoingUndercut = this.RULE("outgoingUndercut" /* OUTGOING_UNDERCUT */, () => {
      let children = [];
      children.push(this.CONSUME(OutgoingUndercut));
      this.OR({
        DEF: [
          { ALT: () => children.push(this.SUBRULE(this.statement)) },
          { ALT: () => children.push(this.SUBRULE(this.argument)) }
        ]
      });
      return IRuleNode.create("outgoingUndercut" /* OUTGOING_UNDERCUT */, children);
    });
    this.outgoingSupport = this.RULE("outgoingSupport" /* OUTGOING_SUPPORT */, () => {
      let children = [];
      children.push(this.CONSUME(OutgoingSupport));
      this.OR({
        DEF: [
          { ALT: () => children.push(this.SUBRULE(this.statement)) },
          { ALT: () => children.push(this.SUBRULE(this.argument)) }
        ]
      });
      return IRuleNode.create("outgoingSupport" /* OUTGOING_SUPPORT */, children);
    });
    this.outgoingAttack = this.RULE("outgoingAttack" /* OUTGOING_ATTACK */, () => {
      let children = [];
      children.push(this.CONSUME(OutgoingAttack));
      this.OR({
        DEF: [
          { ALT: () => children.push(this.SUBRULE(this.statement)) },
          { ALT: () => children.push(this.SUBRULE(this.argument)) }
        ]
      });
      return IRuleNode.create("outgoingAttack" /* OUTGOING_ATTACK */, children);
    });
    this.contradiction = this.RULE("contradiction" /* CONTRADICTION */, () => {
      let children = [];
      children.push(this.CONSUME(Contradiction));
      children.push(this.SUBRULE(this.statement));
      return IRuleNode.create("contradiction" /* CONTRADICTION */, children);
    });
    this.bold = this.RULE("bold" /* BOLD */, () => {
      let children = [];
      this.OR([
        {
          ALT: () => {
            children.push(this.CONSUME(UnderscoreBoldStart));
            this.OPTION1(() => {
              children.push(this.SUBRULE1(this.statementContent));
            });
            children.push(this.CONSUME(UnderscoreBoldEnd));
          }
        },
        {
          ALT: () => {
            children.push(this.CONSUME(AsteriskBoldStart));
            this.OPTION2(() => {
              children.push(this.SUBRULE2(this.statementContent));
            });
            children.push(this.CONSUME(AsteriskBoldEnd));
          }
        }
      ]);
      return IRuleNode.create("bold" /* BOLD */, children);
    });
    this.italic = this.RULE("italic" /* ITALIC */, () => {
      let children = [];
      this.OR([
        {
          ALT: () => {
            children.push(this.CONSUME(UnderscoreItalicStart));
            this.OPTION1(() => {
              children.push(this.SUBRULE3(this.statementContent));
            });
            children.push(this.CONSUME(UnderscoreItalicEnd));
          }
        },
        {
          ALT: () => {
            children.push(this.CONSUME(AsteriskItalicStart));
            this.OPTION2(() => {
              children.push(this.SUBRULE4(this.statementContent));
            });
            children.push(this.CONSUME(AsteriskItalicEnd));
          }
        }
      ]);
      return IRuleNode.create("italic" /* ITALIC */, children);
    });
    this.statementContent = this.RULE("statementContent" /* STATEMENT_CONTENT */, () => {
      let children = [];
      this.AT_LEAST_ONE(() => {
        children.push(
          this.OR(
            this.c3 || (this.c3 = [
              {
                ALT: () => this.SUBRULE(this.freestyleText)
              },
              {
                ALT: () => this.CONSUME(Link)
              },
              {
                ALT: () => this.SUBRULE(this.bold)
              },
              {
                ALT: () => this.SUBRULE(this.italic)
              },
              {
                ALT: () => this.CONSUME(Tag)
              },
              {
                ALT: () => this.CONSUME(ArgumentMention)
              },
              {
                ALT: () => this.CONSUME(StatementMention)
              },
              {
                ALT: () => this.CONSUME(Newline)
              }
              // , {
              //     ALT: () => children.push(this.CONSUME(lexer.StatementMentionByNumber))
              // }
            ])
          )
        );
      });
      return IRuleNode.create("statementContent" /* STATEMENT_CONTENT */, children);
    });
    this.freestyleText = this.RULE("freestyleText" /* FREESTYLE_TEXT */, () => {
      let children = [];
      this.AT_LEAST_ONE(
        () => this.OR([
          {
            ALT: () => children.push(this.CONSUME(Freestyle))
          },
          {
            ALT: () => children.push(this.CONSUME(UnusedControlChar))
          },
          {
            ALT: () => children.push(this.CONSUME(EscapedChar))
          },
          {
            ALT: () => children.push(this.CONSUME(SpecialChar))
          }
        ])
      );
      return IRuleNode.create("freestyleText" /* FREESTYLE_TEXT */, children);
    });
    this.performSelfAnalysis();
  }
};
var parser = new ArgdownParser();

// src/ArgdownTreeWalker.ts
var import_eventemitter3 = require("eventemitter3");
var ArgdownTreeWalker = class extends import_eventemitter3.EventEmitter {
  constructor() {
    super(...arguments);
    this.visitNode = (request, response, node, parentNode, childIndex, logger) => {
      if (node) {
        if (isRuleNode(node)) {
          this.emit(
            node.name + "Entry",
            request,
            response,
            node,
            parentNode,
            childIndex,
            logger
          );
          if (node.children && node.children.length > 0) {
            for (var i = 0; i < node.children.length; i++) {
              let child = node.children[i];
              this.visitNode(request, response, child, node, i, logger);
            }
          }
          this.emit(
            node.name + "Exit",
            request,
            response,
            node,
            parentNode,
            childIndex,
            logger
          );
        } else if (isTokenNode(node)) {
          this.emit(
            node.tokenType.name,
            request,
            response,
            node,
            parentNode,
            childIndex,
            logger
          );
        }
      }
    };
  }
  walk(request, response, logger) {
    if (response.ast) {
      this.visitNode(request, response, response.ast, null, null, logger);
    }
  }
};

// src/Logger.ts
var getPriority = (level) => {
  switch (level) {
    case "verbose":
      return 1;
    case "info":
      return 1;
    case "debug":
      return 1;
    case "warning":
      return 2;
    case "error":
      return 3;
    case "off":
    case "none":
    case "silent":
      return 4;
    default:
      return -1;
  }
};
var Logger = class {
  constructor() {
    this.logLevel = "error";
  }
  setLevel(level) {
    this.logLevel = level;
  }
  log(level, message) {
    const messagePriority = getPriority(level);
    const loggerPriority = getPriority(this.logLevel);
    if (messagePriority >= loggerPriority) {
      if (level === "error") {
        console.error(message);
      } else if (level === "warning") {
        console.warn(message);
      } else {
        console.log(message);
      }
    }
  }
};

// src/index.ts
var import_chevrotain2 = require("chevrotain");
function parse2(input) {
  const lexingResult = tokenize(input);
  parser.input = lexingResult.tokens;
  return parser.argdown();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ArgdownTreeWalker,
  ArgdownTypes,
  ArgumentDefinition,
  ArgumentMention,
  ArgumentReference,
  AsteriskBoldEnd,
  AsteriskBoldStart,
  AsteriskItalicEnd,
  AsteriskItalicStart,
  Comment,
  Contradiction,
  Data,
  Dedent,
  EOF,
  Emptyline,
  EscapedChar,
  Freestyle,
  FrontMatter,
  HeadingStart,
  IArgument,
  IEquivalenceClass,
  IMapEdge,
  IRelation,
  IRuleNode,
  IncomingAttack,
  IncomingSupport,
  IncomingUndercut,
  Indent,
  InferenceEnd,
  InferenceStart,
  Link,
  ListDelimiter,
  Logger,
  Newline,
  OrderedListItem,
  OutgoingAttack,
  OutgoingSupport,
  OutgoingUndercut,
  RangeType,
  RelationType,
  RuleNames,
  Spaces,
  SpecialChar,
  StatementDefinition,
  StatementMention,
  StatementNumber,
  StatementReference,
  StatementRole,
  Tag,
  TokenNames,
  UnderscoreBoldEnd,
  UnderscoreBoldStart,
  UnderscoreItalicEnd,
  UnderscoreItalicStart,
  UnorderedListItem,
  UnusedControlChar,
  addLineBreaks,
  arrayIsEmpty,
  astToJsonString,
  astToString,
  ensure,
  escapeAsHtmlEntities,
  escapeCSSWidthOrHeight,
  escapeHtml,
  getHtmlId,
  isConclusion,
  isFunction,
  isGroupMapNode,
  isNumber,
  isObject,
  isPCSStatement,
  isReconstructed,
  isRuleNode,
  isString,
  isTokenNode,
  mergeDefaults,
  normalizeLink,
  normalizeLinkText,
  objectIsEmpty,
  other,
  parse,
  parser,
  reduceToMap,
  splitByCharactersInLine,
  splitByLineWidth,
  stringIsEmpty,
  stringToClassName,
  stringToHtmlId,
  tokenList,
  tokenLocationsToString,
  tokenMatcher,
  tokenize,
  tokensToString,
  validateColorString,
  validateLink
});
