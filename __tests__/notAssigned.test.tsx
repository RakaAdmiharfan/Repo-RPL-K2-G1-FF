import { render } from '@testing-library/react';
import NotAssigned from '@/app/(pages)/(require login)/packageList-manOps/components/notAssigned';


jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
  }));
  jest.mock("next-auth/react", () => ({
    signIn: jest.fn(),
  }));


describe('NotAssigned Component', () => {
  const header = ['Header 1', 'Header 2', 'Header 3', 'Header 4'];

  const mockData = [
    {
      packageId: 1,
      packageID: 'Package ID 1',
      namaPelanggan: 'Customer 1',
      alamatPengiriman: 'Address 1',
      staffPengiriman: null,
    },
    {
      packageId: 2,
      packageID: 'Package ID 2',
      namaPelanggan: 'Customer 2',
      alamatPengiriman: 'Address 2',
      staffPengiriman: 'Staff 2',
    },
  ];

  it('renders table headers correctly', () => {
    const { getByText } = render(<NotAssigned header={header} />);
    header.forEach((headerText) => {
      const headerElement = getByText(headerText);
      expect(headerElement).toBeInTheDocument();
    });
  });

//   it('renders packages with unassigned staff correctly', async () => {
//     const { findByText } = render(<NotAssigned header={header} />);
//     const package1 = await findByText('Package ID 1');
//     const package2 = await findByText('Package ID 2');
//     expect(package1).toBeInTheDocument();
//     expect(package2).toBeInTheDocument();
//   });

  // Test other functionalities like clicking the "Assign" button, etc.
});
