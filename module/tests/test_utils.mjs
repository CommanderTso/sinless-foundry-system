import { SinlessActor } from '../documents/actor.mjs'

/**
 * Options affecting the creation of test actors
 *
 * @typedef {object} CreateTestActorOptions
 * @property {boolean} [temporary] - Whether only a temporary actor should be created
 * @property {boolean} [prepareData] - Whether a temporary actor's data should be prepared
 */

/**
 * @param {object} data - Additional data merged into the actor to be created
 * @param {CreateTestActorOptions} options - Additional options affecting the actor's creation
 * @returns {Promise<SinlessActor>} The created actor
 */
export const createTestActor = async (data = {}, options = {}) => {
  const createData = foundry.utils.mergeObject(
    {
      name: 'Sinless Test Character',
      type: 'character',
      system: {
        attributes: {
          strength: { value: 11 },
          body: { value: 13 },
          reaction: { value: 13 },
          intelligence: { value: 15 },
          willpower: { value: 17 },
          charisma: { value: 19 },
        },
        charismaPoolSelection: {
          selected: 'b',
        },
      },
    },
    data,
  )
  //   const { temporary = false, prepareData = true } = options;
  /** @type {SinlessActor} */
  const actor = await SinlessActor.create(createData)
  //   if (temporary && prepareData) actor.reset();
  return actor
}

// brawn is full strength + half body + fourth willpower
// brawn: 11 + 6 + 4 = 21

// finesse is half body + full reaction + quarter intelligence +
// finesse: 6 + 13 + 3 = 22 + charisma bonus = 26

// focus is half reaction + full intelligence + fourth willpower
// focus: 6 + 15 + 4 = 25

// resolve is half intelligence + full willpower + half charisma
// resolve: 7 + 17 + 9 = 33

// fourth charisma to anything!
