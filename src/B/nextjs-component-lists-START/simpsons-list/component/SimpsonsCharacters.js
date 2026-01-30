const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]

export default function SimpsonsCharacters() {
    return <>
        <p>Here's the <strong>{ SIMPSON_CHARACTERS.length }</strong> main characters for The Simpsons.</p>
        <ul>
            {
                SIMPSON_CHARACTERS.map((characterName, index) =>
                    <li key={index} data-index={index}>{characterName}</li>
                )
            }
        </ul>
    </>
}