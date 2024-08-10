export async function getHandbooks({ page, pageSize } : { page: number, pageSize: number }) {
    const res = await fetch(`http://localhost:3000/api/handbooks?page=${page}&pageSize=${pageSize}`)
    return res.json()
}