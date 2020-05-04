
import React, { useState, useEffect, createContext } from 'react';
import Poets from '../../data/poet';

function RightSliderComponent(props) {
    const [poet, setPoet] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        let time = fetchTime(), _poets;
        _poets = Poets.filter((p) => {
            return p.times === time
        });
        setPoet(_poets);
    }, [props.match.params.times]);


    function fetchTime() {
        let t = props.match.params.times || 'tang';
        switch (t) {
            case 'tang':
                setTitle('唐朝');
                break;
            case 'song':
                setTitle('宋朝');
                break;
            case 'yuan':
                setTitle('元朝');
                break;
            default:
                setTitle('唐朝');
                break;
        }
        return t;
    }

    function fetchFX(i) {
        let index = i % 15;
        switch (index) {
            case 1:
                return "Hapi";
            case 2:
                return "Amun";
            case 3:
                return "Kek";
            case 4:
                return "Isis";
            case 5:
                return "Montu";
            case 6:
                return "Osiris";
            case 7:
                return "Satet";
            case 8:
                return "Atum";
            case 9:
                return "Ra";
            case 10:
                return "Sobek";
            case 11:
                return "Ptah";
            case 12:
                return "Bes";
            case 13:
                return "Seker";
            case 14:
                return "Nut";
            case 15:
                return 'Shu';
            default:
                return "Hapi";
        }
    }

    function fetchPoet(poet) {
        let t = poet || 1;
        props.history.push('/' + props.match.params.times + '/' + t);
    }

    return <div className="content content--side content--right">
        <div className="control control--effects">
            <span className="control__title">{title + '诗人'}</span>
            {
                poet && poet.map((p, i) => {
                    return <button className="control__btn" onClick={() => { fetchPoet(p.id) }} data-fx={fetchFX(++i)}>{p.name}</button>;
                })
            }
        </div>
    </div>;
}


export default RightSliderComponent;