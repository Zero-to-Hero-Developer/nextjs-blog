import styled from "styled-components";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const Input = styled.input`
  border: none;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.1s;
  &:focus {
    border: none;
    outline: 3px solid rgba(0, 180, 216, 0.8);
    background-color: #eee;
  }
`;

const Select = styled.select`
  border: none;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.1s;
  &:focus {
    border: none;
    outline: 3px solid rgba(0, 180, 216, 0.8);
    background-color: #eee;
  }
`;

const Error = styled.span`
  color: tomato;
`;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <Layout title="İletişim">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Ad Soyad</label>
        <Input
          {...register("firstName", { required: "İsim zorunludur" })}
          type="text"
          id="name"
          autoComplete="off"
        />
        {errors.firstName && <Error>{errors.firstName.message}</Error>}
        <label htmlFor="source">Bizi nereden buldunuz?</label>
        <Select id="source" name="source" {...register("source")}>
          <option value="net">İnternet</option>
          <option value="adv">Reklam</option>
          <option value="tv">TV</option>
        </Select>
        <Input type="submit" />
      </Form>
    </Layout>
  );
}
