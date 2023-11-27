import StafList from "@/app/(pages)/(require login)/crud-staf/components/stafList"; // Ubah path sesuai dengan struktur direktori Anda
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
describe("StafList component", () => {
  it("renders table headers correctly", () => {
    const headers: string[] = ["ID", "Name", "Username", "Birth Date", "Address", "Phone", "Actions"];
    render(<StafList header={headers} />);

    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("displays data rows", async () => {
    const mockDataUser: any[] = [
      {
        id: 1,
        nama: "John Doe",
        username: "johndoe",
        tanggalLahir: "1990-01-01",
        alamat: "Some Address",
        noTelp: "1234567890",
      },
    ];

    render(<StafList header={[]} />);

    await screen.findByText("John Doe");
    await screen.findByText("johndoe");
    
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("johndoe")).toBeInTheDocument();
    expect(screen.getByText("Some Address")).toBeInTheDocument();
    // Lakukan asserstion untuk data user lainnya jika ada
  });
});
