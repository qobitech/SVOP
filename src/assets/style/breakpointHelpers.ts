import { BreakpointValues } from '@material-ui/core/styles/createBreakpoints'
import theme from './mui-theme'

type Breakpoint =
  | 'xs'
  | 'sm'
  | 'md'
  | 'ipadLandscape'
  | 'desk'
  | 'lg'
  | 'deskLg'
  | 'xl'

/** up() targets selected breakpoint and everything larger than that */
export const up = (breakpoint: Breakpoint) => {
  const width = theme.breakpoints.values[breakpoint as keyof BreakpointValues]

  return `@media (min-width: ${width}px)`
}

/** down() targets selected breakpoint minus 1px and everything smaller than that */
export const down = (breakpoint: Breakpoint) => {
  const width = theme.breakpoints.values[breakpoint as keyof BreakpointValues]

  return `@media (max-width: ${width - 1}px)`
}

export const between = (min: Breakpoint, max: Breakpoint) => {
  const minWidth = theme.breakpoints.values[min as keyof BreakpointValues]
  const maxWidth = theme.breakpoints.values[max as keyof BreakpointValues]

  return `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth - 1}px)`
}
