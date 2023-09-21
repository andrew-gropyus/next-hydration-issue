# Next hydration issue

A reproduction of a race condition in hydrating pages.

The following conditions appear to be important for this reproduction:

* A dynamic path segment
* A layout in the dynamic portion
* A css file
* Standalone mode

To reproduce the issues:

1. `npm install`
2. `./start.sh`
3. Visit `localhost:3000/en/red` in either edge or chrome
4. Reload the page and immediately (within a few ms) click on the link to blue
5. Notice that the request to fetch the blue page completes, however the hydration does not complete for 60 seconds.
