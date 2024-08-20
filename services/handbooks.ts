export async function getHandbooks({ page, pageSize } : { page: number, pageSize: number }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/handbooks?page=${page}&pageSize=${pageSize}`, { next: { revalidate: 0 } })
    return res.json()
}

export async function getHandbook(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/handbooks/${slug}`, { next: { revalidate: 0 } })
    return res.json()
} 