// const axios = require('axios');

/*
class Vapor {
  //Store a file in S3 and return its UUID, key, and other information.
  async store(file, options = {}) {
    const response = await axios.post(
      '/vapor/signed-storage-url',
      {
        bucket: options.bucket || '',
        content_type: options.contentType || file.type,
        expires: options.expires || '',
        visibility: options.visibility || '',
      },
      {
        baseURL: options.baseURL || null,
        headers: options.headers || {},
        ...options.options,
      }
    );

    let headers = response.data.headers;

    if ('Host' in headers) {
      delete headers.Host;
    }

    if (typeof options.progress === 'undefined') {
      options.progress = () => {};
    }

    const cancelToken = options.cancelToken || '';

    await axios.put(response.data.url, file, {
      cancelToken: cancelToken,
      headers: headers,
      onUploadProgress: (progressEvent) => {
        options.progress(progressEvent.loaded / progressEvent.total);
      },
    });

    response.data.extension = file.name.split('.').pop();

    return response.data;
  }
}

module.exports = new Vapor();
*/

// Temp for now to allow the project to compile
// module.exports = {};

export {};
