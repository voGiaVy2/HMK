// Storage array for appointments (or save to DB)
const appointments = [];

// POST /api/appointments
export const createAppointment = (req, res) => {
  try {
    const { contact, note } = req.body;

    if (!contact || contact.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: 'Vui lòng cung cấp số điện thoại hoặc email hợp lệ'
      });
    }

    const newAppointment = {
      id: 'APT-' + Date.now(),
      contact: contact.trim(),
      note: note || 'Đăng ký đo mắt & tư vấn chọn kính',
      createdAt: new Date().toISOString()
    };

    appointments.push(newAppointment);

    res.status(201).json({
      success: true,
      message: 'Đặt lịch hẹn thành công! HMK Eyewear sẽ liên hệ sớm nhất.',
      data: newAppointment
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Lỗi máy chủ khi đăng ký hẹn', error: error.message });
  }
};
