export async function getFeedbacks({ page, pageSize } : { page: number, pageSize: number }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks?page=${page}&pageSize=${pageSize}`, { next: { revalidate: 60 } })
    return res.json()
}

export async function getFeedback(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks/${slug}`, { next: { revalidate: 60 } })
    return res.json()
} 