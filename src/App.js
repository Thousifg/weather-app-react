import './App.css';
import Navbar from './Components/Navbar';

const App = () => {
  return (
      <>
        <div>
            <div className='flex items-center min-h-screen justify-center max-w-[1296px] mx-auto'>
                <div className='w-full  dark:bg-gradient-to-br dark:from-neutral-800 dark:to-zinc-800 lg:rounded-3xl rounded-none overflow-hidden'>
                    <Navbar/>
                </div>
            </div>
        </div>
      </>
  );
}

export default App;
