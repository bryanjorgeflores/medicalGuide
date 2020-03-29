export interface IFerrousSulfate {
  bc: IBirthCondition[];
  bcS?: number;
  paS?: number;
  mdS?: number;
}

export interface IInterventionTime {
  title: "Recuperativo" | "Preventivo";
}

export interface IBirthCondition {
  name: string;
  quantityDose: number;
  averageWeight: number;
  patientAge?: IPatientAge[];
}

export interface IMedicine {
  name: string;
  unit: "gota" | "ml";
  equivalent: number;
  magnitude?: "mg" | "kg";
}

export interface IPatientAge {
  maximunDose: number;
  ageRange: string;
  medicines: IMedicine[];
}

export const preventiveFerrousSulfate: IFerrousSulfate = {
  bc: [
    {
      name: "Niños Prematuros y NACIDO A TERMINO",
      quantityDose: 2,
      averageWeight: 12,
      patientAge: [
        {
          ageRange: "Todos",
          maximunDose: 0,
          medicines: [
            {
              name: "Gotas SOFE Sulfato Ferroso",
              unit: "gota",
              equivalent: 1.25
            },
            { name: "Gotas Polimaltosado", unit: "gota", equivalent: 2.25 }
          ]
        }
      ]
    }
  ],
  paS: 0,
  bcS: 0,
  mdS: 0
};

export const recoveryFerrousSulfate: IFerrousSulfate = {
  bc: [
    {
      name: "Niños Nacido a Término",
      quantityDose: 3,
      averageWeight: 8,
      patientAge: [
        {
          ageRange: "Menor de 6 meses",
          maximunDose: 40,
          medicines: [
            {
              name: "Gotas de Sulfato Ferroso",
              unit: "gota",
              equivalent: 1.25
            },
            { name: "Gotas Polimaltosado", unit: "gota", equivalent: 2.25 }
          ]
        },
        {
          ageRange: "6 a 35 meses",
          maximunDose: 70,
          medicines: [
            {
              name: "Gotas de Sulfato Ferroso",
              unit: "gota",
              equivalent: 1.25
            },
            { name: "Gotas Polimaltosado", unit: "gota", equivalent: 2.25 },
            { name: "Jarabe Sulfato Ferroso", unit: "ml", equivalent: 3 },
            { name: "Jarabe Polimaltosado", unit: "ml", equivalent: 10 }
          ]
        },
        {
          ageRange: "Menor de 6 meses",
          maximunDose: 40,
          medicines: [
            { name: "Jarabe Sulfato Ferroso", unit: "ml", equivalent: 3 },
            { name: "Jarabe Polimaltosado", unit: "ml", equivalent: 10 }
          ]
        },
        {
          ageRange: "Mayor de 6 meses",
          maximunDose: 40,
          medicines: [
            { name: "Jarabe Sulfato Ferroso", unit: "ml", equivalent: 3 },
            { name: "Jarabe Polimaltosado", unit: "ml", equivalent: 10 }
          ]
        }
      ]
    },
    {
      name: "Niños PREMATURO",
      quantityDose: 4,
      averageWeight: 6,
      patientAge: [
        {
          ageRange: "Menor de 6 meses",
          maximunDose: 40,
          medicines: [
            {
              name: "Gotas de Sulfato Ferroso",
              unit: "gota",
              equivalent: 1.25
            },
            { name: "Gotas Polimaltosado", unit: "gota", equivalent: 2.25 }
          ]
        }
      ]
    }
  ],
  paS: 0,
  bcS: 0,
  mdS: 0
};
