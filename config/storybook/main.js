/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import path from 'path'

const pathToInlineSvg = path.resolve(__dirname, '../../src/app/icons')

const config = {
  stories: [
    '../../src/**/*.mdx',
    '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      // eslint-disable-next-line no-undef
      path.resolve(__dirname, '../../src'),
    ]

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg')
    )

    fileLoaderRule.exclude = pathToInlineSvg

    config.module.rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resourcePath) => resourcePath.includes('.module.'),
            },
          },
        },
        'sass-loader',
      ],
    })

    return config
  },
}
export default config
