//Array containing Pokemon info

const pokemonArr = [
    {number:"001", name: "Bulbasaur", type: "Grass & Poison", image:"img/001Bulbasaur.png", evolveFrom:"None", evolveTo:"Ivysaur"},
    {number:"002", name: "Ivysaur", type: "Grass & Poison", image:"img/002Ivysaur.png", evolveFrom:"Bulbasaur", evolveTo:"Venusaur"}
    {number:"003", name:"Venusaur", type:"Grass & Poison", image:"img/003Venusaur.png", evolveFrom:"Ivysaur", evolveTo:"None"},
    {number:"004", name:"Charmander", type:"Fire", image:"img/004Charmander.png", evolveFrom:"None", evolveTo:"Charmeleon"},
    {number:"005", name:"Charmeleon", type:"Fire", image:"img/005Charmeleon.png", evolveFrom:"Charmander", evolveTo:"Charizard"},
    {number:"006", name:"Charizard", type:"Fire & Flying", image:"img/006Charizard.png", evolveFrom:"Charmeleon", evolveTo:"None"},
    {number:"007", name:"Squirtle", type:"Water", image:"img/007Squirtle.png", evolveFrom:"None", evolveTo:"Wartortle"},
    {number:"008", name:"Wartortle", type:"Water", image:"img/008Wartortle.png", evolveFrom:"Squirtle", evolveTo:"Blastoise"},
    {number:"009", name:"Blastoise", type:"Water", image:"img/008Wartortle.png", evolveFrom:"Wartortle", evolveTo:"None"},
    {number:"010", name:"Caterpie", type:"Bug", image:"img/010Caterpie.png", evolveFrom:"None", evolveTo:"Metapod"},
    {number:"011", name:"Metapod", type:"Bug", image:"img/011Metapod.png", evolveFrom:"Caterpie", evolveTo:"Butterfree"},
    {number:"012", name:"Butterfree", type:"Bug & Flying", img:"img/012Butterfree.png", evolveFrom:"Metapod", evolveTo:"None"},
    {number:"013", name:"Weedle", type:"Bug & Poison", img:"img/013Weedle.png", evolveFrom:"None", evolveTo:"Kakuna"},
    {number:"014", name:"Kakuna", type:"Bug & Poison", img:"img/014Kakuna.png", evolveFrom:"Weedle", evolveTo:"Beedrill"},
    {number:"015", name:"Beedrill", type:"Bug & Poison", img:"img/015Beedrill.png", evolveFrom:"Kakuna", evolveTo:"None"},
    {number:"016", name:"Pidgey", type:"Normal & Flying", img:"img/016Pidgey.png", evolveFrom:"None", evolveTo:"Pidgeotto"},
    {number:"017", name:"Pidgeotto", type:"Normal & Flying", img:"img/017Pidgeotto.png", evolveFrom:"Pidgey", evolveTo:"Pidgeot"},
    {number:"018", name:"Pidgeot", type:"Normal & Flying", img:"img/018Pidgeot.png", evolveFrom:"Pidgeotto", evolveTo:"None"},
    {number:"019", name:"Rattata", type:"Normal", img:"img/019Rattata.png", evolveFrom:"None", evolveTo:"Raticate",}
    {number:"020", name:"Raticate", type:"Normal", img:"img/020Raticate.png", evolveFrom:"Rattatta", evolveTo:"None"},
    {number:"021", name:"Spearow", type:"Nomral & Flying", img:"img/021Spearow.png", evolveFrom:"None", evolveTo:"Fearow"},
    {number:"022", name:"Fearow", type:"Normal & Flying", img:"img/022Fearow.png", evolveFrom:"Spearow", evolveTo:"None"},
    {number:"023", name:"Ekans", type: "Poison", img:"img/023Ekans.png", evolveFrom:"None", evolveTo:"Arbok"},
    {number:"024", name:"Arbok", type: "Poison", img:"img/024Arbok.png", evolveFrom:"Ekans", evolveTo:"None"},
    {number:"025", name:"Pikachu", type: "Electric", img:"img/025Pikachu.png", evolveFrom:"None", evolveTo:"Raichu"},
    {number:"026", name:"Raichu", type: "Electric", img:"img/026Raichu.png", evolveFrom:"Pikachu", evolveTo:"None"},
    {number:"027", name:"Sandshrew", type: "Ground", img:"img/027Sandshrew.png", evolveFrom:"None", evolveTo:"Sandslash"},
    {number:"028", name:"Sandslash", type: "Ground", img:"img/028Sandslash.png", evolveFrom:"Sandshrew", evolveTo:"None"},
    {number:"029", name:"Nidoran (female)", type: "Poison", img:"img/029Nidoran-female.png", evolveFrom:"None", evolveTo:"Nidorina"},
    {number:"030", name:"Nidorina", type: "Poison", img:"img/030Nidorina.png", evolveFrom:"Nidoran (female)", evolveTo:"Nidoqueen"},
    {number:"031", name:"Nidoqueen", type: "Poison & Ground", img:"img/031Nidoqueen.png", evolveFrom:"Nidorina", evolveTo:"None"},
    {number:"032", name:"Nidoran (male)", type: "Poison", img:"img/032Nidoran-male", evolveFrom:"None", evolveTo:"Nidorino"},
    {number:"033", name:"Nidorino", type: "Poison", img:"img/033Nidorino.png", evolveFrom:"Nidoran (male)", evolveTo:"Nidoking"},
    {number:"034", name:"Nidoking", type: "Poison & Ground", img:"img/034Nidoking.png", evolveFrom:"Nidorino", evolveTo:"None"},
    {number:"035", name:"Clefairy", type: "Fairy", img:"img/035Clefairy.png", evolveFrom:"None", evolveTo:"Clefable"},
    {number:"036", name:"Clefable", type: "Fairy", img:"img/036Clefable.png", evolveFrom:"Clefairy", evolveTo:"None"},




    {number:"", name:"", type: "", img:"", evolveFrom:"", evolveTo:""},
];