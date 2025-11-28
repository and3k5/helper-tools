import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "./pages",
    base: "/helper-tools/",
    title: "Helper tools",
    description: "Various tools",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            {
                text: "Math",
                items: [
                    {
                        text: "Geometry",
                        items: [
                            {
                                text: "Angle and coordinates conversion",
                                link: "/math/geometry/angle-and-coordinates-conversion",
                            },
                        ],
                    },
                ],
            },
            {
                text: "SQL",
                items: [
                    {text:"mssql", items: [{
                        text: "sp_executesql",
                        link: "/sql/mssql/sp_executesql"
                    }]}
                ]
            },
        ],

        sidebar: [
            {
                text: "Math",
                items: [
                    {
                        text: "Geometry",
                        items: [
                            {
                                text: "Angle and coordinates conversion",
                                link: "/math/geometry/angle-and-coordinates-conversion",
                            },
                        ],
                    },
                ],
            },
            {
                text: "SQL",
                items: [
                    {text:"mssql", items: [{
                        text: "sp_executesql",
                        link: "/sql/mssql/sp_executesql"
                    }]}
                ]
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/and3k5/helper-tools" },
        ],
    },
});
