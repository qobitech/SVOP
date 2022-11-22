import { _handleTh } from '../../utils/helper'

import { pageurl } from '../../../constants/pageurl'

export const mockdata = [
  {
    id: 'wewwrwrwr',
    row: [
      {
        value: 'Bayelsa State',
        isLink: true,
        url: pageurl.STATES + '/bayelsa',
        action: () => {}
      },
      {
        value: 'South South',
        isLink: true,
        url: pageurl.ZONES + '/south-south',
        action: () => {}
      },
      {
        value: _handleTh('4'),
        isLink: true,
        url: pageurl.STATES,
        action: () => {}
      },
      {
        value: _handleTh('4340'),
        isLink: true,
        url: pageurl.LGAS,
        action: () => {}
      },
      {
        value: _handleTh('3214340'),
        isLink: true,
        url: pageurl.WARDS,
        action: () => {}
      }
    ],
    rowActions: [
      {
        value: 'Edit',
        isLink: false,
        url: '',
        action: () => {},
        icon: 'fas fa-edit',
        color: ''
      },
      {
        value: 'Delete',
        isLink: false,
        url: '',
        action: () => {},
        icon: 'fas fa-trash',
        color: 'red'
      }
    ]
  }
]

export const mockdatabyid = [
  {
    id: 'wewwrwrwr',
    row: [
      {
        value: 'South Bayelsa LGA',
        isLink: true,
        url: pageurl.LGAS + '/south-bayelsa',
        action: () => {}
      },
      {
        value: _handleTh('4'),
        isLink: true,
        url: pageurl.WARDS,
        action: () => {}
      },
      {
        value: _handleTh('3214340'),
        isLink: true,
        url: pageurl.POLLINGUNITS,
        action: () => {}
      }
    ],
    rowActions: [
      {
        value: 'Unlink',
        isLink: false,
        url: '',
        action: () => {},
        icon: 'fas fa-unlink',
        color: ''
      },
      {
        value: 'Edit',
        isLink: false,
        url: '',
        action: () => {},
        icon: 'fas fa-edit',
        color: ''
      },
      {
        value: 'Delete',
        isLink: false,
        url: '',
        action: () => {},
        icon: 'fas fa-trash',
        color: 'red'
      }
    ]
  }
]
