<form onSubmit={(e)=>handleSubmit(e,movies,setMovie)}>
           <label>write bio</label>
           <input onChange={(e)=>setInput(e.target.value) }value={input} />
<button>add movie</button>     

  </form>
  /*const handleSubmit=(e,movies,setMovie)=>{
        e.preventDefault();
        setMovie([...movies,{title:'t3',bio:input}])
        setInput('')
    }
    const [input,setInput]=useState('')*/