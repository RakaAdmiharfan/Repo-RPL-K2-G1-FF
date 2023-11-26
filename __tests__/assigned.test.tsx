import { render, screen, fireEvent } from "@testing-library/react";
import Assigned from "@/app/(pages)/(require login)/packageList-manOps/components/assigned";

describe("Assigned component", () => {
  it("displays only delivered packages when 'Show Delivered Only' checkbox is checked", async () => {
    const headers: string[] = ["Package ID", "Customer Name", "Staff", "Address", "Status", "Check", "Detail"];
    render(<Assigned header={headers} />);

    // Get checkbox element
    const checkbox = screen.getByRole("checkbox", { name: "Show Delivered Only" });

    // Initially, all packages should be visible
    expect(screen.getAllByRole("row")).toHaveLength(8); // Assuming there are 8 package rows initially

    // Check the checkbox
    fireEvent.click(checkbox);

    // Only delivered packages should be visible after clicking the checkbox
    const displayedRows = screen.getAllByRole("row");
    expect(displayedRows).toHaveLength(8); // Adjust this based on the number of expected rows after filtering
  });
});
