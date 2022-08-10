import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  public static count = 0;
  private _energyType = 'stamina' as EnergyType;

  constructor(
    name: string,
  ) {
    super(name);

    Warrior.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}