import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'


export const assets = {
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "GreatStack",
    "email": "user.greatstack@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
                "name": "Great Stack",
                "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
            }
        }
    ],
    "totalCourses": 8
}

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:39:55.509Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Introduction to JavaScript",
        "purchaseDate": "2024-12-20T08:59:49.964Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Advanced Python Programming",
        "purchaseDate": "2024-12-20T11:03:42.931Z"
    },
    {
        "student": {
            "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "name": "GreatStack",
            "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
        },
        "courseTitle": "Web Development Bootcamp",
        "purchaseDate": "2024-12-20T11:04:48.798Z"
    }
]

// export const dummyCourses = [
//     {
//         "_id": "605c72efb3f1c2b1f8e4e1a1",
//         "category": "FRONT_END",
//         "courseTitle": 'آموزش تایپ اسکریپت ',
//         "courseDescription": "<p>تایپ‌اسکریپت (TypeScript) به عنوان یک زبان برنامه‌نویسی بر پایه جاوااسکریپت شناخته می‌شود که کاملا Open-Source است. این متن‌باز بودن به این معناست که شما هم می‌توانید در توسعه آن نقش داشته باشید. در دوره <strong>آموزش تایپ‌اسکریپت (TypeScript)</strong> ما سعی می‌کنیم روش کار با این زبان را قدم به قدم به شما آموزش دهیم.</p>",
//         "coursePrice": 1600000,
//         "isPublished": true,
//         "discount": 20,
//         "courseContent": [
//             {
//                 "chapterId": "chapter1",
//                 "chapterOrder": 1,
//                 "chapterTitle": "مقدمه",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture1",
//                         "lectureTitle": " TypeScript چیست",
//                         "lectureDuration": 16,
//                         "lectureUrl": "https://caspian18.cdn.asset.aparat.com/aparat-video/fcf8ae48d992e0993b70fbea8b84cabc63302537-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImI3OTI0N2U4Nzc1ZDg1MGI3YWZlMmY1NDhlNWM0ODEzIiwiZXhwIjoxNzc3NTYzMTE0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.otD3gwiJ7iXHQQBAfcQ4IlFj0XIYzjg80Ys-soDHDl4",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture2",
//                         "lectureTitle": " نصب و کامپایل TypeScript",
//                         "lectureDuration": 19,
//                         "lectureUrl": "https://caspian18.cdn.asset.aparat.com/aparat-video/7f7f667aa409221939379551c6e50cfd63314713-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImNmZDVjYTk2YTlkOTY5NTU3NTE5YjAzODc2ZTg0MjA3IiwiZXhwIjoxNzc3NTY1NDM3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.mI-flkSS1U2jBrRduyT-kbXwJFAD47QOWuHBcHioa8U",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             },
//             {
//                 "chapterId": "chapter2",
//                 "chapterOrder": 2,
//                 "chapterTitle": "سطح مقدماتی",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture3",
//                         "lectureTitle": "انواع داده در TypeScript",
//                         "lectureDuration": 20,
//                         "lectureUrl": "https://persian20.cdn.asset.aparat.com/aparat-video/68a189513742009718efde982bd9faee63322782-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFmZTk0YWZmNjk0N2E2MDE1OGJkYjEzYTM4OGMzZmMzIiwiZXhwIjoxNzc3NTY1NTMxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.mjMQBRMtJ64yzFPHByxe60Yv4omwc0fBSASdKjRWupE",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture4",
//                         "lectureTitle": " enum در TypeScript",
//                         "lectureDuration": 10,
//                         "lectureUrl": "https://caspian16.cdn.asset.aparat.com/aparat-video/770f5ee481149e328e68461a6a14ed6763337567-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ2MzlmYTA0ZjBjOGZlZTI3YTE0ZGE2NWI5YjBlYTkxIiwiZXhwIjoxNzc3NTY1Njk2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.7qNpUAZJhdvGd12pCexBDnYjUGZKYr0Wlm-TPWS4UM4",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             },
//             {
//                 "chapterId": "chapter3",
//                 "chapterOrder": 3,
//                 "chapterTitle": "سطح پیشرفته",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture5",
//                         "lectureTitle": "توابع در TypeScript",
//                         "lectureDuration": 20,
//                         "lectureUrl": "https://persian19.cdn.asset.aparat.com/aparat-video/e3fe1b3e66eb218f995409504e62208563360577-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZlMjkzMGU3ODM1NjI1Njc0NDdhMjk4N2YwZTFmZTMxIiwiZXhwIjoxNzc3NTY1Nzk2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.q_VxTIHfNvsbvxdoUBVJwrMFm4UbmE-Mq2yMmK5LJUo",
//                         "isPreviewFree": false,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture6",
//                         "lectureTitle": "void و never در TypeScript",
//                         "lectureDuration": 10,
//                         "lectureUrl": "https://caspian20.cdn.asset.aparat.com/aparat-video/9225ff336b0d2e1522fab848a342504863368530-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImQ4ZWYxOTkyMjg1NDYzOWU3MWFiMDRjNDlmZDZhMDIxIiwiZXhwIjoxNzc3NTY1ODY4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.6UazGLri9oc2bP0abeEcxkrkKhCKP6zKeRl_TOyeMJg",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             }
//         ],
//         "educator": "علی رمضانی",
//         "enrolledStudents": [
//             "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
//             "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
//             "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
//         ],
//         "courseRatings": [
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.2,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//         ],
//         "createdAt": "2024-12-17T08:16:53.622Z",
//         "updatedAt": "2025-01-02T04:47:44.701Z",
//         "__v": 4,
//         "courseThumbnail": 'https://static.roocket.ir/images/cover/2023/12/1/2gQywMLjpSjB83nPZ1tlDPxxqzOgNDnOT3IBkK1s.jpg'
//     },
//     {
//         "_id": "675ac1512100b91a6d9b8b24",
//         "category": "BACK_END",
//         "courseTitle": "آموزش پروژه‌های لاراولی",
//         "courseDescription": "<p>در این دوره پروژه محور لاراول، با ساخت ۱۰ پروژه واقعی مهارت‌های خود را در Laravel تقویت کنید! از احراز هویت چندگانه و مدیریت نقش‌ها تا چت زنده، سیستم پرداخت و بهینه‌سازی، همه چیز را در عمل یاد بگیرید.</p>",
//         "coursePrice": 4900000,
//         "isPublished": true,
//         "discount": 15,
//         "courseContent": [
//             {
//                 "chapterId": "chapter1",
//                 "chapterOrder": 1,
//                 "chapterTitle": "معرفی و مقدمه",
//                 "chapterContent": [
//                     {
//                         "lectureId": " lecture1",
//                         "lectureTitle": "معرفی دوره",
//                         "lectureDuration": 720,
//                         "lectureUrl": "https://persian5.cdn.asset.aparat.com/aparat-video/a8d5cd607f1a48a298d4f68776391b5c49353210-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImJiNDA2NmUzM2MzYzBjODk4MGNmNjJmMzA2NmY1YTQyIiwiZXhwIjoxNzgwMDk3NDYwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.m9LdlbPkFdi5sDSXiq4zgUyp-m-5LM2a_l6b0lQ61w8",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture2",
//                         "lectureTitle": "روند پیاده‌سازی پروژه‌ها",
//                         "lectureDuration": 850,
//                         "lectureUrl": "https://caspian12.cdn.asset.aparat.com/aparat-video/9b8a35805c7a23e462415b8fd91df57656850120-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImMxYzQwYTdhZTQ1ZmNmMDdkMGE5YTVjZWM4ZWIzMjgxIiwiZXhwIjoxNzgwMDk3NTYwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.zOHO7cd3w1GzLIYehZO06Cj8ZkaVGtes9WOcRtYH3QQ",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             },
//             {
//                 "chapterId": "chapter2",
//                 "chapterOrder": 2,
//                 "chapterTitle": "راه اندازی احراز هویت تخصصی",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture3",
//                         "lectureTitle": "قدم اول تحلیل موضوع",
//                         "lectureDuration": 900,
//                         "lectureUrl": "https://persian22.cdn.asset.aparat.com/aparat-video/90651f30deaa184b31c4e3c149bd919668564960-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImYzMWViZjZlNmEyZjVjM2Y4MzY2NmM4NWYyNDUyMDFjIiwiZXhwIjoxNzgwMDk3NjM0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.UJTsxpYP6tYD-vsi9htSpMrjvvBCGHamzB2WcIr9EAo",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture4",
//                         "lectureTitle": "آماده‌سازی مدل User بر اساس نیاز",
//                         "lectureDuration": 950,
//                         "lectureUrl": "https://hw20.cdn.asset.aparat.com/aparat-video/63bd7340fbcebe35617e632fbf7e4bed16906842-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFlY2NmODJhNjdkYjEyM2MzM2I2Y2RmMDdhOGFiMDRlIiwiZXhwIjoxNzgwMDk3NzQxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.1j8ruY36YW7-yqj2N6xZsjMBOkj4V6geXncX3GslEHk",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             }
//         ],
//         "educator": "محمد جهان ابادی",
//         "enrolledStudents": [
//             "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
//             "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
//         ],
//         "courseRatings": [
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.9,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.9,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.9,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.8,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 2.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4.2,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//         ],
//         "createdAt": "2024-12-17T08:16:53.622Z",
//         "updatedAt": "2025-01-02T06:47:54.446Z",
//         "__v": 3,
//         "courseThumbnail": 'https://static.roocket.ir/images/cover/2025/3/15/JZqw0e3uCE9mCCVXdakrLWPqnmY0EREU5y6GEPHw.jpg'
//     },
//     {
//         "_id": "605c72efb3f1c2b1f8e4e1ae",
//         "category": "FRONT_END",
//         "courseTitle": " React آموزش پیشرفته ",
//         "courseDescription": "<p className='dir'>React.js از جمله‌ مهمترین ابزارها برای توسعه رابط کاربری و Front-End است. در چند سال گذشته نیز React تغییرات بسیار زیادی به خود دیده و همراه با این تغییرات، تکنیک‌های جدیدی نیز برای استفاده از آن ابداع شده است. به همین دلیل نیاز است که به صورت حرفه‌ای با این سازوکارها آشنا شوید و بتوانید از آن‌ها به صورت عملی استفاده کنید.&nbsp;</p>",
//         "coursePrice": 1890000,
//         "isPublished": true,
//         "discount": 15,
//         "courseContent": [
//             {
//                 "chapterId": "chapter1",
//                 "chapterOrder": 1,
//                 "chapterTitle": "معرفی",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture1",
//                         "lectureTitle": " معرفی دوره",
//                         "lectureDuration": 10,
//                         "lectureUrl": "https://caspian17.cdn.asset.aparat.com/aparat-video/2557edf2258bfe19f4d3fe329a8c1bbb61455025-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVjN2Q2ZWI0NzYzNzY2YzBkOWQyYjU4NjFhMjEwNTA4IiwiZXhwIjoxNzgwMDk4MzA3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.eKsQQh6n5_8x8G8t_kt-VKDCKlOIUYuKHMlsoCRQ-TY",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture2",
//                         "lectureTitle": "چرا نیاز است این دوره رو ببینیم؟",
//                         "lectureDuration": 18,
//                         "lectureUrl": "https://caspian16.cdn.asset.aparat.com/aparat-video/a4fbabab4651ec239d2841a3679c4b7061183546-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjU1NGExNTMwNjIzZjc3NTk2N2EwZGJmNzFjZDQ0OTNhIiwiZXhwIjoxNzgwMDk4NDA3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Y_qp0-Y30RDCSv4NlNxT5NY5PFm-I0Foo_uLT3VZVlA",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             },
//             {
//                 "chapterId": "chapter2",
//                 "chapterOrder": 2,
//                 "chapterTitle": "کامپوننت‌های پیش فرض",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture3",
//                         "lectureTitle": "کامپوننت Fragment",
//                         "lectureDuration": 15,
//                         "lectureUrl": "https://caspian18.cdn.asset.aparat.com/aparat-video/ecd50a5f89e304b44d5ed7f0b1a82a9a61192600-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjNlZjBiZTFjMzViNjRlNTk5Y2JhZmJlZTA1OWExZTIxIiwiZXhwIjoxNzgwMDk4NDkzLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.kdCnFbF62oL9UolQHoJiQyuk3uEHPU-thVmly55hnsc",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture4",
//                         "lectureTitle": "کامپوننت StrictMode",
//                         "lectureDuration": 20,
//                         "lectureUrl": "https://caspian16.cdn.asset.aparat.com/aparat-video/ad10b379ea2b9c2bf5808e6de43368ad61202310-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjU5YTJiYmYyNmY2NDE2NDdiZGYxZThjMjBhOTUwZWZiIiwiZXhwIjoxNzgwMDk4NTY3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.BdTCxszZp75cUjISbIOxjaQjxmKXYnXQ7Jh-YboFj7Q",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             }
//         ],
//         "educator": "محمد جهان ابادی",
//         "enrolledStudents": [
//             "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
//             "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
//         ],
//         "courseRatings": [
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 2.7,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4.3,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 1.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 2,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//         ],
//         "createdAt": "2024-12-27T11:30:00.000Z",
//         "updatedAt": "2024-12-31T04:14:49.773Z",
//         "__v": 2,
//         "courseThumbnail": "https://static.roocket.ir/images/cover/2024/3/1/aE9nP6wnSnB9ib0M1Q6HelLDM2UZtBf1Bo5LAUhu.jpg"
//     },
//     {
//         "_id": "605c72efb3f1c2b1f8e4e1a7",
//         "category": "FRONT_END",
//         "courseTitle": "HTML آموزش ",
//         "courseDescription": "<p>HTML&nbsp;به عنوان یک زبان نشانه‌گذاری شناخته می‌شود که به شما اجازه می‌دهد ساختار یک صفحه وب را به شکلی که مد نظر دارید ایجاد کنید. ما در دوره <strong>آموزش HTML </strong>سعی کرده‌ایم خیلی ساده و سریع و رایگان این زبان نشان‌گذاری را به شکل کامل به شما آموزش دهیم.</p>",
//         "coursePrice": 200000,
//         "isPublished": true,
//         "discount": 25,
//         "courseContent": [
//             {
//                 "chapterId": "chapter1",
//                 "chapterOrder": 1,
//                 "chapterTitle": "معرفی دوره",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture1",
//                         "lectureTitle": "HTML چیست ؟",
//                         "lectureDuration": 600,
//                         "lectureUrl": "https://caspian24.cdn.asset.aparat.com/aparat-video/6ba88fa53ead0a9770eeed684db0f05e67541479-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjZhNzYyNDZjOTNlODIyNzJmZTM1ZjQxNWQwNDJjZGIzIiwiZXhwIjoxNzgwMTAwNTc2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.N2LjqtMiHWg9bx4RnpplL4MzAPOawDznxBNLzaHNuVA",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture2",
//                         "lectureTitle": "آشنایی با ساختار صفحات",
//                         "lectureDuration": 720,
//                         "lectureUrl": "https://caspian24.cdn.asset.aparat.com/aparat-video/55d5a287170de1c2c3eaa88d4ac82d6b67322031-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjJmZDJkMTdlMTViMTIyM2YyY2IxN2IwNjhiZGM5Y2RlIiwiZXhwIjoxNzgwMTAwNjQxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.g89OUt5xZDcLUIYOsawJfz24EtE4phmhEo-JSuqRCZ0",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             },
//             {
//                 "chapterId": "chapter2",
//                 "chapterOrder": 2,
//                 "chapterTitle": "تگ ها",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture3",
//                         "lectureTitle": "تگ های Heading",
//                         "lectureDuration": 800,
//                         "lectureUrl": "https://persian22.cdn.asset.aparat.com/aparat-video/3b9d5770876e32363d3b71fd2ec6593a67322727-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjBiMjg1NzhmMjZmMzJhY2Y4OGY0ZGU0YzQ2ZDdmMmJlIiwiZXhwIjoxNzgwMTAwNzQ4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.e7ka8cI5-HRcsngCN6lP99yKO5xzC2AnOjwx-KIvbys",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture4",
//                         "lectureTitle": "تگ پاراگراف",
//                         "lectureDuration": 850,
//                         "lectureUrl": "https://persian24.cdn.asset.aparat.com/aparat-video/974ac188460fc19f3a0714df9c1c5e5d67322232-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImJiZTQ2OWFmNDJjYmFmNTQ2NWI5MzJlYjI2ZTE3ODAyIiwiZXhwIjoxNzgwMTAwNzkwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.stBOq0K3zs0jrje47wAPvLZdWtUcgvtlIFkSjJdzcno",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             }
//         ],
//         "educator": "محمد میرزایی",
//         "enrolledStudents": [
//             "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
//             "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
//         ],
//         "courseRatings": [
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 2.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 2,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 1,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//         ],
//         "createdAt": "2024-12-17T08:16:53.622Z",
//         "updatedAt": "2024-12-31T05:31:27.290Z",
//         "__v": 2,
//         "courseThumbnail": "https://static.roocket.ir/images/cover/2023/12/1/oDeQGSRo3mEnYF3BAkI1koRxuKIqUFTKo0HIH2e1.jpg"
//     },
//     {
//         "_id": "605c72efb3f1c2b1f8e4e1ac",
//         "category": "BACK_END",
//         "courseTitle": "(Django) آموزش جنگو ",
//         "courseDescription": "<p>در حال حاضر در دنیای توسعه وب ما تنها چند فریمورک Back-End با تجربیات موفق داریم که می‌توانند همه کارهای مربوط به توسعه وبسایت را در قسمت Back-End انجام دهند. Django یکی از این فریمورک‌هاست. Django با قدرت گرفتن از زبان برنامه‌نویسی پایتون توجه بسیاری از توسعه‌دهندگان را به خود معطوف ساخته و افراد بسیاری با استفاده از آن وبسایت‌های مربوط به استارتاپ‌ها و حتی شرکت‌های بسیار بزرگ را ایجاد می‌کنند. ما در سال‌های اخیر نبود یک دوره آموزشی برای این فریمورک را کاملا حس می‌کردیم و به همین دلیل تصمیم گرفتیم که این کار را انجام دهیم.</p>",
//         "coursePrice": 1000000,
//         "isPublished": true,
//         "discount": 20,
//         "courseContent": [
//             {
//                 "chapterId": "chapter1",
//                 "chapterOrder": 1,
//                 "chapterTitle": "معرفی فریمورک جانگو",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture1",
//                         "lectureTitle": "پیاده سازی محیط توسعه پروژه",
//                         "lectureDuration": 600,
//                         "lectureUrl": "https://persian6.cdn.asset.aparat.com/aparat-video/8f6ab810ea5daafc853bbda23f9aa0c352739872-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIwNzVlZWU2MjUxNmFiYTFlNDhhNjRlNmU2MTIxYmIwIiwiZXhwIjoxNzgwMTAxMTQ4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.ePwBNap0KuPL4K59Fkc_m1n-JOfAHsAMLXmADOmRuaI",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture2",
//                         "lectureTitle": "نصب و راه اندازی Django",
//                         "lectureDuration": 720,
//                         "lectureUrl": "https://caspian7.cdn.asset.aparat.com/aparat-video/1f88bc5777209990f9976605b9085a1f52693209-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ1ZGE2MzBkMTlmNDJlYTEyMzk4NTI2N2E5MDBlMDE2IiwiZXhwIjoxNzgwMTAxMjAyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.9lzSNSbwv0ISNRFmpVK-xJKA88qOOepkAc1c3XBqHcM",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             },
//             {
//                 "chapterId": "chapter2",
//                 "chapterOrder": 2,
//                 "chapterTitle": "MTV وب فریمورک و معماری ",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture3",
//                         "lectureTitle": "اولین خروجی در جانگو",
//                         "lectureDuration": 800,
//                         "lectureUrl": "https://caspian9.cdn.asset.aparat.com/aparat-video/1ee06e0f462865ae96f56ff558c825b352693294-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjkyZWYzNTJhMWQwMDMxOWQyYmZiZThlYjRjZjZmYmMwIiwiZXhwIjoxNzgwMTAxMjk3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.A8D4rkv5CyRyNs-plHtxRyGzGZ-_jpZTQ82QwgOpybA",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture4",
//                         "lectureTitle": "آشنایی با لایه مدل",
//                         "lectureDuration": 850,
//                         "lectureUrl": "https://persian9.cdn.asset.aparat.com/aparat-video/3b62814334d266a83633d470a6c644c652940246-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImViOTA5ZTJkZjFmNmNmZmM3MWVmNDgyYjQxMzcyODJiIiwiZXhwIjoxNzgwMTAxMzQyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.KuYStWAtE8DYiUoIzG-fn7EkClNoocyWn1dum9yMU94",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             }
//         ],
//         "educator": "محمد میرزایی",
//         "enrolledStudents": [
//             "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
//         ],
//         "courseRatings": [
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 3,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4.5,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 4,
//                 "_id": "6773e37360cb0ab974342314"
//             },
//         ],
//         "createdAt": "2024-12-17T08:16:53.622Z",
//         "updatedAt": "2024-12-31T05:32:55.357Z",
//         "__v": 1,
//         "courseThumbnail": "https://static.roocket.ir/images/cover/2023/12/1/TWUhriqlO8ZUveiZvAacUBLAzNQkWXmtrsdXYbGu.jpg"
//     },
//     {
//         "_id": "605c72efb3f1c2b1f8e4e1ad",
//         "category": "FRONT_END",
//         "courseTitle": "آموزش انگولار",
//         "courseDescription": "<p><strong>انگولار</strong> به عنوان یک پلتفرم و فریمورک برای ایجاد کردن وبسایت‌های SPA یا همان تک صفحه‌ای با استفاده از HTML و TypeScript شناخته می‌شود. معماری یک برنامه Angular به مفاهیم اساسی خاصی وابسته است.</p>",
//         "coursePrice": 2000000,
//         "isPublished": true,
//         "discount": 20,
//         "courseContent": [
//             {
//                 "chapterId": "chapter1",
//                 "chapterOrder": 1,
//                 "chapterTitle": "قدم ابتدایی",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture1",
//                         "lectureTitle": "انگولار چیست؟",
//                         "lectureDuration": 11,
//                         "lectureUrl": "https://persian20.cdn.asset.aparat.com/aparat-video/e98f258c9f928d4eedf9fad0b4b1697263169572-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFlZDM3NjE2MGNlOTY3ZjQ2YWIzOWExZDIwOGJhYmRiIiwiZXhwIjoxNzgwMTAxNTgyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.j9uRxBPdIdmQ9MCa0nGZXlSYQb3Cx6yYSEcsp6VA8dc",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture2",
//                         "lectureTitle": "تفاوت angularjs با angular",
//                         "lectureDuration": 11,
//                         "lectureUrl": "https://persian19.cdn.asset.aparat.com/aparat-video/aa16c08d38fb14cc25221c4e3338e2ea62977250-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjZmNzYwMmNiNDU4ODBkNTgwYTYyMTU2YTc2ZjFmYjJkIiwiZXhwIjoxNzgwMTAxNzA2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.S3ReO_uT_DvhEwKP584pPs8RFWwhsQZgGX7-kBgpQ1M",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             },
//             {
//                 "chapterId": "chapter2",
//                 "chapterOrder": 2,
//                 "chapterTitle": "نصب و راه‌اندازی",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture3",
//                         "lectureTitle": "نصب node و npm",
//                         "lectureDuration": 20,
//                         "lectureUrl": "https://caspian20.cdn.asset.aparat.com/aparat-video/9beb4e6d039abc7a772cf4c5f3a0a61262977001-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImIyMmE5OWEwY2ViYjk3Y2I4N2Q0NWE0MDc1MWI2MzVkIiwiZXhwIjoxNzgwMTAxODI4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.o208Pcsa8xhMcSe8ITWsf3rZtaMX_QVTGDjGZpcMQd4",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture4",
//                         "lectureTitle": "نصب و راه‌اندازی angular",
//                         "lectureDuration": 31,
//                         "lectureUrl": "https://caspian18.cdn.asset.aparat.com/aparat-video/8f6b8b3ba831a20ec614f34a35bf025862311208-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImRlM2JiMzlmMmYyNmM3Y2RkYjM0OWE1YWYzOGQyNzMwIiwiZXhwIjoxNzgwMTAxODk0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.QoYFvNaTGx0CrU54bczfBy_-BYFe80PtJC--Kvlopm8",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             }
//         ],
//         "educator": "علی رمضانی",
//         "enrolledStudents": [
//             "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//             "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
//             "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
//         ],
//         "courseRatings": [
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 5,
//                 "_id": "6773acf160cb0ab974342248"
//             }
//         ],
//         "createdAt": "2024-12-27T10:00:00.000Z",
//         "updatedAt": "2024-12-31T09:57:48.992Z",
//         "__v": 3,
//         "courseThumbnail": "https://static.roocket.ir/images/cover/2023/12/1/g8SpudzfINgcX72k0udFcmO6x9GgeTlaB0nzveqk.jpg"
//     },
//     {
//         "_id": "605c72efb3f1c2b1f8e4e1aa",
//         "category": "FRONT_END",
//         "courseTitle": "Next.js آموزش ",
//         "courseDescription": "<p><strong>آموزش Next.js </strong>یک قدم در پیاده‌سازی بهتر و کامل‌تر اپلکیشن‌های <strong> React </strong>به حساب می آید. در این دوره سعی شده Next.js را به شکل کاربردی به شما آموزش دهیم. افرادی که قصد دارند تا در مسیر تبدیل شدن به یک توسعه دهنده React گام‌های بیشتری را پشت سر بگذارند و دانش‌شان را گسترش دهند، این دوره می‌تواند برای‌شان بسیار مفید و کاربردی باشد. شرکت‌های بسیار زیادی نیز هستند که در فرصت‌های شغلی خودشان عنوان کرده‌اند که درک عمیق Next.JS یکی از الزام‌ها برای کارجویان است.&nbsp;</p>",
//         "coursePrice": 3000000,
//         "isPublished": true,
//         "discount": 30,
//         "courseContent": [
//             {
//                 "chapterId": "chapter1",
//                 "chapterOrder": 1,
//                 "chapterTitle": "معرفی",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture1",
//                         "lectureTitle": "معرفی دوره",
//                         "lectureDuration": 12,
//                         "lectureUrl": "https://caspian19.cdn.asset.aparat.com/aparat-video/99c9f856b725fb5da59be1184bb6335b62300724-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjY5YzM2MWY5MjVjZmJlYzBjYTA1ZDkxMGZlNDQ0ZGE5IiwiZXhwIjoxNzgwMTAyNjMwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.2Fk1fNdE6LfBGXY4YjuSOyj6CrJ2jKFp5SAa5T4pH7A",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture2",
//                         "lectureTitle": "next.js چیست؟",
//                         "lectureDuration": 720,
//                         "lectureUrl": "https://persian16.cdn.asset.aparat.com/aparat-video/2de77689e95d8ac7df4ae2e70014cf5d62307603-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjhjN2RkOTRiMDZjMzIzYTA2ZWRhMDMzNzc1MWUxMjBmIiwiZXhwIjoxNzgwMTAyNzgxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.yBAPfHeZM_GeHMPfPJ7FNNZa3XJNCMUwug6wx2y5Apc",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             },
//             {
//                 "chapterId": "chapter2",
//                 "chapterOrder": 2,
//                 "chapterTitle": "App Router روش ",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture3",
//                         "lectureTitle": "نصب و راه‌اندازی پروژه next.js",
//                         "lectureDuration": 9,
//                         "lectureUrl": "https://persian19.cdn.asset.aparat.com/aparat-video/f6b237d07d5c9856f1c25b38a23185f362331724-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImU3ZTgwYTY3YjExODQ4ODI2YTZiYWVjNWM5YTk5ZjMyIiwiZXhwIjoxNzgwMTAyOTQ0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.GPiN_gpJWuQTb2AAJqR1xjBW17TzmVaGmwsaiXzOSzI",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture4",
//                         "lectureTitle": "بررسی ساختار و پوشه‌بندی",
//                         "lectureDuration": 15,
//                         "lectureUrl": "https://caspian19.cdn.asset.aparat.com/aparat-video/62a15730c22f61eb4b47cdab4ab4887c62345530-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjUwMjIzZTM4MzQzODQ0Njg1ZmYxNWNjNmZjNWRhMzAyIiwiZXhwIjoxNzgwMTAyOTk5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.xm9AcCLk5OXvJJWpZ85abK2OiN1W3ZaBISB2g4K5n0o",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             }
//         ],
//         "educator": "سهراب امینی",
//         "enrolledStudents": [
//             "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
//         ],
//         "courseRatings": [
//             {
//                 "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
//                 "rating": 1,
//                 "_id": "6773acf160cb0ab974342248"
//             }
//         ],
//         "createdAt": "2024-12-17T08:16:53.622Z",
//         "updatedAt": "2025-01-02T06:53:59.753Z",
//         "__v": 1,
//         "courseThumbnail": "https://static.roocket.ir/images/cover/2023/12/1/DVR05FQ8KOVnKQSlBPBXxsWkx3dqqwhk7a3ibULR.jpg"
//     },
//     {
//         "_id": "605c72efb3f1c2b1f8e4e1ab",
//         "category": "BACK_END",
//         "courseTitle": "آموزش پیشرفته پایتون",
//         "courseDescription": "<p>هر زبان برنامه نویسی در کنار ویژگی‌هایی که به صورت مقدماتی و ابتدایی در اختیار توسعه دهندگان‌ش قرار می‌دهد یکسری ویژگی حرفه‌ای و پیشرفته نیز دارد که تنها برنامه‌نویسان حرفه‌ای می‌توانند با استفاده از تجربیات‌ شخصی‌شان به این ویژگی‌ها دست پیدا کنند. کار با دیتابیس، کار با پارادایم‌های مختلف، کار با کتابخانه‌های مربوط به آن زبان برنامه نویسی و مواردی از این دست را می‌توان قابلیت‌های پیشرفته‌ای دانست که یک زبان برنامه نویسی به شما ارائه می‌دهد.</p>",
//         "coursePrice": 3500000,
//         "isPublished": true,
//         "discount": 15,
//         "courseContent": [
//             {
//                 "chapterId": "chapter1",
//                 "chapterOrder": 1,
//                 "chapterTitle": "معرفی",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture1",
//                         "lectureTitle": "معرفی دوره",
//                         "lectureDuration": 32,
//                         "lectureUrl": "https://caspian21.cdn.asset.aparat.com/aparat-video/399ec311a27f21c6101fd33f6d1f590167043176-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImE3MDE0ZGJiMDYyZTRkZjRmZTMwMDVkYjczZDg3NjdiIiwiZXhwIjoxNzgwMTAzMzM0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.FsoEZ1q9_lcnUtnWDmNFmPzuyDKOKgM-Pm-dGbd1MPY",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture2",
//                         "lectureTitle": "مقدمات پایتون",
//                         "lectureDuration": 22,
//                         "lectureUrl": "https://caspian23.cdn.asset.aparat.com/aparat-video/f52725fe28b8029169f91c42866f368467046083-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImNiY2VjYTA4Y2VlYmJiOGZlODdiZTA2MGM5YWZlZmE0IiwiZXhwIjoxNzgwMTAzMzg1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.FZsUEmfM2DT0AmZbDu1rkPkgsTRP99fxYk_90z1ZgFU",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             },
//             {
//                 "chapterId": "chapter2",
//                 "chapterOrder": 2,
//                 "chapterTitle": "شئ‌گرایی",
//                 "chapterContent": [
//                     {
//                         "lectureId": "lecture3",
//                         "lectureTitle": "آشنایی با پارادایم شئ‌گرایی",
//                         "lectureDuration": 14,
//                         "lectureUrl": "https://caspian25.cdn.asset.aparat.com/aparat-video/d824fa524a99dd46717f92244a58450b67129247-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjZjZWY3MWFlNGFiYTk5ZGQwMTMzOWFlYzkzNzE2OTQwIiwiZXhwIjoxNzgwMTAzNDkwLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.oWhlJq6B3ySH_b-pjfZ6D7vGbkThv8p6Qo_sLjCAv2c",
//                         "isPreviewFree": true,
//                         "lectureOrder": 1
//                     },
//                     {
//                         "lectureId": "lecture4",
//                         "lectureTitle": "تعریف کلاس، نمونه‌ها و سازنده",
//                         "lectureDuration": 17,
//                         "lectureUrl": "https://caspian24.cdn.asset.aparat.com/aparat-video/a1e596e8224d91eb84686fad88fab7b567109722-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImJkZjAzOGU1MzczM2QxYjdlYmM3MjNjODcxMGFmYzc5IiwiZXhwIjoxNzgwMTAzNTM1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.elnwi9DuLNiSQQnotUFz-dh3KaREe_DzZcBVf90A0DE",
//                         "isPreviewFree": false,
//                         "lectureOrder": 2
//                     }
//                 ]
//             }
//         ],
//         "educator": "سهراب امینی",
//         "enrolledStudents": [
//             "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
//         ],
//         "courseRatings": [],
//         "createdAt": "2024-12-17T08:16:53.622Z",
//         "updatedAt": "2025-01-02T06:56:13.208Z",
//         "__v": 1,
//         "courseThumbnail": "https://static.roocket.ir/images/cover/2023/12/1/qznBceILvXYoL9FQgtBVgHt2IPPXC1Jt5pNGlSpZ.jpg"
//     }
// ]

