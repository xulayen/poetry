
import Loadable from 'react-loadable';

// 按需加载组件
export default function withLoadable(comp) {
    return Loadable({
        loader: comp,
        timeout: 10000,
        loading: (props) => {
            return "";
        }
    })
}

