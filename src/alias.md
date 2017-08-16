# Alias
> babel-plugin-module-alias

## install:
```bash
npm install --save babel babel-plugin-module-alias
```

## usage:
```json
{
  "plugins": [
    [
      "module-alias",
      [
        {
          "src": "./app/assets",
          "expose": "assets"
        },
      ]
    ]
  ]
}
```
