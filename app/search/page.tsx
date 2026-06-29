import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import SearchResults from "../../src/components/SearchResults";

type SearchPageProps = {
  searchParams: Promise<{
    query?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { query } = await searchParams;

  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-sm tracking-[0.3em] text-neutral-400">SEARCH</p>

        <h1 className="mt-4 text-4xl font-bold">
          {query ? `"${query}" 검색 결과` : "검색 결과"}
        </h1>
      </section>

      <SearchResults query={query} />

      <Footer />
    </main>
  );
}