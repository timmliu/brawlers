module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parser": "espree",
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "node",
    "react",
    "react-native",
    "react-hooks"
  ],
  "rules": {
    "no-console": [
      process.env.NODE_ENV === "Prod" ? "error" : "off",
      { "allow": [ "info", "error" ]}
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-uses-vars": "error",
    "react/no-this-in-sfc": "error",
    "react/jsx-indent": [
      "error",
      2
    ],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react/sort-comp": [
      "error",
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^get.+Handler$/',
          '/^on.+$/',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        when: "always",
        children: true,
        spacing: {
          objectLiterals: "never"
        }
      }
    ],
    "react/no-unused-state": "error",
    "semi": [
      "error",
      "never",
      {
        "omitLastInOneLineBlock": true
      }
    ],
    "quote": "single",
    "object-curly-spacing": [
      "error",
      "always",
      {
        "arraysInObjects": false,
        "objectsInObjects": false
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_" }
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
      }
    ],
    "space-infix-ops": [
      1,
      { "int32Hint": false }
    ],
    "node/no-unsupported-features": [
      "error", {
        "version": 10,
        "ignores": ["modules"]
      }
    ]
  }
};
