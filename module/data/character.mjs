import SinlessActorBase from "./actor-base.mjs";

export default class SinlessCharacter extends SinlessActorBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    // schema.attributes = new fields.SchemaField({
    //   level: new fields.SchemaField({
    //     value: new fields.NumberField({ ...requiredInteger, initial: 1 })
    //   }),
    // });

    // Iterate over attribute names and create a new SchemaField for each.
    schema.attributes = new fields.SchemaField(Object.keys(CONFIG.SINLESS.attributes).reduce((obj, attribute) => {
      obj[attribute] = new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 1, min: 1 }),
        label: new fields.StringField({ required: true, blank: true })
      });
      return obj;
    }, {}));

    return schema;
  }

  prepareDerivedData() {
    // Loop through ability scores, and add their modifiers to our sheet output.
    for (const key in this.attributes) {
      // Calculate the modifier using d20 rules.
      this.attributes[key].mod = Math.floor((this.attributes[key].value - 10) / 2);
      // Handle ability label localization.
      this.attributes[key].label = game.i18n.localize(CONFIG.SINLESS.attributes[key]) ?? key;
    }
  }

  getRollData() {
  //   const data = {};

  //   // Copy the ability scores to the top level, so that rolls can use
  //   // formulas like `@str.mod + 4`.
  //   if (this.abilities) {
  //     for (let [k,v] of Object.entries(this.abilities)) {
  //       data[k] = foundry.utils.deepClone(v);
  //     }
  //   }

  //   data.lvl = this.attributes.level.value;

  //   return data
  }
}
