export function getDomain() {
	const domain = process.env.NEXT_PUBLIC_DEVELOPMENT
		? 'http://localhost:3000'
		: process.env.NEXT_PUBLIC_SITE

	return domain
}
