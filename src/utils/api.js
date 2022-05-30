const URL = "https://api.thecatapi.com/v1/images/search";

function _getResponseData(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export function getCats(howMany) {
  return fetch(`${URL}?limit=${howMany}`, {
    method: "GET",
  }).then((res) => {
    return _getResponseData(res);
  });
}


