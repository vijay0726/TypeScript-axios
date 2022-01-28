// 1.区分环境变量方式一:
// export const API_BASE_URL = 'https://coderwhy/org/dev'
// export const API_BASE_URL = 'https://coderwhy/org/prod'

// 2.区分环境变量方式二:
let baseURL = ''
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://www.fastmock.site/mock/cef7cc3a98bba280baf1a8725d9e5e70/root'
} else if (process.env.NODE_ENV === 'development') {
  baseURL = 'https://www.fastmock.site/mock/cef7cc3a98bba280baf1a8725d9e5e70/root'
} else {
  baseURL = 'https://www.fastmock.site/mock/cef7cc3a98bba280baf1a8725d9e5e70/root'
}

// 3.区分环境变量方式三: 加载.env文件
export const API_BASE_URL =
  'https://www.fastmock.site/mock/cef7cc3a98bba280baf1a8725d9e5e70/root';

export const TIME_OUT = 10000;
