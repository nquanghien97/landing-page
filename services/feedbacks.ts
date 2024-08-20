export async function getFeedbacks({ page, pageSize } : { page?: number, pageSize?: number }) {
    const params = new URLSearchParams();
    if (page) params.append('page', page.toString());
    if (pageSize) params.append('pageSize', pageSize.toString());
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks?${params.toString()}`)
    return res.json()
}

export async function getFeedback(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks/${slug}`)
    return res.json()
} 