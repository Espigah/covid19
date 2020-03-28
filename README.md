# Covid19

> Corona virus

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


[nodemon] Internal watch failed: ENOSPC: System limit for number of file watchers reached, watch '/home/fsrg/workspace/marlon/covid19/server'

    sudo sysctl fs.inotify.max_user_watches=582222 && sudo sysctl -p
