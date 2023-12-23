import { trpc } from "../api/utils";
function App() {
  // const {data,isLoading} = trpc.Hello.useQuery()
  // console.log("data",data);
  const {data : currentUser,mutate} = trpc.getUser.useMutation(
    {
    onSuccess () {
      console.log("Success");
    },
    onError () {
      console.log("Error");
    },
    onMutate(){
      console.log("Mutated successfuly");
    },
    onSettled() {
      console.log("SETTLED BRO");
    }
  })

  // useEffect(() => {
    // mutate({name : 'Abdoulaye',password : '12236'})
  // },[])
  const Admin = trpc.getAdmin.useQuery()
  
  if (Admin.isLoading) {
    return (
        <h1>Loading...</h1>
    )
  }
  const submit = (e : any) => {
    e.preventDefault()
    if (e.target.username !== '') {
      mutate({name : e.target.username.value ,password : '12345'})
    } 
  }
  return (
    <div>
      <h1>Let's learn more about TRPC</h1>
      <h1>Admin Page is : {Admin.data}</h1>
      <div>
        <form onSubmit={submit} method='POST'>
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
