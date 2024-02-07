# Mad Vegan Documentation

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Concepts

* Dev - spin up the local environment
* Build - compiles the code into a build version
* Generate - generating the routes as HTML files for static hosting

read more about dev vs build here: https://vercel.com/docs/frameworks/nuxt#incremental-static-regeneration-isr

This site uses build.

## Tools

* Package manager - pnpm
* CLI - nuxi

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

## Updating dependencies
```bash
# pnpm
pnpm update

# nuxi
nuxi upgrade
--> Yes
```


## LeafletJS

Make sure you're using the right dependency for leaflet there's a nuxt2 and a nuxt3 one. I used the nuxt3 one.

Here are the relevant docs:


```bash
# LeafletJS docs
https://leafletjs.com/

# Nuxt3
https://nuxt.com/modules/nuxt3-leaflet

# vue-leaflet github - contains component playgrounds

https://github.com/vue-leaflet/vue-leaflet/tree/master/src/playground/views


```