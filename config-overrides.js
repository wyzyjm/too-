const { override, fixBabelImports, addWebpackAlias } = require("customize-cra")
const path = require("path")
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        // style: true
        style: "css"
    }),
    addWebpackAlias({
        //增加路径别名的处理
        "@": path.resolve("./src")
    })
)
