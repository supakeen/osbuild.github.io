
# org.osbuild.uki

**Create a Unified Kernel Image**

A Unified Kernel Image (UKI) is a UEFI executable that contains
a UEFI stub loader, together with the kernel, the initrd, the
kernel command line and (optionally) a splash screen.
For more information see the specification at:
https://github.com/uapi-group/specifications/blob/main/specs/unified_kernel_image.md
Host commands: objdump, objcopy

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
      "filename"
    ],
    "properties": {
      "filename": {
        "description": "Filename to use for the resulting UKI",
        "type": "string"
      },
      "kernel": {
        "type": "object",
        "required": [
          "opts"
        ],
        "properties": {
          "opts": {
            "description": "Array of kernel options for the UKI",
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "kernel",
      "initrd",
      "osrel"
    ],
    "properties": {
      "osrel": {
        "type": "object",
        "additionalProperties": true
      },
      "kernel": {
        "type": "object",
        "additionalProperties": true
      },
      "initrd": {
        "type": "object",
        "additionalProperties": true
      }
    }
  }
}
```
