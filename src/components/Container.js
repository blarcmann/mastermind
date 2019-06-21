import React from 'react';
import DecodeRow from './DecodeRow';
import { SidePegs } from './SidebarCover';
import Check from './Check';
import { IndicatorGroup } from './Indicator';

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showVal: false,
            toInjectColor: '',
            toInjectValue: '',
            paintedVal: '',
            paintedArray: [],
            injectedPicks: [0, 0, 0, 0],
            randomArr: [],
            isEditable: false,
            activatedDuck: 1,
            indicatedId: 1,
            buttonStyle: 'btn btn-small',
            exactMatches: 0,
            valueMatches: 0,
            exactMatches2: 0,
            valueMatches2: 0,
            exactMatches3: 0,
            valueMatches3: 0,
            exactMatches4: 0,
            valueMatches4: 0,
            exactMatches5: 0,
            valueMatches5: 0,
            exactMatches6: 0,
            valueMatches6: 0,
            exactMatches7: 0,
            valueMatches7: 0,
            exactMatches8: 0,
            valueMatches8: 0,
            exactMatches9: 0,
            valueMatches9: 0,
            exactMatches10: 0,
            valueMatches10: 0


        }
        this.updateInjection = this.updateInjection.bind(this);
        this.getInjected = this.getInjected.bind(this);
        this.getPicks = this.getPicks.bind(this);
        this.createRandomValues = this.createRandomValues.bind(this);
        this.setRandomToState = this.setRandomToState.bind(this);
        this.getNextDuck = this.getNextDuck.bind(this);
    }

    updateInjection(value, color) {
        this.setState({
            toInjectColor: color,
            toInjectValue: value
        })
    }

    getInjected(value) {
        this.setState(prevState => ({
            ...prevState,
            paintedArray: [...prevState.paintedArray, value]
        }))
    }

    getNextDuck(duckId, indiId) {
        this.setState({
            activatedDuck: duckId,
            indicatedId: indiId

        })
    }

    getPicks(picks) {
        this.setState({
            injectedPicks: picks
        })
        let pickedCol = this.state.injectedPicks;
        for (let val = 0; val < pickedCol.length; val++) {
            if (pickedCol[val] === 0) {
                this.setState({
                    buttonStyle: 'btn btn-small btn-disabled'
                })
            } else {
                this.setState({
                    buttonStyle: 'btn btn-small btn-success'
                })
            }
        }
    }

    setRandomToState() {
        let randomValues = this.createRandomValues();
        this.setState({
            randomArr: randomValues
        })
    }
    // Can't seem to find a way to make my exact and value matches in the indicator component           distinct...They keep overriding each other...Would appreciate a hint if I haven't.
    // This isn't suppose to be but..it is what it is...basics, its manually done from 84 - 183


    getExactMatches = (exact) => {
        this.setState({
            exactMatches: exact
        })
    }
    getExactMatches2 = (exact2) => {
        this.setState({
            exactMatches2: exact2
        })
    }
    getExactMatches3 = (exact3) => {
        this.setState({
            exactMatches3: exact3
        })
    }
    getExactMatches4 = (exact4) => {
        this.setState({
            exactMatches4: exact4
        })
    }
    getExactMatches5 = (exact5) => {
        this.setState({
            exactMatches5: exact5
        })
    }
    getExactMatches6 = (exact6) => {
        this.setState({
            exactMatches6: exact6
        })
    }
    getExactMatches7 = (exact7) => {
        this.setState({
            exactMatches7: exact7
        })
    }
    getExactMatches8 = (exact8) => {
        this.setState({
            exactMatches8: exact8
        })
    }
    getExactMatches9 = (exact9) => {
        this.setState({
            exactMatches9: exact9
        })
    }
    getExactMatches10 = (exact10) => {
        this.setState({
            exactMatches10: exact10
        })
    }
    getValueMatches = (value) => {
        this.setState({
            valueMatches: value
        })
    }
    getValueMatches2 = (value2) => {
        this.setState({
            valueMatches2: value2
        })
    }
    getValueMatches3 = (value3) => {
        this.setState({
            valueMatches3: value3
        })
    }
    getValueMatches4 = (value4) => {
        this.setState({
            valueMatches4: value4
        })
    }
    getValueMatches5 = (value5) => {
        this.setState({
            valueMatches5: value5
        })
    }
    getValueMatches6 = (value6) => {
        this.setState({
            valueMatches6: value6
        })
    }
    getValueMatches7 = (value7) => {
        this.setState({
            valueMatches7: value7
        })
    }
    getValueMatches8 = (value8) => {
        this.setState({
            valueMatches8: value8
        })
    }
    getValueMatches9 = (value9) => {
        this.setState({
            valueMatches9: value9
        })
    }
    getValueMatches10 = (value10) => {
        this.setState({
            valueMatches10: value10
        })
    }
    createRandomValues = (length = 4, max = 5) => {
        return Array.apply(null, Array(length)).map(function () {
            let randomizedValues = Math.round((Math.random() * max) + 1);
            return randomizedValues;
        });
    }

    componentWillMount() {
        this.setRandomToState();
    }

    render() {
        let duckRow = [];
        console.log('exactMatches1', this.state.exactMatches);
        console.log('exactMatches2', this.state.exactMatches2);
        for (let i = 0; i < 10; i++) {
            duckRow.push(
                <div className="pegs-duck" key={`row${i}`}>
                    <div className="pegRow">
                        <DecodeRow
                            key={i}
                            injectedValue={this.state.toInjectValue}
                            injectedColor={this.state.toInjectColor}
                            getinjected={this.getInjected}
                            retrievePicks={this.getPicks}
                            duckId={i + 1}
                            activatedDuck={this.state.activatedDuck}
                        />
                    </div>
                    <div className={(this.state.activatedDuck !== (i + 1)) ? '' : 'hide'}>
                        <IndicatorGroup
                            indicatorId={i + 1}
                            key={`indicator${i}`}
                            activatedDuck={this.state.activatedDuck}
                            exactMatches={this.state.exactMatches}
                            valueMatches={this.state.valueMatches}
                            exactMatches2={this.state.exactMatches2}
                            valueMatches2={this.state.valueMatches2}
                            exactMatches3={this.state.exactMatches3}
                            valueMatches3={this.state.valueMatches3}
                            exactMatches4={this.state.exactMatches4}
                            valueMatches4={this.state.valueMatches4}
                            exactMatches5={this.state.exactMatches5}
                            valueMatches5={this.state.valueMatches5}
                            exactMatches6={this.state.exactMatches6}
                            valueMatches6={this.state.valueMatches6}
                            exactMatches7={this.state.exactMatches7}
                            valueMatches7={this.state.valueMatches7}
                            exactMatches8={this.state.exactMatches8}
                            valueMatches8={this.state.valueMatches8}
                            exactMatches9={this.state.exactMatches9}
                            valueMatches9={this.state.valueMatches9}
                            exactMatches10={this.state.exactMatches10}
                            valueMatches10={this.state.valueMatches10}
                        />
                    </div>
                    <div className={(this.state.activatedDuck === (i + 1)) ? 'checkbtn' : 'hide'}>
                        <Check
                            key={`btn${i}`}
                            id={i + 1}
                            exactMatches={this.state.exactMatches}
                            valueMatches={this.state.valueMatches}
                            getValueMatches={this.getValueMatches}
                            getExactMatches={this.getExactMatches}
                            getExactMatches2={this.getExactMatches2}
                            getValueMatches2={this.getValueMatches2}
                            getExactMatches3={this.getExactMatches3}
                            getValueMatches3={this.getValueMatches3}
                            getExactMatches4={this.getExactMatches4}
                            getValueMatches4={this.getValueMatches4}
                            getExactMatches5={this.getExactMatches5}
                            getValueMatches5={this.getValueMatches5}
                            getExactMatches6={this.getExactMatches6}
                            getValueMatches6={this.getValueMatches6}
                            getExactMatches7={this.getExactMatches7}
                            getValueMatches7={this.getValueMatches7}
                            getExactMatches8={this.getExactMatches8}
                            getValueMatches8={this.getValueMatches8}
                            getExactMatches9={this.getExactMatches9}
                            getValueMatches9={this.getValueMatches9}
                            getExactMatches10={this.getExactMatches10}
                            getValueMatches10={this.getValueMatches10}
                            randomArr={this.state.randomArr}
                            injectedPicks={this.state.injectedPicks}
                            increamentDuck={this.increamentDuck}
                            buttonStyle={this.state.buttonStyle}
                            getNextDuck={this.getNextDuck}
                            activatedDuck={this.state.activatedDuck}
                        />
                    </div>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4 mx-auto">
                        {duckRow}
                        <p>Parent: color:{this.state.toInjectColor}, value: {this.state.toInjectValue}</p>

                        <SidePegs updatetoinject={this.updateInjection} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;