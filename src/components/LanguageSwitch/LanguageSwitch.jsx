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

export function LanguageSwitch({ value }) {
return (
    <div>
        <select>
            {languages.map(language => (
                <option key={language.id} selected={value === language.id}>{language.title}</option>
            ))}
        </select>
    </div>
)
}