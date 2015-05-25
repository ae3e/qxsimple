# qxSIMPLE
The [qooxdoo](http://qooxdoo.org/) javascript framework all-in-one package

qxSIMPLE is the simplest way to use qooxdoo without installing python and without using the qooxdoo toolchain that can be difficult for beginners.
It is a complete pre-build qooxdoo release that can be use for testing, prototyping or learning purposes.
If you're looking for an optimized application, please use the [Qooxdoo SDK](http://manual.qooxdoo.org/current/pages/tool.html).

## Documentation

Visit the webpage [http://adeliz.github.io/qxsimple/](http://adeliz.github.io/qxsimple/) to get some instructions and examples.


## Build process
To build qxSIMPLE, follow these steps :
1. Dowload the latest qooxdoo release
2. Go in the framework folder
3. Edit the config.json file
4. Add "qxsimple" in the "export" part
5. Add the following job (in the "jobs" part)

```javascript
"qxsimple-cdn": {
    "library": [
        {
            "manifest": "Manifest.json"
        }
    ],

    "extend": [ "cache" ],

    "include": ["qx.*"],
    "exclude": ["qx.test.*"],

    "environment": {
        "qx.debug": true,
        "qx.aspects": false
    },

    "compile-options": {
        "uris": {
            "resource": "http://adeliz.github.io/qxsimple/${QOOXDOO_VERSION}/resource"
        },
        "paths": {
            "file": "${QOOXDOO_VERSION}/script/qxsimple_${QOOXDOO_VERSION}.js",
            "app-root": "./${QOOXDOO_VERSION}"
        },
        "code": {
            "format": true,
            "except": [],
            "optimize": ["basecalls", "variables", "privates", "strings", "whitespace"]
        }
    },

    "compile": {
        "type": "build"
    },

    "copy-resources": {
        "target": "${QOOXDOO_VERSION}"
    }
},

"qxsimple-local": {
    "library": [
        {
            "manifest": "Manifest.json"
        }
    ],

    "extend": [ "cache" ],

    "include": ["qx.*"],
    "exclude": ["qx.test.*"],

    "environment": {
        "qx.debug": true,
        "qx.aspects": false
    },

    "compile-options": {
        "paths": {
            "file": "qxsimple_${QOOXDOO_VERSION}/script/qxsimple_${QOOXDOO_VERSION}.js",
            "app-root": "./qxsimple_${QOOXDOO_VERSION}",
            "gzip": true
        },
        "code": {
            "format": false,
            "except": [],
            "optimize": ["basecalls", "variables", "privates", "strings", "whitespace"]
        }
    },

    "compile": {
        "type": "build"
    },

    "copy-resources": {
        "target": "qxsimple_${QOOXDOO_VERSION}"
    }
},

"qxsimple": {
    "run": [
        "qxsimple-local",
        "qxsimple-cdn"
    ]
},
```

6. Execute generate.py qxsimple