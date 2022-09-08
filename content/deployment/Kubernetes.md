---
title: Deployment with Kubernetes on Digital Ocean
permalink: /deployment/kubernetes/
---

# Deploying with Kubernetes and Docker on Digital Ocean

## Terminology

First a few terms we need to be familiar with. Containers will be placed into pods. Pods are run on nodes. Nodes are grouped into clusters.

- **Workload** - an application running on Kubernetes.
- **Node** - a virtual or physical machine on which the containers will run.
- **Cluster** - a collection of several nodes. The **control plane** of a cluster determines which containers are running on the nodes in the cluster, and what resources should be made available to them.
- **Pod** - the smallest deployable units of computing that you can create and manage in Kubernetes. Pods are one or more containers grouped together, with shared storage and network resources. The containers within a pod are run in a shared context.

## Containerize the app

Create a `Dockerfile` with instructions for creating the image from which containers will be made. At the very least, the `Dockerifle` should:

- use the `FROM` command to specify a base image... pick one that is close to what you want yours to be like. E.g. for simple NodeJS-based apps, `FROM node:16`
- use the `COPY` command to copy the application code from the host machine into the image, e.g. `COPY . .` to copy everything from the current directory into the image's default directory.
- use the `RUN` command to run any commands within the image, e.g. `RUN npm install` for NodeJS npm-based apps.
- use the `EXPOSE` command to expose any ports that need to be accessible from outside in order to communicate with the app, e.g. `EXPOSE 3000`
- use the `CMD` command with an array specifying a command and any arguments that should be executed when a container is first instantiated from this image, e.g. `CMD [ "npm", "start" ]`

Build the image with `docker build`. Use the `-t` flag to give this version of the image a name and a tag in the pattern, `docker build -t <dockerhub_username>/<image_name>:<tag_name>`.

## Push the image to a registry

Push the image to the Docker Hub registery with `docker push`, e.g. `docker push <dockerhub_username>/<image_name>:<tag_name>`. This assumes you have already logged in to Docker Hub with `docker login`.

Alternatively, if hosting with DigitalOcean, push your image to the DigitalOcean Container Registry

- Install `doctl`, DigitalOcean's command-line tool
- `doctl registry login` to log into the Container Registry
- `docker tag <tag_name> registry.digitalocean.com/<org_name>/<image_name>`
- `docker push registry.digitalocean.com/<org_name>/<image_name>`
- You should now see the image in the Docker Container Registery

## Set up a Kubernetes cluster

Clusters can be set up either in the DigitalOcean web app or from command line:

- `doctl kubernetes cluster create <cluster_name>`
- `kubectl get nodes` - kubernetes command line tool to show the node info
- there will be 3 nodes (Droplets) created by default on the cluster
- `kubectl get pods -A` - should show a bunch of pods

Pods are the workloads.. the core of kubernetes.

## Deploy at least 3 replicas of container in the cluster

## Expose the app to the Internet
