export async function getHandbooks({ page, pageSize } : { page?: number, pageSize?: number }) {
    const params = new URLSearchParams();
    if (page) params.append('page', page.toString());
    if (pageSize) params.append('pageSize', pageSize.toString());
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/handbooks?${params.toString()}`)
    return res.json()
}

export async function getHandbook(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/handbooks/${slug}`)
    return res.json()
} 