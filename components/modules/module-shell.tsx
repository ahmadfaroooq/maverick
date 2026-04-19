interface ModuleShellProps {
  title: string;
  description: string;
}

export function ModuleShell({ title, description }: ModuleShellProps) {
  return (
    <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </section>
  );
}
