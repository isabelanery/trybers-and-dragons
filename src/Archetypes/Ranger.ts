import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  public static count = 0;
  private _energyType = 'stamina' as EnergyType;

  constructor(
    name: string,
  ) {
    super(name);

    Ranger.count += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.count;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}