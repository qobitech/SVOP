import { IResult } from '../../../interface/IResult'

export const tableHeader = ['Election', 'State', 'LGA', 'Polling Unit', 'Presiding Officer', 'Actions']

export const tableRecord: IResult[] = [
  {
    Election: '2023 General Election',
    PoolingUnit: 'PU100-ZZN',
    location: {
      address: '',
      latitude: '',
      longitude: ''
    },
    Ward: 'ESAKO-EAST-W-12',
    LocalGovernment: 'ESAKO-WEST',
    State: 'Edo State',
    PresidingOfficer: {
      Id: '3',
      Name: 'James Onanefe Ibori'
    },
    VotersOnRegister: 4,
    AccreditedVoters: 5,
    BallotPapersIssuedToPoolingUnit: 5,
    UnusedBallotPapers: 5,
    RejectedBallot: 3,
    TotalValidVotes: 4,
    TotalUsedBallotPapers: 3,
    Status: 'Pending Approval',
    DocumentUrl: '',
    results: [
      {
        partyName: 'PDP',
        Votes: 5
      },
      {
        partyName: 'APC',
        Votes: 2
      },
      {
        partyName: 'LP',
        Votes: 10
      },
      {
        partyName: 'NPP',
        Votes: 12
      },
      {
        partyName: 'SDP',
        Votes: 9
      },
      {
        partyName: 'AP',
        Votes: 7
      }
    ]
  }
]
