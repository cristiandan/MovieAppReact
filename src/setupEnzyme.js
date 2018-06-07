const Adapter = require('enzyme-adapter-react-15');
const enzyme = require('enzyme');

enzyme.configure({ adapter: new Adapter() });

global.requestAnimationFrme = function(callback) {
    setTimeout(callback, 0);
};
