import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Title from "../../components/Titles";
import Buttons from "../../components/Button";

function EditPostForm() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col gap-2">
      <Title className="flex justify-between ">
        <h1>Edit Post</h1>
      </Title>

      <div className="w-full h-auto p-4  flex justify-center items-center ">
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
            <Form className="w-2/4 h-auto p-4 bg-slate-200 flex flex-col gap-2 rounded-md ">
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
                  className="outline-hidden border border-blue-900 focus:border-2 transition-[1s] text-sm p-2 rounded-sm "
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
                  readOnly
                  className="outline-hidden border border-blue-900 focus:border-2 transition-[1s] text-sm p-2 rounded-sm "
                />
              </div>

              {/* categorie */}
              <div className="flex flex-col gap-1">
                <Field
                  as="select"
                  name="categorie"
                  className="outline-hidden border border-blue-900 focus:border-2 transition-[1s] text-sm p-2 rounded-sm"
                >
                  <option value="">-- Choisir une catégorie --</option>
                  <option value="Sport">Sport</option>
                  <option value="Technologie">Technologie</option>
                  <option value="Actualité">Actualité</option>
                  <option value="Immobilier">Immobilier</option>
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
                  className="outline-hidden border border-blue-900 focus:border-2 transition-[1s] text-sm p-2 h-24 rounded-sm resize-none "
                />
                <ErrorMessage
                  name="contenu"
                  component="span"
                  className="text-rose-500 text-xs font-medium transition-[1s]"
                />
              </div>

              <Buttons
                type="submit"
                className="bg-indigo-900 text-white font-medium cursor-pointer py-2 transition-[1s] hover:bg-blue-900/90 mt-6"
              >
                Modifier
              </Buttons>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default EditPostForm;
