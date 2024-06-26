
# org.osbuild.machine-id

**Deal with /etc/machine-id**

Explicitly define the state to /etc/machine-id. The possible values for
first-boot are:
- yes: This sets the machine-id to "uninitialized" and this will trigger
       ContidionFirstBoot in systemd
- no: This creates an empty machine-id. It will trigger the generation
      of a new machine-id but *not* the ConditionFirstBoot
- preserve: Leave the existing machine-id in place. Not having a machine-id
            with that set is an error.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "first-boot"
  ],
  "properties": {
    "first-boot": {
      "enum": [
        "yes",
        "no",
        "preserve"
      ],
      "description": "Set the first boot behavior of the /etc/machine-id file in the tree"
    }
  }
}
```

## Schema 2

```json
{}
```
