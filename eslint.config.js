const js = require("@eslint/js");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const prettier = require("eslint-config-prettier");

module.exports = [
    js.configs.recommended,

    {
        ignores: ["lib/**", "coverage/**", "node_modules/**", "src/__mocks__/**"],
    },

    {
        files: ["src/**/*.ts"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.es2022,
            },
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...prettier.rules,
        },
    },

    {
        files: ["__tests__/**/*.ts"],
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.node,
                ...globals.es2022,
            },
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...prettier.rules,
        },
    },

    {
        files: ["eslint.config.js"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.es2022,
            },
            sourceType: "commonjs",
        },
    },
];
