# woodshed.tech

This document explains reasoning behind the technical choices we made when building the website at [https://woodshed.tech](https://woodshed.tech). It's intended for a general audience and does not presume any web development experience. If you're looking for technical documentation, head over to [./docs/developer_notes.md](./docs/developer_notes.md).

## Web technologies

There are a few core technologies that power the websites on the internet.

1. Hyper Text Markup Language (HTML)
   HTML is the language of web browsers. It's composed of elements (also known as "tags"), which define the semantics of the content that they contain. For example, a `<p>` element contains a paragraph, whereas an `<img>` contains an image. On its own, an HTML document provides content and semantic structure, but does not provide any visual styling.
2. Cascading Style Sheet (CSS)
   CSS takes some HTML content and make it visually appealing. It give us the ability to choose fonts, colors, layouts, and animations. CSS can actually do more than this, but its core function is to style the HTML.
3. JavaScript (JS)
   JavaScript is a programming language that is supported by web browsers. It's a scripting language, meaning it can "manipulate, customize, and automate the facilities of an existing system" ([Wikipedia](https://en.wikipedia.org/wiki/Scripting_language)). When it runs in the browser, it can modify HTML and CSS, adding and removing content and styling on the fly. This makes it very useful for making websites interactive.

In 2023, an increasingly popular way to write JavaScript is to use TypeScript (TS). TypeScript is essentially JavaScript with type checking, which is a way to validate the code and avoid common errors. It converts to JavaScript, and in the rest of this document, if we say JavaScript, we really mean either JS or TS.

## Web frameworks

It's possible to build a website by using only HTML, CSS and JS files. Another way to build a website is to use a "web framework", which is defined as:

> a software framework that is designed to support the development of web applications including web services, web resources, and web APIs. Web frameworks provide a standard way to build and deploy web applications on the World Wide Web. Web frameworks aim to automate the overhead associated with common activities performed in web development. For example, many web frameworks provide libraries for database access, templating frameworks, and session management, and they often promote code reuse. ([Wikipedia](https://en.wikipedia.org/wiki/Web_framework))

In its initial version, woodshed.tech is not a large website and it could be built entirely in plain HTML, CSS and JS files without using a framework. However, there are a few reasons we decided to use a web framework.

1. Improved developer experience
   This is the core reason we chose to use a framework. It provides a fast setup and comes with various commands that make common tasks easy and quick, so we can keep our focus on writing code, rather than fiddling with configuration.
2. Scalability
   While pure HTML, CSS and JS will work fine for a smaller website, things can start to get messy as a site grows. A framework provides a standard way to organize our code into logical units that fit together, in a way that can grow to hundreds or thousands of pages without becoming untenable.
3. Documentation
   Frameworks are well documented and this gives us a large knowledge base to pull from when we need to figure out how to implement a feature or fix a bug. If we don't have to spend time writing documentation on our own custom setup, it means we can focus more on actually building the project.
4. Tooling portability
   As designers and developers, we're used to working with certain technologies, and a modern framework will support the same tools we use in other projects. This allows us to avoid context switching as much as possible.

### Rendering methods

Once we decided that it was worth it to use a web framework for woodshed.tech, the next choice we needed to make was which framework to use. Frameworks describe themselves as having a few ways of rendering webpages, commonly described by the acronyms SSG, SSR, and CSR.

1. Static site generation (SSG)
   This means a framework can create a set of HTML, JavaScript and CSS files that can be put onto a file server and deployed as a public website. The content is "static", meaning it doesn't change depending on who is viewing it. The code is organized in templates, which can take in some data and use it to populate the pages so they can be prepared for serving to the user ahead of time.
2. Server-side rendering (SSR)
   In contrast to static site generation, SSR builds the response _at request time_. When a user loads the page in the browser, the server loads "dynamic" content - typically from a database - and uses it to populate the page. This opens up many capabilities, namely user-specific data which can be protected by a login, or "authentication."
3. Client-side rendering (CSR)
   Another way to render dynamic, user-specific data into a webpage is to use client-side rendering. This means that the server sends a bare-bones HTML document to the user along with a JavaScript bundle. The JS bundle then pulls in data from one or more API servers and uses it to modify the HTML. This means it can also support user-specific data and authentication, like SSR.

These rendering methods can be blended together, and the boundaries can get blurry, but it helps to know the landscape when picking a framework. Also, some frameworks can support more than one rendering method.

### Framework options

There are many good options when picking a web framework in 2023. Here are the choices we considered, and what our thoughts are on each one.

-   [WordPress](https://wordpress.org/) is a widely used SSR framework and Content Management System (CMS). This means it comes with an admin dashboard where you can create and edit content without any coding. It's a mature project that powers a wide swath of the websites on the internet. However, it's designed primarily for blogs, and the codebase is mostly written in PHP. This makes it hard to customize and integrate with more modern tools which are mainly written in JavaScript\*. It's also a bit overkill for this project, since we will be maintaining the content by writing code directly and don't need a CMS.
-   [React](https://react.dev/) is a JavaScript library that can been used in many ways. Up until recently, it was used primarily as a CSR framework, which means you would develop the entire website as a single page application, or SPA. This results in a good developer experience, because you can essentially write everything in JS, which reduces context switching. However, it can lead to poor user experience, because running JavaScript in the browser comes with some performance cost. Large React SPAs commonly ha
-   [Eleventy](https://www.11ty.dev/) is

## TailwindCSS

set up with [TailwindCSS](https://tailwindcss.com). The project was initialized by running:

```
npm create astro@latest -- --template with-tailwindcss
```

For complete Tailwind setup instructions, please see the [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).
