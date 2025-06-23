const { parse, tokenize, parser } = require('./dist/index.js');

const testArgdown = `
# Test Argument

[Statement 1]: This is a test statement.
    + [Argument 1]: This supports the statement.
        <- This is an objection.

[Statement 2]: Another statement.
`;

console.log('Testing the parser...');

try {
  // Test the simple parse function
  console.log('1. Testing parse() function...');
  const result1 = parse(testArgdown);
  console.log('✓ parse() works');

  // Test tokenize + parser.parse()
  console.log('2. Testing tokenize + parser.parse()...');
  const tokens = tokenize(testArgdown);
  const result2 = parser.parse(tokens.tokens);
  console.log('✓ parser.parse() works');

  console.log('All tests passed! 🎉');
} catch (error) {
  console.error('Test failed:', error);
  process.exit(1);
}