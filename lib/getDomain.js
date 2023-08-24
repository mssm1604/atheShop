export function getDomain() {
	let domain
	process.env.NEXT_PUBLIC_DEVELOPMENT === 'true'
		? (domain = 'http://localhost:3000')
		: (domain = process.env.NEXT_PUBLIC_SITE)

	return domain
}
