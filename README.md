# Feather icons for deno / Preact

**License** [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)

**Project** [https://feathericons.com/](https://feathericons.com/)

[See available icons here](https://react-icons.deno.dev/fi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/fi":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-fi@1.0.9/mod.ts",
    "react-icons/fi/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-fi@1.0.9/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib fi

```ts
import { FiActivity } from "https://deno.land/x/react_icons_fi@1.0.9/mod.ts"
```

## import_map import an icon from all icons

```ts
import { FiActivity } from "react-icons/fi"
```

## import a single icon, downloading just one icon

```ts
import { FiActivity } from "react-icons/fi/FiActivity.ts"
```

or using default export

```ts
import FiActivity from "react-icons/fi/FiActivity.ts"
```

