import { AppContent } from './components/AppContent/AppContent';
import { DarkModeProvider} from './components/context/DarkModeProvider';
import { CartProvider } from './components/context/CartContext';

function App (){
  return (
    <DarkModeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </DarkModeProvider>
  )
}

export default App; 

