import React, { useState, useEffect, createContext } from 'react';
import { SearchPoetysComponent } from '../../components';

function LeftSliderComponent(props) {
    const [time, setTimes] = useState('tang');
    const [poet, setPoet] = useState(1);

    useEffect(() => {
        setTimes(props.match.params.times || time);
        setPoet(props.match.params.poet || poet);
        if (!props.match.params.times) {
            props.history.push('/' + time + '/1');
        }
    });


    function switchTimes(t) {
        setTimes(t);
        props.history.push('/' + t + '/1');
    }

    return <div className="content content--side">
        <div className="control control--grids">
            <SearchPoetysComponent {...props} />
            <span className="control__title">人丑就要多读书</span>
            <div className="control__item" onClick={() => { switchTimes('tang') }}>
                <input className="control__radio" type="radio" name="grid-type" value="grid--type-c" id="control-grid-c" checked={time === 'tang'} />
                <label className="control__label" for="control-grid-c">唐诗</label>
            </div>
            <div className="control__item" onClick={() => { switchTimes('song') }}>
                <input className="control__radio" type="radio" name="grid-type" value="grid--type-c" id="control-grid-c" checked={time === 'song'} />
                <label className="control__label" for="control-grid-c">宋词</label>
            </div>
            <div className="control__item" onClick={() => { switchTimes('yuan') }}>
                <input className="control__radio" type="radio" name="grid-type" value="grid--type-c" id="control-grid-c" checked={time === 'yuan'} />
                <label className="control__label" for="control-grid-c">元曲</label>
            </div>
        </div>
    </div>;
}

export default LeftSliderComponent;