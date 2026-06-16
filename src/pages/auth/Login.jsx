import { Field, Form, Formik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Buttons from "../../components/Button";
import { useState } from "react";
import { login } from "../../services/auth";

function IconShowPass() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.1rem"
      height="1.1rem"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="currentColor"
        d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
      />
    </svg>
  );
}

function IconHidePass() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.1rem"
      height="1.1rem"
      viewBox="0 0 16 16"
    >
      <path d="M0 0h16v16H0z" fill="none" />
      <path
        fill="currentColor"
        d="M8 13c-1.01 0-1.932-.18-2.761-.471l1.712-1.713c.322.12.67.184 1.031.184c1.65 0 3-1.35 3-3c0-.362-.064-.71-.183-1.031l2.285-2.285a11.7 11.7 0 0 1 2.729 2.736a.99.99 0 0 1 0 1.16C15.084 9.62 12.37 13 8 13m1.039-7.807l1.722-1.722A8.3 8.3 0 0 0 8 3C3.63 3 .916 6.38.187 7.42a.99.99 0 0 0 0 1.16c.382.544 1.307 1.73 2.729 2.736l2.26-2.26A3 3 0 0 1 4.982 8c0-1.65 1.35-3 3-3c.372 0 .728.068 1.057.193m-7.185 9.661a.5.5 0 0 1-.708-.708l13-13a.5.5 0 0 1 .708.708zM7.78 9.988A2 2 0 0 0 9.988 7.78zm.44-3.976A2 2 0 0 0 6.012 8.22z"
      />
    </svg>
  );
}

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  return (
    <section className="w-full h-screen flex justify-center items-center bg-indigo-900 transition-colors dark:bg-slate-800 p-2">
      <div className="w-full h-auto rounded-md p-4 flex flex-col justify-center items-center gap-4 bg-white transition-colors dark:bg-slate-700 md:w-[50%] lg:w-[30%]">
        <h1 className="text-xl font-semibold text-indigo-900 dark:text-white">
          Login
        </h1>

        {apiError && (
          <div className="text-rose-500 text-sm text-center transition-all">
            {apiError}
          </div>
        )}

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("* L'eamil doit être valide")
              .required("* L'email est requis"),
            password: Yup.string()
              .min(6, "* Minimum 6 caractères")
              .required("* Le mot de passe est requis"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setApiError("");
            try {
              const { data } = await login(values);

              localStorage.setItem("token", data.token);

              toast.success("Connexion réussie");

              navigate("/dashboard");
              return;
            } catch (error) {
              const message =
                error.response?.data?.message ||
                "Email ou mot de passe incorrect";

              setApiError(message); // ✅ stable
              // toast.error(message);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full h-auto p-2 flex flex-col gap-2 rounded-md dark:bg-transparent dark:text-white">
              {/* email */}
              <div className="flex flex-col gap-1 dark:text-white">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-indigo-900 dark:text-white"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="xyz@gmail.com"
                  className="outline-hidden border border-indigo-900 text-sm p-2 rounded-sm placeholder:text-slate-400 dark:border-slate-500 dark:placeholder:text-white transition-colors"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-rose-500 text-xs font-medium transition-[1s]"
                />
              </div>

              {/* password */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-indigo-900 dark:text-white"
                >
                  Password
                </label>
                <div className="w-full relative transition-all rounded-md flex justify-end items-center">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="xxxxxx"
                    className="w-full outline-hidden border border-indigo-900 text-sm p-2 pr-8 rounded-sm placeholder:text-slate-400 dark:border-slate-500 dark:placeholder:text-white transition-colors"
                  />

                  {/* Bouton toggle */}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 text-gray-500 dark:text-white"
                  >
                    {showPassword ? <IconHidePass /> : <IconShowPass />}
                  </button>
                </div>

                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-rose-500 text-xs font-medium transition-[1s]"
                />
              </div>

              <Buttons
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-900 text-white font-medium cursor-pointer py-2 mt-6 transition-colors hover:bg-indigo-800 dark:bg-slate-600 dark:hover:bg-slate-300 dark:hover:text-slate-800"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Connexion en cours...</span>
                ) : (
                  "Se connecter"
                )}
              </Buttons>
            </Form>
          )}
        </Formik>

        <div className="text-sm mt-3 text-center dark:text-white flex gap-2">
          <p>Vous n'avez pas de compte ?</p>
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-500 cursor-pointer underline dark:text-blue-300"
          >
            S'inscrire
          </span>
        </div>
      </div>
    </section>
  );
}

export default Login;
