# Feather icons for deno / Preact

**License** [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)

**Project** [https://feathericons.com/](https://feathericons.com/)

[See available icons here](https://react-icons.deno.dev/fi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.9",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/fi": "jsr:@preact-icons/fi@^1.0.10/mod.ts",
    "react-icons/fi/": "jsr:@preact-icons/fi@^1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib fi

```ts
import { FiActivity } from "jsr:preact-icons/fi@1.0.10/mod.ts"
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

