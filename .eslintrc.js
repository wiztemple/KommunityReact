module.exports = {
    "root": true,
    "extends": [
        "airbnb-base",
        "react"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "mocha": true
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        }
    },
    "globals": {
        "toastr": true,
        "localStorage": true
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "max-len": [
            2,
            {
                "code": 80
            }
        ],
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "new-cap": 0,
        "no-undef": 2,
        "consistent-return": 0,
        "no-param-reassign": 0,
        "comma-dangle": 0,
        "curly": [
            "error",
            "multi-line"
        ],
        "max-nested-callbacks": [
            2,
            10
        ],
        "import/no-unresolved": [
            2,
            {
                "commonjs": true
            }
        ],
        "no-shadow": [
            "error",
            {
                "allow": [
                    "req",
                    "res",
                    "err"
                ]
            }
        ],
    }
};