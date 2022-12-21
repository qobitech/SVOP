export interface ITableData {
  name: string
  id: number
  votes: number
  zones: any[]
  geozones: any[]
  states: any[]
  lgas: any[]
  wards: any[]
}

export const tableData = [
  {
    name: 'PDP',
    id: 1,
    votes: 9825,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 3656
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1934,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 510,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 223,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 51,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 51,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'APC',
    id: 2,
    votes: 9804,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 2793
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 756,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 423,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 107,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 97,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 97,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'A',
    id: 3,
    votes: 9610,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 2923
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1063,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 419,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 207,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 64,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 64,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'AA',
    id: 4,
    votes: 7470,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 3846
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1336,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 385,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 174,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 44,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 44,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'AAC',
    id: 5,
    votes: 7088,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 2894
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1914,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 333,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 176,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 52,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 52,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'ADC',
    id: 6,
    votes: 7897,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 4594
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1590,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 452,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 114,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 38,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 38,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'ADP',
    id: 7,
    votes: 7581,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 4759
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1687,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 616,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 197,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 5,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 5,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'APGA',
    id: 8,
    votes: 7992,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 3487
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1003,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 369,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 246,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 6,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 6,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'APM',
    id: 9,
    votes: 7599,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 2044
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 996,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 282,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 231,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 39,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 39,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'APP',
    id: 10,
    votes: 8586,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 4698
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1087,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 637,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 182,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 46,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 46,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'BP',
    id: 11,
    votes: 8543,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 4515
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1806,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 483,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 178,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 5,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 5,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'LP',
    id: 12,
    votes: 7409,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 4986
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1310,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 696,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 179,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 17,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 17,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'NNPP',
    id: 13,
    votes: 7580,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 2112
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 836,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 439,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 229,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 48,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 48,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'NRM',
    id: 14,
    votes: 8883,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 4440
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1693,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 566,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 196,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 6,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 6,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'PRP',
    id: 15,
    votes: 7171,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 3079
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1734,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 653,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 229,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 65,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 65,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'SDP',
    id: 16,
    votes: 8653,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 4564
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1516,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 548,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 135,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 46,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 46,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'YPP',
    id: 17,
    votes: 8810,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 2048
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 1929,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 576,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 110,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 84,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 84,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  },
  {
    name: 'ZLP',
    id: 18,
    votes: 7714,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 2047
      }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 876,
        zoneId: 2
      }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 628,
        zoneId: 2,
        geographicalZoneId: 2
      }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 243,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 12,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 12,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  }
]
