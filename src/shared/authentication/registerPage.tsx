import { useRegister } from "@refinedev/core";
import { useMantineColorScheme } from "@mantine/core";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Stack,
  Container,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { TbMail, TbLock } from "react-icons/tb";

export const RegisterPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  const { mutate: register, isPending } = useRegister<{ email: string; password: string }>();

  const form = useForm({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length >= 6 ? null : "Password too short"),
      confirmPassword: (value, values) => (value === values.password ? null : "Passwords do not match"),
    },
  });

  const handleSubmit = (values: { email: string; password: string }) => {
    register(values, {
      onSuccess: (data) => {
        if (!data.success) {
          notifications.show({
            title: "Registration Failed",
            message: data.error?.message || "Something went wrong",
            color: "red",
          });
        } else {
          notifications.show({
            title: "Success",
            message: "Account created! Check your email to confirm.",
            color: "green",
          });
        }
      },
      onError: (error) => {
        notifications.show({
          title: "Error",
          message: error.message || "Registration failed",
          color: "red",
        });
      },
    });
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        background: isDark
          ? "linear-gradient(135deg, var(--mantine-color-dark-9) 0%, var(--mantine-color-dark-7) 100%)"
          : "linear-gradient(135deg, var(--mantine-color-gray-1) 0%, var(--mantine-color-blue-1) 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--mantine-spacing-md)",
      }}
    >
      <Container size="xs" style={{ width: "100%", maxWidth: 420 }}>
        <Paper
          radius="md"
          p={{ base: "md", sm: "xl" }}
          withBorder
          shadow="xl"
          style={{
            backgroundColor: isDark ? "var(--mantine-color-dark-8)" : "var(--mantine-color-white)",
          }}
        >
          <Stack gap="lg">
            <Title order={2} ta="center" c="var(--mantine-primary-color-filled)">
              Create Account
            </Title>

            <Text ta="center" c="dimmed" size="sm">
              Sign up to get started
            </Text>

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <TextInput
                  required
                  label="Email"
                  placeholder="your@email.com"
                  leftSection={<TbMail size={16} />}
                  {...form.getInputProps("email")}
                  size="md"
                />

                <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  leftSection={<TbLock size={16} />}
                  {...form.getInputProps("password")}
                  size="md"
                />

                <PasswordInput
                  required
                  label="Confirm Password"
                  placeholder="Repeat password"
                  leftSection={<TbLock size={16} />}
                  {...form.getInputProps("confirmPassword")}
                  size="md"
                />

                <Button fullWidth type="submit" loading={isPending} size="md" mt="md">
                  Sign Up
                </Button>
              </Stack>
            </form>

            <Text ta="center" size="sm" c="dimmed">
              Already have an account?{" "}
              <Anchor href="/login" fw={600}>
                Login
              </Anchor>
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};