import Race from './Race';

export default class Dwarf extends Race {
  public static count = 0;
  private _maxLifePoints = 80;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    Dwarf.count += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}