/** @format */
const css_regex = '/\\.css$/';
module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-controls',
    ],
    // webpackFinal: async config => {
    //     const path = require('path');
    //     //
    //     // config.module.rules = config.module.rules.filter(
    //     //     f => f.test.toString() !== '/\\.css$/',
    //     // );
    //     // config.module.rules.push({
    //     //     test: /\.css$/,
    //     //     exclude: /\.css$/,
    //     //     loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    //     //     include: path.resolve(__dirname, '../'),
    //     // });
    //     // return config;
    //
    //     config.module.rules = config.module.rules.map(f => {
    //         // Needed to add this to ignore our ../src/ for the default rule, instead of purging it.
    //         if (f.test.toString() === '/\\.css$/') {
    //             f.exclude = path.resolve(__dirname, '../src/');
    //         }
    //
    //         return f;
    //     });
    //
    //     config.module.rules.push({
    //         test: /\.css$/,
    //         include: path.resolve(__dirname, '../src/'), // Needed to be changed from ../
    //         loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    //     });
    //
    //     return config;
    //
    //     // return {
    //     //     ...config,
    //     //     module: {
    //     //         ...config.module,
    //     //         rules: [
    //     //             ...config.module.rules,
    //     //             {
    //     //                 test: /\.css$/,
    //     //                 use: ['style-loader', 'css-loader', 'postcss-loader'],
    //     //                 include: path.resolve(__dirname, '../'),
    //     //             },
    //     //         ],
    //     //     },
    //     // };
    // },
    webpackFinal(config = {}, options = {}) {
        const cssRule = config.module.rules.find(
            _ => _ && _.test && _.test.toString() === css_regex,
        );

        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules.filter(
                        _ => _ && _.test && _.test.toString() !== css_regex,
                    ),
                    {
                        ...cssRule,
                        exclude: /\.module\.css$/,
                    },
                    {
                        ...cssRule,
                        test: /\.module\.css$/,
                        use: cssRule.use.map(_ => {
                            if (
                                _ &&
                                _.loader &&
                                _.loader.match(/[\/\\]css-loader/g)
                            ) {
                                return {
                                    ..._,
                                    options: {
                                        ..._.options,
                                        modules: {
                                            localIdentName:
                                                '[name]__[local]__[hash:base64:5]',
                                        },
                                    },
                                };
                            }

                            return _;
                        }),
                    },
                ],
            },
        };
    },
};
