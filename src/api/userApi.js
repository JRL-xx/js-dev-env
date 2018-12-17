import {fetch} from 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function get(url) {
  return fetch(buildUrl(url)).then(onSuccess, onError);
}

function del(url) {
  return fetch(buildUrl(url), {method: 'delete'}).then(onSuccess, onError);
}

function buildUrl(url) {
  return baseUrl + url;
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
