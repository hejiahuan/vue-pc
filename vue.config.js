module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                //内置已经有@===>src
                "assets":"@/assets",
                "common":"@/common",
                "components":"@/components",
                "network":"@/network",
                "views":"@/views"
            }
        }

    }

}