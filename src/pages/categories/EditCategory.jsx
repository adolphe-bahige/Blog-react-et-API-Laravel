import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Title from "../../components/Titles";
import Buttons from "../../components/Button";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { getCategory, updateCategory } from "../../services/categoryService";
import { useEffect, useState } from "react";

function EditCategoryForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    name: "",
    slug: "",
  });
  // 🔥 Charger la catégorie
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await getCategory(id);

        setInitialValues({
          name: res.data?.name || "",
          slug: res.data?.slug || "",
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, [id]);

  return (
    <section className="w-full min-h-[85vh] flex flex-col gap-2">
      <Title className="flex justify-between ">
        <h1>Edit Category</h1>
      </Title>

      <div className="w-full h-auto p-2 flex justify-center items-center md:p-4">
        <Formik
          enableReinitialize // 🔥 IMPORTANT
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(100, "* Maximum 100 caractères")
              .required("* Le nom est obligatoire"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await updateCategory(id, values);

              toast.success("Catégorie mise à jour");

              // 🔥 Redirection
              navigate("/categories");
            } catch (error) {
              toast.error(
                error.response?.data?.message ||
                  "Erreur lors de la modification",
              );
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="w-full h-auto p-2 bg-slate-200 flex flex-col gap-2 rounded-md dark:bg-slate-800 dark:text-white md:w-2/4 md:p-4">
              {/* NAME */}
              <div className="flex flex-col gap-1">
                <Field
                  name="name"
                  onChange={(e) => {
                    const value = e.target.value;
                    setFieldValue("name", value);

                    const slug = value
                      .toLowerCase()
                      .trim()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]+/g, "");

                    setFieldValue("slug", slug);
                  }}
                  placeholder="Ex: Sport"
                  className="outline-hidden border border-indigo-900 focus:border-2 text-sm p-2 rounded-sm placeholder:text-slate-400 dark:border-slate-500 dark:placeholder:text-white transition-colors"
                />

                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-rose-500 text-xs font-medium transition-[1s]"
                />
              </div>

              {/* SLUG */}
              <div className="flex flex-col">
                <Field
                  name="slug"
                  placeholder="slug"
                  readOnly
                  className="outline-hidden border border-indigo-900 focus:border-2 text-sm p-2 rounded-sm placeholder:text-slate-400 dark:border-slate-500 dark:placeholder:text-white transition-colors"
                />
              </div>

              <Buttons
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-900 text-white font-medium cursor-pointer py-2 mt-6 transition-colors hover:bg-indigo-800 dark:bg-slate-600 dark:hover:bg-slate-300 dark:hover:text-slate-800"
              >
                {isSubmitting ? "Modification..." : "Modifier"}
              </Buttons>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default EditCategoryForm;
