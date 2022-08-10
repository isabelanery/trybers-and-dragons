import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  public static count = 0;
  private _energyType = 'mana' as EnergyType;

  constructor(
    name: string,
  ) {
    super(name);

    Mage.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}