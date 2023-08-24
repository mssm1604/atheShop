export function getDomain() {
	const domain = process.env.NEXT_DEVELOPMENT
		? 'http://localhost:3000'
		: process.env.NEXT_LINK_SITE

	return domain
}
