//Array containing Pokemon info
const pokemonArr = [
    {number:"001", name: "Bulbasaur", type: "Grass & Poison", divType:"grass", img:"img/001Bulbasaur.png", evolveFrom:"None", evolveTo:"Ivysaur"},
    {number:"002", name: "Ivysaur", type: "Grass & Poison", divType:"grass", img:"img/002Ivysaur.png", evolveFrom:"Bulbasaur", evolveTo:"Venusaur"},
    {number:"003", name:"Venusaur", type:"Grass & Poison",divType:"grass", img:"img/003Venusaur.png", evolveFrom:"Ivysaur", evolveTo:"None"},
    {number:"004", name:"Charmander", type:"Fire", divType:"fire", img:"img/004Charmander.png", evolveFrom:"None", evolveTo:"Charmeleon"},
    {number:"005", name:"Charmeleon", type:"Fire", divType:"fire", img:"img/005Charmeleon.png", evolveFrom:"Charmander", evolveTo:"Charizard"},
    {number:"006", name:"Charizard", type:"Fire & Flying", divType:"fire", img:"img/006Charizard.png", evolveFrom:"Charmeleon", evolveTo:"None"},
    {number:"007", name:"Squirtle", type:"Water", divType:"water", img:"img/007Squirtle.png", evolveFrom:"None", evolveTo:"Wartortle"},
    {number:"008", name:"Wartortle", type:"Water", divType:"water", img:"img/008Wartortle.png", evolveFrom:"Squirtle", evolveTo:"Blastoise"},
    {number:"009", name:"Blastoise", type:"Water", divType:"water", img:"img/008Wartortle.png", evolveFrom:"Wartortle", evolveTo:"None"},
    {number:"010", name:"Caterpie", type:"Bug", divType:"bug", img:"img/010Caterpie.png", evolveFrom:"None", evolveTo:"Metapod"},
    {number:"011", name:"Metapod", type:"Bug", divType:"bug", img:"img/011Metapod.png", evolveFrom:"Caterpie", evolveTo:"Butterfree"},
    {number:"012", name:"Butterfree", type:"Bug & Flying", divType:"bug", img:"img/012Butterfree.png", evolveFrom:"Metapod", evolveTo:"None"},
    {number:"013", name:"Weedle", type:"Bug & Poison", divType:"bug", img:"img/013Weedle.png", evolveFrom:"None", evolveTo:"Kakuna"},
    {number:"014", name:"Kakuna", type:"Bug & Poison", divType:"bug", img:"img/014Kakuna.png", evolveFrom:"Weedle", evolveTo:"Beedrill"},
    {number:"015", name:"Beedrill", type:"Bug & Poison", divType:"bug", img:"img/015Beedrill.png", evolveFrom:"Kakuna", evolveTo:"None"},
    {number:"016", name:"Pidgey", type:"Normal & Flying", divType:"normal", img:"img/016Pidgey.png", evolveFrom:"None", evolveTo:"Pidgeotto"},
    {number:"017", name:"Pidgeotto", type:"Normal & Flying", divType:"normal", img:"img/017Pidgeotto.png", evolveFrom:"Pidgey", evolveTo:"Pidgeot"},
    {number:"018", name:"Pidgeot", type:"Normal & Flying", divType:"normal", img:"img/018Pidgeot.png", evolveFrom:"Pidgeotto", evolveTo:"None"},
    {number:"019", name:"Rattata", type:"Normal", divType:"normal", img:"img/019Rattata.png", evolveFrom:"None", evolveTo:"Raticate"},
    {number:"020", name:"Raticate", type:"Normal", divType:"normal", img:"img/020Raticate.png", evolveFrom:"Rattatta", evolveTo:"None"},
    {number:"021", name:"Spearow", type:"Nomral & Flying", divType:"normal", img:"img/021Spearow.png", evolveFrom:"None", evolveTo:"Fearow"},
    {number:"022", name:"Fearow", type:"Normal & Flying", divType:"normal", img:"img/022Fearow.png", evolveFrom:"Spearow", evolveTo:"None"},
    {number:"023", name:"Ekans", type: "Poison", divType:"poison", img:"img/023Ekans.png", evolveFrom:"None", evolveTo:"Arbok"},
    {number:"024", name:"Arbok", type: "Poison", divType:"poison", img:"img/024Arbok.png", evolveFrom:"Ekans", evolveTo:"None"},
    {number:"025", name:"Pikachu", type: "Electric", divType:"electric", img:"img/025Pikachu.png", evolveFrom:"None", evolveTo:"Raichu"},
    {number:"026", name:"Raichu", type: "Electric", divType:"electric", img:"img/026Raichu.png", evolveFrom:"Pikachu", evolveTo:"None"},
    {number:"027", name:"Sandshrew", type: "Ground", divType:"ground", img:"img/027Sandshrew.png", evolveFrom:"None", evolveTo:"Sandslash"},
    {number:"028", name:"Sandslash", type: "Ground", divType:"ground", img:"img/028Sandslash.png", evolveFrom:"Sandshrew", evolveTo:"None"},
    {number:"029", name:"Nidoran (female)", type: "Poison", divType:"poison", img:"img/029Nidoran-female.png", evolveFrom:"None", evolveTo:"Nidorina"},
    {number:"030", name:"Nidorina", type: "Poison", divType:"poison", img:"img/030Nidorina.png", evolveFrom:"Nidoran (female)", evolveTo:"Nidoqueen"},
    {number:"031", name:"Nidoqueen", type: "Poison & Ground", divType:"poison", img:"img/031Nidoqueen.png", evolveFrom:"Nidorina", evolveTo:"None"},
    {number:"032", name:"Nidoran (male)", type: "Poison", divType:"poison", img:"img/032Nidoran-male.png", evolveFrom:"None", evolveTo:"Nidorino"},
    {number:"033", name:"Nidorino", type: "Poison", divType:"poison", img:"img/033Nidorino.png", evolveFrom:"Nidoran (male)", evolveTo:"Nidoking"},
    {number:"034", name:"Nidoking", type: "Poison & Ground", divType:"poison", img:"img/034Nidoking.png", evolveFrom:"Nidorino", evolveTo:"None"},
    {number:"035", name:"Clefairy", type: "Normal", divType:"normal", img:"img/035Clefairy.png", evolveFrom:"None", evolveTo:"Clefable"},
    {number:"036", name:"Clefable", type: "Normal", divType:"normal", img:"img/036Clefable.png", evolveFrom:"Clefairy", evolveTo:"None"},
    {number:"037", name:"Vulpix", type: "Fire", divType:"fire", img:"img/037Vulpix.png", evolveFrom:"None", evolveTo:"Ninetales"},
    {number:"038", name:"Ninetales", type: "Fire", divType:"fire", img:"img/038Ninetales.png", evolveFrom:"Vulpix", evolveTo:"None"},
    {number:"039", name:"Jigglypuff", type: "Normal", divType:"normal", img:"img/039Jigglypuff.png", evolveFrom:"None", evolveTo:"Wigglytuff"},
    {number:"040", name:"Wigglytuff", type: "Normal", divType:"normal", img:"img/040Wigglytuff.png", evolveFrom:"Jigglypuff", evolveTo:"None"},
    {number:"041", name:"Zubat", type: "Poison & Flying", divType:"poison", img:"img/041Zubat.png", evolveFrom:"None", evolveTo:"Golbat"},
    {number:"042", name:"Golbat", type: "Poison & Flying", divType:"poison", img:"img/042Golbat.png", evolveFrom:"Zubat", evolveTo:"None"},
    {number:"043", name:"Oddish", type: "Grass & Poison", divType:"grass", img:"img/043Oddish.png", evolveFrom:"None", evolveTo:"Gloom"},
    {number:"044", name:"Gloom", type: "Grass & Poison", divType:"grass", img:"img/044Gloom.png", evolveFrom:"Oddish", evolveTo:"Vileplume"},
    {number:"045", name:"Vileplume", type: "Grass & Poison", divType:"grass", img:"img/045Vileplume.png", evolveFrom:"Gloom", evolveTo:"None"},
    {number:"046", name:"Paras", type: "Bug & Grass", divType:"bug", img:"img/046Paras.png", evolveFrom:"None", evolveTo:"Parasect"},
    {number:"047", name:"Parasect", type: "Bug & Grass", divType:"bug", img:"img/047Parasect.png", evolveFrom:"Paras", evolveTo:"None"},
    {number:"048", name:"Venonat", type: "Bug & Poison", divType:"bug", img:"img/048Venonat.png", evolveFrom:"None", evolveTo:"Venomoth"},
    {number:"049", name:"Venomoth", type: "Bug & Poison", divType:"bug", img:"img/049Venomoth.png", evolveFrom:"Venonat", evolveTo:"None"},
    {number:"050", name:"Diglett", type: "Ground", divType:"ground", img:"img/050Diglett.png", evolveFrom:"None", evolveTo:"Dugtrio"},
    {number:"051", name:"Dugtrio", type: "Ground", divType:"ground", img:"img/051Dugtrio.png", evolveFrom:"Diglett", evolveTo:"None"},
    {number:"052", name:"Meowth", type: "Normal", divType:"normal", img:"img/052Meowth.png", evolveFrom:"None", evolveTo:"Persian"},
    {number:"053", name:"Persian", type: "Normal", divType:"normal", img:"img/053Persian.png", evolveFrom:"Meowth", evolveTo:"None"},
    {number:"054", name:"Psyduck", type: "Water", divType:"water", img:"img/054Psyduck.png", evolveFrom:"None", evolveTo:"Golduck"},
    {number:"055", name:"Golduck", type: "Water", divType:"water", img:"img/055Golduck.png", evolveFrom:"Psyduck", evolveTo:"None"},
    {number:"056", name:"Mankey", type: "Fighting", divType:"fighting", img:"img/056Mankey.png", evolveFrom:"None", evolveTo:"Primeape"},
    {number:"057", name:"Primeape", type: "Fighting", divType:"fighting", img:"img/057Primeape.png", evolveFrom:"Mankey", evolveTo:"None"},
    {number:"058", name:"Growlithe", type: "Fire", divType:"fire", img:"img/058Growlithe.png", evolveFrom:"None", evolveTo:"Arcanine"},
    {number:"059", name:"Arcanine", type: "Fire", divType:"fire", img:"img/059Arcanine.png", evolveFrom:"Growlithe", evolveTo:"None"},
    {number:"060", name:"Poliwag", type: "Water", divType:"water", img:"img/060Poliwag.png", evolveFrom:"None", evolveTo:"Poliwhirl"},
    {number:"061", name:"Poliwhirl", type: "Water", divType:"water", img:"img/061Poliwhirl.png", evolveFrom:"Poliwag", evolveTo:"Poliwrath"},
    {number:"062", name:"Poliwrath", type: "Water & Fighting", divType:"water", img:"img/062Poliwrath.png", evolveFrom:"Poliwhirl", evolveTo:"None"},
    {number:"063", name:"Abra", type: "Psychic", divType:"psychic", img:"img/063Abra.png", evolveFrom:"None", evolveTo:"Kadabra"},
    {number:"064", name:"Kadabra", type: "Psychic", divType:"psychic", img:"img/064Kadabra.png", evolveFrom:"Abra", evolveTo:"Alakazam"},
    {number:"065", name:"Alakazam", type: "Psychic", divType:"psychic", img:"img/065Alakazam.png", evolveFrom:"Kadabra", evolveTo:"None"},
    {number:"066", name:"Machop", type: "Fighting", divType:"fighting", img:"img/066Machop.png", evolveFrom:"None", evolveTo:"Machoke"},
    {number:"067", name:"Machoke", type: "Fighting", divType:"fighting", img:"img/067Machoke.png", evolveFrom:"Machop", evolveTo:"Machamp"},
    {number:"068", name:"Machamp", type: "Fighting", divType:"fighting", img:"img/068Machamp.png", evolveFrom:"Machoke", evolveTo:"None"},
    {number:"069", name:"Bellsprout", type: "Grass & Poison", divType:"grass", img:"img/069Bellsprout.png", evolveFrom:"None", evolveTo:"Weepinbell"},
    {number:"070", name:"Weepinbell", type: "Grass & Poison", divType:"grass", img:"img/070Weepinbell.png", evolveFrom:"Bellsprout", evolveTo:"Victreebel"},
    {number:"071", name:"Victreebel", type: "Grass & Poison", divType:"grass", img:"img/071Victreebel.png", evolveFrom:"Weepinbell", evolveTo:"None"},
    {number:"072", name:"Tentacool", type: "Water & Poison", divType:"water", img:"img/072Tentacool.png", evolveFrom:"None", evolveTo:"Tentacruel"},
    {number:"073", name:"Tentacruel", type: "Water & Poison", divType:"water", img:"img/073Tentacruel.png", evolveFrom:"Tentacool", evolveTo:"None"},
    {number:"074", name:"Geodude", type: "Rock & Ground", divType:"rock", img:"img/074Geodude.png", evolveFrom:"None", evolveTo:"Graveler"},
    {number:"075", name:"Graveler", type: "Rock & Ground", divType:"rock", img:"img/075Graveler.png", evolveFrom:"Geodude", evolveTo:"Golem"},
    {number:"076", name:"Golem", type: "Rock & Ground", divType:"rock", img:"img/076Golem.png", evolveFrom:"Graveler", evolveTo:"None"},
    {number:"077", name:"Ponyta", type: "Fire", divType:"fire", img:"img/077Ponyta.png", evolveFrom:"None", evolveTo:"Rapidash"},
    {number:"078", name:"Rapidash", type: "Fire", divType:"fire", img:"img/078Rapidash.png", evolveFrom:"Ponyta", evolveTo:"None"},
    {number:"079", name:"Slowpoke", type: "Water & Psychic", divType:"water", img:"img/079Slowpoke.png", evolveFrom:"None", evolveTo:"Slowbro"},
    {number:"080", name:"Slowbro", type: "Water & Psychic", divType:"water", img:"img/080Slowbro.png", evolveFrom:"Slowpoke", evolveTo:"None"},
    {number:"081", name:"Magnemite", type: "Electric", divType:"electric", img:"img/081Magnemite.png", evolveFrom:"None", evolveTo:"Magneton"},
    {number:"082", name:"Magneton", type: "Electric", divType:"electric", img:"img/082Magneton.png", evolveFrom:"Magnemite", evolveTo:"None"},
    {number:"083", name:"Farfecth'd", type: "Normal & Flying", divType:"normal", img:"img/083Farfetch'd.png", evolveFrom:"None", evolveTo:"None"},
    {number:"084", name:"Doduo", type: "Normal & Flying", divType:"normal", img:"img/084Doduo.png", evolveFrom:"None", evolveTo:"Dodrio"},
    {number:"085", name:"Dodrio", type: "Normal & Flying", divType:"normal", img:"img/085Dodrio.png", evolveFrom:"Doduo", evolveTo:"None"},
    {number:"086", name:"Seel", type: "Water", divType:"water", img:"img/086Seel.png", evolveFrom:"None", evolveTo:"Dewgong"},
    {number:"087", name:"Dewgong", type: "Water & Ice", divType:"water", img:"img/087Dewgong.png", evolveFrom:"Seel", evolveTo:"None"},
    {number:"088", name:"Grimer", type: "Poison", divType:"poison", img:"img/088Grimer.png", evolveFrom:"None", evolveTo:"Muk"},
    {number:"089", name:"Muk", type: "Poison", divType:"poison", img:"img/089Muk.png", evolveFrom:"Grimer", evolveTo:"None"},
    {number:"090", name:"Shellder", type: "Water", divType:"water", img:"img/090Shellder.png", evolveFrom:"None", evolveTo:"Cloyster"},
    {number:"091", name:"Cloyster", type: "Water & Ice", divType:"water", img:"img/091Cloyster.png", evolveFrom:"Shellder", evolveTo:"None"},
    {number:"092", name:"Gastly", type: "Ghost & Poison", divType:"ghost", img:"img/092Gastly.png", evolveFrom:"None", evolveTo:"Haunter"},
    {number:"093", name:"Haunter", type: "Ghost & Poison", divType:"ghost", img:"img/093Haunter.png", evolveFrom:"Gastly", evolveTo:"Gengar"},
    {number:"094", name:"Gengar", type: "Ghost & Poison", divType:"ghost", img:"img/094Gengar.png", evolveFrom:"Haunter", evolveTo:"None"},
    {number:"095", name:"Onix", type: "Rock & Ground", divType:"rock", img:"img/095Onix.png", evolveFrom:"None", evolveTo:"None"},
    {number:"096", name:"Drowzee", type: "Psychic", divType:"psychic", img:"img/096Drowzee.png", evolveFrom:"None", evolveTo:"Hypno"},
    {number:"097", name:"Hypno", type: "Psychic", divType:"psychic", img:"img/097Hypno.png", evolveFrom:"Drowzee", evolveTo:"None"},
    {number:"098", name:"Krabby", type: "Water", divType:"water", img:"img/098Krabby.png", evolveFrom:"None", evolveTo:"Kingler"},
    {number:"099", name:"Kingler", type: "Water", divType:"water", img:"img/099Kingler.png", evolveFrom:"Krabby", evolveTo:"None"},
    {number:"100", name:"Voltorb", type: "Electric", divType:"electric", img:"img/100Voltorb.png", evolveFrom:"None", evolveTo:"Electrode"},
    {number:"101", name:"Electrode", type: "Electric", divType:"electric", img:"img/101Electrode.png", evolveFrom:"Voltorb", evolveTo:"None"},
    {number:"102", name:"Exeggcute", type: "Grass & Psychic", divType:"grass", img:"img/102Exeggcute.png", evolveFrom:"None", evolveTo:"Exeggutor"},
    {number:"103", name:"Exeggutor", type: "Grass & Psychic", divType:"grass", img:"img/103Exeggutor.png", evolveFrom:"Exeggcute", evolveTo:"None"},
    {number:"104", name:"Cubone", type: "Ground", divType:"ground", img:"img/104Cubone.png", evolveFrom:"None", evolveTo:"Marowak"},
    {number:"105", name:"Maroak", type: "Ground", divType:"ground", img:"img/105Marowak.png", evolveFrom:"Cubone", evolveTo:"None"},
    {number:"106", name:"Hitmonlee", type: "Fighting", divType:"fighting", img:"img/106Hitmonlee.png", evolveFrom:"None", evolveTo:"Hitmonchan"},
    {number:"107", name:"Hitmonchan", type: "Fighting", divType:"fighting", img:"img/107Hitmonchan.png", evolveFrom:"Hitmonlee", evolveTo:"None"},
    {number:"108", name:"Lickitung", type: "Normal", divType:"normal", img:"img/108Lickitung.png", evolveFrom:"None", evolveTo:"None"},
    {number:"109", name:"Koffing", type: "Poison", divType:"poison", img:"img/109Koffing.png", evolveFrom:"None", evolveTo:"Weezing"},
    {number:"110", name:"Weezing", type: "Poison", divType:"poison", img:"img/110Weezing.png", evolveFrom:"Koffing", evolveTo:"None"},
    {number:"111", name:"Rhyhorn", type: "Ground & Rock", divType:"ground", img:"img/111Rhyhorn.png", evolveFrom:"None", evolveTo:"Rhydon"},
    {number:"112", name:"Rhydon", type: "Ground & Rock", divType:"ground", img:"img/112Rhydon.png", evolveFrom:"Rhyhorn", evolveTo:"None"},
    {number:"113", name:"Chansey", type: "Normal", divType:"normal", img:"img/113Chansey.png", evolveFrom:"None", evolveTo:"None"},
    {number:"114", name:"Tangela", type: "Grass", divType:"grass", img:"img/114Tangela.png", evolveFrom:"None", evolveTo:"None"},
    {number:"115", name:"Kangaskhan", type: "Normal", divType:"normal", img:"img/115Kangaskhan.png", evolveFrom:"None", evolveTo:"None"},
    {number:"116", name:"Horsea", type: "Water", divType:"water", img:"img/116Horsea.png", evolveFrom:"None", evolveTo:"Seadra"},
    {number:"117", name:"Seadra", type: "Water", divType:"water", img:"img/117Seadra.png", evolveFrom:"Horsea", evolveTo:"None"},
    {number:"118", name:"Goldeen", type: "Water", divType:"water", img:"img/118Goldeen.png", evolveFrom:"None", evolveTo:"Seaking"},
    {number:"119", name:"Seaking", type: "Water", divType:"water", img:"img/119Seaking.png", evolveFrom:"Goldeen", evolveTo:"None"},
    {number:"120", name:"Staryu", type: "Water", divType:"water", img:"img/120Staryu.png", evolveFrom:"None", evolveTo:"Starmie"}, 
    {number:"121", name:"Starmie", type: "Water & Psychic", divType:"water", img:"img/121Starmie.png", evolveFrom:"Staryu", evolveTo:"None"},
    {number:"122", name:"Mr. Mime", type: "Psychic", divType:"psychic", img:"img/122Mr._Mime.png", evolveFrom:"None", evolveTo:"None"},
    {number:"123", name:"Scyther", type: "Bug & Flying", divType:"bug", img:"img/123Scyther.png", evolveFrom:"None", evolveTo:"None"},
    {number:"124", name:"Jynx", type: "Ice & Psychic", divType:"psychic", img:"img/124Jynx.png", evolveFrom:"None", evolveTo:"None"},
    {number:"125", name:"Electabuzz", type: "Electric", divType:"electric", img:"img/125Electabuzz.png", evolveFrom:"None", evolveTo:"None"},
    {number:"126", name:"Magmar", type: "Fire", divType:"fire", img:"img/126Magmar.png", evolveFrom:"None", evolveTo:"None"},
    {number:"127", name:"Pinsir", type: "Bug", divType:"bug", img:"img/127Pinsir.png", evolveFrom:"None", evolveTo:"None"},
    {number:"128", name:"Tauros", type: "Normal", divType:"normal", img:"img/128Tauros.png", evolveFrom:"None", evolveTo:"None"},
    {number:"129", name:"Magikarp", type: "Water", divType:"water", img:"img/129Magikarp.png", evolveFrom:"None", evolveTo:"Gyrados"},
    {number:"130", name:"Gyrados", type: "Water & Flying", divType:"water", img:"img/130Gyarados.png", evolveFrom:"Magikarp", evolveTo:"None"},
    {number:"131", name:"Lapras", type: "Water & Ice", divType:"water", img:"img/131Lapras.png", evolveFrom:"None", evolveTo:"None"},
    {number:"132", name:"Ditto", type: "Normal", divType:"normal", img:"img/132Ditto.png", evolveFrom:"None", evolveTo:"None"},
    {number:"133", name:"Evee", type: "Normal", divType:"normal", img:"img/133Eevee.png", evolveFrom:"None", evolveTo:"Vaporeon | Jolteon | Flareon"},
    {number:"134", name:"Vaporeon", type: "Water", divType:"water", img:"img/134Vaporeon.png", evolveFrom:"Evee", evolveTo:"None"},
    {number:"135", name:"Jolteon", type: "Electric", divType:"electric", img:"img/135Jolteon.png", evolveFrom:"Evee", evolveTo:"None"},
    {number:"136", name:"Flareon", type: "Fire", divType:"fire", img:"img/136Flareon.png", evolveFrom:"Evee", evolveTo:"None"},
    {number:"137", name:"Porygon", type: "Normal", divType:"normal", img:"img/137Porygon.png", evolveFrom:"None", evolveTo:"None"},
    {number:"138", name:"Omanyte", type: "Rock & Water", divType:"rock", img:"img/138Omanyte.png", evolveFrom:"None", evolveTo:"Omastar"},
    {number:"139", name:"Omastar", type: "Rock & Water", divType:"rock", img:"img/139Omastar.png", evolveFrom:"Omanyte", evolveTo:"None"},
    {number:"140", name:"Kabuto", type: "Rock & Water", divType:"rock", img:"img/140Kabuto.png", evolveFrom:"None", evolveTo:"Kabutops"},
    {number:"141", name:"Kabutops", type: "Rock & Water", divType:"rock", img:"img/141Kabutops.png", evolveFrom:"Kabuto", evolveTo:"None"},
    {number:"142", name:"Aerodactyl", type: "Rock & Flying", divType:"rock", img:"img/142Aerodactyl.png", evolveFrom:"None", evolveTo:"None"},
    {number:"143", name:"Snorlax", type: "Normal", divType:"normal", img:"img/143Snorlax.png", evolveFrom:"None", evolveTo:"None"},
    {number:"144", name:"Articuno", type: "Ice & Flying", divType:"ice", img:"img/144Articuno.png", evolveFrom:"None", evolveTo:"None"},
    {number:"145", name:"Zapdos", type: "Electric & Flying", divType:"electric", img:"img/145Zapdos.png", evolveFrom:"None", evolveTo:"None"},
    {number:"146", name:"Moltres", type: "Fire & Flying", divType:"fire", img:"img/146Moltres.png", evolveFrom:"None", evolveTo:"None"},
    {number:"147", name:"Dratini", type: "Dragon", divType:"dragon", img:"img/147Dratini.png", evolveFrom:"None", evolveTo:"Dragonair"},
    {number:"148", name:"Dragonair", type: "Dragon", divType:"dragon", img:"img/148Dragonair.png", evolveFrom:"Dratini", evolveTo:"Dragonite"},
    {number:"149", name:"Dragonite", type: "Dragon & Flying", divType:"dragon", img:"img/149Dragonite.png", evolveFrom:"Dragonair", evolveTo:"None"},
    {number:"150", name:"Mewtwo", type: "Psychic", divType:"psychic", img:"img/150Mewtwo.png", evolveFrom:"None", evolveTo:"None"},
    {number:"151", name:"Mew", type: "Psychic", divType:"psychic", img:"img/151Mew.png", evolveFrom:"None", evolveTo:"None"},
];

