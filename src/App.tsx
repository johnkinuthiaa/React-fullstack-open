// import Lesson1 from "./lesson1/Lesson1.tsx"
import './App.css'
// import UseRefs from "./stateManagement/UseRefs.tsx";
import UsePokemon, {PokemonType} from "./stateManagement/pokemon/UsePokemon.tsx";
// import UseReducersHook from "./stateManagement/UseReducersHook.tsx";
// import TodoApp from "./stateManagement/TodoApp.tsx";
// import Memo from "./stateManagement/Memo.tsx";
// import UseStateHook from "./stateManagement/UseStateHook.tsx";
// import DataFetching from "./partTwo/communicatingWithServer/fetchingData/DataFetching.tsx";
// import ExchangeView from "./partTwo/communicatingWithServer/exchangeRateApi/ExchangeView.tsx";
// import Forms from "./partTwo/communicatingWithServer/forms/Forms.tsx";
// import Mapping from "./partTwo/communicatingWithServer/renderingCollections/Mapping.tsx";
// import Anecdotes from "./partOne/ComponentStateAndEventHandlers/Anecdotes.tsx";
// import MultipleComponents from "./lesson1/MultipleComponents.tsx";
// import Props from "./lesson1/Props.tsx";
// import StateManagement from "./ComponentStateAndEventHandlers/StateManagement.tsx";

function App() {
    const {pokemon} =UsePokemon()
    return (
    <div>
        {/*<Lesson1/>*/}
        {/*<MultipleComponents/>*/}
        {/*<Props/>*/}
        {/*<StateManagement/>*/}
        {/*<Anecdotes/>*/}
        {/*<Mapping/>*/}
        {/*<Forms/>*/}
        {/*<DataFetching/>*/}
        {/*<ExchangeView/>*/}
        {/*<UseReducersHook/>*/}
        {/*<TodoApp/>*/}
        {/*<Memo/>*/}
        {/*<UseRefs/>*/}
        <div>{pokemon.map(({id,name}:PokemonType)=>(
            <div id={id.toString()}>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}/>
                <div>{name}</div>

            </div>
        ))}</div>
        );
    </div>
  )
}

export default App
