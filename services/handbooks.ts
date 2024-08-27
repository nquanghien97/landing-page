export async function getHandbooks() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/handbooks`)
    return res.json()
}

export async function getHandbook(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/handbooks/${slug}`)
    return res.json()
} 