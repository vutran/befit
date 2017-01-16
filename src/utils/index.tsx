/**
 * Returns a simple time string for a given Date instance
 *
 * @param {Date} d
 * @return {String}
 */
export function toTime(d: Date): string {
    return d.getHours() + ':' + d.getMinutes();
}
