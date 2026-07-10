import Breadcrumb from "../breadcrumb/Breadcrumb";
import PageHero from "../page-hero/PageHero";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  items: BreadcrumbItem[];
  badge?: string;
  title: string;
  description: string;
}

export default function PageHeader({
  items,
  badge,
  title,
  description,
}: PageHeaderProps) {
  return (
    <>
      <section className="container mx-auto pt-10">
        <Breadcrumb items={items} />
      </section>

      <PageHero
        badge={badge}
        title={title}
        description={description}
      />
    </>
  );
}