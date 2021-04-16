/**
 * Crypto module
 * @module modules/Crypto
 */

import CryptoJS from 'crypto-js'

/**
 * Decrypt a encrypted string.
 * @param {string} string - Data to decrypt.
 * @param {string} passphrase - Secret passphrase.
 * @return {string} Decrypted data.
 */
export const decrypt = (string, passphrase) => {
  const bytes = CryptoJS.AES.decrypt(string, passphrase)

  return bytes.toString(CryptoJS.enc.Utf8)
}

/**
 * Encrypt a string
 * @param {string} string - Data to encrypt.
 * @param {string} passphrase - Secret passphrase.
 * @return {string} Encrypted data.
 */
export const encrypt = (string, passphrase) => {
  return CryptoJS.AES.encrypt(string, passphrase).toString()
}
