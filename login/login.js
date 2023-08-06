const loginForm = document.getElementById("loginForm");
const confirmationMessage = document.getElementById("confirmationMessage");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // لمنع إعادة تحميل الصفحة

  // هنا يمكنك كتابة رمز التحقق من بيانات تسجيل الدخول
  // وفي حال نجاح تسجيل الدخول، قم بإزالة الفئة "hidden" من عنصر div لرسالة التأكيد
  confirmationMessage.classList.remove("hidden");
});
