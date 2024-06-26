
# org.osbuild.mkfs.ext4

**Construct an ext4 file-system via mkfs.ext4(8)**

Construct a ext4 file-system with the given options at the device
specified via `device`.
Buildhost commands used: `mke2fs`.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "devices": {
    "type": "object",
    "additionalProperties": true,
    "required": [
      "device"
    ],
    "properties": {
      "device": {
        "type": "object",
        "additionalProperties": true
      }
    }
  },
  "options": {
    "additionalProperties": false,
    "required": [
      "uuid"
    ],
    "properties": {
      "uuid": {
        "description": "Volume identifier",
        "type": "string"
      },
      "label": {
        "description": "Label for the file system",
        "type": "string",
        "maxLength": 16
      },
      "metadata_csum_seed": {
        "description": "Enable metadata_csum_seed support",
        "type": "boolean"
      },
      "orphan_file": {
        "description": "Enable orphan_file support",
        "type": "boolean"
      },
      "verity": {
        "description": "Enable fs-verity support",
        "type": "boolean"
      }
    }
  }
}
```
