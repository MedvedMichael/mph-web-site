process.env.API_URL = 'localhost:3000'
import Adapter from 'enzyme-adapter-react-16'

require('enzyme').configure({ adapter: new Adapter() });