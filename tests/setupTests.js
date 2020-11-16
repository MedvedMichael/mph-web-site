process.env.API_URL = 'localhost:3000'
const Adapter = require('enzyme-adapter-react-16');

require('enzyme').configure({ adapter: new Adapter() });