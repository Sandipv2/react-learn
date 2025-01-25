import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must be 8 char long.");
      return;
    }

    if (formData.password != formData.confirmPassword) {
      setError("Passwords din't matched");
      return;
    }

    if (!/[@#_$&%]/.test(formData.password)) {
      setError("Use speacial chars from @, #, $, _ , &, %");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setError("Need atleast one capital letter.");
      return;
    }

    toast.success("Registered Successfully ✅", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setUsers([
      ...users,
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    ]);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center flex-col items-center">
        <div className="flex bg-slate-100 rounded-md text-black items-center flex-col border border-1 min-w-96">
          <h1 className="text-3xl text-center mb-5 mt-5">Register</h1>
          <form
            className="flex border-red-50 border w-full h-full flex-col items-center justify-center p-2 gap-2"
            onSubmit={handleSubmit}
          >
            <input
              className="rounded-md px-2 py-1 outline-none border border-black w-full"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
            />
            <input
              className="rounded-md px-2 py-1 outline-none border border-black w-full"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
            <input
              className="rounded-md px-2 py-1 outline-none border border-black w-full"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
            />
            <input
              className="rounded-md px-2 py-1 outline-none border border-black w-full"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              required
              onChange={handleChange}
            />

            {error && <p className="text-red-600 ">{error}</p>}

            <button className="bg-blue-600 w-full rounded-md py-1 text-center font-bold text-white">
              SUBMIT
            </button>

            <ToastContainer />
          </form>
        </div>

        {users.map((user, index) => {
          return (
            <h2>
              {index + 1}. {user.name}
            </h2>
          );
        })}
      </div>
    </>
  );
}

export default App;
