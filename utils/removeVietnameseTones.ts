export function removeVietnameseTones(str: string): string {
    return str
      .normalize('NFD') // Tách các dấu ra khỏi ký tự
      .replace(/[\u0300-\u036f]/g, '') // Xóa các dấu đã tách
      .replace(/[\u02C6\u0306\u031B]/g, '') // Xóa các dấu ˆ, ̆, ̛ (nếu còn sót)
      .replace(/đ/g, 'd') // Thay thế chữ "đ"
      .replace(/Đ/g, 'D') // Thay thế chữ "Đ"
      .toLowerCase() // Chuyển sang chữ thường
      .trim() // Xóa khoảng trắng thừa ở đầu và cuối chuỗi
      .replace(/\s+/g, '-') // Thay thế khoảng trắng giữa các từ bằng dấu gạch ngang
  }