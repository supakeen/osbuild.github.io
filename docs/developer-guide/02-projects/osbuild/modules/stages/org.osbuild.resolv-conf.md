
# org.osbuild.resolv-conf

**Configure the resolver**

This stage configures the resolver(3) via the resolv.conf(5)
configure file. See the man page for more details. Currently
only a subset of options are supported. If no options are
specified but the stage is included it will create an empty
`/etc/resolv.conf` file.

## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "nameserver": {
      "description": "Array of IP addresses the resolver should query",
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "search": {
      "description": "Array of ",
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

## Schema 2

```json
{}
```
