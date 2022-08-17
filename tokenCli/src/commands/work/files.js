/**
 * @typedef {Object} FileSaved
 * @property {string} name - File name.
 * @property {string} size - File size in MB.
 */

/**
 * @returns {FileSaved[]} Array of files stored by the miner.
 */
async function getFilesSaved() {
  return [
    {
      name: 'mastografia-irene',
      size: '100',
    },
    {
      name: 'mastografia-andrea',
      size: '30',
    },
  ];
}

/**
 * @typedef {Object} RequestedFile
 * @property {string} name - File name.
 * @property {string} size - File size in MB.
 * @property {string} times - Times a file was requested
 */

/**
 *
 * @returns {RequestedFile[]} Array of files requested.
 */
async function getFilesRequested() {
  return [
    {
      name: 'mastografia-irene',
      size: '100',
      times: '2',
    },
    {
      name: 'mastografia-andrea',
      size: '30',
      times: '0',
    },
  ];
}

module.exports = {
  getFilesRequested,
  getFilesSaved,
};
