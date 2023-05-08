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

=======
<<<<<<< HEAD
        if (todo===""){  
             return null;
            alert("Cannot add empty field")
            }
=======
         if (todo===""){
            return null;
            alert("Cannot add empty field")
>>>>>>> 85689607523d797573e4e8ea97cb01a91e529478
        }
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