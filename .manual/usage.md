# Usage

## Basic usage

This theme can be used in combination with [esdoc-publish-html-plugin](https://yarnpkg.com/en/package/esdoc-publish-html-plugin).
Simply load it from your node_modules

```json
{
  "plugins": [
    {
      "name": "esdoc-publish-html-plugin",
      "option": {
        "template": "./node_modules/esdoc-custom-theme/template"
      }
    }
  ]
}
```


To make the most of this theme (and your documentation) you can add a manual which
works very nicely with this theme.

To adjust the colors and a few dimentions you can add some custom css.
Read more about this feature under 'configuration'.

## Advanced usage

```json
{
  "plugins": [
    {
      "name": "esdoc-brand-plugin",
      "option": {
        "title": "esdoc-custom-theme",
        "description": "A customizable theme for esdoc",
        "repository": "https://github.com/sinnerschrader/esdoc-custom-theme",
        "site": "sinnerschrader.github.io/esdoc-custom-theme",
        "author": "https://github.com/pixelass"
      }
    },
    {
      "name": "esdoc-inject-style-plugin",
      "option": {
      "enable": true,
        "styles": [
          "./custom-styles.css"
        ]
      }
    },
    {
      "name": "esdoc-publish-html-plugin",
      "option": {
        "template": "./node_modules/esdoc-custom-theme/template"
      }
    },
    {
      "name": "esdoc-standard-plugin",
      "option": {
        "coverage": {
          "enable": true
        },
        "accessor": {
          "access": ["public"],
          "autoPrivate": true
        },
        "manual": {
          "index": "./.manual/index.md",
          "globalIndex": true,
          "asset": "./.manual/assets",
          "files": [
            "./.manual/installation.md"
            "./.manual/usage.md"
          ]
        }
      }
    }
  ]
}
```
