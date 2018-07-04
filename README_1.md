# generator-jhipster-ojet
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> JHipster blueprint, Oracle JET JHipster generator

# Introduction

This is a [JHipster](http://jhipster.github.io/) blueprint, that is meant to be used in a JHipster application.

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) blueprint, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://jhipster.github.io/installation.html)

# Installation

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-ojet
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-ojet
```

## With NPM

To install this blueprint:

```bash
npm install -g generator-jhipster-ojet
```

To update this blueprint:

```bash
npm update -g generator-jhipster-ojet
```

# Usage

To use this blueprint, run the below command

```bash
jhipster --blueprint ojet
```


## Running local Blueprint version for development

During development of blueprint, please note the below steps. They are very important.

1. Link your blueprint globally 

Note: If you do not want to link the blueprint(step 3) to each project being created, use NPM instead of Yarn as yeoman doesn't seem to fetch globally linked Yarn modules. In the other hand this means you have to use NPM in all the below steps as well.

```bash
cd ojet
npm link
```

2. Link a development version of JHipster to your blueprint (optional: required only if you want to use a non-released JHipster version, like the master branch or your own custom fork)

You could also use Yarn for this if you prefer

```bash
cd generator-jhipster
npm link

cd ojet
npm link generator-jhipster
```

3. Create a new folder for the app to be generated and link JHipster and your blueprint there

```bash
mkdir my-app && cd my-app

npm link generator-jhipster-ojet
npm link generator-jhipster (Optional: Needed only if you are using a non-released JHipster version)

jhipster -d --blueprint ojet

```

# License

Apache-2.0 © [Geertjan Wielenga](blogs.oracle.com/geertjan)


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-ojet.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-ojet
[travis-image]: https://travis-ci.org/geertjanw/generator-jhipster-ojet.svg?branch=master
[travis-url]: https://travis-ci.org/geertjanw/generator-jhipster-ojet
[daviddm-image]: https://david-dm.org/geertjanw/generator-jhipster-ojet.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/geertjanw/generator-jhipster-ojet
