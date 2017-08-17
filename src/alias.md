# alias
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


## updates:
+ https://github.com/tleunen/babel-plugin-module-resolver