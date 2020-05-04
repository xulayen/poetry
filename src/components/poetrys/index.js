
import React, { useState, useEffect, useRef, createContext } from 'react';
import poetryList from '../../data/poetry';
import { Storage } from '../../common';
import { observer } from "mobx-react";

function PoetryListComponent(props) {
    const size = 10, index = 1, bottom_scroll = 200;
    const [poetrys, setPoetrys] = useState([]);
    const [pagesize, setPagesize] = useState(size);
    const [pageindex, setPageindex] = useState(index);
    const [key, setKey] = useState('');
    const wrap = useRef(null);
    let times = props.match.params.times;
    let poet = props.match.params.poet;
    setInterval(() => {
        setKey(props.store.IndexPageStore.txtKey);
    }, 100);

    useEffect(() => {
        if (key) {
            InitKey();
        } else {
            Init();
        }


    }, [props.match.params.times, props.match.params.poet, pagesize]);

    useEffect(() => {
        InitKey();
    }, [key]);

    async function Init() {
        let data = await poetryList();
        let _poetrys = data.filter((po) => {
            return po.times === times;
        }).slice(0, pagesize);
        debugger;
        setPoetrys(_poetrys);
    }

    async function InitKey() {
        let _poetrys, data = await poetryList();
        if (key) {
            var reg = new RegExp(key);
            _poetrys = data.filter((po) => {
                return po.title.match(reg) ||
                    po.content.join('').match(reg) ||
                    po.poet.match(reg) ||
                    po.type.match(reg);
            }).slice(0, pagesize);
            setPoetrys(_poetrys);
        } else {
            await Init();
        }

    }

    function ScrollPage() {
        // console.log(wrap.current.scrollTop);//代表目前滚动条和最上方的距离多长
        // console.log(wrap.current.scrollHeight);//代表整个滚动条多长
        // console.log(wrap.current.clientHeight);
        if (wrap.current.scrollHeight - wrap.current.scrollTop - wrap.current.clientHeight < bottom_scroll) {
            let _p = pageindex + 1;
            setPageindex(_p);
            setPagesize(_p * size);
        }
    }


    return <div ref={wrap} onScroll={() => { ScrollPage() }} className="grid grid--type-c">
        <div className="grid__sizer"></div>
        {
            poetrys && poetrys.length > 0 ? poetrys.map((po) => {
                return <div className="grid__item">
                    <header>
                        <h5>
                            {'<<' + po.title + '>>'}
                            <summary>体裁：{po.type || '无'}</summary>
                            <summary>作者：{po.poet || '无'}</summary>
                        </h5>
                    </header>
                    <article>
                        {
                            po && po.content && po.content.map((con) => {

                                return con.indexOf('。') > -1 ?
                                    <span> {con} <br /></span>
                                    : <span>{con}</span>
                            })

                        }

                    </article>
                    <br />

                    {/* <a className="grid__link" href="#"><img className="grid__img" src={require('../../assets/images/set3/1.jpg')} alt="Some image" /></a> */}
                </div>;
            }) : <div className="grid__item">
                    <header>
                        <h1>
                            "{key}"下暂无诗歌~
                        </h1>
                    </header>
                </div>
        }
    </div>
}

export default observer(PoetryListComponent);