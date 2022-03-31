const menuList = [
    {
        title: "首页",
        path: "/home",
        icon: "home"
    },
    {
        title: "商品",
        path: "/products",
        icon: "tool",
        children: [
            {
                title: "商品列表",
                path: "/list",
                icon: "tool"
            },
            {
                title: "商品分类",
                path: "/category",
                icon: "tool"
            },
            {
                title: "商品详情",
                path: "/detail",
                icon: "tool"
            }
        ]
    },
    {
        title: "用户管理",
        path: "/users",
        icon: "tool",
        children: [
            {
                title: "用户列表",
                path: "/userlist",
                icon: "tool"
            },
            {
                title: "角色管理",
                path: "/role",
                icon: "tool"
            }
        ]
    },
    {
        title: "可视化",
        path: "/chart",
        icon: "tool",
        children: [
            {
                title: "折线图",
                path: "/chart/line",
                icon: "tool"
            },
            {
                title: "饼状图",
                path: "/chart/pie",
                icon: "tool"
            },
            {
                title: "柱状图",
                path: "/chart/bar",
                icon: "tool"
            }
        ]
    }
]

export default menuList
