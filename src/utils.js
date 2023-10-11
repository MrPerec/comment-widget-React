/**
 * Генерирует уникальный идентификатор.
 * @returns {string} Уникальный идентификатор.
 * @example
 * //returns '97b8c21f-2b3a-416d-9fd6-70a0787a98ac'
 * getUuid();
 */
export function getUuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}
