import { render, screen, fireEvent } from "@testing-library/react";
import MarkAsRead from "@/app/(pages)/(require login)/notification/components/markAsRead"; 

describe("MarkAsRead component", () => {
  it("renders MarkAsRead button when there are notifications", async () => {
    render(<MarkAsRead />);
    const markAsReadButton = screen.getByRole("button", { name: "Mark As Read" });
    expect(markAsReadButton).toBeInTheDocument();
  });

  it("does not render MarkAsRead button when there are no notifications", async () => {
    render(<MarkAsRead />);
    const markAsReadButton = screen.queryByRole("button", { name: "Mark As Read" });
    expect(markAsReadButton).not.toBeInTheDocument();
  });

  it("triggers handleMarkAsRead function when button is clicked", async () => {
    render(<MarkAsRead />);
    const mockFetch = global.fetch as jest.Mock;
    mockFetch.mockResolvedValueOnce({ status: 200 });

    const markAsReadButton = screen.getByRole("button", { name: "Mark As Read" });
    fireEvent.click(markAsReadButton);

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith("/api/change-update-status", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
});
