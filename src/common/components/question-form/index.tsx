import { Container, Grid, Stack } from "@mui/material";
import { Heading48 } from "design-system/typography";
import { useForm } from "react-hook-form";
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
    mode: "all",
  });

  const onSubmit = (data: FormProps) => {
    console.log(data, "Send to server");
  };

  return (
    <S.Wrapper>
      <Container>
        <Grid container columnSpacing={12}>
          <Grid item xs={4}>
            <Heading48>
              Questions?
              <br />
              We are here to help
            </Heading48>
          </Grid>
          <Grid item xs={8}>
            <form onClick={handleSubmit(onSubmit)}>
              <Stack spacing={9}>
                <Stack direction="row" spacing={9}>
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
            </form>
          </Grid>
        </Grid>
      </Container>
    </S.Wrapper>
  );
};
