type EnergyType = 'mana' | 'stamina';

interface Energy {
  readonly type_: EnergyType,
  amount: number,
}

export default Energy;
export { EnergyType };
