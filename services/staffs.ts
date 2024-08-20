export async function getStaffs({ page, pageSize, search }: { page?: number, pageSize?: number, search?: string }) {
    const params = new URLSearchParams();
    
    if (page) params.append('page', page.toString());
    if (pageSize) params.append('pageSize', pageSize.toString());
    if (search) params.append('search', search.toString());
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/staffs?${params.toString()}`, { next: { revalidate: 10 } })
    return res.json()
  }