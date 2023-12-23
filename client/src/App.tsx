import { useEffect } from 'react';
import { trpc } from "../api/utils";
function App() {
  // const {data,isLoading} = trpc.Hello.useQuery()
  // console.log("data",data);
  const {data : currentUser,isLoading,mutate} = trpc.getUser.useMutation(
    {
    onSuccess () {
      console.log("Success");
    },
    onError () {
      console.log("Error");
    },
    onMutate(){
      console.log("Mutated successfuly");
    }
  })

  // useEffect(() => {
    // mutate({name : 'Abdoulaye',password : '12236'})
  // },[])
  
  if (isLoading) {
    return (
        <h1>Loading...</h1>
    )
  }
  const submit = (e : any) => {
    e.preventDefault()
    if (e.target.username !== '') {
      mutate({name : e.target.username ,password : '12345'})
    } 
  }

  return (
    <div>
      <h1>Let's learn more about TRPC</h1>
      <div>
        <form onSubmit={submit}>
          <input type="text" required placeholder='Enter your uesr name' name='username' />
          <button type="submit">Add User</button>
        </form>
      </div>
      {currentUser ? (
        <h1>New User is : {currentUser?.name}</h1>
      ): (
        <h3>no user again...</h3>
      )}
      
    </div>
  )
}

export default App
