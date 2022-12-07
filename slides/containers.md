---
layout: presentation
title: Containers
permalink: /slides/containers/
---

class: center, middle

# Containers

Standardized efficient highly-portable boxes within which to run software.

---

# Agenda

1. [Overview](#overview)
1. [A Brief History of Virtualization](#virtualization)
1. [Containers in Detail](#containers)
1. [Docker Setup](#docker-setup)
1. [Docker Commands](#docker-commands)
1. [Try Docker](#docker-example)
1. [Docker Networking](#docker-networking)
1. [Docker Volumes](#docker-volumes)
1. [Docker Devices](#docker-devices)
1. [Building Docker Images](#docker-build)
1. [Deploy A Containerized App](#deploy)
1. [Starting/Stopping Multiple Containers Together](#docker-compose)
1. [Conclusions](#conclusions)

---

name: overview

# Overview

--

## Concept

A container is a small, standardized, portable, self-contained virtual environment within which application code can run.

--

- Containers represent a logical "next step" in the evolutionary history of system virtualization.

---

name: virtualization

# A Brief History of Virtualization

--

## Bare metal machines

In ancient times, a server was a physical device affectionately called a "box" or a "machine".

--

- These boxes, like your personal devices, typically had one set of hardware, an operating system, and some applications installed on them.

---

template: virtualization

## Bare metal machines (continued)

Bare metal machines give their users complete control over the machine

--

- complete control over hardware

--

- complete control over software

--

- physical isolation - no "noisy neighbor" problem, no shared infrastructure

--

- potential for greater security

--

- potential for greater performance (i.e. for High Performance Computing)

---

template: virtualization

## Bare metal machines (coninued again)

![A bare metal machine](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Finsurancehub.com%2Fwp-content%2Fuploads%2F2016%2F09%2Flaptop-fire-insurancehub.jpg&f=1&nofb=1)

---

template: virtualization

## Bare metal machines (continued once more)

These boxes had (and still have) some inconvenient properties.

--

- The boxes take up a lot of physical space.

--

- Maintaining a machine is a lot of [expensive] work

--

- The configuration of one bare metal machine is difficult to replicate on another with different hardware.

--

- The hardware has finite capacity to scale up.

---

template: virtualization

## Blade and rack servers

Computer hardware, loaded with the operating system and applications, was eventually reduced to a single hardware card.

--

- Many such cards are slotted into a single "box", reducing space and sharing a single power supply for multiple machines.

--

- Easy to set up for load balancing, where all machines in the box share the load.

--

- Rack servers and blade servers are differentiated by how much infrastructure is shared by the machines.

--

- Rack servers are more self-contained machins, each including their own storage, cooling fans, power supply, etc. Blade servers often contain just the CPU, network I/O cards, memory, and perhaps a bit of storage.

--

- In either form, blade and rack servers thus share some physical infrastructure, with rack servers sharing more than blade servers.

---

template: virtualization

## Blade and rack servers (continued)

![A blade server](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.rackmountmart.com%2Fprodspics%2Frm8003-01.jpg&f=1&nofb=1)

---

template: virtualization

## Blade and rack servers (continued again)

Blade servers and rack servers are not without their complications.

--

- They tend to require more cooling than dedicated bare metal servers.

--

- As with bare metal machines, any hardware is likely to quickly become out-of-date depreciate in value over time.

---

template: virtualization

## Virtual machines

With increases in computing power, an entire machine could be virtualized

--

- hardware and software are emulated

--

- one physical "host" machine can now run many emulated virtual machines

--

- multiple operating systems can even be run on a single host machine.

--

- higher-level "hypervisor" software launches, monitors, and manages the virtual machines on the host

--

- virtual machines are sandboxed, protecting against one consuming the resources of another.

---

template: virtualization

## Virtual machines (again)

![Virtual machine](../images/virtual_machine_diagram.png)

---

template: virtualization

## Virtual machines (continued again)

For most use-cases, virtual machines have significant benefits over traditional bare metal, rack, and blade servers.

--

- virtual machines reduced the time to provision, or set up, a server, compared to their physical machine counterparts

--

- virtual machines reduce the risk of choosing inappropriate hardware

--

- virtual machines simplify the choice of hardware and software for the consumer

---

template: virtualization

## Virtual machines (continued once more)

But as with all technology, virtual machines have their downsides.

--

- each virtual machine encapsulates its own operating system

--

- this adds significant memory overhead and a large footprint to each virtual machine

--

- virtual machines are also not very portable because of this

---

template: virtualization

## Containers

Containers are a refinement of the concept of a virtual machine.

--

- containers only include the bare minimum environment setup necessary for the application they have hosted within them to run.

--

- containers do not encapsulate the operating system, and are thus small footprint and highly portable

--

![Virtualization evolution](https://knowledge.kitchen/mediawiki/images/d/d3/Comparison_of_server_virtualization_systems.png)

---

name: containers

# Containers in Detail

--

## Advantages

Containers are virtual environments that contain the bare minimum necessary to deploy an application on any machine - physical or virtual.

--

- removes compatibility problems moving a container from one machine to another.

---

template: containers

## Players

Docker is the leader in the container field. However, it is still an open competitive new field:

- Docker
- [Kubernetes](https://kubernetes.io/)
- CoreOS [rkt](https://coreos.com/rkt/)

--

The main cloud services providers all support containers:

- Amazon's [Elastic Container Service](https://aws.amazon.com/ecs/) supports containers
- [Microsoft Azure](t.com/en-us/azure/containers/) supports containers
- Google Cloud [Kubernetes Engine](https://cloud.google.com/kubernetes-engine/) supports containers
- IBM Cloud's [Kubernetes Service](https://www.ibm.com/cloud/container-service/) supports containers
- Red Hat's [OpenShift Container Platform](https://www.openshift.com/products/container-platform) supports containers

---

template: containers

## False Dichotomy

“Kubernetes vs. Docker” is a false dichotomy. Docker and Kubernetes are not exactly competitors...

--

- Docker is a Container Platform

--

- Kubernetes is a Container Orchestrator

--

- ... [read more](https://www.sumologic.com/blog/kubernetes-vs-docker/) about this

---

template: containers

## Image

A container's configuration is specified in its "image"

- images are the stuff from which containers are made

--

- i.e. containers are instances of an image

--

- creating a container is achieved by designing an image and instantiating it

--

- a single image can be instantiated into many containers, which can then be run across many different machines in a cloud hosting environment, if desired

---

template: containers

## Registry

A container registry is a central server that hosts images

--

- allow sharing of those images with teammates and/or the public

--

- essentially the same concept as repositories in version control

--

- Examples: [Docker Hub](https://hub.docker.com/) and [Docker Store](https://store.docker.com/)

---

template: containers

## Security

Containers do not run in total isolation from one-another.

--

- This currently makes containers a bit less secure than more isolated environments.

--

- However, containers can improve the reliability of testing, since since testing, development, and deployment environments are all set up the same way - as reproducible, portable containers.

--

- [Many traditional operations experts have concerns](https://www.youtube.com/watch?v=PivpCKEiQOQ)

---

template: containers

## Automation

Containers can be integrated with automation tools, such as Jenkins, Travis CI, CircleCI, GitHub Actions, or via settings within container registries such as Docker Hub.

--

- see more on [linking GitHub to Docker](https://docs.docker.com/docker-hub/builds/link-source/) for [automated builds on commit](https://docs.docker.com/docker-hub/builds/#link-to-a-hosted-repository-service)

---

name: setup

# Docker Setup

--

## Install and run it

In order to build and run docker images and containers, you will need to install it.

--

- Install the [Docker Desktop client](https://www.docker.com/products/docker-desktop)

--

- Create an acount at [Docker Hub](https://hub.docker.com/).

--

- Once Docker Desktop is installed, run it.

--

- Then, open up a terminal and log in to Docker Hub with `docker login`

---

name: docker-commands

# Docker Commands

--

## Manage containers

A few commands to help manage running containers:

--

- `docker run --name <custom_container_name> -ti <image name>` - download (if necessary) and instantiate a container from an image

--

- `docker exec -ti <container_name> <command>` - execute a command in a running container

--

- `docker ps` - list running containers

--

- `docker ps -a` - list all containers (including currently stopped containers)

--

- `docker stop <container_id or container_name>` - stop a running container (it will still exist in 'exited' mode)

--

- `docker rm <container_id or container_name>` - delete a container

--

- `docker container prune` - delete all stopped containers

---

template: docker-commands

## Manage images

And... a few more commands to help manage images:

--

- `docker images` - list all available images

--

- `docker rmi <image_id>` - delete an image

--

- `docker image prume` - delete all unused images

---

name: docker-example

# Try Docker

--

## Download and run an image

Download and run a container built from an image stored on the Docker Hub registry.

--

```bash
docker run -ti --rm bloombar/se_welcome:latest
```

--

- This image will be instantiated into a container that runs on your local machine.

--

- The `-ti` flags will put the container into "interactive mode", allowing the standard input and output of the host machine to be forwarded to/from the container.

--

- The `--rm` flag will delete the container from memory once it is stopped.

--

- The container will automatically execute a python script... this is because the image was built with a `CMD` directive in its `Dockerfile`... more on this [in a bit](#dockerfile).

---

template: docker-example

## Download and run an image (continued)

The previous command instantiates a container, but your command shell (i.e. terminal) remains focused on your host machine. You can navigate into the container and poke around the files by opening up a `bash` shell within the container.... quit the container, if already running, and then run - you will notice it looks and acts like a virtual machine:

```bash
docker run -ti bloombar/se_welcome:latest bash
```

--

Rather than stopping a container and then running it again, you can also open up a `bash` shell within the container while it is already running:

```bash
docker exec -ti <container_id or container_name> bash
```

--

- To discover a given container's name or id, review the [docker commands](#docker-commands).

---

template: docker-example

name: dockerfile

## Dockerfile

The configuration of each image is written in a `Dockerfile` build script - this is what I used to create the example image:

```bash
# in Docker, it is common to base a new image on a previously-created image
# Use an official Python runtime image as a parent image to base this image on
FROM python:2.7-slim
# Set the working directory within the image to /app
WORKDIR /app
# the ADD command is how you add files from your local machine into a Docker image
# Copy the current directory contents into the container at /app
ADD . /app
# Install any needed packages specified in requirements.txt
# in Python, a requirements.txt file is a way of indicating dependencies in a way that the package manager, pip, can understand
RUN pip install --trusted-host pypi.python.org -r requirements.txt
# by default Docker containers are closed off to the external world
# Make port 80 available to the world outside this container
EXPOSE 80
# Define an environment variable... this will be available to programs running inside the container
ENV NAME World
# Run app.py when the container launches
CMD ["python", "app.py"]
```

---

template: docker-example

## Dockerfile (continued)

Notice that the Dockerfile for this example image references another image named `python:2.7-slim`.

--

- It is common convention to use an existing image as the basis for a new image.

--

- Search Docker Hub or Docker Store for an image that is suitably close to what you need, and then create a new Dockerfile that builds on top of it.

--

- Docker builds images in layers... it builds dependency images first before building the additional changes you have specified in your Dockerfile.

---

template: docker-example

## Example Dockerfile for React.js front-end

```bash
# start from the node v16 base image
FROM node:16

# create an app directory within the image...
# WORKDIR /app

# install dependencies into the image - doing this first will speed up subsequent builds, as Docker will cache this step
COPY package*.json ./
RUN npm install

# copy the remaining app source code into the default directory within the image
COPY . .

# expose port 4000 to make it available to the docker daemon
EXPOSE 4000

# define the runtime command that will be executed when a container is made from the image
CMD [ "npm", "start" ]
```

---

template: docker-example

## Example Dockerfile for Express.js back-end

```bash
# start from the node v16 base image
FROM node:16

# create an app directory within the image...
# WORKDIR /app

# install dependencies into the image - doing this first will speed up subsequent builds, as Docker will cache this step
COPY package*.json ./
RUN npm install

# copy the remaining app source code into the default directory within the image
COPY . .

# install dependencies into the image
RUN npm install

# expose port 3000 to make it available to the docker daemon
EXPOSE 3000

# define the runtime command that will be executed when a container is made from the image
CMD [ "node", "server.js" ]
```

---

template: docker-example

## Try running a containerized React.js / Express.js app

We have containerized a [simple React.js / Express.js application](https://github.com/nyu-software-engineering/data-storage-example-app).

--

Launch the React.js front-end as a background process on port 4000:

--

```bash
docker run -p 4000:4000 -d bloombar/data-storage-example-app-front-end
```

--

Launch the Express.js back-end as a background process on port 3000:

```bash
docker run -p 3000:3000 --restart unless-stopped -d bloombar/data-storage-example-app-back-end
```

--

Open your favorite web browser and navigate to http://localhost:4000

---

name: docker-networking

# Docker Networking

--

## Overview

By default, **containers do not have access to the host machine's standard input/output** and networking ports.

--

- To run a container that forwards standard input to the container and forwards connections on one of the host machine's ports to the same port on the container:

```
docker run --rm -ti -p 45678:45678 ubuntu:latest
```

--

So now incoming connections to port `45678` of the host machine will forward to port `45678` of the container. _The numbers do not need to match_.

---

template: docker-networking

## Multiple ports

To open several ports, simply repeat the -p option:

```
docker run --rm -ti -p 45678:45678 -p 3000:80 ubuntu:latest
```

--

So now incoming connections to port `45678` of the host machine will forward to port `45678` of the container and incoming requests to port `3000` of the host machine will forward to port `80` of the container.

---

template: docker-networking

## Create Docker Network

Multiple docker containers can be interconnected within a single a docker network. This simplifies the process of having one container communicate with another.

--

- Create a docker network with the [`docker network create <put-any-options-here> <network-name>`](https://docs.docker.com/engine/reference/commandline/network_create/) command, e.g. `docker network create foobar_network`.

--

- Containers can be added to the network with the `docker run` using the `--network <network-name>` flag, e.g.
  - `docker run --name db --p 27017:27017 --network foobar_network -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo:latest`
  - `docker run -ti --name web_app --network foobar_network bloombar/flask-mongodb-web-app-example`

--

- Code within a container on this network can now reference other containers on the same network by their container name.
  - `mongo:latest` can be referenced as `db` within the `web_app` container, e.g. `mongosh db:27017 --username admin --password secret` (assuming the `web_app` container has the [mongosh](https://www.mongodb.com/docs/mongodb-shell/) shell installed).

---

name: docker-volumes

# Docker Volumes

--

## Overview

By default, **Docker containers have no persistent storage** and do not have access to the host machine's file system. Sometimes it is desirable to have a container that has access to the host machine's file system, for example so data can persist beyond the lifetime of one container.

--

To attach a storage volume to a container, use the `-v` option:

```
docker run -ti ubuntu:latest -v /path/on/host:/path/in/container
```

---

template: docker-volumes

## Example

For example, MongoDB databases usually store data in a `/data/db` directory. To map a directory on the host machine's file system, e.g. `/Users/foobarstein/Desktop/mongodb_data`, to this container directory, use the following command:

```bash
docker run -ti -d -p 27017:27017 mongo:latest -v /Users/foobarstein/Desktop/mongodb_data:/data/db
```

--

- Now, the database files will be stored on the host machine's file system, and will persist beyond the lifetime of the container.

--

- PS: the `-d` option runs the container in the background in "detached mode".

---

name: docker-devices

# Docker Devices

--

## Overview

By default, **Docker containers do not have access to devices** attached to the host machine.

--

- no access to cameras

--

- no access to microphones

--

- no access to USB devices

--

- etc.

---

template: docker-devices
name: docker-devices-linux

## Access all devices

Docker provides a [privileged mode](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities) that allows a container to **access all devices** attached to the host machine.

```bash
docker run -ti --privileged ubuntu:latest
```

--

Applications running within the container can now access all host machine devices, which on \*NIX machines are located in the `/dev` directory, e.g. `/dev/video0`, `/dev/snd`, etc.

--

... at least on Linux...

---

template: docker-devices

## Access specific devices

To **access only specific devices** on the host machine to the container, use the `--device` option:

```bash
docker run -ti --device /dev/video0 ubuntu:latest
```

--

If you need to map a host machine device, e.g. `/dev/sda` to a different device name in the container, e.g. `/dev/xvdc`, use a colon separating host device name from container device name, e.g.:

```bash
docker run -ti --device /dev/sda:/dev/xvdc ubuntu:latest
```

--

To support multiple devices, just repeat the `--device` flag, e.g.:

```bash
docker run -ti --device /dev/video0 --device /dev/sda:/dev/xvdc ubuntu:latest
```

--

Applications running within the container can now access the specified host machine devices...

--
at least on Linux...

---

template: docker-devices

## Attaching Windows or Mac devices to containers

It turns out that the default virtual machine used by Docker, within which containers are run, is **unable to provide access to devices attached to the host machine on Mac and Windows**! To get around this, a different virtual machine must be used.

--

- At the time of this writing, this requires a lot of fiddling with settings - see [here](https://medium.com/@jijupax/connect-the-webcam-to-docker-on-mac-or-windows-51d894c44468) and [here](https://stackoverflow.com/questions/33985648/access-camera-inside-docker-container) for setting up the camera. And [here](https://stackoverflow.com/questions/54702179/how-to-access-mac-os-x-microphone-inside-docker-container) for setting up the microphone on Mac.

--

- It may be necessary to research the latest documentation, discussions and tutorials on this topic.

---

template: docker-devices

## Attaching a Raspberry Pi's devices to containers

Why yes, I'm glad you asked!

--
You can [run Docker containers on the Raspberry Pi](https://raspberrytips.com/docker-on-raspberry-pi/)!

--

- [Raspberry Pi](https://raspberrypi.com) is a series of small cheap powerful single circuit board computers often used for educational purposes and in embedded systems and "Internet of Things" devices, where computers are placed in physical objects, communicating with each other and other systems across the Internet.

--

- It is possible to install a variety of operating systems on Pis. The most popular is [Raspbery Pi OS](https://www.raspberrypi.com/software/), a variation of the [Debian](https://en.wikipedia.org/wiki/Debian) Linux distribution.

--

- One nice thing about using a Linux-based operating system, rather than Mac or Windows, is that it's possible to **run Docker** on it and it's possible to **connect any devices** connected to the host machine (e.g. camera, microphone, and a wide variety of other [add-on devices](https://www.adafruit.com/category/286)) [to the container](#docker-devices-linux), since this is simple with Linux.

---

name: docker-build

# Building Docker Images

--

## Overview

To build a Docker image and share it with Docker Hub,

- Log in to Docker Hub from the command line with `docker login`

--

- Create a project directory with a [Dockerfile](#dockerfile) that outlines the steps to build the image.

--

- Build and name an image from the Dockerfile in the current dir and tag it: `docker build -t <username>/<repository_name> .`, where `<username>` is your DockerHub username and `<repository_name>` is your project name.

--

- Test out your image by running a container from it locally: `docker run -ti --rm <username>/<repository_name>`

--

- Tag your image with a version number: `docker tag <username>/<repository_name> <username>/<repository_name>:<version>`, where `<version>` is replaced with the version, e.g. `v1`.

--

template: docker-build

## Build for multiple processor types

Docker images are by default built for the same type of processor type as the machine on which the `docker build` command is run, typically processors that follow the [x86](https://en.wikipedia.org/wiki/X86) instruction set. This works fine when building images that will run on common desktop/laptop machines. However, many mobile devices and embedded computing devices such as the Raspberry Pi, use [ARM processors](https://en.wikipedia.org/wiki/ARM_architecture_family), whose instruction sets are not compatible with that of `x86` processors. When building Docker images that must be able to run on multiple processor types, Docker's [buildx](https://docs.docker.com/engine/reference/commandline/buildx_build/) tool allows building images for multiple processor types in a single command.

--

- e.g. `docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t <username>/<repository_name> .`

---

template: docker-build

## Push and pull images from Docker Hub

Built images can be distributed to/from the Docker Hub registry with commands that are designed to emulate `git`'s interactions with GitHub.

--

- Push an image to the Docker Hub registry: `docker push <username>/<repository_name>:<version>`

--

- Pull an image from the Docker Hub registry: `docker pull <username>/<repository_name>:<tag>`

--

Recall that `docker pull` is not necessary if simply desiring to run a container from an image, as `docker run ...` will automatically pull if necessary.

---

name: deploy

# Deploy A Containerized App

--

## Moving containers to production

Because of their small footprint and high portability, containers are simple to deploy on cloud compute providers, such as Amazon AWS, Microsoft Azure, Heroku, or Digital Ocean.

--

- A completely containerized **app may consist of several distinct container images**, with the back-end logic, database, and static front-end content all housed in separate containers made from separate images.

--

- Digital Ocean is a hosting provider that makes deploying Docker containers quite simple - you can launch a **Droplet** running a Docker container for free (to start) with a [referral link](https://m.do.co/c/4d1066078eb0)

---

template: deploy

## Moving containers to production (continued)

- Check out [this example React.js / Express.js app](https://github.com/nyu-software-engineering/data-storage-example-app) containing both a containerized front-end and back-end. Check out the Dockerfiles.

--

- MongoDB provides an easy-to-follow tutorial for [running a containerized MongoDB instance](https://www.mongodb.com/compatibility/docker) locally.

--

- In a **continuous deployment** setup, a new Docker image would be generated with every change to the codebase (e.g. every merge or push to the `main` branch), posted to Docker Hub, pulled to a remote server, and instantiated into a running container - [see an example](https://maximorlov.com/automate-your-docker-deployments/).

---

name: docker-compose

# Docker Compose

--

## Scenario

In many projects, a system is composed of multiple subcomponents, each isolated in their own Docker container, but running on the same host. In such cases, we typically want to start and stop all containers together, and make sure they can communicate with one another, as they are interdependent.

--

- For example, a web app may have a front-end container, a back-end container, and a database container. We want to start all three containers together, and make sure the front-end container can communicate with the back-end container, and the back-end container can communicate with the database container.

---

template: docker-compose

## The solution

In these situations, we can use [Docker Compose](https://docs.docker.com/compose/) to start and stop multiple containers together and treat them as a single unit.

---

template: docker-compose

## Settings files

The services necessary to start all containers are defined in Docker Compose's configuration `docker-compose.yml` file. Once defined, a single command can be used to create and start all services necessary to run the application.

--

- Each containerized subsystem has its own [Dockerfile](#dockerfile), just as it would when being run independently. This is necessary to define the build instructions for the image from which containers of that type are made.

--

- Docker Compose can take care of setting up volumes, ports, and networks for each container, rather than setting those things up as command line options when running each container separately.

---

template: docker-compose

## Example: MERN-stack web app

An example `docker-compose.yaml` for a basic [MERN-stack](https://www.mongodb.com/mern-stack) web app:

```yaml
version: "3.8"

services:
  frontend:
    build: ./front-end # build the Docker image from the Dockerfile in the front-end directory
    ports:
      - 3000:3000 # map port 3000 of host machine to port 3000 of container
    depends_on:
      - backend
    command: npm start # command to start up the front-end once the container is up and running
# ... continued on next slide...
```

---

template: docker-compose
name: docker-compose-example-backend

## Example: MERN-stack web app (continued)

```yaml
# ... continued from previous slide

backend:
  build: ./back-end # build the Docker image from the Dockerfile in the back-end directory
  ports:
    - 5000:5000 # map port 5000 of host machine to port 5000 of container
  environment:
    DB_HOST: mongodb://db/foobar # set the DB_HOST environment variable to refer to a 'foobar' db in the 'db' service defined later in this docker-compose file
  depends_on:
    - db
  volumes:
    - ./uploads:/uploads # a directory on the host machine where we can store any files uploaded to the back-end container
  command: npm start # command to start the back-end once the container is up and running
# ... continued on next slide...
```

---

template: docker-compose

## Example: MERN-stack web app (continued again)

```yaml
# ... continued from previous slide

db:
  image: mongo:4.0-xenial # use a recent version of the official MongoDB image on Docker Hub
  ports:
    - 27017:27017 # map port 27017 of host machine to port 27017 of container
  volumes:
    - ./db:/data/db # a directory on the host machine where the data in the container's database will be stored
```

That's it.... all three services are now configured in the `docker-compose.yaml` and ready to run.

---

template: docker-compose

## Starting all containers

Now start up the application - all containers will be booted up with their ports and volumes set.

```bash
docker compose up
```

--

If you need to rebuild the components before starting them, use the `--build` flag:

```bash
docker compose up --build
```

--

To run the containers in "detached mode", i.e. in the background:

```bash
docker compose up -d
```

---

template: docker-compose

## Viewing a list of running containers

As you know, docker allows you to view a list of containers with `docker ps` or `docker ps -a`.

--

To view only those containers started with `docker-compose`, run:

```bash
docker-compose ps
```

--

Or, to see all, including stopped containers:

```bash
docker-compose ps -a
```

---

template: docker-compose

## Networking among containers

All containers started with `docker-compose` are automatically connected to a single network named after the directory in which the `docker-compose.yaml` file is located. Each service is named after the key used to define it in the `docker-compose.yaml` file.

--

To verify this for yourself, jump into the command shell of one of the running containers started by `docker-compose`, for example our earlier `frontend` container:

```bash
docker exec -it frontend bash
```

--

Following our earlier example, the `backend` service defined in the [docker-compose.yaml example above](#docker-compose-example-backend) is now accessible from within the `frontend` container by referencing the name `backend`:

```bash
curl http://backend:5000/your-favorite-backend-api-route/
```

---

template: docker-compose

## Stopping all containers

To stop containers started with `docker-compose up`, run the opposite command:

```bash
docker-compose down
```

---

name: conclusions

# Conclusions

--

You have now had a brief introduction to how container technology fits into the evolution of computer virtualization.

--

- Thank you. Bye.
