import { createNativeStackNavigator,createAppConatiner} from '@react-navigation/native-stack';
import Home from './Home';
import Conta from './Conta';
import Fatura from './Fatura';
import App from './App';

const Route = createNativeStackNavigator({
    App:{
        screen:App
    },
    Home:{
        screen:Home
    },
    Conta:{
        screen:Conta
    },
    Fatura:{
        screen:Fatura
    },
})

export default createAppConatiner(Route)