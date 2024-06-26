
# org.osbuild.ostree.sign

**Sign a commit in an ostree repo**

Given an ostree commit (referenced by a ref) in a repo and an ed25519
secret key this adds a signature to the commit detached metadata.
This commit can then be used to validate the commit, during ostree
pull, during boot, or at any other time.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "required": [
      "repo",
      "ref",
      "key"
    ],
    "properties": {
      "repo": {
        "description": "Location of the OSTree repo.",
        "type": "string"
      },
      "ref": {
        "description": "OSTree branch name or commit to sign",
        "type": "string",
        "default": ""
      },
      "key": {
        "description": "Path to the secret key",
        "type": "string",
        "pattern": "^\\/(?!\\.\\.)((?!\\/\\.\\.\\/).)+$"
      }
    }
  }
}
```
