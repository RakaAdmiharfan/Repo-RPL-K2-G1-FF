import {
    render,
    screen,
    fireEvent,
    waitFor,
    act,
  } from "@testing-library/react";
  import "@testing-library/jest-dom";
  import LoginForm from "@/app/(pages)/login/components/loginform";
  import userEvent from "@testing-library/user-event";
  import { useRouter } from "next/navigation";
  import { signIn } from "next-auth/react";
  
  jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
  }));
  jest.mock("next-auth/react", () => ({
    signIn: jest.fn(),
  }));

  describe("LoginForm component", () => {
    it("renders the login form correctly", async () => {
      render(<LoginForm roleAccess={""} />);
  
      expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    });
  
    it("submit successfull", async () => {
      render(<LoginForm roleAccess={""} />);
  
      const usernameInput = screen.getByPlaceholderText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByPlaceholderText(
        "Password"
      ) as HTMLInputElement;
      const submitButton = screen.getByRole("button", { name: "Login" });
  
      fireEvent.change(usernameInput, { target: { value: "testuser" } });
      fireEvent.change(passwordInput, { target: { value: "testpassword" } });
  
      const push = jest.fn();
      const mocked = signIn as jest.Mock;
  
      (useRouter as jest.Mock).mockImplementation(() => ({
        push,
      }));
      mocked.mockResolvedValueOnce({});
      await act(async () => {
        fireEvent.click(submitButton);
      });
      expect(mocked).toHaveBeenCalledTimes(1);
      expect(mocked).toHaveBeenCalledWith("credentials", {
        redirect: false,
        username: "testuser",
        password: "testpassword",
        callbackUrl: "/",
      });
    });
  
    it("displays error message on invalid form submission", async () => {
      render(<LoginForm roleAccess={""} />);
  
      const submitButton = screen.getByRole("button", { name: "Login" });
      await act(async () => {
        fireEvent.click(submitButton);
      });
  
      expect(screen.getByText("Username is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });