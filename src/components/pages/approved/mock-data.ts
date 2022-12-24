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
    votes: 665673,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 344570
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 321103
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 107127,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 236167,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1276,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 15930,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 16875,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 18985,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 15571,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 16931,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 22835,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 924,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 812,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 236,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 630,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 441,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 181,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 685,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 882,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 734,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 185,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 298,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 713,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 805,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 755,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 358,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 684,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 999,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 877,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 727,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 4004,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 54,
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
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 45,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 64,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 9,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 98,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 36,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 37,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 86,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 398,
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
    votes: 704358,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 351146
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 353212
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 119067,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 230983,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1096,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 15993,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 18078,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 17110,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 17296,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 18664,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 31926,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 907,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 818,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 210,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 412,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 991,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 813,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 511,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 826,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 732,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 296,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 430,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 347,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 416,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 825,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 242,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 787,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 323,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 896,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 530,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 4681,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 20,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 87,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 16,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 79,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 64,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 7,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 6,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 92,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 18,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 518,
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
    votes: 620740,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 301231
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 319509
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 108286,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 192062,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 883,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 17531,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 17986,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 16985,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 17626,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 16709,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 21449,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 993,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 729,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 312,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 343,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 892,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 409,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 770,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 198,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 158,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 242,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 780,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 338,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 459,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 827,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 596,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 497,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 294,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 668,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 139,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 7887,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 20,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 28,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 14,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 88,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 57,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 79,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 53,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 19,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 69,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 566,
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
    votes: 670236,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 345999
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 324237
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 104539,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 239982,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1478,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 19385,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 18304,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 17489,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 19743,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 16414,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 13204,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 978,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 710,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 514,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 479,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 550,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 508,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 620,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 418,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 612,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 970,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 546,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 652,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 691,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 861,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 278,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 824,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 146,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 335,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 893,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 7800,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 53,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 27,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 6,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 32,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 55,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 81,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 40,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 53,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 3,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 628,
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
    votes: 682414,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 319930
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 362484
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 108430,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 210299,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1201,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 17469,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 16198,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 15815,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 15917,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 17432,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 25599,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 936,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 418,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 124,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 909,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 294,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 517,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 566,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 305,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 199,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 555,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 887,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 489,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 363,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 250,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 359,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 809,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 848,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 101,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 841,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 7699,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 89,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 95,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 49,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 19,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 95,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 8,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 85,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 12,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 43,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 441,
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
    votes: 666900,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 326909
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 339991
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 100367,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 225078,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1464,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 18912,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 16237,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 16524,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 15978,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 19778,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 12938,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 908,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 108,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 303,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 204,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 132,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 177,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 920,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 929,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 144,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 120,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 261,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 449,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 924,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 275,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 275,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 734,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 937,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 915,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 153,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 10044,
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
        votes: 46,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 97,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 50,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 90,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 10,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 94,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 4,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 90,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 410,
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
    votes: 619717,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 354597
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 265120
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 114563,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 238699,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1335,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 17885,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 18718,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 17581,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 18705,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 17813,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 23861,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 944,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 441,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 474,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 483,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 877,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 566,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 489,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 904,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 961,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 864,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 971,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 748,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 120,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 788,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 339,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 614,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 639,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 325,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 231,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 6107,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 27,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 42,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 89,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 58,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 95,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 12,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 57,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 56,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 80,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 428,
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
    votes: 679128,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 328620
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 350508
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 115825,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 211352,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1443,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 16995,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 16747,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 19485,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 16433,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 18836,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 27329,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 949,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 614,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 413,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 710,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 585,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 605,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 601,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 690,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 592,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 399,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 459,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 304,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 961,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 532,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 525,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 819,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 406,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 718,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 551,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 5562,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 26,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 45,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 25,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 51,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 14,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 100,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 55,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 33,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 58,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 542,
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
    votes: 661971,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 322093
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 339878
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 116251,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 204797,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1045,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 17057,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 16303,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 19413,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 15829,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 19609,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 28040,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 986,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 329,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 351,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 762,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 553,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 515,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 306,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 122,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 382,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 323,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 847,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 880,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 291,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 506,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 674,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 590,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 112,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 390,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 854,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 7284,
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
        votes: 60,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 9,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 48,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 80,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 70,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 39,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 12,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 70,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 514,
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
    votes: 709657,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 331183
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 378474
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 117782,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 212308,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1093,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 16949,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 18412,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 16011,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 19647,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 16294,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 30469,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 979,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 522,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 335,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 456,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 671,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 120,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 929,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 643,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 420,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 593,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 380,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 810,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 413,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 993,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 565,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 949,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 263,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 122,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 953,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 5833,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 24,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 30,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 41,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 19,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 97,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 89,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 28,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 11,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 66,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 574,
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
    votes: 703667,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 314535
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 389132
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 101878,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 211593,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1064,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 17126,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 17041,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 18908,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 18256,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 16384,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 14163,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 931,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 513,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 355,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 205,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 907,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 221,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 873,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 201,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 893,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 315,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 525,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 183,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 671,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 534,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 776,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 542,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 653,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 435,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 176,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 7217,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 1,
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
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 35,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 44,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 71,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 70,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 17,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 23,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 77,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 529,
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
    votes: 624867,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 326282
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 298585
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 114461,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 210676,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1145,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 19667,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 15350,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 15280,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 19485,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 18311,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 26368,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 910,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 922,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 296,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 736,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 960,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 222,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 136,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 928,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 918,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 458,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 855,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 539,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 288,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 901,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 578,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 826,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 534,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 124,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 702,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 7834,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 62,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 63,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 42,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 82,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 37,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 39,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 60,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 15,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 68,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 442,
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
    votes: 620310,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 355713
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 264597
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 115900,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 238654,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1159,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 18079,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 17717,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 18771,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 16777,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 16398,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 28158,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 936,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 154,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 548,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 602,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 933,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 129,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 913,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 579,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 904,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 894,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 364,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 240,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 315,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 299,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 517,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 478,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 770,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 665,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 966,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 6873,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 28,
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
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 10,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 23,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 37,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 34,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 57,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 81,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 4,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 624,
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
    votes: 674612,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 318864
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 355748
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 105256,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 212243,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1365,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 15200,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 18648,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 15349,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 18370,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 16551,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 21138,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 971,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 810,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 414,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 278,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 114,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 553,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 412,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 745,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 652,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 166,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 208,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 833,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 371,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 380,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 932,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 981,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 263,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 535,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 232,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 5350,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 31,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 58,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 34,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 91,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 40,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 82,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 64,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 74,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 45,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 452,
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
    votes: 614884,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 331209
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 283675
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 111294,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 218863,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1052,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 19149,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 16879,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 16018,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 15806,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 15699,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 27743,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 997,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 955,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 716,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 502,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 759,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 425,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 648,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 187,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 694,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 163,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 119,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 401,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 599,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 184,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 527,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 919,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 597,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 965,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 795,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 7997,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 33,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 70,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 80,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 98,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 46,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 86,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 27,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 6,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 88,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 463,
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
    votes: 655815,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 342750
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 313065
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 109244,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 232549,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 957,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 17612,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 15056,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 19229,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 16799,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 17999,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 22549,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 979,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 632,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 934,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 622,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 930,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 468,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 397,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 263,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 463,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 289,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 915,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 732,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 546,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 365,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 864,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 870,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 691,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 983,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 386,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 5283,
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
        votes: 17,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 7,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 79,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 32,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 14,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 67,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 37,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 32,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 629,
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
    votes: 602109,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 339369
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 262740
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 112250,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 225910,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1209,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 15931,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 18810,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 15114,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 16771,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 17471,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 28153,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 916,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 300,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 968,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 235,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 158,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 996,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 695,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 940,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 224,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 386,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 692,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 501,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 755,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 397,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 968,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 250,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 237,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 302,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 482,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 5529,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 75,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 11,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 8,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 23,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 62,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 31,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 40,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 15,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 6,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 645,
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
    votes: 715787,
    zones: [
      {
        id: 2,
        name: 'South',
        votes: 329189
      }
      // {
      //   id: 1,
      //   name: 'North',
      //   votes: 386598
      // }
    ],
    geozones: [
      {
        id: 2,
        name: 'South West',
        votes: 109161,
        zoneId: 2
      }
      // {
      //   id: 6,
      //   name: 'South South',
      //   votes: 219021,
      //   zoneId: 2
      // },
      // {
      //   id: 1,
      //   name: 'South East',
      //   votes: 1007,
      //   zoneId: 2
      // }
    ],
    states: [
      {
        id: 24,
        name: 'Lagos',
        votes: 15268,
        zoneId: 2,
        geographicalZoneId: 2
      }
      // {
      //   id: 13,
      //   name: 'Ekiti',
      //   votes: 18067,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 27,
      //   name: 'Ogun',
      //   votes: 16557,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 28,
      //   name: 'Ondo',
      //   votes: 15182,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 29,
      //   name: 'Osun',
      //   votes: 19942,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // },
      // {
      //   id: 30,
      //   name: 'Oyo',
      //   votes: 24145,
      //   zoneId: 2,
      //   geographicalZoneId: 2
      // }
    ],
    lgas: [
      {
        id: 510,
        name: 'Ikeja',
        votes: 914,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 500,
        name: 'AGEGE',
        votes: 261,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 501,
        name: 'AJEROMI/IFELODUN',
        votes: 184,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 502,
        name: 'ALIMOSHO',
        votes: 676,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 503,
        name: 'AMUWO-ODOFIN',
        votes: 696,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 504,
        name: 'APAPA',
        votes: 943,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 505,
        name: 953,
        votes: 'LgaVotes',
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 506,
        name: 'EPE',
        votes: 504,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 507,
        name: 'ETI-OSA',
        votes: 181,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 508,
        name: 'IBEJU/LEKKI',
        votes: 492,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 509,
        name: 'IFAKO-IJAYE',
        votes: 479,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 511,
        name: 'IKORODU',
        votes: 139,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 512,
        name: 'KOSOFE',
        votes: 291,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 513,
        name: 'LAGOS ISLAND',
        votes: 138,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 514,
        name: 'LAGOS MAINLAND',
        votes: 387,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 515,
        name: 'MUSHIN',
        votes: 447,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 516,
        name: 'OJO',
        votes: 648,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 517,
        name: 'OSHODI/ISOLO',
        votes: 173,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 518,
        name: 'SOMOLU',
        votes: 274,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      },
      {
        id: 519,
        name: 'SURULERE',
        votes: 6488,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2
      }
    ],
    wards: [
      {
        id: 5813,
        name: 'ANIFOWOSHE/IKEJA',
        votes: 98,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'OJODU/AGIDINGBI/OMOLE',
        votes: 94,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5815,
        name: 'ALAUSA/OREGUN/OLUSOSUN',
        votes: 66,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5816,
        name: 'AIRPORT/ONIPETESI/ONILEKERE',
        votes: 83,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5817,
        name: 'IPODO/SERIKI ARO',
        votes: 36,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5818,
        name: 'ADEKUNLE VILL./ADENIYI JONES/OGBA',
        votes: 91,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5819,
        name: 'OKE-IRA/AGUDA',
        votes: 9,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5820,
        name: 'ONIGBONGBO/MILITARY CANTONMENT',
        votes: 20,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5821,
        name: 'GRA/POLICE BARRACKS',
        votes: 61,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      },
      {
        id: 5814,
        name: 'WASIMI/OPEBI/ALLEN',
        votes: 356,
        zoneId: 2,
        stateId: 24,
        geographicalZoneId: 2,
        lgaId: 510
      }
    ]
  }
]
