
# org.osbuild.ostree.config

**Change OSTree configuration**

Change the configuration for an OSTree repository.
Currently only the following values are supported:
  - `sysroot.readonly`
  - `sysroot.bootloader`
See `ostree.repo-config(5)` for more information.

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
    "config": {
      "type": "object",
      "additionalProperties": false,
      "description": "OSTree configuration groups",
      "properties": {
        "sysroot": {
          "type": "object",
          "additionalProperties": false,
          "description": "Options concerning the sysroot",
          "properties": {
            "bootloader": {
              "description": "Configure the bootloader that OSTree uses (use 'none' for BLS).",
              "type": "string",
              "enum": [
                "none",
                "auto",
                "grub2",
                "syslinux",
                "uboot",
                "zipl",
                "aboot"
              ]
            },
            "bootprefix": {
              "description": "If set to true, the bootloader entries generated will include /boot as a prefix.",
              "type": "boolean"
            },
            "readonly": {
              "description": "Read only sysroot and boot",
              "type": "boolean"
            },
            "bls-append-except-default": {
              "description": "Set value for bls-append-except-default",
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
