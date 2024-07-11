module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.svelte"],
  css: ["./src/global.css", "./src/app.css"],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  safelist: [
    /svelte-/,
    /^(html|body)$/,
    /^(h[1-6]|p|a|ul|ol|li|blockquote|code|pre)$/,
    /^(flex|grid|hidden|inline|block)$/,
    /^(bg|text|border|m|p|w|h)-/,
  ],
};
