/**
 * Checks status to either return response or error
 *
 * @param {object} res A response from fetch call
 * @return {object|undefined} Returns a response or nothing if no errors
 */
function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }

  const error = new Error(res.statusText);
  error.response = res;

  throw error;
}

function parseJSON(res) {
  return res.json();
}

/**
 * Given a url and options we fetch a response and parse it to json
 *
 * @param {string} url The URL we request
 * @param {object} options The header or other options to adjust
 *
 * @return {object} Return a json object
 */

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
