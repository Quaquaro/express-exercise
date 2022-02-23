import express from "express";
import { nanoid } from "nanoid";

const router = express.Router();

let jokes = [
  {
    id: 0,
    joke: "Thanks for explaining the word “many” to me, it means a lot.",
  },
  {
    id: 1,
    joke: "Why did Adele cross the road? To say hello from the other side.",
  },
  {
    id: 2,
    joke: "What kind of concert only costs 45 cents? A 50 Cent concert featuring Nickelback.",
  },
  {
    id: 3,
    joke: "To the person who invented zero, thanks for nothing.",
  },
];

/**
 * Exercise 1
 * Create a GET /joke route, that returns all jokes.
 */
router.get("/", (req, res, next) => {
  res.json(jokes);
});

/**
 * Exercise 2
 * Create a GET /joke/:id route, that returns the joke for the given id.
 */
console.log();
router.get("/:id", (req, res) => {
  const joke = jokes[req.params.id];
  res.json(joke);
});

// …

/**
 * Exercise 3
 * Create a POST /joke route, that adds a new joke to the array.
 */

router.post("/", (req, res) => {
  const saveJoke = { id: nanoid(), joke: req.body.joke };
  jokes.push(saveJoke);
  res.json(saveJoke);
});
// …

/**
 * Exercise 4
 * Create a PATCH /joke/:id route, that updates the joke for the given id.
 */
router.patch("/:id", (res, req) => {});
// …

/**
 * Exercise 5
 * Create a DELETE /joke/:id route, that deletes the joke for the given id.
 */

// …

export default router;
