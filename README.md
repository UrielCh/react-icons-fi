# Feather icons for deno / Preact

**License** [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)

**Project** [https://feathericons.com/](https://feathericons.com/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=fi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/fi":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-fi@1.0.1/mod.ts",
    "react-icons/fi/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-fi/ico/",
  }
}
```

## Direct import sample

```ts
import { FiActivity } from "https://deno.land/x/react_icons_fi@1.0.1/mod.ts"
```

## import_map import sample

```ts
import { FiActivity } from "react-icons/fi"
```

## minimal import

```ts
import { FiActivity } from "react-icons/fi/FiActivity.ts"
```

## minimal import using default export

```ts
import FiActivity from "react-icons/fi/FiActivity.ts"
```

