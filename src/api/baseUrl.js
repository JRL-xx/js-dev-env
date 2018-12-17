import 'url-search-params-polyfill';

export default function getBaseUrl() {
  return isMockApi() ? 'http://localhost:3001/': '/';
}

function isMockApi() {
  return new URLSearchParams(window.location.search).get('useMockApi') === 'true';
}
