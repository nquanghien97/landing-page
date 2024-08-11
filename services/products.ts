export async function getProducts({ page, pageSize, orderby }: { page: number, pageSize: number, orderby?: string }) {
  const params = new URLSearchParams();
  
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  if (orderby) params.append('orderby', orderby.toString());
  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${params.toString()}`)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products?${params.toString()}`)
  return res.json()
}

export async function getProduct(slug: string | number) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${slug}`)
  return res.json()
}