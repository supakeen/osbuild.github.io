
# org.osbuild.yum.config

**Configure yellowdog updater modified (YUM)**

The stage currently supports configuring http_caching in YUM config and
locales in langpacks plugin. If the config files don't exist, they
are created.

## Schema 1

```json
{
  "additionalProperties": false,
  "description": "YUM configuration.",
  "properties": {
    "config": {
      "type": "object",
      "additionalProperties": false,
      "description": "YUM global configuration.",
      "properties": {
        "http_caching": {
          "type": "string",
          "enum": [
            "all",
            "packages",
            "lazy:packages",
            "none"
          ],
          "description": "Determines how upstream HTTP caches are instructed to handle any HTTP downloads that YUM does."
        }
      }
    },
    "plugins": {
      "additionalProperties": false,
      "type": "object",
      "description": "YUM plugins configuration",
      "properties": {
        "langpacks": {
          "additionalProperties": false,
          "type": "object",
          "description": "'langpacks' YUM plugin configuration",
          "minProperties": 1,
          "properties": {
            "locales": {
              "type": "array",
              "minItems": 1,
              "description": "list of locales for YUM",
              "items": {
                "type": "string"
              }
            }
          }
        }
      }
    }
  }
}
```

## Schema 2

```json
{}
```
