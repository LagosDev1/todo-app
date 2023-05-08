import styles from '../style.module.css';
import shortid from 'shortid';


const Form= ({todo,setTodo,todoList,setTodoList})=> {
    
    const handleChange = (event) =>{
        setTodo(event.target.value);
   
    }

    const handleSubmit = (event) =>{
      
        event.preventDefault();
<<<<<<< HEAD
        if (todo===""){  
             return null;
            }
=======
         if (todo===""){
            return null;
            
        }
        
>>>>>>> dad2d920f6fb62d98c8bfae2c7938ef1f37f49ac
        setTodoList([...todoList,{name:todo, id: shortid.generate()}]);
        setTodo('');
        
      
    }
    return (
    <div className={styles.todoform}>
        <form onSubmit={handleSubmit}>
            <input value={todo}
             onChange={handleChange}
             className={styles.todoinput} 
             placeholder="Add Todo Item">
             </input>
            <button type="submit" className={styles.todobutton}>Add</button>
        </form>
    </div>
  )
}


export default Form;
