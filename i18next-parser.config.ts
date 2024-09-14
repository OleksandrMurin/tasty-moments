export default {
  defaultNamespace: 'translation',
  lexers: {
    ts: ['JavascriptLexer'],
    tsx: ['JsxLexer'],
    default: ['JavascriptLexer'],
  },
  locales: ['en', 'uk'],
  output: 'messages/$LOCALE.json',
  input: ['src/**/*.ts', 'src/**/*.tsx'],
};
