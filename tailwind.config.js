/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'esm': '328px',
        'msm': '500px'
      },
      fontSize : {
        'course-deatails-heading-small':['26px','36px'],
        'course-deatails-heading-large':['36px','44px'],
        'default':['15px','21px']
      },

      fontFamily: {
        'MTNIrancell-Bold': 'MTNIrancell-Bold',
        'MTNIrancell-DemiBold': 'MTNIrancell-DemiBold',
        'MTNIrancell-ExtraLight': 'MTNIrancell-ExtraLight',
        'MTNIrancell-Light': 'MTNIrancell-Light',
        'MTNIrancell-Medium': 'MTNIrancell-Medium',
        'Oi-Regular': 'Oi-Regular',
      },
    },
  },
  plugins: [],
}