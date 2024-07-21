import { SinlessActor } from '../documents/actor.mjs'
import { createTestActor } from './test_utils.mjs'

/**
 * Registers all example tests, which also serves as a quick self-test.
 *
 * @param quench - the quench instance the tests are registered with
 */
export function registerExampleTests(quench) {
  for (const batchFunction of [registerCharacterStatsCalcTestBatch]) {
    batchFunction(quench)
  }
}

function registerCharacterStatsCalcTestBatch(quench) {
  quench.registerBatch(
    'sinless.character.stats-calculation',
    (context) => {
      const { describe, it, assert, expect, should } = context
      /**
       * Handles a shared context to pass between functions
       *
       * @type {object}
       */
      const shared = {}
      /** @type {SinlessActor} */
      let actor
      // const messages = [];
      before(async () => {
        // Requires actor to NOT be temporary for initiative rolls
        actor = await createTestActor({})
        shared.actor = actor
      })
      after(async () => {
        await actor.delete()

        // Clean messages
        // ChatMessage.implementation.deleteDocuments(messages.map((o) => o.id));
      })

      describe('Character Basic Stats Calculation Test Suite', function () {
        it('Caclulates the brawn dice pool correctly', function () {
          expect(actor.system.pools.brawn).to.equal(21)
        })

        it('Caclulates the finesse dice pool correctly', function () {
          expect(actor.system.pools.finesse).to.equal(26)
        })

        it('Caclulates the focus dice pool correctly', function () {
          expect(actor.system.pools.focus).to.equal(25)
        })

        it('Caclulates the resolve dice pool correctly', function () {
          expect(actor.system.pools.resolve).to.equal(33)
        })
      })
      describe('Character Chr Bonus Test Suite', function () {
        it('Correctly assigns the charisma bonus pool dice', function () {
          expect(actor.system.charismaPoolSelection.selected).to.equal('b')
          expect(actor.system.pools.finesse).to.equal(26)
          actor.system.charismaPoolSelection.selected = 'a'
          actor.prepareDerivedData()
          expect(actor.system.pools.brawn).to.equal(25)
          actor.system.charismaPoolSelection.selected = 'c'
          actor.prepareDerivedData()
          expect(actor.system.pools.resolve).to.equal(37)
          actor.system.charismaPoolSelection.selected = 'd'
          actor.prepareDerivedData()
          expect(actor.system.pools.focus).to.equal(29)
        })
      })
    },
    {
      displayName: 'SINLESS: Character Stats Calculation',
    },
  )
}
