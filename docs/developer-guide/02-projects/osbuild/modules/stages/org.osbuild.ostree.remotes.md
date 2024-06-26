
# org.osbuild.ostree.remotes

**Configure OSTree remotes for a repository.**



## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "repo"
  ],
  "properties": {
    "repo": {
      "description": "Location of the OSTree repo.",
      "type": "string"
    },
    "remotes": {
      "description": "Configure remotes for the system repository",
      "type": "array",
      "items": {
        "description": "Description of a remote",
        "type": "object",
        "required": [
          "name",
          "url"
        ],
        "properties": {
          "name": {
            "description": "Identifier for the remote",
            "type": "string"
          },
          "url": {
            "description": "URL for accessing metadata and content for the remote",
            "type": "string"
          },
          "contenturl": {
            "description": "URL for accessing content. When set, url is used only for metadata. Supports 'mirrorlist=' prefix",
            "type": "string"
          },
          "branches": {
            "type": "array",
            "items": {
              "description": "Configured branches for the remote",
              "type": "string"
            }
          },
          "gpgkeys": {
            "type": "array",
            "items": {
              "description": "GPG keys for the remote to verify commits",
              "type": "string"
            }
          },
          "gpgkeypaths": {
            "type": "array",
            "items": {
              "description": "Path to ASCII-armored GPG key or directory containing ASCII-armored GPG keys to import",
              "type": "string"
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
