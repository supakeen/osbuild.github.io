
# org.osbuild.nginx.conf

**Write nginx configuration**



## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "properties": {
      "path": {
        "type": "string",
        "description": "Config file location",
        "default": "/etc/nginx/nginx.conf",
        "pattern": "^\\/(?!\\.\\.)((?!\\/\\.\\.\\/).)+$"
      },
      "config": {
        "type": "object",
        "properties": {
          "listen": {
            "type": "string",
            "description": "The address and/or port on which the server will accept requests",
            "default": "*:80"
          },
          "root": {
            "type": "string",
            "description": "The root directory for requests",
            "default": "/usr/share/nginx/html"
          },
          "pid": {
            "type": "string",
            "description": "File that will store the process ID of the main process",
            "default": "/run/nginx.pid"
          },
          "daemon": {
            "type": "boolean",
            "description": "Whether nginx should become a daemon",
            "default": true
          }
        }
      }
    }
  }
}
```
