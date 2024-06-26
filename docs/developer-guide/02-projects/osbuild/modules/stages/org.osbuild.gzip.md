
# org.osbuild.gzip

**Compress a file using gzip**

Buildhost commands used: `gzip`.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "file"
    ],
    "properties": {
      "file": {
        "type": "object",
        "additionalProperties": true
      }
    }
  },
  "options": {
    "additionalProperties": false,
    "required": [
      "filename"
    ],
    "properties": {
      "filename": {
        "description": "Filename to use for the compressed file",
        "type": "string"
      },
      "level": {
        "description": "Compression level",
        "type": "integer",
        "minimum": 1,
        "maximum": 9,
        "default": 1
      }
    }
  }
}
```
