import { notFound } from "next/navigation";
import { slugify, getCategorySlug } from "@/lib/utils";
import { tricks } from "@/constants/tricks";
import { TrickCard } from "@/components/tricks/trick-card";

export async function generateStaticParams() {
  const categories = [...new Set(tricks.map((trick) => trick.category))];
  return categories.map((category) => ({
    slug: getCategorySlug(category),
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const filteredTricks = tricks.filter((trick) => {
    return (
      getCategorySlug(trick.category) === slug ||
      slugify(trick.category) === slug
    );
  });

  if (filteredTricks.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTricks.length > 0 ? (
          filteredTricks.map((trick) => (
            <TrickCard key={trick.id} trick={trick} categorySlug={slug} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-muted-foreground italic">
            No tricks found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
