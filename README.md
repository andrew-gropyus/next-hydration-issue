# Next hydration issue

A reproduction of a race condition in hydrating pages.

The following conditions appear to be important for this reproduction:

* A dynamic path segment
* A layout in the dynamic portion
* A css file

To reproduce the issues:

1. `npm install && npm run build && npm run start`
2. Visit `localhost:3000/en/red` in either edge or chrome
3. Reload the page and immediately (within a few ms) click on the link to blue
4. Notice that the request to fetch the blue page completes, however the hydration does not complete for 60 seconds.
