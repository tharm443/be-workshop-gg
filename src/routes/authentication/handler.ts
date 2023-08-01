// ในไฟล์ loginHandler.ts
import { Request, Response } from 'express';

export const loginHandler = (req: Request, res: Response) => {
  // ทำการดึงข้อมูลผู้ใช้จาก body ของรีเควส
  const { username, password } = req.body;

  // เช่น ตรวจสอบว่าชื่อผู้ใช้และรหัสผ่านถูกต้องหรือไม่
  if (username === 'john' && password === 'password') {
    // ส่งข้อความตอบกลับให้กับผู้ใช้ว่าเข้าสู่ระบบสำเร็จ
    res.json({ message: 'เข้าสู่ระบบสำเร็จ' });
  } else {
    // ส่งข้อความตอบกลับให้กับผู้ใช้ว่าเข้าสู่ระบบไม่สำเร็จ
    res.status(401).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
  }
};