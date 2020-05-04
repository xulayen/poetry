import React, { useState, useEffect, createContext } from 'react';
import { observer } from "mobx-react";

function SearchPoetysComponent(props) {
    const [key, setKey] = useState('');

    function ChangeKey(e) {
        let value = e.target.value;
        props.store.IndexPageStore.txtKey = value;
        //props.store.IndexPageStore.updateTxtKey(e.target.value)
        setKey(value)
    }

    return <div className="searchForm">
        <input type="text" onChange={(e) => { ChangeKey(e) }} placeholder="请输入唐诗名称、内容或作者" id="txtKey" />
    </div>
}

export default observer(SearchPoetysComponent);