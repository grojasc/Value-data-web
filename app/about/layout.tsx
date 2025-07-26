import PageIllustration from "@/components/page-illustration";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex grow flex-col">
      {children}
    </main>
  );
}