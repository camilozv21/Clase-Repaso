<form onSubmit={(e) => handleSubmit(e)}>
    <label>Nombre</label>
    <input type="text" name="firstName" onChange={(e) => handleChange(e)} />
    <label>apellido</label>
    <input type="text" name="lastName" onChange={(e) => handleChange(e)} />
    <label>email</label>
    <input type="email" name="email" onChange={(e) => handleChange(e)} />
    <label>password</label>
    <input type="password" name="password" onChange={(e) => handleChange(e)} />
    <button type="submit">Enviar</button>
</form>



const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
})

const { firstName, lastName, email, password } = inputs;

const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
}

const handleSubmit = async (e) => {
    e.preventDefault();

    const Usuario = {
        firstName,
        lastName,
        email,
        password
    }


    fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...Usuario
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}