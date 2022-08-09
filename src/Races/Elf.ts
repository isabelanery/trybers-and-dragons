import Race from './Race';

export default class Elf extends Race {
  public static count = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    Elf.count += 1;
  }

  static createdRacesInstances(): number {
    return Elf.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}