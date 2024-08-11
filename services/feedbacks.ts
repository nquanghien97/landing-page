export async function getFeedbacks({ page, pageSize } : { page: number, pageSize: number }) {
    const res = await fetch(`http://localhost:3000/api/feedbacks?page=${page}&pageSize=${pageSize}`)
    return res.json()
}

export async function getFeedback(slug: string) {
    const res = await fetch(`http://localhost:3000/api/feedbacks/${slug}`)
    return res.json()
} 