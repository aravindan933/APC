export const technicalSpecs = [
  {
    id: 'spec-001',
    productName: 'Ethyl Acetate',
    category: 'Acetates',
    properties: {
      molecularFormula: 'C4H8O2',
      molecularWeight: '88.11 g/mol',
      boilingPoint: '77.1°C',
      meltingPoint: '-83.6°C',
      density: '0.902 g/cm³',
      flashPoint: '-4°C',
      solubility: 'Soluble in water, ethanol, ether',
    },
    applications: ['Pharmaceuticals', 'Coatings', 'Food & Beverage', 'Inks'],
    compatibility: ['Compatible with most organic solvents', 'Avoid strong oxidizing agents'],
  },
  {
    id: 'spec-002',
    productName: 'SN 150 Base Oil',
    category: 'Base Oils',
    properties: {
      viscosity: '5.5-6.5 cSt @ 100°C',
      viscosityIndex: '95-105',
      flashPoint: '200°C min',
      pourPoint: '-15°C max',
      density: '0.860-0.870 g/cm³',
    },
    applications: ['Engine Oils', 'Industrial Lubricants', 'Hydraulic Fluids'],
    compatibility: ['Compatible with standard additives', 'Stable with most seal materials'],
  },
  {
    id: 'spec-003',
    productName: 'N-Butyl Acetate',
    category: 'Acetates',
    properties: {
      molecularFormula: 'C6H12O2',
      molecularWeight: '116.16 g/mol',
      boilingPoint: '126.1°C',
      meltingPoint: '-78°C',
      density: '0.882 g/cm³',
      flashPoint: '22°C',
      solubility: 'Slightly soluble in water',
    },
    applications: ['Coatings', 'Inks', 'Adhesives', 'Cleaning Agents'],
    compatibility: ['Compatible with most resins', 'Avoid strong acids and bases'],
  },
];

export const compatibilityMatrix = [
  {
    chemical: 'Ethyl Acetate',
    compatible: ['Acetone', 'Ethanol', 'Toluene', 'Xylene'],
    incompatible: ['Strong Oxidizers', 'Strong Bases'],
  },
  {
    chemical: 'N-Butyl Acetate',
    compatible: ['Most Organic Solvents', 'Resins', 'Plastics'],
    incompatible: ['Strong Acids', 'Strong Bases', 'Oxidizing Agents'],
  },
  {
    chemical: 'Base Oils',
    compatible: ['Standard Additives', 'Seal Materials', 'Metals'],
    incompatible: ['Strong Acids', 'Halogens'],
  },
];

