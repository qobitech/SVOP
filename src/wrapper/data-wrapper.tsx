import React from 'react'
import { connect } from 'react-redux'
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

type mapStateProps = (state: any) => { states: any }

const mapStateToProps: mapStateProps = (state: any) => ({ states: Object.assign({}, state) })

const mapDispatchToProps = { ...actions }

export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper)
