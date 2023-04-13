# woodshed.tech

In this document, our goal is to demonstrate how we make choices when building websites at Woodshed, a web design and development agency. You can read more about us at [woodshed.tech](https://woodshed.tech), which is built from the source code in this repository.

This document explains reasoning behind the choices we made when building woodshed.tech specifically. If you're interested in working with us, we would analyze the requirements of your project and make choices that are appropriate for your particular needs, which might result in a different setup.

If you have any questions, please reach out to us at [hello@woodshed.tech](mailto:hello@woodshed.tech).

> Note: the content that follows is intended for a general audience and does not presume any programming or web development experience. If you're looking for technical documentation, head over to [./docs/developer_notes.md](./docs/developer_notes.md).

## Web technologies

To explain our choices, it helps to understand a few core technologies that power what you see on the internet. As with any technical domain, there are a lot of acronyms and jargon, but we hope a brief introduction will provide some useful context.

-   **Hyper Text Markup Language (HTML)** is the language of web browsers. It's composed of elements (also known as "tags"), which define the semantics of the content that they contain. For example, a `<p>` element contains a paragraph, whereas an `<img>` contains an image. On its own, an HTML document provides content and semantic structure, but leaves a lot to be desired in terms of visual styling.
-   **Cascading Style Sheets (CSS)** provide the ability to take some HTML content and make it visually appealing. CSS allows us to set up fonts, colors, layouts, and animations. CSS can do more than just add visual styles, but this is its core purpose.
-   **JavaScript (JS)** is a programming language that is supported by web browsers. It's a scripting language, meaning it can "manipulate, customize, and automate the facilities of an existing system" ([Wikipedia](https://en.wikipedia.org/wiki/Scripting_language)). When it runs in a browser, it can modify HTML and CSS, adding and removing content and styling on the fly. This makes it very useful for making websites interactive.

An increasingly popular way to write JavaScript is to use **TypeScript (TS)**. TypeScript is essentially JavaScript with type checking, which is a way to validate the code and avoid common errors. TypeScript converts to JavaScript, and in the rest of this document, if we say JavaScript, we really mean either JS or TS.

## Web frameworks

It's possible to build a website by using only HTML, CSS and JS files. Another way is to use a "web framework," or suite of tools that help standardize and automate the process.

In its initial version, woodshed.tech is a simple website and it could be built without using a framework. However, there are a few reasons we decided to use a framework:

-   **Improved developer experience**

    Most frameworks are built to provide a smooth developer experience, including a fast setup and various commands that make common tasks easy and quick. This helps us keep our focus on writing code, rather than tinkering with configuration.

-   **Scalability**

    While pure HTML, CSS and JS will work fine for a smaller website, things can start to get messy as a site grows. A framework provides a standard way to organize our code into logical units that fit together, in a way that can grow to hundreds or thousands of pages without becoming messy and hard to understand.

-   **Documentation**

    Frameworks are well-documented and this gives us a large knowledge base to pull from when we need to figure out how to implement a feature or fix a bug. If we don't have write documentation for our own custom setup, it means we can spend more time on actually building the project.

-   **Tooling portability**

    As designers and developers, we're used to working with certain technologies, and many frameworks support the same tools we use in other projects. This allows us to avoid context switching as much as possible, which helps us stay productive.

It's also prudent to look ahead at how a project might grow, and whether the initial setup can meet future demands. For example, we might choose to add a blog to woodshed.tech. This is the kind of feature that is hard to build without a framework, and if we start with a framework from the beginning, it will be easier to incorporate a blog if and when we decide to do so.

### Rendering methods

Once we decided that it was worth it to use a web framework for woodshed.tech, the next choice we needed to make was which framework to use. Frameworks describe themselves as having a few ways of "rendering" webpages, or turning them into something the browser can display for the user. These rendering methods are commonly described by the acronyms **SSG**, **SSR**, and **CSR**.

-   **Static site generation (SSG)**

    SSG is where a framework creates a set of HTML, JavaScript and CSS files _before_ the user requests them by loading the site in a browser. The content is "static", meaning it doesn't change depending on who is viewing it or when it is being viewed. The code is typically organized in templates, which can take in some data and use it to populate each individual page.

-   **Server-side rendering (SSR)**

    In contrast to static site generation, SSR is a process where the server builds the response _when the user requests it_. When a user loads the site in a browser, the server can fetch "dynamic" content, typically from a database, and use it to populate the page. Among other things, this enables user-specific data which can be protected by a login, or "authentication."

-   **Client-side rendering (CSR)**

    Another way to render dynamic, user-specific data into a webpage is to use client-side rendering. This means that the server sends a small, mostly empty HTML document to the user along with a JS file. The JS code then pulls in data from one or more servers and uses it to modify the HTML as the user interacts with the site. This means it can also support authentication, similar to SSR.

These rendering methods can be blended together, and the boundaries can get blurry. Also, some frameworks can support more than one rendering method, but they often choose to prioritize one over another.

### CSS & Design

Another core consideration is how to write CSS within a web framework. Although you can use plain CSS files, developers often reach for a CSS tool that helps make styles easier to write and maintain. Our preferred solution is [TailwindCSS](https://tailwindcss.com/), which describes itself as a "utility-first CSS framework." TailwindCSS helps when writing CSS on a team or across multiple projects, because it removes the complexities that come from custom styles which can be spread across many files. It's also built on a design system, which is a way of defining style choices at a granular level to allow for building designs in a consistent way. In our projects at Woodshed, we use an integration to sync our design system between TailwindCSS and [Figma](https://www.figma.com/), our UI/UX design tool. We believe that close communication between design and development is paramount to an efficient workflow that produces quality websites.

## Web framework options

There are many good options when picking a web framework in 2023. Here are the choices we considered, and what our thoughts are on each one.

-   [WordPress](https://wordpress.org/) is a widely used SSR framework and Content Management System (CMS). This means it comes with an admin dashboard where you can create and edit content without any coding. It's a mature framework that powers a wide swath of the websites on the internet. However, it's designed primarily for blogs, and the codebase is mostly written in PHP. This makes it hard to customize and integrate with more modern tools which are mainly written in JavaScript. It also includes a whole set of features in its admin dashboard that would be extraneous for us, since we will be maintaining the content by writing code directly and don't need a CMS. This also rules out similar options like [Drupal](https://www.drupal.org/).
-   [React](https://react.dev/) is a JavaScript user interface (UI) library. Up until recently, it was used primarily as a way to develop single-page applications with CSR, which means you would develop most of the website in JS. This results in a good developer experience, because the developer can use the powers of a scripting language to build the UI. However, it can lead to poor user experience as the complexity of the site grows, especially if the user is on a slow network connection or using a low-memory device (i.e. a old phone in a subway). In terms of comparable UI libraries, we have the most experience in React, and it has become the de facto standard, so we didn't consider [Angular](https://angular.io/), [Vue](https://vuejs.org/) or other alternatives. There are frameworks built on top of React which offer some additional functionality (see Next.js and Remix below). We opted not to build a SPA with React, but wanted to keep the option of using it in the future if we choose to add a blog to woodshed.tech.
-   [Next.js](https://nextjs.org/) is a framework that uses React as its UI library, but empowers you to use SSG, SSR and CSR within the same website. Many developers choose to start with Next.js if they are building a React project because it offers a wide range of tools and supports React Server Components, a way to leverage React in SSR. We chose not to use Next.js because we didn't want to take the performance hit of loading and initializing React when we don't need to use it in our initial version of the site.
-   [Remix](https://remix.run/) is another framework that uses React as its UI library, so it is a natural alternative to Next.js. It has different opinions about how to load and modify data, and is built to support a pattern called "progressive enhancement," which helps in the "old phone in a subway" scenario. Although it's our preferred framework for projects that require more interactivity, we also decided not to use it for this project for the same reason that we decided against Next.js: we don't need React (yet).
-   [Eleventy](https://www.11ty.dev/) bills itself as primarily an SSG framework, but can support SSR through a plugin. It's optimized for speed, so it can handle building thousands of pages very quickly. It also allows you to selectively include UI libraries like React through something called "islands architecture." This would make it a good choice for woodshed.tech, because it would give us the ability to add a blog. It looks like an solid option with many reputable testimonials, and was our second choice for building woodshed.tech.
-   [Astro](https://astro.build/) is in the same camp as Eleventy, but has different opinions about how to organize code. We liked the structure of its `.astro` files which encapsulate HTML, CSS and JS into a single component. Coming from a React background, the component hierarchy makes a lot of sense to us. It also supports islands architecture, and allows you to add in React (or any other UI library) when and wherever you need to. If we choose to add a blog to woodshed.tech, it should be simple to get it working with Astro. In the end, we liked the balance of features and how it supported TailwindCSS out of the box.

## Have a look around

Feel free to explore this repo to see how we've built woodshed.tech. The main page is in [./src/pages/index.astro](./src/pages/index.astro), and this might be a good place to start.
