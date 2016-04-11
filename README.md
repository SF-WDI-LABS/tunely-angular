# tunely-angular lab

Full CRUD SPA with MEAN. Refactor of tunely by adding Angular.

Prerequisites:

* Express server, static assets
  * serving JSON on /api routes
* RESTful design
* Bootstrap
* CRUD with mongoose


Other tools
* bower is used, but students need not interact with it
  * components are automatically installed via an npm postinstall script


## Overview

This lab begins with no front-end and a fully built out Express/Mongoose back-end. As we progress through we'll:

* get the data from the server using `$http` and display it on the page
* add functionality to create a new album
* add functionality to remove/delete an album
* add the ability to edit/update an album
* add a route for viewing details of an album
* add functionality to CRUD songs (embedded in albums)


## Getting Started

* fork and clone this lab repo
* read this doc then proceed to sprint 1


## Sprints

#### Sprint 1

[Sprint 1: set up a simple Angular app with hard-coded data](/docs/angular/sprint1.md)

#### Sprint 2

[Sprint 2: `GET` and `POST` album data with the Express back-end](/docs/angular/sprint2.md)

#### Sprint 3

[Sprint 3: `UPDATE` and `DELETE` album data with the Express back-end](/docs/angular/sprint3.md)

#### Sprint 4

[Sprint 4: refactor app to use `ngRoute` and view templates](/docs/angular/sprint4.md)

#### Sprint 5

[Sprint 5: add ability to CRUD songs](/docs/angular/sprint5.md)
