# graphql-meteor-example
Made for a talk at meteor columbus on 2016-02-3

#Why
The aim of this repo is to demonstrate how a combo of **graphql + meteor 1.3-beta-4** can:
- unify Mongo and Sql backends, while creating application level relations between them
- derive *graph-ish* recursive edge relationships from a vanilla sql db

#Notes
- This was drawn from the @arunoda [graphql-lokka demo](https://github.com/kadira-samples/meteor-graphql-demo), though with the version bump into 1.3, double DB, and modularization, it was not quite worth cloning/forking and modifying. Just some old school copy/paste where applicable.

- For now, this just exposes facebook's open source `graphiql` query IDE on the client and omits the simple blog UI built from react components on the @arunoda demo. This is to focus on the graphql side and stay on topic during the talk. Otherwise things could stray heavily into relay and react, which is a great conversation to have, but deserves its own night.

#Setup
If you want to run this locally, just make sure you have the following things in order:

##Meteor
If meteor is not already installed on the target system
**For OS X or Linux**

*Install the latest official Meteor release from your terminal:*

`curl https://install.meteor.com/ | sh`

-

**For Windows (don't use windows for this, i mean come on)**

[Download the official Meteor installer](https://install.meteor.com/windows)

##Docker
Install the [docker toolkit](https://docs.docker.com/engine/installation/mac/) and run `docker-compose up` from project the root. A docker container should be started with the appropriate data for running this application.

If docker was not previously installed/utilized, the above steps will depend on the default *linux host for docker containers* being started, which can be accomplished with

```
docker-machine default start # or restart
```

If this was successful, run:

```
docker-machine env default
```

Which should yield something like the following:

```
export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="tcp://192.168.99.100:2376"
export DOCKER_CERT_PATH="/Users/Koleok/.docker/machine/machines/default"
export DOCKER_MACHINE_NAME="default"
# Run this command to configure your shell:
# eval "$(docker-machine env default)"
```

Then run the command in output _(`eval "$(docker-machine env default)"`)_ to configure shell.


The mysql connection references `dockerhost`, which will most likely not exist on your system to start with. This can be resolved by getting the docker-machine vm ip with:

```
docker-machine ip default
```

and adding the line

```
<vm ip>   dockerhost
```

to the `hosts` file, where `<vm ip>` is the result of running the above `docker-machine` command _(ex: 192.168.99.100)_. Or alternatively just editing the connection in `server/imports/sql/connection.js` and substituting the IP address from above.

---

##Npm modules
Install to pull in dependencies.

```
npm install
```

Start app with:

```
npm start
```

_Note: the start script is mapped in `package.json` to execute `meteor -p 3003`_

Visit the [fancy graphiql UI](http://localhost:3003/graphql/ide?schema=Blog) and play around
