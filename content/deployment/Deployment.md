---
title: Deployment on Digital Ocean
permalink: /deployment/basic/
---

# Set up a CentOS server on DigitalOcean for Node.js deployment

This document outlines one method of setting up a Node.js-ready web server running CentOS, hosted by [DigitalOcean](https://m.do.co/c/4d1066078eb0).

**Disclaimers**:

- There are certainly other ways to deploy a Node.js app on a DigitalOcean Droplet which will work just as successfully.
- The steps outlined below work at the time of this writing, but may have to be adjusted to match changes in the technologies used as time goes by.
- The link to Digital Ocean above includes a referral code - this will give you **$50 free credit**. Considering that a simple Digital Ocean Droplet server costs $5/month, this credit will serve you very well. I will receive a discount on my own account should you begin paying for DigitalOcean once your free credit runs out.

## Create a Digital Ocean Droplet

- Create an account on Digital Ocean
- Create a Droplet - select the cheapest plan with no extra options
- Choose CentOS as the operating system

## Create a local SSH key

Create an assymetric pair of keys locally (on your own computer):

```bash
ssh-keygen -t rsa
```

Save the keys into the default file presented. Do not set a password.

This creates two keys in two files:

- id_rsa - your private key... never share this with anyone
- id_rsa.pub - your public key... feel free to share this

## Copy the SSH key to Digital Ocean

Locate the file with the public key you created in the previous step and copy the contents to the clipboard.

The following example shows how to do this for a user named `foobar` on a Mac.

```bash
cat /Users/foobar/.ssh/id_rsa.pub | pbcopy
```

Now paste this into the Digital Ocean SSH Key page and save.

## Log into the Digital Ocean Droplet

With SSH keys in place on both your local machine and the Digital Ocean server, you can log in:

```bash
ssh root@123.456.789
```

Note: if you receive a `Permission denied` error when running `ssh`, you can try specifying the location of the private key file with the `-i` flag, e.g. `ssh -i ~/.ssh/id_rsa root@123.456.789`.

## Update the system

Update any out of date CentOS packages:

```bash
yum -y update
```

Install a variety of development tools:

```bash
yum -y groupinstall "Development Tools"
```

A basic text editor, vim:

```bash
yum -y install vim
```

And a better text editor, emacs:

```bash
yum -y install emacs
```

Networking tools:

```bash
yum -y install net-tools
```

Git version control:

```bash
yum -y install git
```

## Install Node.js

Downloading of Node.js packages is handled on CentOS by running a bash script. The following command downloads the bash script and pipes it to bash for execution:

```bash
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
```

Node.js is not yet installed. To install it, run the following:
on CentOS

```bash
yum install -y nodejs
```

Now Node.js is installed. Trust but verify. Run the following to check the versions of node and npm:

```bash
node -v
```

```bash
npm -v
```

## Install a few common modules globally

Install the popular Node.js app manager, PM2. This is used to keep a Node.js app running as a daemon and restarts it automatically if it crashes:

```bash
npm install -g pm2
```

If you desire PM2 to launch automatically when the server boots up and start any Node.js applications it has been set to manage, the following command will output a command which you can copy/paste and run:

```bash
pm2 startup systemd
```

Install simple http server so we can quickly serve web pages for testing:

```bash
npm install -g http-server
```

## Try serving a simple web page

Create a super-simple home page in a file named `index.html`:

```bash
echo "Hello World!" > index.html
```

Run the http-server module:

```bash
http-server
```

Various IP addresses of the server should be displayed. The address 127.0.0.1 is a private address that only refers to the server from the server itself - ignore it. Copy the next one, which is your IP address on the Internet.

Paste the IP address into the address bar of a web browser and hit Enter.

The web page should show up in the web browser.

If so, congrats - you have set up your own web server!

You may stop this server and delete the `index.html` file whenever you desire.

## Create another user

It is considered a bad idea to do any development as the root superuser.

Create a regular user account that you will use to set up an app:

```bash
adduser foobar
```

Add this user to the group of administrators of this machine. On CentOS, all users in the `wheel` group can use the `sudo` command to run commands as the `root` administrator user:

```bash
usermod -aG wheel foobar
```

Set a password for this user. Enter a password when prompted:

```bash
passwd fooobar
```

## Switch to regular user account

Switch to the new user account:

```bash
sudo su - foobar
```

```bash
whoami
```

Change to this user's home directory:

```bash
cd ~
```

Set up the SSH keys to allow connections without passwords to this account. Only the user itself should be able to see this directory:

```bash
mkdir .ssh
chmod 700 .ssh
```

Create a file inside that directory:

```bash
touch .ssh/authorized_keys
chmod 600 .ssh/authorized_keys
```

Copy and paste the same SSH public key from your local machine that you pasted into Digital Ocean's SSH key page into this `authorized_keys` file using a command-line text editor of your choice, such as vim or emacs.

Save the file and quit the text editor.

## Log out of the server

First return from the regular user account back to the root account:

```bash
exit
```

Log out of the server completely:

```bash
logout
```

## Log in as a regular user

SSH again to the server as the regular user account. Replace the example username and IP address below with your own:

```bash
ssh foobar@123.456.789
```

Note: if you receive a `Permission denied` error when running `ssh`, you can try specifying the location of the private key file with the `-i` flag, e.g. `ssh -i ~/.ssh/id_rsa foobar@123.456.789`.

This server is now ready for you to develop and deploy a Node.js web app.

## Install Nginx as reverse proxy server

In order to have your web app appear when a web browser visits your server on port 80 - the default port for web requests - you will need to set up nginx to act as a reverse proxy "front server". This will direct all HTTP requests at port 80 to your node.js server on port 8080.

Other advantages to using nginx are:

- easy serving of cached _static files_, rather than running dynamic scripts in response to each request
- easy setup of _https_ instead of regular http for secure/encryptic requests/responses
- easy set up of _load balancing_, where multiple instances of your server share the burden of responding to requests

The following commands install the nginx web server software on CentOS and set it up as a reverse proxy.

Install the EPEL repository, which incluldes "extra packages for enterprise linux", including nginx:

```bash
sudo yum install -y epel-release
```

Install nginx:

```bash
sudo yum install -y nginx
```

Start nginx by using `systemctl` a process manager for system-related tools:

```bash
systemctl start nginx
```

Verify nginx starteed:

```bash
systemctl status nginx
```

Have nginx start automatically whenver the system reboots:

```bash
sudo systemctl enable nginx
```

Determine your server's IP address using `ip addr` or `ifconfig` - from either command, you will see several IP addresses output by. Ignore the `loopback` address, which simply represents the address of your server when it talks to itself, and look for the ethernet `eth0` addresss:

```bash
ip addr
```

If you now use a web browser to navigate to `http://your_ip_address`, you should see a message that `nginx` has been installed and is running.

By default, nginx serves files located in the `/usr/share/nginx/html` directory. You can place files in that directory to publish them. To change this server root directory, edit the configuration in `/etc/nginx/conf.d/default.conf`.

Nginx can host multiple web servers, known as Virtual Hosts. To set up virtual hosts, add new configuration files to `/etc/nginx/conf.d` - any files in this directory named `*.conf` are loaded when nginx is started.

## References

These notes are based on a few sources:

- [Digital Ocean's SSH key guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2)
- The very thorough [video tutorial of setting up Node.js on Cent OS with DigitalOcean by Juriy Bura](https://www.youtube.com/watch?v=XCgCjasqEFo&list=PLQlWzK5tU-gDyxC1JTpyC2avvJlt3hrIh&index=2)
