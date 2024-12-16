import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

export default function SearchInput() {
  const [data, setData] = React.useState<{
    email: string;
    status: "initial" | "loading" | "failure" | "sent";
  }>({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} id="demo" style={{ padding: 0, margin: 0 }}>
      <div style={{ width: "200px", padding: 0, margin: 0 }}>
        <FormControl sx={{ marginBottom: 0 }}>
          <FormLabel
            sx={(theme) => ({
              "--FormLabel-color": theme.vars.palette.primary.plainColor,
              marginBottom: "4px",
            })}
          ></FormLabel>
          <Input
            sx={{
              "--Input-decoratorChildHeight": "35px",
              fontFamily: "roboto",
              height: "30px",
            }}
            placeholder="honey"
            type="text"
            required
            value={data.email}
            onChange={(event) =>
              setData({ email: event.target.value, status: "initial" })
            }
            error={data.status === "failure"}
            endDecorator={
              <Button
                variant="solid"
                color="primary"
                loading={data.status === "loading"}
                type="submit"
                sx={{
                    backgroundColor: "#201a18", 
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  width: "60px",
                  alignSelf: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "roboto",
                  padding: "0",
                }}
              >
                Search
              </Button>
            }
          />
          {data.status === "failure" && (
            <FormHelperText
              sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
            >
              Oops! something went wrong, please try again later.
            </FormHelperText>
          )}
        </FormControl>
      </div>
    </form>
  );
}
