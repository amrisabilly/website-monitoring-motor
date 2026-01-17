import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Warna Brand Utama
                primary: {
                    DEFAULT: '#0053AF', // bg-primary
                    hover: '#003B7A',   // bg-primary-hover
                    light: '#E1EFFD',   // bg-primary-light
                },
                // Warna Pendukung
                secondary: {
                    DEFAULT: '#F5A623',
                    hover: '#D48C15',
                },
                // Warna Status
                success: '#27AE60',
                danger: '#E74C3C',
                warning: '#F1C40F',
                info: '#3498DB',
                
                // Warna Netral 
                dark: '#252733',
                light: '#FFFFFF',
            },
        },
    },

    plugins: [forms],
};
