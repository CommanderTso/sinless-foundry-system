export const SINLESS = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */

SINLESS.attributes = {
  strength:     'SINLESS.ActorData.Attributes.Strength',
  body:         'SINLESS.ActorData.Attributes.Body',
  reaction:     'SINLESS.ActorData.Attributes.Reaction',
  intelligence: 'SINLESS.ActorData.Attributes.Intelligence',
  willpower:    'SINLESS.ActorData.Attributes.Willpower',
  charisma:     'SINLESS.ActorData.Attributes.Charisma',
};

SINLESS.round = (x) => {
  if (typeof(x) === "number" && x >= 0) {
    return (x > 0) && (x < 1) ? 1 : Math.floor(x)
  } else if (typeof(x) === "number" && x < 0){
    throw new Error("SINLESS.round is not designed to handle negative numbers.")
  } else {
    throw new Error("Tried to round something that was not a number.")
  }
}