export async function getHandbooks({ page, pageSize } : { page: number, pageSize: number }) {
    const res = await fetch(`http://localhost:3000/api/handbooks?page=${page}&pageSize=${pageSize}`, { next: { revalidate: 0 } })
    return res.json()
}

export async function getHandbook(slug: string) {
    const res = await fetch(`http://localhost:3000/api/handbooks/${slug}`, { next: { revalidate: 0 } })
    return res.json()
} 