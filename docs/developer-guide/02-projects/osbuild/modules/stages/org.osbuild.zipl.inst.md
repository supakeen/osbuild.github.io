
# org.osbuild.zipl.inst

**Install the Z Initial Program Loader (zipl)**

This will install the Z Initial Program Loader for the
specified `kernel`. The other required parameter is
the `location`, which specifies is the offset of the
partition containing `/boot` within the device that
is specified via `disk`. Since the kernel and initrd
are read, the file system tree needs to be mounted
and thus the `root` mount point must be given.

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
      "kernel",
      "location"
    ],
    "properties": {
      "kernel": {
        "type": "string"
      },
      "location": {
        "type": "number"
      },
      "kernel_opts_append": {
        "description": "Additional kernel options to add to the discovered options",
        "type": "array",
        "items": {
          "description": "A single kernel command line option",
          "type": "string"
        }
      },
      "blocksize": {
        "type": "number",
        "default": 512
      }
    }
  },
  "devices": {
    "type": "object",
    "additionalProperties": true,
    "required": [
      "disk"
    ],
    "properties": {
      "disk": {
        "type": "object",
        "additionalProperties": true
      }
    }
  },
  "mounts": {
    "type": "array",
    "minItems": 1
  }
}
```
