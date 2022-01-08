---
layout: blog_post
title: Socket Chat Golang
date: 2022-01-08T23:00:00.000+00:00
description: Websocket-based chat app in Golang
categories:
- go
- frontend
- backend
- websocket
- project
image: "/assets/images/ephm/ephm.jpg"
pdf: 'none'


---
### What is it?

This is a weekend project online chat app based on WebSockets written in Go. Frontend is built with pure HTML, JS, and TailwindCSS. Messages only last for the duration of the session and are not saved anywhere other than the HTML displayed. Any number of users can join the chat, and they can all pick usernames.

### How does it work?

Server serves a home page (server-side rendered html/js/css) and accepts socket connections. Whenever a client connects, a goroutine is launched that accepts JSON payloads from that client forever, and feeds them into a channel.

The frontend responds to server messages (ex. message broadcast, user listing). The server saves all socket connections (and their corresponding usernames, TODO: fix bug for duplicate usernames) and uses them to broadcast new users and messages.

{% include image.html file="ephm/ephm.png" description="Desktop version" %}

{% include image.html file="ephm/ephm_mobile.png" description="Mobile version" %}