export async function getFeedbacks({ page, pageSize } : { page: number, pageSize: number }) {
    const res = await fetch(`http://localhost:3000/api/feedbacks?page=${page}&pageSize=${pageSize}`)
    return res.json()
}