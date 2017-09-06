import Raven from 'raven-js'

const sentry_key = '11c9f98b924442c283185b5ea124145e'
const sentry_app = '202834'

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`

export function logException(ex, context) {
	Raven.captureException(ex, {
		extra: context
	})
	window && window.console && console.error && console.error(ex)
}