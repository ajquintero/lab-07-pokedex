// which static DOM does this component need to know about?
const pokemonInput = document.getElementById('filter-name');
const heightInput = document.getElementById('filter-height');
const weightInput = document.getElementById('filter-weight');
const attackInput = document.getElementById('filter-attack');
const defenseInput = document.getElementById('filter-defense');

const pokemonFilter = {
    //what does this component need from the parent?
    init(onFilter){

        // on keypress event, call the onFilter
        // callback with current value of the input
        pokemonInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, heightInput.value, weightInput.value, attackInput, defenseInput.value);
        });
        heightInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, heightInput.value, weightInput.value, attackInput, defenseInput.value);
        });
        weightInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, heightInput.value, weightInput.value, attackInput, defenseInput.value);
        });
        attackInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, heightInput.value, weightInput.value, attackInput, defenseInput.value);
        });
        defenseInput.addEventListener('keyup', function() {
            onFilter(pokemonInput.value, heightInput.value, weightInput.value, attackInput, defenseInput.value);
        });
    }
};

export default pokemonFilter;