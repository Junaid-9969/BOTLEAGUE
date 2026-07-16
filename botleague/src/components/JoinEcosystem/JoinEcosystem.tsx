import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { ECOSYSTEM_FORMS } from "@/data/constants";

interface FormValues {
  name: string;
  location: string;
  enroll: string;
}

const EMPTY_VALUES: FormValues = { name: "", location: "", enroll: "" };

const FIELD_CLASSES =
  "w-full rounded-md border border-border bg-black/40 px-4 py-3 text-sm text-white placeholder:text-muted outline-none transition-all duration-200 focus:border-accent-red focus:ring-2 focus:ring-accent-red/30";

const EcosystemFormCard = ({ id, title, index }: { id: string; title: string; index: number }) => {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormValues) => (e: FormEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.currentTarget.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof FormValues, boolean>> = {
      name: values.name.trim() === "",
      location: values.location.trim() === "",
      enroll: values.enroll.trim() === "",
    };
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setSubmitted(true);
    setValues(EMPTY_VALUES);
    window.setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-xl border border-border bg-card p-7"
    >
      <h3 className="mb-6 font-heading text-xl font-bold uppercase tracking-wide text-white">{title}</h3>

      <div className="mb-3">
        <label htmlFor={`${id}-name`} className="sr-only">
          Name
        </label>
        <input
          id={`${id}-name`}
          type="text"
          placeholder="Name"
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={errors.name || undefined}
          className={`${FIELD_CLASSES} ${errors.name ? "border-accent-red" : ""} mb-3`}
        />

        <label htmlFor={`${id}-location`} className="sr-only">
          Location
        </label>
        <input
          id={`${id}-location`}
          type="text"
          placeholder="Location"
          value={values.location}
          onChange={handleChange("location")}
          aria-invalid={errors.location || undefined}
          className={`${FIELD_CLASSES} ${errors.location ? "border-accent-red" : ""} mb-3`}
        />

        <label htmlFor={`${id}-enroll`} className="sr-only">
          Enroll as
        </label>
        <input
          id={`${id}-enroll`}
          type="text"
          placeholder="Enroll"
          value={values.enroll}
          onChange={handleChange("enroll")}
          aria-invalid={errors.enroll || undefined}
          className={`${FIELD_CLASSES} ${errors.enroll ? "border-accent-red" : ""}`}
        />
      </div>

      <Button type="submit" variant="primary" className="mt-4 w-full">
        {submitted ? (
          <span className="flex items-center gap-2">
            <FaCheckCircle /> Signed Up
          </span>
        ) : (
          "Sign Up"
        )}
      </Button>
    </motion.form>
  );
};

const JoinEcosystem = () => {
  return (
    <section id="join" className="scroll-mt-20 bg-black pt-16 lg:pt-[100px]">
      <Container>
        <SectionTitle title="Join the Ecosystem" className="mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {ECOSYSTEM_FORMS.map((form, i) => (
            <EcosystemFormCard key={form.id} id={form.id} title={form.title} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default JoinEcosystem;
