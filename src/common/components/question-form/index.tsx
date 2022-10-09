import { Grid, Stack } from "@mui/material";
import { DeptContainer } from "design-system/layout";
import { useForm } from "react-hook-form";
import { Title } from "../client-card/styles";
import * as S from "./styles";

interface FormProps {
  name: string;
  email: string;
  message: string;
}

export const QuestionForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormProps>({
    defaultValues: {
      name: "",
      message: "",
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormProps) => {
    console.log(data, "Send to server");
  };

  return (
    <S.Wrapper>
      <DeptContainer>
        <Grid container columnSpacing={12}>
          <Grid item xs={12} md={4}>
            <Title textTransform="uppercase">
              Questions?
              <br />
              We are here to help
            </Title>
          </Grid>
          <Grid item xs={12} md={8}>
            <S.Form onClick={handleSubmit(onSubmit)}>
              <Stack spacing={9}>
                <Stack direction={{ xs: "column", md: "row" }} spacing={9}>
                  <S.FormGroup spacing={2}>
                    <S.Label htmlFor="name">Name</S.Label>
                    <S.Input
                      type="text"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name?.message && (
                      <S.ErrorText>{errors.name.message}</S.ErrorText>
                    )}
                  </S.FormGroup>

                  <S.FormGroup spacing={2}>
                    <S.Label htmlFor="email">E-mail</S.Label>
                    <S.Input
                      type="email"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Email format is not correct",
                        },
                      })}
                    />
                    {errors.email?.message && (
                      <S.ErrorText>{errors.email.message}</S.ErrorText>
                    )}
                  </S.FormGroup>
                </Stack>

                <S.FormGroup spacing={2}>
                  <S.Label htmlFor="message">Message</S.Label>
                  <S.TextArea
                    rows={4}
                    {...register("message", { required: true })}
                  />
                  {errors.message?.message && (
                    <S.ErrorText>{errors.message.message}</S.ErrorText>
                  )}
                </S.FormGroup>
                <S.Button type="submit" disabled={!isValid}>
                  Send
                </S.Button>
              </Stack>
            </S.Form>
          </Grid>
        </Grid>
      </DeptContainer>
    </S.Wrapper>
  );
};
