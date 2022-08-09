import Race from './Race';

export default class Halfling extends Race {
  public static count = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    Halfling.count += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}