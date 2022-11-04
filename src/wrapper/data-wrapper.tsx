import React from 'react';
import { connect } from 'react-redux';
// import * as states from '../interface';
import { actions } from '../store/actions';

const DataWrapper = ({ noWrapper, children, ...props }: { noWrapper?: any, children: any, props?: any}) => {

    return (
        <MainWrapper noWrapper={noWrapper}>
            <DataChildComponent data={props} >
                {children}
            </DataChildComponent>
        </MainWrapper>
    );
};

const ChildComponent = ({ children, data }: { children: any, data: any }) => {
    
    return(
        <>{ React.cloneElement( children, data ) }</>
    )
}

const DataChildComponent = React.memo(ChildComponent)

const MainWrapper = ({
    noWrapper,
    children
}: 
{
    noWrapper: boolean,
    children: any 
}) => {
    return(
        <>
        {noWrapper ? 
        <>
            {children}
        </> : 
        <>
            {children}
        </>}
        </>
    )
}

const states = {

}

const checkState = (states: any, i: string, state: any) => typeof states[i] === 'function' ? states[i](state) : void 0

const mapStateToProps = (state: any) => Object.assign({},...Object.keys(states).map( i => ({ [i] : checkState(states, i, state) }) ));

const mapDispatchToProps = {...actions}

export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper);