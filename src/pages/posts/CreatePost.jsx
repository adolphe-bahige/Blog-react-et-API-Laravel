import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Buttons from "../../components/Button";
import Title from "../../components/Titles";

function CreatePostForm() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col gap-2">
      <Title className="flex justify-between ">
        <h1>Create Post</h1>
      </Title>

      <div className="w-full h-auto p-2 flex justify-center items-center md:p-4">
        <Formik
          initialValues={{
            titre: "",
            slug: "",
            categorie: "",
            contenu: "",
          }}
          validationSchema={Yup.object({
            titre: Yup.string()
              .max(255, "* Le titre ne doit pas dépasser 255 caractères.")
              .required("* Le titre est obligatoire."),

            categorie: Yup.string().required("* La catégorie est obligatoire."),

            contenu: Yup.string()
              .min(10, "* Le contenu doit avoir au moins 10 caractères.")
              .required("* Le contenu est obligatoire."),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log(values); // les données
            resetForm();
          }}
        >
          {({ setFieldValue }) => (
            <Form className="w-full h-auto p-2 bg-slate-200 flex flex-col gap-2 rounded-md dark:bg-slate-800 dark:text-white md:w-2/4 md:p-4">
              {/* titre */}
              <div className="flex flex-col gap-1">
                <Field
                  name="titre"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFieldValue("titre", value);

                    const slug = value
                      .toLowerCase()
                      .trim()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]+/g, "");

                    setFieldValue("slug", slug);
                  }}
                  placeholder="Titre"
                  className="outline-hidden border border-indigo-900 focus:border-2 text-sm p-2 rounded-sm placeholder:text-slate-400 dark:border-slate-500 dark:placeholder:text-white transition-colors"
                />

                <ErrorMessage
                  name="titre"
                  component="span"
                  className="text-rose-500 text-xs font-medium transition-[1s]"
                />
              </div>

              {/* slug */}
              <div className="flex flex-col">
                <Field
                  name="slug"
                  placeholder="slug"
                  readOnly
                  className="outline-hidden border border-indigo-900 focus:border-2 text-sm p-2 rounded-sm placeholder:text-slate-400 dark:border-slate-500 dark:placeholder:text-white transition-colors"
                />
              </div>

              {/* categorie */}
              <div className="flex flex-col gap-1">
                <Field
                  as="select"
                  name="categorie"
                  className="outline-hidden border border-indigo-900 focus:border-2 text-sm p-2 rounded-sm dark:border-slate-500 transition-colors"
                >
                  <option value="" className="dark:text-slate-800">--- Choisir une catégorie ---</option>
                  <option value="Sport" className="dark:text-slate-800">Sport</option>
                  <option value="Technologie" className="dark:text-slate-800">Technologie</option>
                  <option value="Actualité" className="dark:text-slate-800">Actualité</option>
                  <option value="Immobilier" className="dark:text-slate-800">Immobilier</option>
                  {/* {categories.map((cat) => (.
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))} */}
                </Field>

                <ErrorMessage
                  name="categorie"
                  component="span"
                  className="text-rose-500 text-xs font-medium transition-[1s]"
                />
              </div>

              {/* contenu */}
              <div className="flex flex-col gap-1">
                <Field
                  as="textarea"
                  name="contenu"
                  placeholder="Description"
                  className="outline-hidden border border-indigo-900 focus:border-2 text-sm p-2 h-24 rounded-sm resize-none placeholder:text-slate-400 dark:border-slate-500 dark:placeholder:text-white transition-colors"
                />
                <ErrorMessage
                  name="contenu"
                  component="span"
                  className="text-rose-500 text-xs font-medium transition-[1s]"
                />
              </div>

              <Buttons
                type="submit"
                className="bg-indigo-900 text-white font-medium cursor-pointer py-2 mt-6 transition-colors hover:bg-indigo-800 dark:bg-slate-600 dark:hover:bg-slate-300 dark:hover:text-slate-800"
              >
                Enregister
              </Buttons>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default CreatePostForm;
