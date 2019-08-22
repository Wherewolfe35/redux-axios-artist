# Full Stack React with Redux

For this activity you'll be adding Redux to the famous artists project. Redux has been partially set up in `index.js`.

## Setup

- Fork and clone this repository
- `npm install`
- `npm run server`
- `npm run client`

## Tasks

- [X] Move the client side artists array from `App.js` to the artistReducer.
- [X] Add a `Router` and navigation to `App.js`.
- [X] Create a new component with an add artist form. Make it available at `#/add-artist`.
- [X] When submitting the form, POST the new artist to your **server**. Send the user back to the route displaying the artist list. 
   - Data sent to the server should be in the format `{name: 'name of artist'}`. The id is added by the server.


## Stretch

- [X] Remove the `for` loop in `ArtistList` and replace it with a `.map`
- [X] Implement the delete route on the **server** using `.filter()`.
- [X] As the user types, store the input data in Redux so that it's not lost when the user navigates to the list and back to the form.
- [X] Move the data to a database.
- [X] Add additional properties to the form.
- [ ] Style with Material UI

