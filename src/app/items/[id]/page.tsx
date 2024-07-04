export default function Page({ params }: { params: { id: string } }) {
  return <h1>Details for item: {params.id}</h1>;
}
