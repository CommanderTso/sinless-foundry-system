import SinlessItemBase from "./item.mjs";

export default class SinlessItem extends SinlessItemBase {

  static defineSchema() {
    // @ts-ignore
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.rarity = new fields.NumberField({ ...requiredInteger, initial: 1, min: 1 });
    schema.reach = new fields.NumberField({ ...requiredInteger, initial: 1, min: 1 });
    schema.weight = new fields.NumberField({ ...requiredInteger, initial: 1, min: 1 });
    schema.conceal = new fields.NumberField({ ...requiredInteger, initial: 1, min: 1 });
    schema.damage = new fields.SchemaField({
      forceType: new fields.BooleanField({required: true, nullable: false, initial: false}),
      forceDamage: new fields.String(),
      amount: new fields.String({required: true, nullable: false}),
      ap: new fields.NumberField({ ...requiredInteger, initial: 0, min: 0}),
      flavorText: new fields.StringField()
    });
    schema.cost = new fields.NumberField({ ...requiredInteger, initial: 0, min: 0 });
    schema.skills_allowed = new fields.ArrayField


    // schema.roll = new fields.SchemaField({
    //   diceNum: new fields.NumberField({ ...requiredInteger, initial: 1, min: 1 }),
    //   diceSize: new fields.StringField({ initial: "d20" }),
    //   diceBonus: new fields.StringField({ initial: "+@str.mod+ceil(@lvl / 2)" })
    // })

// - Rarity
// - Reach
// - Weight
// - Conceal
// - Damage - array of objects as below
//   - force_type - boolean (stunsticks)
//   - forced_damage_type - physical or stun
//   - damage_amount - int
//   - AP - (include AP here because vibroweapons can lose AP if off)
//   - flavor_text - if needed to differentiate multiple damage possibilities
// - Cost ($$$)
// - Attack Skill Used - array - (needed for monofilament whip, dual-mode weapons like knife)
// - Some sort of flavor text with the output for special effects (Power Fists, 3 successes on brawn or go prone)


    return schema;
  }

  prepareDerivedData() {
  }
}