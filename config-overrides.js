

const {
    override,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy
} = require('customize-cra');


module.exports = override(
    addDecoratorsLegacy(),
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        style: true
    },{
        libraryName: "swiper",
        style: true
    }),
    // fixBabelImports("import2", {
    //     libraryName: "antd",
    //     style: true
    // }),
    addLessLoader({
        modules: false,
        javascriptEnabled: true,
        modifyVars: { 
            "@primary-color": "#C5D630",
            "@title-color": "#fff"
        }
    })
)

