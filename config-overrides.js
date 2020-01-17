const { override, fixBabelImports, addLessLoader } = require('customize-cra');

// 按需加载antd样式
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    })
),
// 加载less样式文件
addLessLoader({
    javascriptEnabled: true,
    modifyvars: {
        'hack': `true; @import "theme.less";`,
    }
});
