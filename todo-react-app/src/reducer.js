import {List, Map} from 'immutable';

const init = List([]);
const dummyData = List([
  Map({ id: 0, isDone: true, text: 'make something interesting' }),
  Map({ id: 1, isDone: false, text: 'nothing special' }),
  Map({ id: 2, isDone: false, text: 'buy milk' })
]);


export default function(state=dummyData, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return state.push(Map(action.payload));

        case 'TOGGLE_TODO':
            return state.map(t => {
                if(t.get('id')===action.payload)
                    return t.update('isDone', isDone => !isDone);
                else
                    return t;
            })
        default:
            return state;
    }
}