I build websites and web applications for a living which aren't exactly the same thing but do share the same technologies and methods. I wanted to write about how I would build your site, if I were to do so. This website was built using most of the methods I describe here with a few subtle differences, that I will highlight.

Let's start with the server, the platform upon which your project would sit. 

## Servers
Most of the time now I use Netlify but on occasions may also use other services, it depends on the project. However I won't muddy the waters too much, as this breakdown is based on developing a website much like this one.

What is Netlify? What do they offer that is so special? How expensive are they? Would you pay for them directly or pay via myself?

Netlify enables you to host static file based sites and applications. The term "static" is a bit confusing because it doesn't mean you can't display dynamic content, it just means that the underlying files are static. You can inject JavaScript into the mix to provide access to APIs and thus combine real-time data with pre-built content from the server side.

One immediate advantage of this approach is that it promotes great speed and security because there is no longer the need to render the same content multiple times as users request it via their browsers. Content is pre-built, ready to serve up and that means it is far harder, perhaps impossible to hack a site built on these principles.