export const filtersData = [
    {
        title: 'کتگوری',
        formName: 'category-form',
        inputsName: 'category',
        filters: [
            { title: 'همه', value: 'ALL', id: 'all' },
            { title: 'فرانت اند', value: 'FRONT_END', id: 'front-end' },
            { title: 'بک اند', value: 'BACK_END', id: 'back-end' },
        ]

    },
    {
        title: 'قیمت',
        formName: 'price-form',
        inputsName: 'price',
        filters: [
            { title: 'گران ترین', value: 'highest', id: 'highest' },
            { title: 'ارزان ترین', value: 'lowest', id: 'lowest' },
        ]

    },
    {
        title: 'ترتیب تاریخ',
        formName: 'date-form',
        inputsName: 'date',
        filters: [
            { title: 'جدید ترین', value: 'newest', id: 'newest' },
            { title: 'قدیمی ترین', value: 'oldest', id: 'oldest' },
        ]

    },
]
export const mockMyCoursesData = [
    {
        "_id": "605c72efb3f1c2b1f8e4e1a1",
        "category": "FRONT_END",
        "courseTitle": 'آموزش تایپ اسکریپت ',
        "courseDescription": "<p>تایپ‌اسکریپت (TypeScript) به عنوان یک زبان برنامه‌نویسی بر پایه جاوااسکریپت شناخته می‌شود که کاملا Open-Source است. این متن‌باز بودن به این معناست که شما هم می‌توانید در توسعه آن نقش داشته باشید. در دوره <strong>آموزش تایپ‌اسکریپت (TypeScript)</strong> ما سعی می‌کنیم روش کار با این زبان را قدم به قدم به شما آموزش دهیم.</p>",
        "coursePrice": 1600000,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "مقدمه",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": " TypeScript چیست",
                        "lectureDuration": 16,
                        "lectureUrl": "https://caspian18.cdn.asset.aparat.com/aparat-video/fcf8ae48d992e0993b70fbea8b84cabc63302537-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImI3OTI0N2U4Nzc1ZDg1MGI3YWZlMmY1NDhlNWM0ODEzIiwiZXhwIjoxNzc3NTYzMTE0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.otD3gwiJ7iXHQQBAfcQ4IlFj0XIYzjg80Ys-soDHDl4",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": " نصب و کامپایل TypeScript",
                        "lectureDuration": 19,
                        "lectureUrl": "https://caspian18.cdn.asset.aparat.com/aparat-video/7f7f667aa409221939379551c6e50cfd63314713-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImNmZDVjYTk2YTlkOTY5NTU3NTE5YjAzODc2ZTg0MjA3IiwiZXhwIjoxNzc3NTY1NDM3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.mI-flkSS1U2jBrRduyT-kbXwJFAD47QOWuHBcHioa8U",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "سطح مقدماتی",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "انواع داده در TypeScript",
                        "lectureDuration": 20,
                        "lectureUrl": "https://persian20.cdn.asset.aparat.com/aparat-video/68a189513742009718efde982bd9faee63322782-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImFmZTk0YWZmNjk0N2E2MDE1OGJkYjEzYTM4OGMzZmMzIiwiZXhwIjoxNzc3NTY1NTMxLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.mjMQBRMtJ64yzFPHByxe60Yv4omwc0fBSASdKjRWupE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": " enum در TypeScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://caspian16.cdn.asset.aparat.com/aparat-video/770f5ee481149e328e68461a6a14ed6763337567-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ2MzlmYTA0ZjBjOGZlZTI3YTE0ZGE2NWI5YjBlYTkxIiwiZXhwIjoxNzc3NTY1Njk2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.7qNpUAZJhdvGd12pCexBDnYjUGZKYr0Wlm-TPWS4UM4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter3",
                "chapterOrder": 3,
                "chapterTitle": "سطح پیشرفته",
                "chapterContent": [
                    {
                        "lectureId": "lecture5",
                        "lectureTitle": "توابع در TypeScript",
                        "lectureDuration": 20,
                        "lectureUrl": "https://persian19.cdn.asset.aparat.com/aparat-video/e3fe1b3e66eb218f995409504e62208563360577-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZlMjkzMGU3ODM1NjI1Njc0NDdhMjk4N2YwZTFmZTMxIiwiZXhwIjoxNzc3NTY1Nzk2LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.q_VxTIHfNvsbvxdoUBVJwrMFm4UbmE-Mq2yMmK5LJUo",
                        "isPreviewFree": false,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture6",
                        "lectureTitle": "void و never در TypeScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://caspian20.cdn.asset.aparat.com/aparat-video/9225ff336b0d2e1522fab848a342504863368530-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImQ4ZWYxOTkyMjg1NDYzOWU3MWFiMDRjNDlmZDZhMDIxIiwiZXhwIjoxNzc3NTY1ODY4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.6UazGLri9oc2bP0abeEcxkrkKhCKP6zKeRl_TOyeMJg",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "علی رمضانی",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.2,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342314"
            },
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": 'https://static.roocket.ir/images/cover/2023/12/1/2gQywMLjpSjB83nPZ1tlDPxxqzOgNDnOT3IBkK1s.jpg'
    },
    {
        "_id": "675ac1512100b91a6d9b8b24",
        "category": "BACK_END",
        "courseTitle": "آموزش هوش مصنوعی برای برنامه‌ نویسی",
        "courseDescription": "<h2>Deep Dive into Python Programming</h2><p>This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers.</p><p>By the end of this course, you will be able to write efficient and clean Python code, and understand how to leverage Python's powerful features for real-world applications.</p><ul><li>Master advanced data structures</li><li>Implement object-oriented programming concepts</li><li>Work with libraries and frameworks</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced Data Structures",
                "chapterContent": [
                    {
                        "lectureId": " lecture1",
                        "lectureTitle": "Lists and Tuples",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Dictionaries and Sets",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Object-Oriented Programming",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Classes and Objects",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Inheritance and Polymorphism",
                        "lectureDuration": 950,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "محمد جهان ابادی",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.9,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.9,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.9,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.8,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 2.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4.2,
                "_id": "6773e37360cb0ab974342314"
            },
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:47:54.446Z",
        "__v": 3,
        "courseThumbnail": "https://static.roocket.ir/images/cover/2025/8/30/Xpi398GYbfXijbJ9xpRVvJm2XvifxUuo9C1nvQKx.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ae",
        "category": "FRONT_END",
        "courseTitle": "آموزش tailwindcss",
        "courseDescription": "<h2>Protect Systems and Networks</h2><p>Cybersecurity is critical in today's digital age. This course introduces the fundamentals of cybersecurity, including threat analysis, ethical hacking, and secure programming practices.</p><p>By the end of this course, you will understand how to identify vulnerabilities and implement security measures effectively.</p><ul><li>Understand security protocols</li><li>Learn about encryption techniques</li><li>Conduct basic penetration testing</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Cybersecurity",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cybersecurity?",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Types of Cyber Threats",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Basic Security Practices",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Password Management",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Network Security Essentials",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "محمد جهان ابادی",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 2.7,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4.3,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 1.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 2,
                "_id": "6773e37360cb0ab974342314"
            },
        ],
        "createdAt": "2024-12-27T11:30:00.000Z",
        "updatedAt": "2024-12-31T04:14:49.773Z",
        "__v": 2,
        "courseThumbnail": "https://static.roocket.ir/images/cover/2023/12/1/4stsyUhgVZhb56JHIjt3LM6HuPMZBfW5olM75Xes.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1a7",
        "category": "FRONT_END",
        "courseTitle": "آموزش کامل Sass",
        "courseDescription": "<h2>Become a Full-Stack Web Developer</h2><p>This comprehensive bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript and backend technologies, this course is designed to take you from beginner to job-ready.</p><p>Throughout the course, you will work on real-world projects, build a portfolio, and gain the skills necessary to succeed in the tech industry.</p><ul><li>Learn front-end and back-end development</li><li>Build responsive and dynamic web applications</li><li>Understand databases and server-side programming</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "HTML & CSS Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to HTML",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Styling with CSS",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "JavaScript Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "JavaScript Basics",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "DOM Manipulation",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "محمد میرزایی",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 2.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 2,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 3,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 4.5,
                "_id": "6773e37360cb0ab974342314"
            },
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 1,
                "_id": "6773e37360cb0ab974342314"
            },
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "__v": 2,
        "courseThumbnail": "https://static.roocket.ir/images/cover/2023/12/1/DdNhhWVDsYjHqb2Pr1xGUltY7g7nVve8E6Mt7eMx.jpg"
    },
]