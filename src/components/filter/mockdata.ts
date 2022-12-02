export const wardoptionsdata = [
  { id: 1, label: 'Ward A', value: '1' },
  { id: 2, label: 'Ward B', value: '2' }
]

export const zoneoptionsdata = [
  { id: 1, label: 'South South', value: '1' },
  { id: 2, label: 'South East', value: '2' },
  { id: 3, label: 'South West', value: '3' },
  { id: 4, label: 'North East', value: '4' },
  { id: 5, label: 'North West', value: '5' },
  { id: 6, label: 'North Central', value: '6' }
]

export const stateoptionsdata = [
  { id: 1, label: 'Maxie Jacobs', value: '1' },
  { id: 2, label: 'Joh Dumelo', value: '2' },
  { id: 3, label: 'Buju Ruga', value: '3' },
  { id: 4, label: 'Rema Starr', value: '4' },
  { id: 5, label: 'Pheonix Williams', value: '5' }
]

export const lgaoptionsdata = [
  { id: 1, label: 'Maxie Jacobs', value: '1' },
  { id: 2, label: 'Joh Dumelo', value: '2' },
  { id: 3, label: 'Buju Ruga', value: '3' },
  { id: 4, label: 'Rema Starr', value: '4' },
  { id: 5, label: 'Pheonix Williams', value: '5' }
]

export const wardoptiondata = [
  { id: 1, label: 'Maxie Jacobs', value: '1' },
  { id: 2, label: 'Joh Dumelo', value: '2' },
  { id: 3, label: 'Buju Ruga', value: '3' },
  { id: 4, label: 'Rema Starr', value: '4' },
  { id: 5, label: 'Pheonix Williams', value: '5' }
]

export const pollingunitdata = [
  { id: 1, label: 'Maxie Jacobs', value: '1' },
  { id: 2, label: 'Joh Dumelo', value: '2' },
  { id: 3, label: 'Buju Ruga', value: '3' },
  { id: 4, label: 'Rema Starr', value: '4' },
  { id: 5, label: 'Pheonix Williams', value: '5' }
]

export const filterParamsData = [
  {
    id: 1,
    text: 'Region',
    isSelected: false
  },
  {
    id: 2,
    text: 'GEO Zone',
    isSelected: false
  },
  {
    id: 3,
    text: 'State',
    isSelected: false
  },
  {
    id: 4,
    text: 'LGA',
    isSelected: false
  },
  {
    id: 5,
    text: 'Wards',
    isSelected: false
  },
  {
    id: 6,
    text: 'Polling Unit',
    isSelected: false
  }
]

export const infoData = filterParamsData.reduce(
  (a, v) => ({ ...a, [v.text]: '' }),
  {}
)
