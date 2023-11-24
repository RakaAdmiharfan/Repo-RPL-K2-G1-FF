import ProblemPage from "./components/problemPage";

export default function laporMasalah({
  params,
}: {
  params: {
    id: number;
  };
}) {
  return (
    <div>
      <ProblemPage id={params.id} />
    </div>
  );
}
