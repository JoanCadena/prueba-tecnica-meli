export default function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  return <h1>Looking for items: {searchParams.search}</h1>;
}
