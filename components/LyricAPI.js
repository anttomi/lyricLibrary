

export default async function getLyrics(artist, title) {
    try {
        let res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        const result = await res.json()
        console.log(artist, title)
        return (!result.error) ? normalizeLyrics(result.lyrics) : result.error
    } catch {

    }
}

function normalizeLyrics(lyrics) {
    let lyricsSplit = lyrics.split("\n")
    lyricsSplit = lyricsSplit.slice(1, lyricsSplit.length)
    lyricsSplit = lyricsSplit.map((line) => {
        if (line.includes("chorus".toUpperCase())) {
            line = "\n" + line + "\n"
        }
        return line
    })
    return lyricsSplit.join("\n")
}
