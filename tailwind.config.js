
tailwind.config = {
    theme: {
        extend: {
            gridTemplateColumns: {
            'auto': 'repeat(autofit, minmax(200px, 1fr))'
        },
        fontFamily: {
            Outfit: ["Outfit", 'sans-serif'],
            Ovo: [ "Ovo", 'serif']
        },
        animation: {
            spin_slow: 'spin 6s linear infinite'
        },
        colors: {
            lightHover: '#fcf4ff',
            darkHover: '#4c2669',
            darkTheme: '#11001f',
        }
        }
        
    },
        darkMode: 'selector'
}

//83411017-089c-41fb-885f-a4d7e466824d