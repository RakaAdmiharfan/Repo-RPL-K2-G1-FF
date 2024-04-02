import { render, screen, fireEvent } from "@testing-library/react";
import MarkAsRead from "@/app/(pages)/(require login)/notification/components/markAsRead"; 

describe("MarkAsRead component", () => {
  it("renders MarkAsRead button when there are notifications", async () => {
    render(<MarkAsRead />);
    const markAsReadButton = screen.getByRole("button", { name: "Mark As Read" });
    expect(markAsReadButton).toBeInTheDocument();
  });
});

