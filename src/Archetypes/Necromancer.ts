import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  public static count = 0;
  private _energyType = 'mana' as EnergyType;

  constructor(
    name: string,
  ) {
    super(name);

    Necromancer.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}