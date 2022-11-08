import React from 'react'
import { connect } from 'react-redux'
import * as states from '../interface'
import { actions } from '../store/actions'
import Dashboard from '../components/layout'

const DataWrapper: React.FC<{ nowrapper?: string, children: any, props?: any }> = ({ nowrapper, children, ...props }) => {
  return (
        <MainWrapper nowrapper={nowrapper}>
            <DataChildComponent data={props} >
                {children}
            </DataChildComponent>
        </MainWrapper>
  )
}

const ChildComponent: React.FC<{ children: any, data: any }> = ({ children, data }) => {
  return (
        <>{ React.cloneElement(children, data) }</>
  )
}

const DataChildComponent = React.memo(ChildComponent)

const MainWrapper: React.FC<{
  nowrapper: string | undefined
  children: any
}> = ({
  nowrapper,
  children
}) => {
  return (
        <>
        {(nowrapper != null)
          ? <>
            {children}
        </>
          : <Dashboard>
            {children}
        </Dashboard>}
        </>
  )
}

type checkstateType = (states: any, i: string, state: any) => any

type mapStateProps = (state: any) => { states: any }

const checkState: checkstateType = (states: any, i: string, state: any) => typeof states[i] === 'function' ? states[i](state) : undefined

const mapStateToProps: mapStateProps = (state: any) => ({ states: Object.assign({}, ...Object.keys(states).map(i => ({ [i]: checkState(states, i, state) }))) })

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper)