//MAIN FUNCTION
let loadPokedex=function(){

    for(let i=0;i<pokemonArr.length;i++){

    //sub function to open modal
    let openModal=function(){
        pokeModal.style.display="block";
    };
    //sub function to close modal
    let closeModal=function(){
        pokeModal.style.display="none";
    }

//Assigns background color to card based on type
let backgroundColor;
let pokemonType = pokemonArr[i].divType;
switch(pokemonType){
    case "normal": 
        backgroundColor="rgba(170, 170, 155)";
        break;
    case "fire":
        backgroundColor="rgba(236, 84, 53)";
        break;
    case "water":
        backgroundColor="rgba(80, 153, 248)";
        break;
    case "electric":
        backgroundColor="rgba(248, 205, 85)";
        break;
    case "grass":
        backgroundColor="rgba(140, 201, 101)";
        break;
    case "ice":
        backgroundColor="rgba(127, 203, 250)";
        break;
    case "fighting":
        backgroundColor="rgba(175, 91, 74)";
        break;
    case "poison":
        backgroundColor="rgba(159, 91, 150)";
        break;
    case "ground": 
        backgroundColor="rgba(216, 188, 102)";
        break;
    case "flying":
        backgroundColor="rgba(138, 155, 248)";
        break;
    case "psychic":
        backgroundColor="rgba(237, 99, 152)";
        break;
    case "bug": 
        backgroundColor="rgba(174, 186, 68)";
        break;
    case "rock":
        backgroundColor="rgba(185, 170, 111)";
        break;
    case "ghost":
        backgroundColor="rgba(102, 104, 182)";
        break;
    case "dragon":
        backgroundColor="rgba(115, 106, 230)";
        break;
    default: 
        backgroundColor="lightgray";
}

//CREATE THE CARDS
    //create the input 
    let pokeDiv=document.createElement("button");
        pokeDiv.setAttribute ("class", "poke-div");
        pokeDiv.style.background=backgroundColor;
        //create the image
        let pokeCardImg=document.createElement("img");
            pokeCardImg.setAttribute("src", pokemonArr[i].img);
            pokeCardImg.setAttribute("class", "poke-card-img");
            pokeDiv.appendChild(pokeCardImg);//append to poke div
        //create number
        let pokemonNum=document.createElement("h3");
            pokemonNum.setAttribute("class", "pokemon-num");
            pokemonNum.innerText = pokemonArr[i].number;
            pokeDiv.appendChild(pokemonNum);//append to main div
        //create name
        let pokemonName=document.createElement("h3");
            pokemonName.setAttribute("class", "pokemon-name");
            pokemonName.innerText = pokemonArr[i].name;
            pokeDiv.appendChild(pokemonName);//append to main div
    //Append div to main doc
    document.getElementById("content-wrapper").appendChild(pokeDiv); 
//add event listener to open the modal
pokeDiv.addEventListener("click", openModal); //testing
//event listener to call the modal 



//CREATE THE MODAL
    //create modal div
    let pokeModal = document.createElement("div");
    pokeModal.setAttribute("class", "poke-modal");
        
        //create the modal content div
        let pokeModalContent = document.createElement("div");
        pokeModalContent.setAttribute("class", "poke-modal-content");
        pokeModalContent.style.background=backgroundColor;
        
            //create modal image
                let pokeModalImg = document.createElement("img");
                pokeModalImg.setAttribute("src", pokemonArr[i].img);
                pokeModalImg.setAttribute("class", "poke-modal-img");
                pokeModalContent.appendChild(pokeModalImg);

            //create number
                let pokeModalNum = document.createElement("h3");
                pokeModalNum.innerText = pokemonArr[i].number;
                pokeModalNum.setAttribute("class", "poke-modal-number modal-text");
                pokeModalContent.appendChild(pokeModalNum);
          
            //create name
                let pokeModalName = document.createElement("h3");
                pokeModalName.innerText = pokemonArr[i].name;
                pokeModalName.setAttribute("class", "poke-modal-name modal-text");
                pokeModalContent.appendChild(pokeModalName);

            //create type   
                let pokeModalType = document.createElement("h3");
                pokeModalType.innerText = pokemonArr[i].type;
                pokeModalType.setAttribute("class", "poke-modal-type modal-text");
                pokeModalContent.appendChild(pokeModalType);
                
            //create evolve from & to (hopefully one inline go here)
                let pokeModalEvolve = document.createElement("h3");
                pokeModalEvolve.innerText = "Evolves from: " + pokemonArr[i].evolveFrom + " | " + "Evolves to: " + pokemonArr[i].evolveTo;
                pokeModalEvolve.setAttribute("class", "poke-modal-evolve poke-modal-text");
                pokeModalContent.appendChild(pokeModalEvolve);

            //create close modal button
                let modalCloseButton = document.createElement("button");
                modalCloseButton.innerText = "Close";
                modalCloseButton.setAttribute("class", "modal-close-button");
                pokeModalContent.appendChild(modalCloseButton);
                modalCloseButton.addEventListener("click", closeModal);
            
        //append modal content to modal div
        pokeModal.appendChild(pokeModalContent);
    //set display to "none" ? if necessary
    //append modal to main doc
    document.getElementById("content-wrapper").appendChild(pokeModal);
    }//end for loop

};//End loadPokedex function

//load all pokemon on page load
window.onload=loadPokedex();




//at this point all the content is created...put the sort here?
//set up function to sort based on type
//the function will simply change the display on the cards to "none" or "block" as necessary,
//based on the selector

//OR build the sort into the main function with a default to All and then and change as we sort. 
//Seems like this *might* create content on the fly, which could create sluggishness. May be better
//to just load it all at the front and simply change the display settings. Think on this. 
