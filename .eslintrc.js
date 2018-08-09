module.exports = {
    "plugins": [
        "appcelerator"
    ],
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "jquery": true,
        "es6": true,
        "appcelerator/appcelerator": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "max-lines": [
            "error",
            {
                "skipBlankLines": true,
                "skipComments": true
            },
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": "off",
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        "no-multiple-empty-lines": ["error", {
            "max": 2,
            "maxEOF": 1
        }],
        "no-inner-declarations": "off",
        "no-useless-escape": "off",
        "eqeqeq": ["error", "always"],
        "no-unused-vars": "off"
    },
    "overrides": [{
        "files": ["Resources/**/*.js", "app/app/lib/moment.js"]
    }],
    "globals": {
        updateListUI: true
    },
    "parserOptions": {
        "ecmaVersion": 2017
    }
};