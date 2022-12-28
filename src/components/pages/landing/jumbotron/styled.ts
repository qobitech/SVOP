import { styled } from '@material-ui/core'
import { down } from '../../../../assets/style/breakpointHelpers'

export const JumbotronContainer = styled('div')(
  ({ imgsrc }: { imgsrc?: string }) => ({
    width: '100%',
    background: '#fff',
    backgroundImage: 'url(' + imgsrc + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    height: 414,
    [down('md')]: {
      height: 300
    },
    [down('sm')]: {
      display: 'none'
    }
  })
)
