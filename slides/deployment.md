---
layout: presentation
title: Continuous Deployment
permalink: /slides/deployment/
---

class: center, middle

# Deployment

Making an application live and available to its users.

---

# Agenda

1. [Overview](#overview)
1. [Production environment](#production-environment)
1. [Cloud deployments](#cloud-deployments)
1. [Virtual machines and containers](#virtualization)
1. [Kubernetes](#kubernetes)
1. [Continuous deployment](#cd)
1. [Conclusions](#conclusions)

---

name: overview

# Overview

--

name: definitions

## Definitions

A few terms to disambiguate.

---

template: definitions

### Delivery

- **Delivery** is placing an app into its target environment and preparing it to be accessed by its end-users, but not actually executing it.

--

- **Continuous delivery** is automatically delivering new versions every time a change is made to the underlying code.

---

template: definitions

### Deployment

- **Deployment** is making executing the delivered app and making it available to its end-users.

--

- **Continuous deployment** is automatically deploying new versions every time a change is made to the underlying code.

---

template: overview

## Caveats

New releases of software, of course, must still successfully build and pass unit, integration and system tests before deployment.

---

template: overview

## Automation Pipeline

With version control, code linters, automated builds, and automated testing, continuous deployment is the natural evolution of a fully automated software development pipeline.

---

name: production-environment

# Production environment

--

## Hosting levels

There are several levels of hosting available for web applications, with many companies and services catering to each type

- Shared hosting
- Virtual Private Servers (VPS)
- Dedicated machines
- Cloud services

---

template: production-environment

## Shared hosting

With shared hosting, a developer receives an account on a web server shared by hundreds, if not thousands, of other developers.

- Historically the cheapest form of hosting
- May have restrictions in what is allowed to bee done in the account
- If one developer consumes more resources than expected, other developers may feel the effects

--

Universities and other large organizations often provide shared hosting for their community members.

---

template: production-environment

## Virtual Private Servers (VPS)

With VPS, a developer receives a virtual machine running on a physical machine shared by hundreds, if not thousands, of other users.

- A step up from shared hosting
- Developers usually have discretion to do whatever they want in their virtual machine
- Each virtual machine runs in an isolated, sandboxed environment, so one account is unaffected by resourcee usage of another

---

template: production-environment

## Dedicated machine

With a dedicated machine, i.e. a bare metal server, developers buy or rent a single physical machine managed by either themselves or the hosting company from whom it is rented.

- A dedicated physical machine
- Admin rights to do whatever you want with it
- Software and hardware management services usually offered at additional cost.

---

template: production-environment

## Cloud deployments

Deploying to "the cloud" is a catch-all term for deploying to a remote server that is [managed by a third party](https://www.zdnet.com/article/stop-saying-the-cloud-is-just-someone-elses-computer-because-its-not/).

---

name: cloud-deployments

# Cloud deployments

--

![The cloud is just someone else's computer](../files/deployment/the-cloud-someone-else.png)

---

template: cloud-deployments

## Cloud services

"The cloud" is usually used to mean a grid of hundreds or thousands of physical computers all inter-networked and sharing resources, but presented to a developer as a single virtual machine.

- Any one application may run spread across many different physical machines.

---

template: cloud-deployments

## Cloud resources

Cloud services providers offer a variety of resources to developers.

- Virtual machines and/or containers (a.k.a "_compute_" services)
- Databases
- Storage
- Networking

In addition to these, there are many accessory services such as load balancing, monitoring, logging, analytics, security, etc.

---

template: cloud-deployments

## Big tech

The world of cloud deployment is dominated by a few players:

- [Amazon Web Services](https://aws.amazon.com/)
- [Microsoft Azure](https://azure.microsoft.com/)
- [Google Cloud](https://cloud.google.com/)

Their offerings are generally industrial-strength hosting solutions with obtuse interfaces and extensive capabilities that may be overkill and intimidating for non-specialists.

---

template: cloud-deployments

## X-as-a-Service

The cloud is often referred to as a "service", with a few common levels of service available to [paying] customers:

![X-as-a-Service](../files/deployment/x-as-a-service.png)

_Image courtesy of Microsoft Azure's "[What is PaaS](https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-paas/)"._

---

template: cloud-deployments

## Infrastructure-as-a-Service (IaaS)

Some services handle much of the setup of a cloud infrastructure (compute resources, storage resources, networking interoperability, etc) without requiring the user to configure all details.

- [Amazon Lightsail](https://aws.amazon.com/lightsail/)
- [Amazon CloudFormation](https://aws.amazon.com/cloudformation/)
- [Microsoft Azure](https://azure.microsoft.com/en-gb/resources/cloud-computing-dictionary/what-is-azure/azure-iaas/#products)
- [Google Cloud](https://cloud.google.com/solutions/infrastructure-modernization)
- [Digital Ocean](https://www.digitalocean.com)
- [IBM Cloud Foundry](https://www.cloudfoundry.org/the-foundry/ibm-cloud-foundry/)
- [Linode](https://www.linode.com/)

From IaaS, developers leverage The Cloud to receive the necessary preconfigured [virtual] hardware and networking abilites upon which to develop.

---

template: cloud-deployments

## Platform-as-a-Service (PaaS)

Whereas IaaS provides the pre-set hardware and networking of a cloud deployment, PaaS additional provide the pre-set configuration of dependencies and platforms necessary to deploy a specific type of application.

- [Amazon AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)
- [Microsoft Azure Web Apps](https://azure.microsoft.com/en-us/products/app-service/web/?b=17.09)
- [Google App Engine](https://cloud.google.com/appengine/)
- [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform)
- [IBM Cloud Foundry](https://www.cloudfoundry.org/the-foundry/ibm-cloud-foundry/)
- [Salesforce Platform](https://www.salesforce.com/products/platform/overview/)
- [Platform.sh](https://platform.sh/)
- [Dokku](https://dokku.com/)

From PaaS, developers receive an environment with platform systems already setup on an appropriate cloud compute and storage inrastructure and they can simply get to work on a specific type of project development.

---

name: virtualization

# Virtual machines and containers

--

## Overview

Cloud compute services are provided as either virtual machines or containers.

--

- Cloud-based virtual machines can run containers, if desired.

--

- Additionally, some providers offer container services directly, abstracting away the virtual machines away so developers don't have to worry about them.

---

template: virtualization

## Example

For example, Digital Ocean, provides both virtual machines which they call [Droplets](https://www.digitalocean.com/products/droplets) and direct container deployments using [Kubernetes](https://www.digitalocean.com/products/kubernetes).

---

name: kubernetes

# Kubernetes

--

## Overview

[Kubernetes](https://kubernetes.io/) (a.k.a. `k8s`) is a container "orchestrator" - it manages the deployment of containers across a cluster of machines.

--

- a "_cluster_" is a group of machines in a "cloud" data center that work together to run a single service.

--

- a "_node_" is a single machine in a cluster, usually a virtual machine but could be physical.

--

- a "_pod_" is a group of one or more containers that run together on a single node, with a single IP address and other shared resources.

---

template: kubernetes

## Comparison to Docker Compose

Docker Compose and kubernetes are designed for different use cases.

--

- Docker Compose can orchestrate a set of containers _all running on the same machine_. This is usually fine for small deployments with a limited number of containers.

--

- For larger deployments, where multiple instances of each container might be needed, or where the containers will not necessarily all be running on the same machine, kubernetes is the orchestrator of choice.

--

- Kubernetes implementations usually start with at least 3 nodes for redundancy.

---

template: kubernetes

## Components of a Kubernetes cluster

![Kubernetes cluster](../files/deployment/kubernetes-cluster.png)

---

template: kubernetes

## Components of a Kubernetes cluster (continued)

Each node in a cluster runs a container using a container runtime engine, like [Docker](https://docker.com) or [containerd](https://containerd.io/).

--

- The nodes within a cluster are managed by a "**Control Plane**" that makes sure applications within the cluster are running with the correct configuration in the desired state.

--

- Each node in the cluster runs "**Kubelet**" - software that manages the containers running on that node and communicates with the control plane.

--

- Developers typically interact with the cluster using the "[kubectl](https://kubernetes.io/docs/tasks/tools/)" command-line tool to deploy, inspect, and manage cluster resources.

---

name: cd

# Continuous deployment

--

## Overview

Continuous Deployment (CD) is the process of automatically deploying new versions of a software application to a production environment with every change to the codebase.

--

- Continuous Deployment usually follows Continuous Integration (CI; automated builds and tests), in what is known as the **CI/CD pipeline**.

--

- CD would only take place if the CI tests pass.

--

- The same tools and processes used for CI can be used for CD. For example, [Jenkins](https://jenkins.io/), [Travis CI](https://travis-ci.com/), [Circle CI](https://circleci.com/), and [GitHub Actions](https://github.com/features/actions) ] all can be used for both CI and CD.

---

template: cd

## Simple pipeline

A CI/CD pipeline for a simple (non-containerized) application might involve the following steps:

--

1. Developer pushes code to a repository (e.g. GitHub, GitLab, Bitbucket, etc.)

--

2. CI server (e.g. Jenkins, Travis CI, Circle CI, GitHub Actions, etc.) builds and runs tests on the code.

--

3. If the tests pass, the CI server _copies the code to the production environment_ [using the `rsync` command](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories) to copy the code from the build server to the production server.

--

4. The production server deploys the application by stopping and restarting it.

--

5. The updated application is now available to users.

---

template: cd

## Simple containerized pipeline

A similar CI/CD pipeline that runs the application either directly with Docker or using Docker Compose (but not using Kubernetes) might involve the following:

--

1. Developer pushes code to a repository (e.g. GitHub, GitLab, Bitbucket, etc.)

--

2. CI server (e.g. Jenkins, Travis CI, Circle CI, GitHub Actions, etc.) builds and runs tests on the code.

--

3. If the tests pass, the CI server _uploads the built Docker image to a container registry_ such as DockerHub.

--

4. The CI server _deploys a container using the new image_ to the production environment using [`docker` or `docker-compose` commands](https://faun.pub/full-ci-cd-with-docker-github-actions-digitalocean-droplets-container-registry-db2938db8246).

--

5. The updated application is now available to users.

---

template: cd

## Kubernetes pipeline

Deploying to a Kubernetes cluster follows similar steps:

--

1. Developer pushes code to a repository (e.g. GitHub, GitLab, Bitbucket, etc.)

--

2. CI server (e.g. Jenkins, Travis CI, Circle CI, GitHub Actions, etc.) builds and runs tests on the code.

--

3. If the tests pass, the CI server _uploads the built Docker image to a container registry_ such as DockerHub,'

--

4. The CI server _deploys a kubernetes cluster using the new image_ [using `kubectl` commands](https://developer.ibm.com/blogs/use-a-github-action-to-deploy-an-app-to-kubernetes/).

--

5. The updated application is now available to users.

---

name: conclusions

# Conclusions

Thank you. Bye.
