export const StaffType = {
    IDENTIFIER: "Tư vấn viên được xác thực ủy quyền",
    BANK: "Chủ sở hữu tài khoản thuộc nhãn hàng"
} as const;

export type StaffType = typeof StaffType[keyof typeof StaffType];

export interface StaffEntity {
    id: number;
    name: string;
    identifier?: number;
    bankName?: string;
    bankNumber?: number;
    type: 'BANK' | 'IDENTIFIER'
}