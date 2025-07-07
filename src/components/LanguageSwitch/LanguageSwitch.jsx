const languages = [
    {
        id: 'ru',
        title: 'russki'
    },
    {
        id: 'de',
        title: 'Deutsch'
    },
    {
        id: 'en',
        title: 'English'
    }
]

export function LanguageSwitch() {
return (
    <div>
        <select>
            {languages.map(language => (
                <option key={language.id}>{language.title}</option>
            ))}
        </select>
    </div>
)
}