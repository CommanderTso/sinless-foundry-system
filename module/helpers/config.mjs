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

SINLESS.abilities = {
  str: 'SINLESS.Ability.Str.long',
  dex: 'SINLESS.Ability.Dex.long',
  con: 'SINLESS.Ability.Con.long',
  int: 'SINLESS.Ability.Int.long',
  wis: 'SINLESS.Ability.Wis.long',
  cha: 'SINLESS.Ability.Cha.long',
};

SINLESS.abilityAbbreviations = {
  str: 'SINLESS.Ability.Str.abbr',
  dex: 'SINLESS.Ability.Dex.abbr',
  con: 'SINLESS.Ability.Con.abbr',
  int: 'SINLESS.Ability.Int.abbr',
  wis: 'SINLESS.Ability.Wis.abbr',
  cha: 'SINLESS.Ability.Cha.abbr',
};

SINLESS.round = (x) => {
  if (typeof(x) === "number") {
    return "rounded!"
  } else {
    throw new Error("Tried to round something that was not a number.")
  }

}