import ThemeToggle from "./ThemeToggle";
import CTAButton from "@/components/ui/CTAButton";

export default function DesktopActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <ThemeToggle />

      <CTAButton href="/contact">
        Contact Us
      </CTAButton>
    </div>
  );
}