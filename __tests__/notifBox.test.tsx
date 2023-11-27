import { render, screen } from "@testing-library/react";
import NotificationBox from "@/app/(pages)/(require login)/notification/components/notificationBox";

describe("NotificationBox component", () => {
  

  it("renders notification boxes correctly", async () => {
    const mockDataItem = [
      {
        packageID: "123",
        hasUpdateStatus: true,
        statusPengiriman: "Delivered",
      },
      {
        packageID: "456",
        hasUpdateStatus: true,
        statusPengiriman: "On The Way",
      },
    ];
    

    render(<NotificationBox />);

    const notificationBoxes = await screen.findAllByRole("notification-box");
    expect(notificationBoxes).toHaveLength(2);

    // Perform assertions on the notification boxes if needed
  });
});
