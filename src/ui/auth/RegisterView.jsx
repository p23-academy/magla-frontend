import {Form, json, redirect, useActionData} from "react-router-dom";
import {useState} from "react";
import {registerUser} from "../../data/auth/authRepo.js";

export const registerAction = async ({request}) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const response = await registerUser(email, password)
  if (response.status === 200) {
    return redirect("/login")
  } else {
    return json(response.data)
  }
}

const RegisterView = () => {
  const actionData = useActionData()

  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  return (
    <div className={"w-screen h-screen flex items-center justify-center"}>
      <Form method="post">
        <div className="flex flex-col w-64 bg-gray-200 p-2 rounded-lg gap-1">
          <h1 className={"text-lg font-bold"}>Registracija</h1>
          <input
            required
            type={"email"}
            name={"email"}
            placeholder={"E-mail"}
          />
          <input
            required
            type={"password"}
            name={"password"}
            placeholder={"Šifra"}
            value={password1}
            onChange={e => setPassword1(e.target.value)}
          />
          <input
            required
            type={"password"}
            placeholder={"Ponovi šifru"}
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
          {actionData?.error && <p className={"text-lg text-red-500"}>{actionData.error}</p>}
          <button
            type={"submit"}
            disabled={password1.length === 0 || password1 !== password2}
          >
            Registriraj se
          </button>
        </div>
      </Form>
    </div>
  )
}

export default RegisterView