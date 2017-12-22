import info from './info';
import Api from './api';
import Hero from './hero';


let api = new Api();
console.log(api);
api?api.warning():'';
console.log('%c hello parcel! ', 'background: yellowgreen; color: #fff');
console.log(Hero);