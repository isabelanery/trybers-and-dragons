export default abstract class Race {
  constructor(private readonly _name: string, private readonly _dexterity: number) {
    // this.name = _name;
    // this.dexterity = _dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    const error = new Error('Not implemented');
    throw error;
  }

  abstract get maxLifePoints(): number
}