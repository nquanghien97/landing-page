export async function getHandbooks({ page, pageSize } : { page: number, pageSize: number }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/handbooks?page=${page}&pageSize=${pageSize}`)
    return res.json()
}

export async function getHandbook(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/handbooks/${slug}`)
    return res.json()
} 