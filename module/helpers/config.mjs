export const SINLESS = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */

SINLESS.attributes = {
  strength:     'SINLESS.Attributes.Strength',
  body:         'SINLESS.Attributes.Body',
  reaction:     'SINLESS.Attributes.Reaction',
  intelligence: 'SINLESS.Attributes.Intelligence',
  willpower:    'SINLESS.Attributes.Willpower',
  charisma:     'SINLESS.Attributes.Charisma',
};

SINLESS.round = (x) => {
  if (typeof(x) === "number") {
    return "rounded!"
  } else {
    throw new Error("Tried to round something that was not a number.")
  }

}