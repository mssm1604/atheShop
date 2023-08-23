import { supabase } from '@/config/dbQuery'

async function handler(req, res) {
	const { query: param } = req

	const { data } = await supabase
		.from('products')
		.select()
		.eq('prID', param.idProduct)

	res.status(200).json({ products: data })
}

export default handler
