import react from 'react';

class SearchBar extends react.Component {
    onInputChange() {
        const searchInput = document.getElementById("search-input");
        const resultArtist = document.getElementById("result-artist");
        const resultPlaylist = document.getElementById("result-playlists");
    
        function requestApi(searchTerm) {
            fetch(`http://localhost:3001/artists?name_like=${searchTerm}`)
                .then((response) => response.json())
                .then((result) => displayResults(result));
        }
    
        function displayResults(result) {
            resultPlaylist?.classList.add("hidden");
            const artistName = document.getElementById("artist-name");
            const artistImage = document.getElementById("artist-img");
    
            result.forEach(element => {
                artistName.innerText = element.name;
                artistImage.src = element.urlImg;
            });
    
            resultArtist?.classList.remove("hidden");
        }
    
        document.addEventListener("input", function() {
            const searchTerm = searchInput?.value.toLowerCase();
            if (searchTerm === "") {
                resultPlaylist.classList.add("hidden");
                resultArtist.classList.remove("hidden");
            }
    
            requestApi(searchTerm);
        })
    }

    render() {
        return <input type="text" id="search-input" maxLength="800"
            placeholder="O que você quer ouvir?" autoComplete="off"
            onChange={() => this.onInputChange()}></input> // FIX: Needs debouncing/delay
    }
}

export default SearchBar