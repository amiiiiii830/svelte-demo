// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  safelist: [
    "html",
    "body",
    "bg-red-500", // Add any classes you want to safelist
    /svelte-/,
    /^(h[1-6]|p|a|ul|ol|li|blockquote|code|pre)$/,
    /^(flex|grid|hidden|inline|block)$/,
    /^(bg|text|border|m|p|w|h)-/,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
