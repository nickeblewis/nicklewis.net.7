---
title: Todo
path: todo
date: 2019-06-28
summary: Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum earum quos explicabo suscipit maxime iste qui nihil. Reiciendis asperiores minus necessitatibus
tags: ['todo']
---

# Main

## Screencasts
[ ] - Short screencasts to show off stuff I think is great in the devtools I use, starting with VS Code and it's new breadscrumbs feature and how it works so well with markdown documents like this one - then tweet both the website link here and the actual video directly

## Tasks

Income streams in additon to contracts
[ ] - Tidy up this document and make it more useful and even shareable! I could scan through the content folder and mapt out what needs doing to complete the ideas I have come up with and a better structure for the folders that we can stick with more reliably. permalinks matter for SEO purposes
[ ] - /screencasts/how i edit this site - write the transcript and record the video :-)
[ ] - check up on my search console, looking like its ramping up and do some test searches on Google, review the clicks and what the keywords were for them

Hmmm - just drilled down to the clicks for this and it may be referring to my old site? However I could translate some of the old content from wordpress to markdown, such as the red kites article? 

[ ] - maybe delete properties in search console for nicklewis.net and start again

[ ] - Disqus would be great too

softwarebyrob.com

[ ] - move my mugshot to the top, should be opener

[ ] - continue content development, find ways of managing it better, though doing it all through VS Code like this seems to be a beautiful way :-)
### Stuff to set up
- [ ] Update Gridsome from 0.6.4 to latest and what changes does that bring update current blog journal
- [ ] I want to make my home apge more of a personal tone, like Kent C dodds and to appeal as a mentor and teacher as much as a faceless business
- [ ] Slack channel headforcode
- [ ] Add something to any of my "incomplete" content pages that are there as placeholders to allow people to make contributions to them or to be updated when they are actually published?
- [x] google sitemap  
- [x] google analytics - isn't this one done?
- [x] content requires it's own template but base it on blog to start with
- [x] change the tags for this article and get content covered by tags in the build
- [x] get the contact form working on Netlify
- [x] as soon as poss map my domain to this
- [ ] snipcart purchase button underneath each image ;-) see if I can work out a way...
- [ ] blog content themes
- [ ] Stock photography diary
- https://snipcart.com/vue-ecommerce

## Read up on more
- Tree shaking what is it?
## General

- patreon - for what?
- github sponsorship (what?)
  - develop gridsome/gatsby plugins perhaps for which I could seek sponsorship?
- https://gridsome.org/plugins/gridsome-plugin-netlify-cms 
  - Install for this site and see how it goes
- SEO tags for these pages
  - Noted that nicklewis.photo searches for aldershot festival yield nothing, so need to master how this works

https://www.patreon.com/sindresorhus
https://help.github.com/en/articles/displaying-a-sponsor-button-in-your-repository
https://www.patreon.com/FullyChargedShow
https://gridsome.org/plugins/gridsome-plugin-netlify-cms - there is a step-by-step guide on their site
Courses, tutorials etc

## Vue JS

Stuff to watch out for at the moment

- VueJS 2 - 3 migration path
- vue-bootstrap 

## GitHub

Notes on my GitHub account

https://github.com/LinusBorg/portal-vue
https://github.com/nickeblewis/nicklewis.net.7/settings - could set up sponsors if I wanted to

## Content for this website
- Article about my workflow with LR, external drives etc
### Development
### CMS
- Getting up and running with gridsome with netlify CMS (video screencast)
  - Vimeo for my coding screencasts
  - YT for photography, video and exploring the world
### Photography
- Drone
- Photographic techniques and LR included

### Next Location/Topic
- Can't decide!


Sunny 16?
Stories from my archives
Wes Bos and Scott Tolinski

## startups for the rest of us: ep. 452
mentions:
- bootstrapped web - is that a podcast?
- clickcart
- interviewee is interesting, keeps 12 month cash up front
### ep. 453
- Ambassador?

## new stuff discovered

- Vue draggable which we use at clearbox https://github.com/SortableJS/Vue.Draggable/issues/324

## to find out

- npm list

# External components documentation
* [axios](https://github.com/axios/axios)
* [axios-extensions](https://github.com/kuitos/axios-extensions)
* [bootstrap-vue](https://bootstrap-vue.js.org/docs/) - CSS Bottstrap in Vue style
* [kendo-vue-grid](https://www.telerik.com/kendo-vue-ui/components/grid-native/) - Kendo Grid
* [quill-image-resize-module](https://www.npmjs.com/package/quill-image-resize-module) - Image Resize Quill Module
* [v-calendar](https://github.com/nathanreyes/v-calendar) - Popup Calendar
* [vue-quill](https://www.npmjs.com/package/vue-quill) - Vue wrapper for [Quill](https://quilljs.com/)
* [vue-signature](https://www.npmjs.com/package/vue-signature) - SVG Signature
* [vue-drag-resize](https://github.com/kirillmurashov/vue-drag-resize/) - Drag and Resize
* [vue-js-toggle-button](https://github.com/euvl/vue-js-toggle-button) - Switch/Toggle Button
* [vue-tour](https://pulsar.gitbooks.io/vue-tour/)
* [vuedraggable](https://www.npmjs.com/package/vuedraggable) - Vue wrapper for [SortableJS](https://github.com/SortableJS/Sortable)
* [concurrently](https://github.com/kimmobrunfeldt/concurrently)
* [Toast UI Image Editor](https://github.com/nhn/tui.image-editor) 
*    To run Tost UI Image Editor is necessary to install fabric dependency: npm install --no-save --no-optional fabric@~1.6.7

## PWA
* Vue-cli 3.0+ necessary, to install or update: npm install -g @vue/cli
* To install PWA: vue add @vue/pwa
* Basic tutorial: (https://naturaily.com/blog/pwa-vue-cli-3)
* For configuration [WorkBox] is used (internal dependency of @vue/pwa)
* Details: (https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack)

## API MOCK
* In the development environment is used the JSON-Server, an REST APIs emulator
* Because of the way the API was built, a number of settings were required for the emulator to behave exactly like the API
* The file [src/mock_api/server.js] control the API emulator, and the file [src/mock_api/db.json] contains all api mock data
* [JSON-Server] project and documentation: (https://github.com/typicode/json-server)
* JSON-Server uses [db.low] to manage its database in JSON. 
  * If be necessary to interact directly with JSON, more information can be found at: (https://github.com/typicode/lowdb)

## Future Implementation
* [vue-i18n](https://github.com/kazupon/vue-i18n/)

- scss in vue
- tailwind gridsome grids for photos
- vue-bootstrap, fabric, toast editor and wot-not
- what kind of app can I build that is loosely based on the architecture of form builder (clearbox), so that I carry on some of the knowledge and skills learnt here before October
    - Now I do already have an older version of it on my mac does this still build ok, then use that as a guide to build some form of bootstrap, push to Git, document here on this site and share. I think this will be very valuable
    - drop Lee a line and share github with him
- nativescript vue sounds intriguing
- CV
- Github - projects to use
- JSFiddle, codepen and what are the other great alternatives out there. Plus what we use on this site for code documentaion
- Modify the readme for this project to reflect what I am doing with nicklewis.net
- change the graphics on my homepage to be more personal to me