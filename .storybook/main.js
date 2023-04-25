// .storybook/main.js
module.exports = {
  // story 파일들의 경로를 설정 (main.js의 상대적 경로로 지정)
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  // storybook addon(스토리북 제공 기능) 설정 배열
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/preset-create-react-app', '@storybook/addon-mdx-gfm'],
  // react를 사용
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: true
  }
};