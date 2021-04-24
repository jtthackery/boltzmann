// {% if selftest %}
export const REISSUE = Symbol.for('reissue')
export { Session }
// {% endif %}

/**{{- tsdoc(page="02-handlers.md", section="session") -}}*/
class Session extends Map<string, any> {
  [REISSUE]: boolean = false
  public dirty = false

  constructor(public id: string | null, ...args: any) {
    super(...args)
  }

  reissue() {
    this[REISSUE] = true
  }

  set(key: string, value: any) {
    const old = this.get(key)
    if (value === old) {
      return super.set(key, value)
    }
    this.dirty = true
    return super.set(key, value)
  }

  delete(key: string) {
    if (!this.has(key)) {
      return super.delete(key)
    }
    this.dirty = true
    return super.delete(key)
  }
}
