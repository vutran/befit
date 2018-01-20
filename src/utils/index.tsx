/**
 * Returns a simple time string for a given Date instance
 *
 * @param Date d
 * @return string
 */
export function toTime(d: Date): string {
    return d.getHours() + ":" + d.getMinutes();
}
