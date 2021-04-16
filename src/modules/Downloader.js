/**
 * Downloader module
 * @module modules/Downloader
 */

/**
 * Attaches to an `anchor` element a content to download.
 * @param {string} id - Element identifier.
 * @param {string} data - Text to download.
 */
export default (id, data) => {
  const element = document.getElementById(id)
  const content = new Blob([data], { type: 'text/plain' })
  const timestamp = Date.now()
  const url = window.URL.createObjectURL(content)

  element.setAttribute('download', 'vault-' + timestamp)
  element.setAttribute('href', url)
  element.click()
}
