class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=eca69eadf9d82005072c3f0cc11d1289';
    _baseoffset = 210
    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }

    getAllCharacters = async (offset = this._baseoffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0])
    }
    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            descr: char.description,
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            wiki: char.urls[1].url,
            homepage: char.urls[0].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService;