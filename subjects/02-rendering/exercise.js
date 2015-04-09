////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// Render `DATA` to the page
// - put the title in an h1
// - render all the tacos
// - now only render mexican food (hint: use `DATA.items.filter(...)`)
// - sort the items in alphabetical order by name
//   (might want to use `sort-by` https://github.com/staygrimm/sort-by#example)
// - try this again without JSX
//
// Got extra time?
// - add a select dropdown to make filtering on `type` dynamic
// - add a button to toggle the sort order
// - Hint: you'll need an `updateThePage` function that calls `React.render`,
//   and then you'll need to call it in the event handlers of the form controls
////////////////////////////////////////////////////////////////////////////////
var React = require('react');
var sortBy = require('sort-by');

var DATA = {
    title: 'Menu',
    items: [
        {id: 1, name: 'tacos', type: 'mexican'},
        {id: 2, name: 'burrito', type: 'mexican'},
        {id: 3, name: 'tostada', type: 'mexican'},
        {id: 4, name: 'hush puppies', type: 'southern'}
    ]
};

function render() {
    var filtered = DATA.items.filter(function (item) {
        return item.type === 'mexican'
    });

    var sortBy = require('sort-by'), tacos = filtered;
    tacos.sort(sortBy('name'));

    return (
        <div>
            <h1>{DATA.title}</h1>
            <ul>{tacos.map(taco => (<li>{taco.name}</li>))}</ul>
        </div>
    );
}

React.render(render(), document.getElementById('app'), () => {
    require('./tests').run();
});

