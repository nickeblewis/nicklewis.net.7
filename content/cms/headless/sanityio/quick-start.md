# Sanity Quick Start

Welcome to the first of my so-called **"Quick Starts"**, simple ways of creating things in around 5-10 minutes just to get the gist of whatever it may be works. However you can take as much time as you wish to complete them, especially if there are some prerequisites to run through first, as there are in this tutorial...

## Before we begin

Recently I've been asked by people about [Sanity.io](https://sanity.io) and how I use it, which I will be happy to go into but you can get something up and running very very quickly, so long as you have the following things configured already!

- An account with [Sanity.io](https://sanity.io)
- An account with [Netlify](https://netlify.com)
- An account with [Github](https://github.com)

So if you don't any of the above, it is worth looking into them first and to sign up for them all. We shall go into more depth on these services later in this article and further tutorials over time. There is a lot to take on-board but this route is one of the best ways of trying out [Sanity.io](https://sanity.io).

## Let's throw together an RSVP site!

Let's chuck something together with [Sanity.io](https://sanity.io) that takes the least effort and later we shall create something more complete, as sometimes it is easier this way to explain a new technology. I am going to create an RSVP site that I really do need to create for my step-daughter and her husband! So this is a real follow along article on how this works! 

The first iteration will be very straight-forward, as I am going to use a template to get the project going, follow the steps ahead to learn how this can be achieved. You will note that this boilerplate isn't exactly designed for an RSVP site but is close enough for us to adapt.

## Let's get the project started

If you visit [sanity.io](https://sanity.io) you can of course learn more about Sanity and what they offer, well worth a read in depth when you find the time but for now we can dive straight into a new project.

1. Click on **New Project** in the navigation bar, top right hand corner - You are offered a choice of boilerplate projects (which may all change over time of course, so please let us know if they do in the comments below)

You will notice that each of the boilerplate projects offer a choice of website types, Events, Portfolio and Blog being common varieties but there is also a choice of frameworks you can use which includes [Next](https://nextjs.org), [Nuxt](https://nuxtjs.org), Sapper, Svelte and [Gatsby](https://www.gatsbyjs.org). We will keep it straightforward for now but it is worth saying I shall write some **Deep Dive** articles that go into, hmmm, more depth! 

_Please note: At the time of writing the Svelte and Sapper pages were down, so I couldn't verify their links_

2. Pick the **Events with Nuxt.js** option (which is based on VueJS)...
3. Next you will be presented with a three step process that will connect you to your __Sanity, Github and Netlify__ accounts, which is why you need these from the very start (see above). So follow the steps provided...
4. Sign in to your Sanity account and set your project title and I called mine __RSVP1__ and you can call yours whatever you wish
5. Sign into your Github account and set your repository name to whatever you wish and I set mine to __RSVP1__, same as above but you can name yours differently. Don't panic if you aren't familiar with Github or what it does, shall explain in a moment...
6. Sign into Netlify, once again, let me explain what Netlify provides you with in a moment...
7. Click on **Create a Project** and let it process your new site....

## What are these services and how do they work?

- Sanity.io is a "structured CMS" that allows you to create your own schemas to build your content, it features dashboards with rich content editing features. It's responsive nature is fantastic too and it works a treat across all devices. It exposes your data via a GROQ/GraphQL powered API, so that you can use it in many different apps
- Github is our code repository and from which we can _clone_ to a local computer to develop the code further or to collaborate with other developers
- Netlify is our hosting platform with super fast CDN

That is just a summary of what these services are and there is so much more I can tell you about them but this is a __Quick Start__ after all!

In a nutshell, as you edit your content and publish it from the Studio, it triggers the build process on Netlify to create your static content via webhooks. 

## What we end up with 

Once the installation process has completed and you see the confirmation message (this process can take 5 minutes), you will have access to three things:

- A new Github repository, with instructions on how to clone to your local computer system using a CLI and thus run a local instance of your site to develop against
- The published website which will have a *.netlify.com domain name for the time being but you can share this with your client to discuss the project as it evolves and you can then apply an official custom domain to it later when ready to launch your new website publicly
- __Sanity Studio__ which is your CMS that you can log into using whichever service you used to authenticate your Sanity.io account when you registered, typically Github, Google or old fashioned email/password combination

So there you have it, you have deployed a website with a CMS dashboard for content maintenance. Yes there is a lot more to it than this and feel free to ask questions below to help us gain a better understanding of what it is you'd like to learn more about specifically or whether there was anything you may want more clarity on that we mentioned in this article?

## Where next?

We shall take the default site and make changes to it, so that it resembles a Wedding RSVP site with photos and more, plus we shall talk more about the underlying technologies that make it all tick. This is the tip of the iceberg, for there is so much you can do with these tools!

Enjoy!

