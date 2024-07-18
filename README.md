# Feather icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/fi)](https://jsr.io/@preact-icons/fi)

**License** [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)

**Project** [https://feathericons.com/](https://feathericons.com/)

[See available icons here](https://react-icons.deno.dev/fi)

## install the module

```bash
deno add @preact-icons/fi
dnpx jsr add @preact-icons/fi
pnpm dlx jsr add @preact-icons/fi
bunx jsr add @preact-icons/fi
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { FiActivity } from "@preact-icons/fi"
```

## import a single icon, downloading just one icon

```ts
import { FiActivity } from "react-icons/fi/FiActivity"
```

or using default export

```ts
import FiActivity from "react-icons/fi/FiActivity"
```
