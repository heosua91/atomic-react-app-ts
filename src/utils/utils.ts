export const keyMirror = (obj: object) => {
  const ret: mirrorObject = {};

  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    ret[key] = key;
  }

  return ret;
};

export const removeStorage = (key: string) => {
  try {
    localStorage.setItem(key, '');
    localStorage.setItem(`${key}_expiresIn`, '');
  } catch (e) {
    console.log(
      `removeStorage: Error removing key [${
        key
      }] from localStorage: ${
        JSON.stringify(e)}`
    );
    return false;
  }
  return true;
}

export const getStorage = (key: string) => {
  const now = Date.now(); // epoch time, lets deal only with integer
  // set expiration for storage
  let expiresInValue = localStorage.getItem(`${key}_expiresIn`), expiresIn = 0;
  if (expiresInValue !== null) {
    expiresIn = parseInt(expiresInValue);
  }

  expiresIn = Math.abs(expiresIn);
  if (expiresIn < now) {
    // Expired
    removeStorage(key);
    return null;
  }

  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (e) {
    console.log(
      `getStorage: Error reading key [${
        key
      }] from localStorage: ${
        JSON.stringify(e)}`
    );
    return null;
  }
}

export const setStorage = (key: string, value: string, expires: number | null | undefined = null) => {
  if (expires === undefined || expires === null) {
    expires = 24 * 60 * 60; // default: seconds for 1 day
  }

  const now = Date.now(); // millisecs since epoch time, lets deal only with integer
  const schedule = now + expires * 1000;
  try {
    localStorage.setItem(key, value);
    localStorage.setItem(`${key}_expiresIn`, schedule.toString());
  } catch (e) {
    console.log(
      `setStorage: Error setting key [${
        key
      }] in localStorage: ${
        JSON.stringify(e)}`
    );
    return false;
  }
  return true;
}

export default {};