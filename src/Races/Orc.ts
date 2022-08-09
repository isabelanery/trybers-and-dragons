import Race from './Race';

export default class Orc extends Race {
  public static count = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    Orc.count += 1;
  }

  static createdRacesInstances(): number {
    return Orc.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}