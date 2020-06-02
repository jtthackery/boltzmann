'use strict'

function setupMiddlewareFunc (/* your config */) {
  // startup configuration goes here
  return function createMiddlewareFunc (next) {
    return async function inner (context) {
      // do things like make objects to put on the context
      // then give following middlewares a chance
      // route handler runs last
      // awaiting is optional, depending on what you're doing
      const result = await next(context)
      // do things with result here; can replace it entirely!
      // and you're responsible for returning it
      return result
    }
  }
}

module.exports = [
    setupMiddlewareFunc
]