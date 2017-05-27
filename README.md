# Ternjs File Reference Example

Boot up the ternjs server:

```
yarn run tern
```

Send off a files request to confirm no files have been eagerly loaded:

```
Request: {
  "query": {
    "type": "files"
  }
}
Response: {
  "files": []
}
```

Attempt to retreive completions for `Cat` within `farm.es6`:

```
Request: {
  "query": {
    "type": "type",
    "file": "src/app/farm/farm.es6",
    "end": {
      "line": 0,
      "ch": 10
    }
  }
}
Response: {
  "guess": true,
  "type": "fn()",
  "exprName": "Cat"
}
```

Tern does not correctly find where `Cat` is defined.

----


Swap `.tern-project` with `.tern-project-working`:

```
cp .tern-project-working .tern-project
```


Send off a files request to confirm the files have been eagerly loaded:

```
Request: {
  "query": {
    "type": "files"
  }
}
Response: {
  "files": [
    "src/app/animals/cat.es6",
    "src/app/farm/farm.es6"
  ]
}

```

Attempt to retreive completions for `Cat` within `farm.es6`:

```
Request: {
  "query": {
    "type": "type",
    "file": "src/app/farm/farm.es6",
    "end": {
      "line": 0,
      "ch": 10
    }
  }
}
Response: {
  "type": "fn()",
  "name": "Cat",
  "exprName": "Cat",
  "origin": "src/app/animals/cat.es6"
}
```

Tern now successfully resolves where `Cat` is defined. 🤔


