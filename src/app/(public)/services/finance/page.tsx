import PageHeader from "@/components/shared/page-header/PageHeader";
import CTASection from "@/components/shared/CTASection";

import FinanceServices from "@/components/finance/FinanceServices";
import FinanceStats from "@/components/finance/FinanceStats";
import WhoWeServe from "@/components/finance/WhoWeServe";
import WhyChooseFinance from "@/components/finance/WhyChooseFinance";

export default function FinancePage() {
  return (
    <>
      <PageHeader
        items={[
          {
            label: "Services",
            href: "/services",
          },
          {
            label: "Finance",
          },
        ]}
        badge="M Groups Finance"
        title="Finance & Accounting Services"
        description="Professional accounting, financial management, audit support and advisory services."
      />

      <section className="py-20">

        <div className="container mx-auto space-y-24">

          <FinanceStats />

          <FinanceServices />

          <WhoWeServe />

          <WhyChooseFinance />

        </div>

      </section>

      <div className="container mx-auto">

        <CTASection />

      </div>
    </>
  );
}