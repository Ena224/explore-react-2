
import './App.css'
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Team from './Team';
function App() {
  function handleClick(){
    alert('Button Clicked ! ');
  }
 const handleClick2=()=>{
  alert("i'm gonna drive you write down to the bottom " );
 }
 //event handler with parameter
 const addToFile=(number)=>{
  alert(num +13);
 }
  return (
    <>
     {/* <> this is called fragment or empty tag */}
      <h1>React Core concept 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      
      <button onClick={handleClick}>Click me !</button>
      <button onClick={handleClick2}>Click me 2!</button>
      <button onClick={()=>{alert("Ayhay e ami kiser moddhe ailam bhai  !")}}>Click me 3 !</button>
      {/* Vejailla */}
       <button onClick={()=>addToFile(3)}>FOur number Button ami heh !</button>
    </>
  )
}

export default App
