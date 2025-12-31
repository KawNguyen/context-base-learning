import { notFound } from "next/navigation";
import { slugify, getCategorySlug } from "@/lib/utils";
import { grammarTopics } from "@/constants/grammarTopics";
import { GrammarTopicCard } from "@/components/grammar/grammar-topic";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export async function generateStaticParams() {
  const categories = [...new Set(grammarTopics.map((topic) => topic.category))];
  return categories.map((category) => ({
    categorySlug: getCategorySlug(category),
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  const { categorySlug } = await params;

  const filteredTopics = grammarTopics.filter((topic) => {
    return (
      getCategorySlug(topic.category) === categorySlug ||
      slugify(topic.category) === categorySlug
    );
  });

  if (filteredTopics.length === 0) {
    notFound();
  }

  const categoryTitle = filteredTopics[0].category;

  return (
    <div className="mx-auto">
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <div>Grammar</div>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{categoryTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <GrammarTopicCard
              key={topic.id}
              topic={topic}
              categorySlug={categorySlug}
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-muted-foreground italic">
            No topics found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}
