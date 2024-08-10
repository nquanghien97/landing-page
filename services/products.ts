export async function getProducts({ page, pageSize }: { page: number, pageSize: number }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?page=${page}&pageSize=${pageSize}`)
  return res.json()
}

export async function getProduct(slug: string | number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${slug}`)
  return res.json()
}