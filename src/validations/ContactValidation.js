import * as YUP from 'yup';
export const contactSchema = YUP.object().shape({
    fullName:YUP.string().required("نام و نام خانوادگی الزامی است"),
    photo: YUP.string().url("آدرس معتبر نیست").required("آدرس تصویر  الزامی است "),
    mobile:YUP.number().required("شماره موبایل الزامی است"),
    email:YUP.string().email("آدرس ایمیل نا معتبر است").required("آدرس ایمیل الزامی است"),
    job:YUP.string().nullable(),
    group:YUP.string().required("انتخاب گروه الزامی است"),

});