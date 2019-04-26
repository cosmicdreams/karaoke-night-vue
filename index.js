// Import stylesheets.
import './style.css';

// The Vue.js components.
Vue.component('karaoke-item', {
    props: {
        item: {
            type: Object
        }
    },
    template: '#item-template'
});
var app = new Vue({
    el: '#app',
    data: {
        setList: [
            {id: 0, singer: 'Chris Weber', song: 'Love Me Now', artist: 'John Legend'},
            {id: 1, singer: 'Chris Weber', song: 'Counting Stars', artist: 'OneRepublic'},
            {id: 2, singer: 'Someone Else', song: 'Rise Up', artist: 'Andra Day'},
        ],
    },
});