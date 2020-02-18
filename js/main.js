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
    {number:"037", name:"Vulpix", type: "Fire", img:"img/037Vulpix.png", evolveFrom:"None", evolveTo:"Ninetales"},
    {number:"038", name:"Ninetales", type: "Fire", img:"img/038Ninetales.png", evolveFrom:"Vulpix", evolveTo:"None"},
    {number:"039", name:"Jigglypuff", type: "Normal & Fairy", img:"img/039Jigglypuff.png", evolveFrom:"None", evolveTo:"Wigglytuff"},
    {number:"040", name:"Wigglytuff", type: "Normal & Fairy", img:"img/040Wigglytuff.png", evolveFrom:"Jigglypuff", evolveTo:"None"},
    {number:"041", name:"Zubat", type: "Poison & Flying", img:"img/041Zubat.png", evolveFrom:"None", evolveTo:"Golbat"},
    {number:"042", name:"Golbat", type: "Poison & Flying", img:"img/042Golbat.png", evolveFrom:"Zubat", evolveTo:"None"},
    {number:"043", name:"Oddish", type: "Grass & Poison", img:"img/043Oddish.png", evolveFrom:"None", evolveTo:"Gloom"},
    {number:"044", name:"Gloom", type: "Grass & Poison", img:"img/044Gloom.png", evolveFrom:"Oddish", evolveTo:"Vileplume"},
    {number:"045", name:"Vileplume", type: "Grass & Poison", img:"img/045Vileplume.png", evolveFrom:"Gloom", evolveTo:"None"},
    {number:"046", name:"Paras", type: "Bug & Grass", img:"img/046Paras.png", evolveFrom:"None", evolveTo:"Parasect"},
    {number:"047", name:"Parasect", type: "Bug & Grass", img:"img/047Parasect.png", evolveFrom:"Paras", evolveTo:"None"},
    {number:"048", name:"Venonat", type: "Bug & Poison", img:"img/048Venonat.png", evolveFrom:"None", evolveTo:"Venomoth"},
    {number:"049", name:"Venomoth", type: "Bug & Poison", img:"img/049Venomoth.png", evolveFrom:"Venonat", evolveTo:"None"},
    {number:"050", name:"Diglett", type: "Ground", img:"img/050Diglett.png", evolveFrom:"None", evolveTo:"Dugtrio"},
    {number:"051", name:"Dugtrio", type: "Ground", img:"img/051Dugtrio.png", evolveFrom:"Diglett", evolveTo:"None"},
    {number:"052", name:"Meowth", type: "Normal", img:"img/052Meowth.png", evolveFrom:"None", evolveTo:"Persian"},
    {number:"053", name:"Persian", type: "Normal", img:"img/053Persian.png", evolveFrom:"Meowth", evolveTo:"None"},
    {number:"054", name:"Psyduck", type: "Water", img:"img/054Psyduck.png", evolveFrom:"None", evolveTo:"Golduck"},
    {number:"055", name:"Golduck", type: "Water", img:"img/055Golduck.png", evolveFrom:"Psyduck", evolveTo:"None"},
    {number:"056", name:"Mankey", type: "Fighting", img:"img/056Mankey.png", evolveFrom:"None", evolveTo:"Primeape"},
    {number:"057", name:"Primeape", type: "Fighting", img:"img/057Primeape.png", evolveFrom:"Mankey", evolveTo:"None"},
    {number:"058", name:"Growlithe", type: "Fire", img:"img/058Growlithe.png", evolveFrom:"None", evolveTo:"Arcanine"},
    {number:"059", name:"Arcanine", type: "Fire", img:"img/059Arcanine.png", evolveFrom:"Growlithe", evolveTo:"None"},
    {number:"060", name:"Poliwag", type: "Water", img:"img/060Poliwag.png", evolveFrom:"None", evolveTo:"Poliwhirl"},
    {number:"061", name:"Poliwhirl", type: "Water", img:"img/061Poliwhirl.png", evolveFrom:"Poliwag", evolveTo:"Poliwrath"},
    {number:"062", name:"Poliwrath", type: "Water & Fighting", img:"img/062Poliwrath.png", evolveFrom:"Poliwhirl", evolveTo:"None"},
    {number:"063", name:"Abra", type: "Psychic", img:"img/063Abra.png", evolveFrom:"None", evolveTo:"Kadabra"},
    {number:"064", name:"Kadabra", type: "Psychic", img:"img/064Kadabra.png", evolveFrom:"Abra", evolveTo:"Alakazam"},
    {number:"065", name:"Alakazam", type: "Psychic", img:"img/065Alakazam.png", evolveFrom:"Kadabra", evolveTo:"None"},
    {number:"066", name:"Machop", type: "Fighting", img:"img/066Machop.png", evolveFrom:"None", evolveTo:"Machoke"},
    {number:"067", name:"Machoke", type: "Fighting", img:"img/067Machoke.png", evolveFrom:"Machop", evolveTo:"Machamp"},
    {number:"068", name:"Machamp", type: "Fighting", img:"img/068Machamp.png", evolveFrom:"Machoke", evolveTo:"None"},
    {number:"069", name:"Bellsprout", type: "Grass & Poison", img:"img/069Bellsprout.png", evolveFrom:"None", evolveTo:"Weepinbell"},
    {number:"070", name:"Weepinbell", type: "Grass & Poison", img:"img/070Weepinbell.png", evolveFrom:"Bellsprout", evolveTo:"Victreebel"},
    {number:"071", name:"Victreebel", type: "Grass & Poison", img:"img/071Victreebel.png", evolveFrom:"Weepinbell", evolveTo:"None"},
    {number:"072", name:"Tentacool", type: "Water & Poison", img:"img/072Tentacool.png", evolveFrom:"None", evolveTo:"Tentacruel"},
    {number:"073", name:"Tentacruel", type: "Water & Poison", img:"img/073Tentacruel.png", evolveFrom:"Tentacool", evolveTo:"None"},
    {number:"074", name:"Geodude", type: "Rock & Ground", img:"img/074Geodude.png", evolveFrom:"None", evolveTo:"Graveler"},
    {number:"075", name:"Graveler", type: "Rock & Ground", img:"img/075Graveler.png", evolveFrom:"Geodude", evolveTo:"Golem"},
    {number:"076", name:"Golem", type: "Rock & Ground", img:"img/076Golem.png", evolveFrom:"Graveler", evolveTo:"None"},
    {number:"077", name:"Ponyta", type: "Fire", img:"img/077Ponyta.png", evolveFrom:"None", evolveTo:"Rapidash"},
    {number:"078", name:"Rapidash", type: "Fire", img:"img/078Rapidash.png", evolveFrom:"Ponyta", evolveTo:"None"},
    {number:"079", name:"Slowpoke", type: "Water & Psychic", img:"img/079Slowpoke.png", evolveFrom:"None", evolveTo:"Slowbro"},
    {number:"080", name:"Slowbro", type: "Water & Psychic", img:"img/080Slowbro.png", evolveFrom:"Slowpoke", evolveTo:"None"},
    {number:"081", name:"Magnemite", type: "Electric & Steel", img:"img/081Magnemite.png", evolveFrom:"None", evolveTo:"Magneton"},
    {number:"082", name:"Magneton", type: "Electric & Steel", img:"img/082Magneton.png", evolveFrom:"Magnemite", evolveTo:"None"},
    {number:"083", name:"Farfecth'd", type: "Normal & Flying", img:"img/083Farfetch'd.png", evolveFrom:"None", evolveTo:"None"},
    {number:"084", name:"Doduo", type: "Normal & Flying", img:"img/084Doduo.png", evolveFrom:"None", evolveTo:"Dodrio"},
    {number:"085", name:"Dodrio", type: "Normal & Flying", img:"img/085Dodrio.png", evolveFrom:"Doduo", evolveTo:"None"},
    {number:"086", name:"Seel", type: "Water", img:"img/086Seel.png", evolveFrom:"None", evolveTo:"Dewgong"},
    {number:"087", name:"Dewgong", type: "Water & Ice", img:"img/087Dewgong.png", evolveFrom:"Seel", evolveTo:"None"},
    {number:"088", name:"Grimer", type: "Poison", img:"img/088Grimer.png", evolveFrom:"None", evolveTo:"Muk"},
    {number:"089", name:"Muk", type: "Poison", img:"img/089Muk.png", evolveFrom:"Grimer", evolveTo:"None"},
    {number:"090", name:"Shellder", type: "Water", img:"img/090Shellder.png", evolveFrom:"None", evolveTo:"Cloyster"},
    {number:"091", name:"Cloyster", type: "Water & Ice", img:"img/091Cloyster.png", evolveFrom:"Shellder", evolveTo:"None"},
    {number:"092", name:"Gastly", type: "Ghost & Poison", img:"img/092Gastly.png", evolveFrom:"None", evolveTo:"Haunter"},
    {number:"093", name:"Haunter", type: "Ghost & Poison", img:"img/093Haunter.png", evolveFrom:"Gastly", evolveTo:"Gengar"},
    {number:"094", name:"Gengar", type: "Ghost & Poison", img:"img/094Gengar.png", evolveFrom:"Haunter", evolveTo:"None"},
    {number:"095", name:"Onix", type: "Rock & Ground", img:"img/095Onix.png", evolveFrom:"None", evolveTo:"None"},
    {number:"096", name:"Drowzee", type: "Psychic", img:"img/096Drowzee.png", evolveFrom:"None", evolveTo:"Hypno"},
    {number:"097", name:"Hypno", type: "Psychic", img:"img/097Hypno.png", evolveFrom:"Drowzee", evolveTo:"None"},
    {number:"098", name:"Krabby", type: "Water", img:"img/098Krabby.png", evolveFrom:"None", evolveTo:"Kingler"},
    {number:"099", name:"Kingler", type: "Water", img:"img/099Kingler.png", evolveFrom:"Krabby", evolveTo:"None"},
    {number:"100", name:"Voltorb", type: "Electric", img:"img/100Voltorb.png", evolveFrom:"None", evolveTo:"Electrode"},
    {number:"101", name:"Electrode", type: "Electric", img:"img/101Electrode.png", evolveFrom:"Voltorb", evolveTo:"None"},
    {number:"102", name:"Exeggcute", type: "Grass & Psychic", img:"img/102Exeggcute.png", evolveFrom:"None", evolveTo:"Exeggutor"},
    {number:"103", name:"Exeggutor", type: "Grass & Psychic", img:"img/103Exeggutor.png", evolveFrom:"Exeggcute", evolveTo:"None"},
    {number:"104", name:"Cubone", type: "Ground", img:"img/104Cubone.png", evolveFrom:"None", evolveTo:"Marowak"},
    {number:"105", name:"Maroak", type: "Ground", img:"img/105Marowak.png", evolveFrom:"Cubone", evolveTo:"None"},
    {number:"106", name:"Hitmonlee", type: "Fighting", img:"img/106Hitmonlee.png", evolveFrom:"None", evolveTo:"Hitmonchan"},
    {number:"107", name:"Hitmonchan", type: "Fighting", img:"img/107Hitmonchan.png", evolveFrom:"Hitmonlee", evolveTo:"None"},
    {number:"108", name:"Lickitung", type: "Normal", img:"img/108Lickitung.png", evolveFrom:"None", evolveTo:"None"},
    {number:"109", name:"Koffing", type: "Poison", img:"img/109Koffing.png", evolveFrom:"None", evolveTo:"Weezing"},
    {number:"110", name:"Weezing", type: "Poison", img:"img/110Weezing.png", evolveFrom:"Koffing", evolveTo:"None"},
    {number:"111", name:"Rhyhorn", type: "Ground & Rock", img:"img/111Rhyhorn.png", evolveFrom:"None", evolveTo:"Rhydon"},
    {number:"112", name:"Rhydon", type: "Ground & Rock", img:"img/112Rhydon.png", evolveFrom:"Rhyhorn", evolveTo:"None"},







    {number:"", name:"", type: "", img:"", evolveFrom:"", evolveTo:""},
];