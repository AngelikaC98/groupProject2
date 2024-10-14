# Cycle or drive

This is a small collaborative project by a team of students at Vefskólinn for Module 3.

We are building a simple web application that suggests if a person should cycle or drive to work, with the aim of motivating them to get outside and reap the health and environmental benefits.

## General structure

It is primarily written with vanilla Typescript. In order to allow us to safely use Google Maps with an API key, we have created a proxy API server in the backend folder.

The client side code sits inside the frontend folder.

## Setup

To install, go to the root folder and run

```bash
npm --prefix ./backend install ./backend && npm --prefix ./frontend install ./frontend
```

To run tests, cd to frontend or backend and run npm test.
