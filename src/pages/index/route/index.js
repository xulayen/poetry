import Loadable from '../../../components/loadable';
const IndexPage = Loadable(() => import('../index'));
export default [
    {
        path: "/:times?/:poet?",
        component: IndexPage,
        title: '唐诗宋词元曲集锦'
    }
];

