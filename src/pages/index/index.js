import React, { useState, useEffect, createContext } from 'react';
import '../../assets/css/normalize.css';
import '../../assets/css/demo.css';
import '../../assets/css/index.less';
import { RightSliderComponent, LeftSliderComponent, PoetryListComponent } from '../../components';

function IndexPage(props) {
    return <main>
        <header class="codrops-header">
            <div class="codrops-links">

            </div>
            <h1 class="codrops-header__title">诗词大全-由<a href="http://xulayen.com">徐大腿</a>强力驱动</h1>
        </header >
        {/* 左边菜单 */}
        <LeftSliderComponent {...props} />

        {/* 右边菜单 */}
        {/* <RightSliderComponent {...props} /> */}

        <div className="content content--center">
            <PoetryListComponent  {...props} />
        </div>
    </main >
}

export default IndexPage;