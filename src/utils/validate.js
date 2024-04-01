
export const validateData = (email,password,name) => {
  const emailValidation = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  // const nameValidation = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name)

  if(!emailValidation) return "Email is not Valid"
  if(!passwordValidation) return "Password is not Valid"
  // if(!nameValidation) return "Name is not Valid"

  return null
}


