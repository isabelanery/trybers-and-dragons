type EnergyType = 'mana' | 'stamina';

interface Energy {
  type: EnergyType,
  amount: number,
}

export default Energy;
export { EnergyType };
